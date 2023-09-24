import Victor from 'victor';
import { LineSphereCollider } from './collisions';
import type { PhysicObject } from './PhysicObject';

export type WorldReporter = (world: World) => void;

export class World {
    gravityEnabled: boolean;
    dimensions: Victor;
    t: number;
    objects: PhysicObject[];
    gravity = new Victor(0, -9.8);
    antiGravity = new Victor(0, 9.8);
    drag = 0.001; // [0. 1] 0= no drag
    dt = 0.005;
    reporter: WorldReporter;

    constructor(options: {
        reporter?: WorldReporter;
        dimensions?: Victor;
        enableGravity?: boolean;
    }) {
        this.gravityEnabled = options.enableGravity ?? true;
        this.dimensions = options.dimensions || new Victor(100, 100);
        this.objects = [];
        this.t = 0;
        this.reporter = options.reporter || console.log;
    }

    toggleGravity() {
        this.gravityEnabled = !this.gravityEnabled;
    }

    addObject(o: PhysicObject) {
        this.objects.push(o);
    }

    applyGravity(o: PhysicObject) {
        o.acceleration.push(this.gravity);
    }

    applyDynamics(dt: number, o: PhysicObject) {
        if (this.gravityEnabled) {
            this.applyGravity(o);
        }

        const totalForce = new Victor(0, 0);

        while (o.acceleration.length) {
            const force = o.acceleration.pop();
            if (force) {
                totalForce.add(force);
            }
        }
        totalForce.divideScalar(o.m);

        const drag = 1 - this.drag;
        o.velocity.add(totalForce.multiplyScalar(dt)).multiplyScalar(drag);
        o.position.add(o.velocity.clone().multiplyScalar(dt));
    }

    applyCollisions(dt: number) {
        const sphere = this.objects.find((o) => o.geometry.type === 'sphere');
        const walls = this.objects.filter((o) => o.geometry.type === 'line');
        if (!sphere) {
            throw new Error('No sphere in world');
        }
        sphere.data.isColliding = false;

        const totalVelocity = new Victor(0, 0);
        let nbCollisions = 0;
        for (const wall of walls) {
            wall.data.isColliding = false;
            const bounceVelocity = LineSphereCollider(wall, sphere);
            if (bounceVelocity) {
                nbCollisions++;
                totalVelocity.add(bounceVelocity);
                wall.data.isColliding = true;
            }
        }
        if (nbCollisions > 0) {
            totalVelocity.divideScalar(nbCollisions);
            sphere.velocity.copy(totalVelocity);
            sphere.position.add(sphere.velocity.clone().multiplyScalar(dt));
            sphere.data.isColliding = true;

            // Hacky fix to avoid the ball slowly going throug the ground when
            // its speed is really small we add an artificial force invert to the gravity
            // TODO There is probably a better way to handle that
            // TODO This fix might also make non vertical bounces innacurrate
            sphere.acceleration.push(this.gravity.clone().multiplyScalar(-1));
        }
    }

    _step(dt: number) {
        this.applyCollisions(dt);
        for (const o of this.objects) {
            if (!o.fixed) {
                this.applyDynamics(dt, o);
            }
        }
    }

    stepFixedDt() {
        const dt = 0.01;
        const now = Date.now() / 1000;
        realDt = now - lastTick;
        lastTick = now;

        this._step(dt);
        this.t += dt;

        if (this.reporter) {
            this.reporter({ ...this, frameTime: realDt });
        }
    }

    // c.f. "The final touch" in https://gafferongames.com/post/fix_your_timestep/
    stepAccumulator() {
        const dt = this.dt;
        const now = Date.now() / 1000;
        if (lastTick === 0) {
            lastTick = now;
        }
        realDt = now - lastTick;

        accumulator += realDt;
        let steps = 0;
        while (accumulator >= dt && steps < 5) {
            steps++;
            this._step(dt);
            accumulator -= dt;
            this.t += dt;

            if (this.reporter) {
                this.reporter({ ...this, frameTime: realDt });
            }
        }
    }

    step() {
        // this.stepFixedDt();
        this.stepAccumulator();
    }
}

let lastTick = 0;
let realDt = 0;

let accumulator = 0;

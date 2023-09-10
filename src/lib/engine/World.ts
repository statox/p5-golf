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
    drag = 0.01; // [0. 1] 0= no drag
    reporter: WorldReporter;
    lastTick: number;

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
        this.lastTick = 0;
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

        const totalVelocity = new Victor(0, 0);
        let nbCollisions = 0;
        for (const wall of walls) {
            const bounceVelocity = LineSphereCollider(wall, sphere);
            if (bounceVelocity) {
                nbCollisions++;
                totalVelocity.add(bounceVelocity);
            }
        }
        if (nbCollisions > 0) {
            totalVelocity.divideScalar(nbCollisions);
            sphere.velocity.copy(totalVelocity);
            sphere.position.add(sphere.velocity.clone().multiplyScalar(dt));
        }
    }

    step() {
        if (this.t === 0) {
            this.lastTick = Date.now();
        }
        this.t++;

        const now = Date.now();
        const dtOffset = 5;
        const dt = (now - this.lastTick) / ((1000 / 60) * dtOffset);

        for (const o of this.objects) {
            if (!o.fixed) {
                this.applyDynamics(dt, o);
            }
        }
        this.applyCollisions(dt);

        if (this.reporter) {
            this.reporter(this);
        }

        this.lastTick = Date.now();
    }
}

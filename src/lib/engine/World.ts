import Victor from 'victor';
import type { PhysicObject } from './PhysicObject';
import { LineSphereCollider } from './LineSphereCollider';
import { SphereSphereCollider } from './SphereSphereCollider';

export type WorldReporter = (world: World) => void;

const lineSphereCollider = new LineSphereCollider();
const sphereSphereCollider = new SphereSphereCollider();

export class World {
    gravityEnabled: boolean;
    collisionEnabled: boolean;
    overlapsAllowed: boolean;
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
        enableCollisions?: boolean;
        enableOverlaps?: boolean;
        drag?: number;
    }) {
        this.collisionEnabled = options.enableCollisions ?? true;
        this.gravityEnabled = options.enableGravity ?? true;
        this.overlapsAllowed = options.enableOverlaps ?? false;
        this.dimensions = options.dimensions || new Victor(100, 100);
        this.objects = [];
        this.t = 0;
        this.reporter = options.reporter || (() => {});
        this.drag = options.drag ?? this.drag;
    }

    toggleGravity() {
        this.gravityEnabled = !this.gravityEnabled;
    }

    addObject(o: PhysicObject) {
        // TODO keep that in an external registry to speed up object addition
        const maxId = this.objects.reduce((max, o) => {
            return max > o.data.id ? max : o.data.id;
        }, 0);
        o.data.id = maxId + 1;
        this.objects.push(o);
    }

    addObjects(objects: PhysicObject[]) {
        objects.forEach((o) => this.addObject(o));
    }

    removeObject(o: PhysicObject) {
        if (o.data.id === -1) {
            throw new Error('Cant remove an object with uninitialized id');
        }
        const i = this.objects.findIndex((worldObject) => worldObject.data.id === o.data.id);
        if (i === -1) {
            throw new Error('Object not found in world');
        }
        this.objects.splice(i, 1);
    }

    applyGravity(o: PhysicObject) {
        o.acceleration.push(this.gravity);
    }

    applyForce(o: PhysicObject, force: Victor) {
        o.acceleration.push(force);
    }

    applyDynamics(dt: number, o: PhysicObject) {
        if (o.fixed) {
            return;
        }
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
        const updates = new Array(this.objects.length).fill(0).map((_) => {
            return {
                totalVelocity: new Victor(0, 0),
                nbCollisions: 0
            };
        });

        for (let i = 0; i < this.objects.length; i++) {
            const current = this.objects[i];
            if (current.fixed) {
                continue;
            }
            current.data.isColliding = false;
            for (let j = 0; j < this.objects.length; j++) {
                if (i === j) {
                    continue;
                }

                const other = this.objects[j];

                if (current.geometry.type === 'line' && other.geometry.type === 'line') {
                    // TODO Implement lineline physics
                    continue;
                }

                let bouncedVelocity: Victor | undefined;
                if (current.geometry.type === 'sphere' && other.geometry.type === 'sphere') {
                    bouncedVelocity = sphereSphereCollider.bounce(current, other)?.bouncedVelocity;
                } else {
                    const line = current.geometry.type === 'line' ? current : other;
                    const sphere = current.geometry.type === 'line' ? other : current;

                    bouncedVelocity = lineSphereCollider.bounce(line, sphere)?.bouncedVelocity;
                }

                if (!bouncedVelocity) {
                    continue;
                }

                updates[i].totalVelocity.add(bouncedVelocity);
                updates[i].nbCollisions++;
            }
        }

        for (let i = 0; i < this.objects.length; i++) {
            const { totalVelocity, nbCollisions } = updates[i];
            if (nbCollisions === 0) {
                continue;
            }
            const current = this.objects[i];

            totalVelocity.divideScalar(nbCollisions);
            current.velocity.copy(totalVelocity);
            current.position.add(current.velocity.clone().multiplyScalar(dt));
            current.data.isColliding = true;
            current.collisionListener();
        }
    }

    preventOverlaps(nbSteps: number) {
        for (let i = 0; i < this.objects.length; i++) {
            const current = this.objects[i];
            if (current.fixed) {
                continue;
            }

            for (let j = 0; j < this.objects.length; j++) {
                if (i === j) {
                    continue;
                }

                const other = this.objects[j];

                if (current.geometry.type === 'line' && other.geometry.type === 'line') {
                    // TODO Implement lineline physics
                    continue;
                }

                let positionCorrection: Victor | undefined;
                if (current.geometry.type === 'sphere' && other.geometry.type === 'sphere') {
                    positionCorrection = sphereSphereCollider.pullApart(current, other)
                        ?.positionCorrection;
                } else {
                    const line = current.geometry.type === 'line' ? current : other;
                    const sphere = current.geometry.type === 'line' ? other : current;

                    positionCorrection = lineSphereCollider.pullApart(line, sphere)
                        ?.positionCorrection;
                }

                if (!positionCorrection) {
                    continue;
                }

                current.position.add(positionCorrection.divideScalar(nbSteps).divideScalar(2));
                if (!other.fixed) {
                    other.position.add(
                        positionCorrection.divideScalar(nbSteps).divideScalar(2).multiplyScalar(-1)
                    );
                }
            }
        }
    }

    _step(dt: number) {
        for (const o of this.objects) {
            this.applyDynamics(dt, o);
            o.data.age++;
        }
        if (!this.overlapsAllowed) {
            const nbSubSteps = 1;
            for (let i = 0; i < nbSubSteps; i++) {
                this.preventOverlaps(nbSubSteps);
            }
        }
        if (this.collisionEnabled) {
            this.applyCollisions(dt);
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
        lastTick = now;

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

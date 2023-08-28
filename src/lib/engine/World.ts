import Victor from 'victor';
import type { PhysicObject } from './PhysicObject';

export type WorldReporter = (world: World) => void;

export class World {
    gravityEnabled: boolean;
    dimensions: Victor;
    t: number;
    objects: PhysicObject[];
    gravity = new Victor(0, -9.8);
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

    addObject(o: PhysicObject) {
        this.objects.push(o);
    }

    applyGravity(o: PhysicObject) {
        o.acceleration.push(this.gravity);
    }

    applyDynamics(o: PhysicObject) {
        const now = Date.now();
        const dt = (now - this.lastTick) / (1000 / 60);

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

        o.velocity.add(totalForce.multiplyScalar(dt));
        o.position.add(o.velocity.clone().multiplyScalar(dt));
    }

    applyCollisions(o: PhysicObject) {
        const restitutionCoeff = 0.9;
        if (o.position.x < 0 && o.velocity.x < 0) {
            o.velocity.x *= -restitutionCoeff;
        }
        if (o.position.x > this.dimensions.x && o.velocity.x > 0) {
            o.velocity.x *= -restitutionCoeff;
        }

        if (o.position.y < 0 && o.velocity.y < 0) {
            o.velocity.y *= -restitutionCoeff;
        }
        if (o.position.y > this.dimensions.y && o.velocity.y > 0) {
            o.velocity.y *= -restitutionCoeff;
        }
    }

    step() {
        if (this.t === 0) {
            this.lastTick = Date.now();
        }
        this.t++;

        for (const o of this.objects) {
            this.applyDynamics(o);
            this.applyCollisions(o);
        }

        if (this.reporter) {
            this.reporter(this);
        }

        this.lastTick = Date.now();
    }
}

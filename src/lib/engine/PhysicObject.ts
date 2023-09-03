import Victor from 'victor';
import type { Geometry } from './Geometry';

export interface PhysicObject {
    geometry: Geometry;
    fixed: boolean;
    m: number;
    position: Victor;
    velocity: Victor;
    acceleration: Victor[];
}

export const createPhysicObjects = (options: {
    geometry: Geometry;
    fixed?: boolean;
    position?: Victor;
    velocity?: Victor;
    mass?: number;
}): PhysicObject => {
    return {
        geometry: options.geometry,
        m: options.mass ?? 10,
        position: options.position?.clone() ?? new Victor(0, 0),
        velocity: options.velocity?.clone() ?? new Victor(0, 0),
        acceleration: [],
        fixed: options.fixed ?? false
    };
};

export const applyForce = (o: PhysicObject, f: Victor) => {
    o.acceleration.push(f);
};

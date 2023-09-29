import Victor from 'victor';
import type { Geometry } from './Geometry';

export interface PhysicObject {
    geometry: Geometry;
    fixed: boolean;
    m: number;
    position: Victor;
    velocity: Victor;
    acceleration: Victor[];
    restitution: number;
    friction: number;
    data: {
        isColliding: boolean;
    };
    collisionListener: () => void;
}

/** Returns a physic object to be added to the world
 *
 * @param geometry The Geometry of the object
 * @param fixed If true object doesn't move
 * @param position Position of the anchor pont of the object (depends on Geometry)
 * @param velocity Initial Velocity
 * @params mass Default to 1
 * @params restitution [0, 1] 0 = no bounce
 * @params friction [0, 1] 0 = no friction
 * @params collisionListener Function called when the object collides
 */
export const createPhysicObjects = (options: {
    geometry: Geometry;
    fixed?: boolean;
    position?: Victor;
    velocity?: Victor;
    mass?: number;
    restitution?: number;
    friction?: number;
    collisionListener?: () => void;
}): PhysicObject => {
    return {
        geometry: options.geometry,
        m: options.mass ?? 1,
        position: options.position?.clone() ?? new Victor(0, 0),
        velocity: options.velocity?.clone() ?? new Victor(0, 0),
        acceleration: [],
        restitution: options.restitution ?? 0.9,
        friction: options.friction ?? 0.4,
        fixed: options.fixed ?? false,
        data: {
            isColliding: false
        },
        collisionListener: options.collisionListener || (() => {})
    };
};

export const applyForce = (o: PhysicObject, f: Victor) => {
    o.acceleration.push(f);
};

import type Victor from 'victor';
import type { PhysicObject } from './PhysicObject';

export interface Collider {
    apply: (
        a: PhysicObject,
        b: PhysicObject
    ) => { bouncedVelocity: Victor; intersection: Victor } | undefined;
    intersectionPoint: (a: PhysicObject, b: PhysicObject) => Victor | undefined;
    bounce: (
        a: PhysicObject,
        b: PhysicObject
    ) => { bouncedVelocity: Victor; intersection: Victor } | undefined;
}

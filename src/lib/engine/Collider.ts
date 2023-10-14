import type Victor from 'victor';
import type { PhysicObject } from './PhysicObject';

export interface Collider {
    apply: (
        a: PhysicObject,
        b: PhysicObject
    ) => { bouncedVelocity: Victor; intersection: Victor; positionCorrection: Victor } | undefined;
    intersectionPoint: (a: PhysicObject, b: PhysicObject) => Victor | undefined;
    pullApart: (a: PhysicObject, b: PhysicObject) => { positionCorrection: Victor } | undefined;
    bounce: (
        a: PhysicObject,
        b: PhysicObject
    ) => { bouncedVelocity: Victor; intersection: Victor } | undefined;
}

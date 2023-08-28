import Victor from 'victor';

export interface PhysicObject {
    r: number;
    m: number;
    position: Victor;
    velocity: Victor;
    acceleration: Victor[];
}

export const createPhysicObjects = (): PhysicObject => {
    return {
        r: 2,
        m: 10,
        position: new Victor(0, 0),
        velocity: new Victor(0, 0),
        acceleration: []
    };
};

export const applyForce = (o: PhysicObject, f: Victor) => {
    o.acceleration.push(f);
};

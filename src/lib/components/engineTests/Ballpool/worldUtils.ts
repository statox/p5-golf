import { createPhysicObjects } from '$lib/engine';
import Victor from 'victor';

export const makeObjects = (params: { nbBalls: number; rBalls: number }) => {
    const objects = [];

    // Borders
    const bottom = createPhysicObjects({
        geometry: {
            type: 'line',
            vector: new Victor(15, 0)
        },
        position: new Victor(0, 0),
        fixed: true
    });
    objects.push(bottom);
    const left = createPhysicObjects({
        geometry: {
            type: 'line',
            vector: new Victor(0, 100)
        },
        position: new Victor(0, 0),
        fixed: true
    });
    objects.push(left);
    const right = createPhysicObjects({
        geometry: {
            type: 'line',
            vector: new Victor(0, 100)
        },
        position: new Victor(15, 0),
        fixed: true
    });
    objects.push(right);

    // sphere
    for (let i = 0; i < params.nbBalls; i++) {
        const sphere = createPhysicObjects({
            geometry: {
                type: 'sphere',
                r: params.rBalls
            },
            position: new Victor(Math.random() * 15, Math.random() * 15),
            velocity: new Victor(Math.random() * 15, Math.random() * 15)
        });
        objects.push(sphere);
    }

    return { objects, sphere: objects[3] };
};

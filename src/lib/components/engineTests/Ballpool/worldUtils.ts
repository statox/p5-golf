import { createPhysicObjects } from '$lib/engine';
import Victor from 'victor';

export const makeObjects = () => {
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
    for (let i = 0; i < 10; i++) {
        const sphere = createPhysicObjects({
            geometry: {
                type: 'sphere',
                r: 0.1
            },
            position: new Victor(Math.random() * 15, Math.random() * 15),
            velocity: new Victor(Math.random() * 15, Math.random() * 15)
        });
        objects.push(sphere);
    }

    return { objects, sphere: objects[3] };
};

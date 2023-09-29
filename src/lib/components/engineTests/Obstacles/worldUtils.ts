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

    // Cross
    const cross1 = createPhysicObjects({
        geometry: {
            type: 'line',
            vector: new Victor(3, -3)
        },
        position: new Victor(3.5, 8),
        fixed: true
    });
    objects.push(cross1);

    const cross2 = createPhysicObjects({
        geometry: {
            type: 'line',
            vector: new Victor(3, 3)
        },
        position: new Victor(3.5, 5),
        fixed: true
    });
    objects.push(cross2);

    // Stairs
    const line1 = createPhysicObjects({
        geometry: {
            type: 'line',
            vector: new Victor(6, 0)
        },
        position: new Victor(2, 2),
        fixed: true
    });
    objects.push(line1);

    const line2 = createPhysicObjects({
        geometry: {
            type: 'line',
            vector: new Victor(4, 0)
        },
        position: new Victor(3, 2.5),
        fixed: true
    });
    objects.push(line2);

    const line3 = createPhysicObjects({
        geometry: {
            type: 'line',
            vector: new Victor(2, 0)
        },
        position: new Victor(4, 3),
        fixed: true
    });
    objects.push(line3);

    const line4 = createPhysicObjects({
        geometry: {
            type: 'line',
            vector: new Victor(0.6, 0)
        },
        position: new Victor(4.7, 3.5),
        fixed: true
    });
    objects.push(line4);

    // bucket
    const bucket1 = createPhysicObjects({
        geometry: {
            type: 'line',
            vector: new Victor(1, 0)
        },
        position: new Victor(10, 10.1),
        fixed: true
    });
    objects.push(bucket1);
    const bucket2 = createPhysicObjects({
        geometry: {
            type: 'line',
            vector: new Victor(0, -4)
        },
        position: new Victor(11, 10),
        fixed: true
    });
    objects.push(bucket2);
    const bucket3 = createPhysicObjects({
        geometry: {
            type: 'line',
            vector: new Victor(0, -4)
        },
        position: new Victor(11.5, 10),
        fixed: true
    });
    objects.push(bucket3);
    const bucket4 = createPhysicObjects({
        geometry: {
            type: 'line',
            vector: new Victor(0, -4)
        },
        position: new Victor(12, 10),
        fixed: true
    });
    objects.push(bucket4);
    const bucket5 = createPhysicObjects({
        geometry: {
            type: 'line',
            vector: new Victor(1, 0)
        },
        position: new Victor(12, 10.1),
        fixed: true
    });
    objects.push(bucket5);

    // rays
    for (let space = 0.2; space < 0.5; space += 0.1) {
        for (let i = 0; i < 10; i++) {
            const ray = createPhysicObjects({
                geometry: {
                    type: 'line',
                    vector: new Victor(0, 3)
                },
                position: new Victor(9 + i * space, 1),
                fixed: true
            });
            objects.push(ray);
        }
    }

    // Sphere
    const sphere = createPhysicObjects({
        geometry: {
            type: 'sphere',
            r: 0.1
        },
        position: new Victor(5, 10),
        velocity: new Victor(0, 0)
    });
    objects.push(sphere);

    return { objects, sphere };
};

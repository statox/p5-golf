import { createPhysicObjects } from '$lib/engine';
import Victor from 'victor';

export const makeWalls = (worldDimensions: Victor) => {
    const objects = [];

    // Borders
    const top = createPhysicObjects({
        geometry: {
            type: 'line',
            vector: new Victor(worldDimensions.x, 0)
        },
        position: new Victor(0, worldDimensions.y),
        fixed: true
    });
    objects.push(top);
    const bottom = createPhysicObjects({
        geometry: {
            type: 'line',
            vector: new Victor(worldDimensions.x, 0)
        },
        position: new Victor(0, 0),
        fixed: true
    });
    objects.push(bottom);
    const left = createPhysicObjects({
        geometry: {
            type: 'line',
            vector: new Victor(0, worldDimensions.y)
        },
        position: new Victor(0, 0),
        fixed: true
    });
    objects.push(left);
    const right = createPhysicObjects({
        geometry: {
            type: 'line',
            vector: new Victor(0, worldDimensions.y)
        },
        position: new Victor(worldDimensions.x, 0),
        fixed: true
    });
    objects.push(right);

    return objects;
};

export const makeBox = (worldDimensions: Victor, r: number) => {
    const objects = [];

    const worldW = worldDimensions.x;
    const worldH = worldDimensions.y;
    const boxW = r * worldDimensions.x;
    const boxH = r * worldDimensions.y;
    const centerX = worldW / 2;
    const centerY = worldH / 2;

    // Borders
    const top = createPhysicObjects({
        geometry: {
            type: 'line',
            vector: new Victor(boxW, 0)
        },
        position: new Victor(centerX - boxW / 2, centerY + boxH / 2),
        fixed: true
    });
    objects.push(top);
    const bottom = createPhysicObjects({
        geometry: {
            type: 'line',
            vector: new Victor(boxW, 0)
        },
        position: new Victor(centerX - boxW / 2, centerY - boxH / 2),
        fixed: true
    });
    objects.push(bottom);

    const left = createPhysicObjects({
        geometry: {
            type: 'line',
            vector: new Victor(0, boxH)
        },
        position: new Victor(centerX - boxW / 2, centerY - boxH / 2),
        fixed: true
    });
    objects.push(left);
    const right = createPhysicObjects({
        geometry: {
            type: 'line',
            vector: new Victor(0, boxH)
        },
        position: new Victor(centerX + boxW / 2, centerY - boxH / 2),
        fixed: true
    });
    objects.push(right);

    return objects;
};

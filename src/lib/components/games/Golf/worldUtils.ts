import { createPhysicObjects } from '$lib/engine';
import Victor from 'victor';

export const makeObjects = (worldDimenstions: Victor, hitTargetCb: () => void) => {
    const objects = [];

    const worldW = worldDimenstions.x;
    const worldH = worldDimenstions.y;

    const minW = 1;
    const maxW = 5;

    const minH = 1;
    const maxH = 6;

    const maxR = 0.5;
    const minR = 0.2;

    for (let x = 1; x < worldW - maxW; x += worldW / 2) {
        for (let y = worldH - 1; y > maxH; y -= worldH / 2) {
            const w = Math.random() * maxW + minW;
            const h = Math.random() * maxH + minH;
            const r = Math.random() * maxR + minR;
            makeBucket(
                {
                    x,
                    y,
                    w,
                    h,
                    topRatio: r
                },
                hitTargetCb
            ).forEach((o) => objects.push(o));
        }
    }
    makeWalls(worldDimenstions).forEach((o) => objects.push(o));
    const sphere = makeSphere();
    objects.push(sphere);

    return { objects, sphere };
};

const makeSphere = () => {
    return createPhysicObjects({
        geometry: {
            type: 'sphere',
            r: 0.1
        },
        position: new Victor(5, 10),
        velocity: new Victor(0, 0)
    });
};

const makeWalls = (worldDimenstions: Victor) => {
    const w = worldDimenstions.x;
    const h = worldDimenstions.y;
    const objects = [];
    const bottom = createPhysicObjects({
        geometry: {
            type: 'line',
            vector: new Victor(w, 0)
        },
        position: new Victor(0, 0),
        fixed: true
    });
    objects.push(bottom);
    const left = createPhysicObjects({
        geometry: {
            type: 'line',
            vector: new Victor(0, h * 10)
        },
        position: new Victor(0, 0),
        fixed: true
    });
    objects.push(left);
    const right = createPhysicObjects({
        geometry: {
            type: 'line',
            vector: new Victor(0, h * 10)
        },
        position: new Victor(15, 0),
        fixed: true
    });
    objects.push(right);
    return objects;
};

const makeBucket = (
    params: { x: number; y: number; h: number; w: number; topRatio: number },
    hitTargetCb: () => void
) => {
    const { x, y, h, w, topRatio } = params;
    if (topRatio < 0 || topRatio > 1) {
        throw new Error('topRatio must be between 0 and 1');
    }

    const topLen = (w * topRatio) / 2;
    const bottomLen = w * (1 - topRatio);

    const gap = 0.1;
    const objects = [];
    const topLeft = createPhysicObjects({
        geometry: {
            type: 'line',
            vector: new Victor(topLen, 0)
        },
        position: new Victor(x, y + gap),
        fixed: true
    });
    objects.push(topLeft);
    const borderLeft = createPhysicObjects({
        geometry: {
            type: 'line',
            vector: new Victor(0, -h)
        },
        position: new Victor(x + topLen, y),
        fixed: true
    });
    objects.push(borderLeft);
    const bottom = createPhysicObjects({
        geometry: {
            type: 'line',
            vector: new Victor(bottomLen, 0)
        },
        position: new Victor(x + topLen, y - h - gap),
        fixed: true
    });
    objects.push(bottom);
    const middle = createPhysicObjects({
        geometry: {
            type: 'line',
            vector: new Victor(bottomLen - 2 * gap, 0)
        },
        position: new Victor(x + topLen + gap, y - h / 2 - gap),
        fixed: true,
        friction: 1,
        restitution: 0,
        collisionListener: hitTargetCb
    });
    objects.push(middle);
    const borderRight = createPhysicObjects({
        geometry: {
            type: 'line',
            vector: new Victor(0, h)
        },
        position: new Victor(x + topLen + bottomLen, y - h),
        fixed: true
    });
    objects.push(borderRight);
    const topRight = createPhysicObjects({
        geometry: {
            type: 'line',
            vector: new Victor(topLen, 0)
        },
        position: new Victor(x + topLen + bottomLen, y + gap),
        fixed: true
    });
    objects.push(topRight);
    return objects;
};

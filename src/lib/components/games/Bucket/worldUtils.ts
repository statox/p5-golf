import { createPhysicObjects } from '$lib/engine';
import Victor from 'victor';

export const makeObjects = (worldDimenstions: Victor, hitTargetCb: () => void) => {
    const objects = [];

    const worldW = worldDimenstions.x;
    const worldH = worldDimenstions.y;

    const minW = 3;
    const maxW = 5;

    const minH = 0.3;
    const maxH = 4;

    const maxR = 0.5;
    const minR = 0.1;

    const borderY = 3;
    const x = Math.random() * (worldW - maxW);
    const y = worldH - borderY - Math.random() * (worldH - maxH - borderY);
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

    makeWalls(worldDimenstions).forEach((o) => objects.push(o));
    const sphere = makeSphere(new Victor(Math.random() * worldW, Math.random() * worldH));
    while (
        sphere.position.x > x &&
        sphere.position.x < x + w &&
        sphere.position.y < y &&
        sphere.position.y > y + h
    ) {
        sphere.position.x = Math.random() * worldW;
        sphere.position.y = Math.random() * worldH;
    }
    objects.push(sphere);

    return { objects, sphere };
};

const makeSphere = (pos: Victor) => {
    return createPhysicObjects({
        geometry: {
            type: 'sphere',
            r: 0.1
        },
        position: pos,
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
    const target = createPhysicObjects({
        geometry: {
            type: 'line',
            vector: new Victor(bottomLen - 2 * gap, 0)
        },
        position: new Victor(x + topLen + gap, y - h + gap),
        fixed: true,
        friction: 1,
        restitution: 0,
        collisionListener: hitTargetCb
    });
    objects.push(target);
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

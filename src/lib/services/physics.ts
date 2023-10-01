import type p5 from 'p5';
import Victor from 'victor';
import type { Ball } from '$lib/types/ball';
import type { Terrain } from '$lib/types/terrain';
import { limitVelocity } from './ball';
import { map } from './interpolation';
import { getSegmentAtX } from './terrain';

const gravity = new Victor(0, -10);

export const drawNormalVector = (p5: p5, ball: Ball, terrain: Terrain) => {
    const v = getTerrainForce(ball, terrain);

    p5.stroke('green');
    p5.fill('green');
    p5.line(
        ball.position.x,
        p5.height - ball.position.y,
        ball.position.x + v.x,
        p5.height - (ball.position.y + v.y)
    );
};

const getTerrainForce = (ball: Ball, terrain: Terrain) => {
    const slope = getSlopeAtX(ball, terrain);
    if (!slope) {
        return new Victor(0, 0);
    }
    const impactPoint = new Victor(slope.x, slope.y);
    if (impactPoint.distanceSq(ball.position) > ball.r ** 2) {
        return new Victor(0, 0);
    }

    const { x1, y1, x2, y2 } = slope;
    const v = new Victor(x2 - x1, y2 - y1);
    v.rotateByDeg(90);

    v.normalize();

    return v;
};

export const updateBall = (ball: Ball, terrain: Terrain, dt: number) => {
    const g = gravity.clone();
    const bounce = getTerrainForce(ball, terrain);
    bounce.multiplyScalar(g.length());
    ball.acceleration.zero();
    ball.acceleration.add(g);
    ball.acceleration.add(bounce);

    ball.velocity.multiplyScalar(0.8);
    ball.velocity.add(ball.acceleration);
    limitVelocity(ball);
    ball.position.add(ball.velocity.clone().multiplyScalar(dt));
};

const getSlopeAtX = (ball: Ball, terrain: Terrain) => {
    const currentTerrainSegment = getSegmentAtX(terrain, ball.position.x);
    if (!currentTerrainSegment) {
        return;
    }
    const x = ball.position.x;
    const x1 = Math.max(currentTerrainSegment.x1, ball.position.x - ball.r);
    const x2 = Math.min(currentTerrainSegment.x2, ball.position.x + ball.r);
    const percent = map(x, currentTerrainSegment.x1, currentTerrainSegment.x2, 0, 1);
    const percent1 = map(x1, currentTerrainSegment.x1, currentTerrainSegment.x2, 0, 1);
    const percent2 = map(x2, currentTerrainSegment.x1, currentTerrainSegment.x2, 0, 1);

    const y = currentTerrainSegment.f(percent, currentTerrainSegment.y1, currentTerrainSegment.y2);
    const y1 = currentTerrainSegment.f(
        percent1,
        currentTerrainSegment.y1,
        currentTerrainSegment.y2
    );
    const y2 = currentTerrainSegment.f(
        percent2,
        currentTerrainSegment.y1,
        currentTerrainSegment.y2
    );

    return { x1, y1, x2, y2, x, y };
};

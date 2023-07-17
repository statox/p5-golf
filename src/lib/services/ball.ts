import type p5 from 'p5';
import Victor from 'victor';
import type { Ball } from '$lib/types/ball';

export const generateBall = (params: { x: number, y: number }): Ball => {
    const { x, y } = params;
    return {
        r: 10,
        position: new Victor(x, y),
        velocity: new Victor(0, 0),
        acceleration: new Victor(0, 0)
    }
};

export const drawBall = (p5: p5, ball: Ball) => {
    p5.stroke('white');
    p5.fill('white');
    p5.circle(ball.position.x, p5.height - ball.position.y, ball.r);
};

export const setBall = (ball: Ball, params: { x: number, y: number }) => {
    ball.position.x = params.x;
    ball.position.y = params.y;
    ball.velocity.zero();
}

const gravity = new Victor(0, -10);
export const updateBall = (ball: Ball) => {
    ball.acceleration = gravity.clone();
    ball.velocity.add(ball.acceleration);
    ball.position.add(ball.velocity);
};

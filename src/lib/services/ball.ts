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
    drawBallSpeed(p5, ball);
};

const drawBallSpeed = (p5: p5, ball: Ball) => {
    p5.stroke('red');
    p5.noFill();
    const { x, y } = ball.position;
    const { x: dx, y: dy } = ball.velocity;
    p5.line(x, p5.height - y, x + dx, p5.height - y - dy);
};

export const setBall = (ball: Ball, params: { x: number, y: number, dx: number, dy: number }) => {
    ball.position.x = params.x;
    ball.position.y = params.y;
    ball.velocity.x = params.dx;
    ball.velocity.y = params.dy;
    limitVelocity(ball);
}

const gravity = new Victor(0, -10);
const maxSpeedLength = 100;

const limitVelocity = (ball: Ball) => {
    if (ball.velocity.magnitude() > maxSpeedLength) {
        ball.velocity.normalize().multiplyScalar(maxSpeedLength);
    }
};

export const updateBall = (ball: Ball) => {
    ball.acceleration = gravity.clone();
    ball.velocity.add(ball.acceleration);
    limitVelocity(ball);
    ball.position.add(ball.velocity);
};

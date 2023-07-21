<script lang="ts">
    import { drawBall, generateBall } from '$lib/services/ball';
    import type p5 from 'p5';
    import P5, { type Sketch } from 'p5-svelte';
    import { onDestroy } from 'svelte';
    import Victor from 'victor';

    export type Ball = {
        isColliding: boolean;
        r: number; // Radius in px
        position: Victor;
        velocity: Victor;
        velocity0: Victor;
        maxVelocity: number;
        acceleration: Victor;
    };

    let _p5: p5;

    const ball: Ball = {
        isColliding: false,
        r: 5,
        position: new Victor(450, 300),
        velocity0: new Victor(10, 10),
        velocity: new Victor(0, 10),
        acceleration: new Victor(0, -10),
        maxVelocity: 100
    };

    let lastTick = Date.now();
    const updateBall = (ball: Ball) => {
        const tick = Date.now();
        const t = tick - lastTick;
        lastTick = tick;

        if (!ball.isColliding && ball.position.y < ball.r) {
            ball.isColliding = true;
            ball.velocity.y *= -0.8;
        } else if (ball.isColliding && ball.position.y > ball.r) {
            ball.isColliding = false;
        }

        ball.velocity = ball.velocity0.add(ball.acceleration);
        const maxV = ball.maxVelocity;
        if (ball.velocity.length() > maxV) {
            ball.velocity.normalize().multiplyScalar(maxV);
        }
        ball.position = ball.position.add(ball.velocity);
        if (ball.position.y < 0) {
            ball.position.y = 0;
        }
    };

    const pushUp = (ball: Ball) => {
        ball.velocity0.y += 100;
    };

    const mouseIsPressedOnScreen = (p5: p5) => {
        if (!p5.mouseIsPressed) {
            return false;
        }
        const { mouseX: x, mouseY: y, width: w, height: h } = p5;
        return x > 0 && x < w && y > 0 && y < h;
    };

    const sketch: Sketch = (p5) => {
        p5.setup = () => {
            _p5 = p5;
            p5.createCanvas(900, 600);
            p5.frameRate(10);
        };
        p5.draw = () => {
            p5.background(0);
            if (mouseIsPressedOnScreen(p5)) {
                ball.position.x = p5.mouseX;
                ball.position.y = p5.height - p5.mouseY;
                ball.velocity0.x = Math.random() * (2 * ball.maxVelocity) - ball.maxVelocity;
                ball.velocity0.y = Math.random() * (2 * ball.maxVelocity) - ball.maxVelocity;
            }

            updateBall(ball);
            drawBall(p5, ball);
        };
    };
    onDestroy(() => {
        _p5?.remove();
    });
</script>

<div class="d-flex justify-content-center">
    <P5 {sketch} />
    <button on:click={() => pushUp(ball)}>Push up</button>
</div>

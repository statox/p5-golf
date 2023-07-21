<script lang="ts">
    import { drawBall } from '$lib/services/ball';
    import type { GUI } from 'dat.gui';
    import type p5 from 'p5';
    import P5, { type Sketch } from 'p5-svelte';
    import { onDestroy, onMount } from 'svelte';
    import Victor from 'victor';

    import Chart from 'svelte-frappe-charts';

    let velocityHistory: {
        labels: string[];
        datasets: {
            values: any[];
        }[];
    } = {
        labels: [],
        datasets: [
            {
                values: []
            }
        ]
    };
    let velocityChart: Chart;

    type Ball = {
        isColliding: boolean;
        r: number; // Radius in px
        position: Victor;
        velocity: Victor;
        velocity0: Victor;
        acceleration: Victor;
    };

    let _p5: p5;

    const ball: Ball = {
        isColliding: false,
        r: 5,
        position: new Victor(450, 300),
        velocity0: new Victor(10, 10),
        velocity: new Victor(0, 10),
        acceleration: new Victor(0, -10)
    };

    const settings = {
        physics: {
            coefRestitution: 0.8,
            maxVelocity: 60
        },
        render: {
            targetFPS: 10
        }
    };

    let lastTick = Date.now();
    let frameNb = 0;
    const updateBall = (ball: Ball) => {
        frameNb++;
        const tick = Date.now();
        const t = tick - lastTick;
        lastTick = tick;

        if (!ball.isColliding && ball.position.y < ball.r) {
            ball.isColliding = true;
            ball.velocity.y *= -settings.physics.coefRestitution;
        } else if (ball.isColliding && ball.position.y > ball.r) {
            ball.isColliding = false;
        }

        ball.velocity = ball.velocity0.add(ball.acceleration);
        const maxV = settings.physics.maxVelocity;
        if (ball.velocity.length() > maxV) {
            ball.velocity.normalize().multiplyScalar(maxV);
        }
        ball.position = ball.position.add(ball.velocity);
        if (ball.position.y < 0) {
            ball.position.y = 0;
        }

        if (ball.position.x < 0) {
            ball.position.x = _p5.width;
        } else if (ball.position.x > _p5.width) {
            ball.position.x = 0;
        }

        velocityChart.addDataPoint(tick, [ball.velocity.y]);
        if (frameNb > 50) {
            velocityChart.removeDataPoint(0);
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

    let gui: GUI;
    const initGUI = async () => {
        // Imported here to avoid "window is not defined" error
        // https://github.com/dataarts/dat.gui/issues/271
        const dat = await import('dat.gui');
        gui = new dat.GUI();

        gui.domElement.setAttribute('style', 'background-color: black');

        const programFolder = gui.addFolder('Physics');
        programFolder.open();
        programFolder.add(settings.physics, 'coefRestitution', 0, 1).name('C. restitution');
        programFolder.add(settings.physics, 'maxVelocity', 0, 200).name('max Velocity');

        const renderFolder = gui.addFolder('Render');
        renderFolder.open();
        renderFolder
            .add(settings.render, 'targetFPS', 0, 60)
            .name('Target FPS')
            .onFinishChange(() => _p5.frameRate(settings.render.targetFPS));
    };

    const sketch: Sketch = (p5) => {
        p5.setup = () => {
            _p5 = p5;
            p5.createCanvas(900, 600);
            p5.frameRate(settings.render.targetFPS);
        };
        p5.draw = () => {
            p5.background(0);
            if (mouseIsPressedOnScreen(p5)) {
                const maxV = settings.physics.maxVelocity;
                ball.position.x = p5.mouseX;
                ball.position.y = p5.height - p5.mouseY;
                ball.velocity0.x = Math.random() * (2 * maxV) - maxV;
                ball.velocity0.y = Math.random() * maxV;
            }

            updateBall(ball);
            drawBall(p5, ball);
        };
    };

    onMount(() => {
        initGUI();
    });

    onDestroy(() => {
        gui?.destroy();
        _p5?.remove();
    });
</script>

<div class="d-flex justify-content-center">
    <P5 {sketch} />
    <button on:click={() => pushUp(ball)}>Push up</button>
    <button on:click={() => (ball.position.y = _p5.height)}>Place on top</button>
</div>
<Chart
    data={velocityHistory}
    type="line"
    lineOptions={{
        hideDots: 1
    }}
    axisOptions={{
        xAxisMode: 'tick'
    }}
    bind:this={velocityChart}
/>

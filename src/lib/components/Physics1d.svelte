<script lang="ts">
    import type { GUI } from 'dat.gui';
    import type p5 from 'p5';
    import P5, { type Sketch } from 'p5-svelte';
    import { onDestroy, onMount } from 'svelte';
    import Victor from 'victor';
    import Chart from 'svelte-frappe-charts';

    let velocityHistory: {
        labels: string[];
        datasets: {
            name: string;
            values: number[];
        }[];
    } = {
        labels: [],
        datasets: [
            {
                name: 'position y',
                values: []
            },
            {
                name: 'velocity y',
                values: []
            },
            {
                name: 'acceleration y',
                values: []
            },
            {
                name: 'collision',
                values: []
            },
            {
                name: 'displacement',
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
        acceleration: Victor;
    };

    let _p5: p5;

    const G = new Victor(0, -10);

    const ball: Ball = {
        isColliding: false,
        r: 5,
        position: new Victor(450, 300),
        velocity: new Victor(0, 10),
        acceleration: new Victor(0, -10)
    };

    const settings = {
        physics: {
            coefRestitution: 0.8,
            maxVelocity: 200
        },
        render: {
            targetFPS: 24
        }
    };

    const shot = new Victor(0, 0);

    let lastTick = Date.now();
    let frameNb = 0;
    const updateBall = (ball: Ball) => {
        frameNb++;
        const tick = Date.now();
        const t = tick - lastTick;
        lastTick = tick;

        if (!ball.isColliding && ball.position.y < ball.r) {
            ball.isColliding = true;
        } else if (ball.isColliding && ball.position.y > ball.r) {
            ball.isColliding = false;
        }

        ball.acceleration.zero();
        if (ball.isColliding) {
            if (ball.velocity.y < 0) {
                ball.velocity.y *= -settings.physics.coefRestitution;
                ball.velocity.x *= settings.physics.coefRestitution;
            }
            ball.acceleration.subtract(G);
        }

        ball.acceleration.add(G);
        ball.velocity.add(ball.acceleration);
        const maxV = settings.physics.maxVelocity;
        if (ball.velocity.length() > maxV) {
            ball.velocity.normalize().multiplyScalar(maxV);
        }

        if (ball.isColliding && ball.velocity.length() < 20) {
            ball.velocity.zero();
        }

        const previousPosition = ball.position.clone();
        ball.position.add(ball.velocity);
        if (ball.position.y < 0) {
            ball.position.y = 0;
        }

        if (ball.position.x < 0) {
            ball.position.x = _p5.width;
        } else if (ball.position.x > _p5.width) {
            ball.position.x = 0;
        }

        const displacement = previousPosition.distance(ball.position);

        velocityChart.addDataPoint(frameNb, [
            ball.position.y,
            ball.velocity.y,
            ball.acceleration.y,
            ball.isColliding ? 100 : 0,
            displacement
        ]);
        if (frameNb > 50) {
            velocityChart.removeDataPoint(0);
        }
    };

    const runPhysics = () => {
        if (!pause) {
            updateBall(ball);
        }
        setTimeout(runPhysics, 40);
    };

    const drawBall = (p5: p5, ball: Ball) => {
        const color = ball.isColliding ? 'red' : 'white';
        p5.stroke(color);
        p5.fill(color);
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

    const pushUp = (ball: Ball) => {
        ball.velocity.y += 100;
    };

    const shoot = (ball: Ball, shot: Victor) => {
        ball.velocity.add(shot);
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

        const shotFolder = gui.addFolder('Shot');
        shotFolder.open();
        shotFolder.add(shot, 'x', -100, 100).name('x');
        shotFolder.add(shot, 'y', -100, 100).name('y');
        shotFolder.add({ shoot: () => shoot(ball, shot) }, 'shoot');
    };

    let pause = false;
    const sketch: Sketch = (p5) => {
        p5.setup = () => {
            _p5 = p5;
            p5.createCanvas(900, 600);
            p5.frameRate(settings.render.targetFPS);
            runPhysics();
        };
        p5.draw = () => {
            p5.background(0);
            if (mouseIsPressedOnScreen(p5)) {
                const maxV = settings.physics.maxVelocity;
                ball.position.x = p5.mouseX;
                ball.position.y = p5.height - p5.mouseY;
                ball.velocity.x = 0;
                ball.velocity.y = 0;
            }

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
    <button on:click={() => (pause = !pause)}>{pause ? 'Play' : 'Pause'}</button>
    <button on:click={() => pushUp(ball)}>Push up</button>
    <button on:click={() => (ball.position.y = _p5.height)}>Place on top</button>
</div>
<Chart
    data={velocityHistory}
    type="line"
    lineOptions={{
        hideDots: 1
    }}
    tooltipOptions={{
        formatTooltipY: (d) => d.toFixed(3)
    }}
    axisOptions={{
        xAxisMode: 'tick'
    }}
    bind:this={velocityChart}
/>

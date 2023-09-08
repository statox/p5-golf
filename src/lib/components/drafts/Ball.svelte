<script lang="ts">
    import type p5 from 'p5';
    import P5, { type Sketch } from 'p5-svelte';
    import { onDestroy } from 'svelte';
    import { generateTerrain, drawTerrain } from '$lib/services/terrain';
    import { generateBall, drawBall, setBall } from '$lib/services/ball';
    import { updateBall, drawNormalVector } from '$lib/services/physics';

    let _p5: p5;

    const terrainOptions = {
        terrainLength: 900,
        maxHeight: 150,
        minHeight: 150,
        nbSegments: 1
    };
    let prevTick: number;
    let terrain = generateTerrain(terrainOptions);
    const ball = generateBall({ x: 450, y: 500 });

    const moveBall = (p5: p5) => {
        const { mouseX: x, mouseY: y, width, height } = p5;
        if (x < 0 || x > width || y < 0 || y > height) {
            return;
        }
        const dx = Math.random() * 250;
        const dy = Math.random() * 250;
        setBall(ball, { x, y: height - y, dx: 0, dy: 0 });
    };

    const sketch: Sketch = (p5) => {
        p5.setup = () => {
            _p5 = p5;
            p5.createCanvas(900, 600);
        };
        p5.draw = () => {
            p5.background(0);
            const tick = p5.millis();
            const dt = (tick - (prevTick || tick)) / (1000 / 60) / 10;
            prevTick = tick;
            updateBall(ball, terrain, dt);
            drawTerrain(p5, terrain);
            drawBall(p5, ball);
            drawNormalVector(p5, ball, terrain);
            // p5.frameRate(5);

            if (p5.mouseIsPressed) {
                moveBall(p5);
            }
        };
    };

    onDestroy(() => {
        _p5?.remove();
    });
</script>

<div class="d-flex justify-content-center">
    <P5 {sketch} />
    <button on:click={() => (terrain = generateTerrain(terrainOptions))}>Generate</button>
</div>

<script lang="ts">
    import type p5 from 'p5';
    import P5, { type Sketch } from 'p5-svelte';
    import { onDestroy } from 'svelte';
    import { generateTerrain, drawTerrain } from '../services/terrain';
    import { generateBall, drawBall, updateBall, setBall } from '../services/ball';

    let _p5: p5;

    const terrainOptions = {
        terrainLength: 900,
        maxHeight: 100,
        minHeight: 100,
        nbSegments: 1
    };
    let terrain = generateTerrain(terrainOptions);
    const ball = generateBall({ x: 450, y: 500 });

    const sketch: Sketch = (p5) => {
        p5.setup = () => {
            _p5 = p5;
            p5.createCanvas(900, 600);
        };
        p5.draw = () => {
            p5.background(0);
            updateBall(ball);
            drawTerrain(p5, terrain);
            drawBall(p5, ball);
            // p5.frameRate(2);
        };
        p5.mousePressed = () => {
            const { mouseX: x, mouseY: y, width, height } = p5;
            if (x < 0 || x > width || y < 0 || y > height) {
                return;
            }
            const dx = Math.random() * 500 - 250;
            const dy = Math.random() * 250;
            setBall(ball, { x, y: height - y, dx, dy });
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

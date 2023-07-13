<script lang="ts">
    import type p5 from 'p5';
    import P5, { type Sketch } from 'p5-svelte';
    import { onDestroy } from 'svelte';
    import { generateTerrain, drawTerrain } from '../services/terrain';

    let _p5: p5;

    let terrain = generateTerrain();

    const sketch: Sketch = (p5) => {
        p5.setup = () => {
            _p5 = p5;
            p5.createCanvas(900, 200);
        };
        p5.draw = () => {
            p5.background(0);
            drawTerrain(p5, terrain);
        };
    };

    onDestroy(() => {
        _p5?.remove();
    });
</script>

<span>Hello Game</span>

<div class="d-flex justify-content-center">
    <P5 {sketch} />
    <button on:click={() => (terrain = generateTerrain())}>Generate</button>
</div>

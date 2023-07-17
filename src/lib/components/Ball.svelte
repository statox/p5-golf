<script lang="ts">
    import type p5 from 'p5';
    import P5, { type Sketch } from 'p5-svelte';
    import { onDestroy } from 'svelte';
    import { generateTerrain, drawTerrain } from '../services/terrain';

    let _p5: p5;

    const terrainOptions = {
        terrainLength: 900,
        maxHeight: 100,
        minHeight: 100,
        nbSegments: 1
    };
    let terrain = generateTerrain(terrainOptions);

    const sketch: Sketch = (p5) => {
        p5.setup = () => {
            _p5 = p5;
            p5.createCanvas(900, 600);
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

<div class="d-flex justify-content-center">
    <P5 {sketch} />
    <button on:click={() => (terrain = generateTerrain(terrainOptions))}>Generate</button>
</div>

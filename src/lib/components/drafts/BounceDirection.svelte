<script lang="ts">
    import type p5 from 'p5';
    import P5, { type Sketch } from 'p5-svelte';
    import { onDestroy } from 'svelte';
    import { generateTerrain, drawTerrain, getSegmentAtX } from '$lib/services/terrain';
    import { mouseIsOnScreen } from '$lib/services/p5utils';
    import type { Terrain } from '$lib/types/terrain';
    import { getElevationAtX, getContactSegmentAtX } from '$lib/services/terrain';

    let _p5: p5;

    const terrainOptions = {
        terrainLength: 900,
        maxHeight: 175,
        minHeight: 25,
        nbSegments: 3
    };
    let terrain = generateTerrain(terrainOptions);
    let intersectionPointX = 0;

    const drawIntersection = (p5: p5, terrain: Terrain, intersectionPointX: number) => {
        const segment = getSegmentAtX(terrain, intersectionPointX);
        if (!segment) {
            return;
        }
        p5.strokeWeight(1);

        p5.stroke('red');
        p5.line(intersectionPointX, 0, intersectionPointX, p5.height);
        const y = getElevationAtX(terrain, intersectionPointX) || 0;
        p5.line(0, p5.height - y, p5.width, p5.height - y);

        p5.strokeWeight(3);
        p5.stroke('green');
        const contactSegment = getContactSegmentAtX(terrain, intersectionPointX, 50);
        if (!contactSegment || contactSegment.y1 === undefined || contactSegment.y2 === undefined) {
            return;
        }
        p5.line(
            contactSegment.x1,
            p5.height - contactSegment.y1,
            contactSegment.x2,
            p5.height - contactSegment.y2
        );
    };

    const sketch: Sketch = (p5) => {
        p5.setup = () => {
            _p5 = p5;
            p5.createCanvas(900, 600);
        };
        p5.draw = () => {
            p5.background(0);
            drawTerrain(p5, terrain);

            if (mouseIsOnScreen(p5)) {
                intersectionPointX = p5.mouseX;
            }
            drawIntersection(p5, terrain, intersectionPointX);
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

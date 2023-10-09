<script lang="ts">
    import { createPhysicObjects } from '$lib/engine';
    import { mouseIsPressedOnScreen, screenToWorldScale, worldToScreenScale } from '$lib/services/p5utils';
    import type p5 from 'p5';
    import P5, { type Sketch } from 'p5-svelte';
    import { onDestroy } from 'svelte';
    import Victor from 'victor';

    console.clear();
    let _p5: p5;
    const s1 = createPhysicObjects({
        geometry: {
            type: 'sphere',
            r: 10
        },
        position: new Victor(30, 50),
    });
    const s2 = createPhysicObjects({
        geometry: {
            type: 'sphere',
            r: 10
        },
        position: new Victor(70, 50),
    });
    const SCALE = 6;
    const sketch: Sketch = (p5) => {
        const worldDimensions = new Victor(100, 100)
        const screenDimensions = worldToScreenScale(worldDimensions, SCALE);
        p5.setup = () => {
            _p5 = p5;
            p5.createCanvas(screenDimensions.x, screenDimensions.y);
            p5.noFill();
        };
        p5.draw = () => {
            p5.background(0);

            if (mouseIsPressedOnScreen(p5)) {
                const worldPos = screenToWorldScale(new Victor(p5.mouseX, p5.height - p5.mouseY), SCALE) as Victor;
                if (worldPos.distance(s1.position) <= s1.geometry.r) {
                    s1.position.copy(worldPos);
                } else if (worldPos.distance(s2.position) <= s2.geometry.r) {
                    s2.position.copy(worldPos);
                }
            }

            p5.stroke(255);
            const s1pos = worldToScreenScale(s1.position, SCALE);
            p5.circle(s1pos.x, p5.height - s1pos.y, 2 * s1.geometry.r * SCALE);

            p5.stroke(255);
            const s2pos = worldToScreenScale(s2.position, SCALE);
            p5.circle(s2pos.x, p5.height - s2pos.y, 2 * s2.geometry.r * SCALE);
        };

    };
    onDestroy(() => {
        _p5?.remove();
    });
</script>

<div class="d-flex justify-content-center">
    <P5 {sketch} />
</div>

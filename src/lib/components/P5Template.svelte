<script lang="ts">
    import { createPhysicObjects } from '$lib/engine';
    import type { Sphere, Line } from '$lib/engine/Geometry';
    import { mouseIsPressedOnScreen, screenToWorldScale, worldToScreenScale } from '$lib/services/p5utils';
    import type p5 from 'p5';
    import P5, { type Sketch } from 'p5-svelte';
    import { onDestroy } from 'svelte';
    import Victor from 'victor';

    console.clear();
    let _p5: p5;
    const sphere = createPhysicObjects({
        geometry: {
            type: 'sphere',
            r: 10
        } as Sphere,
        position: new Victor(30, 50),
    });
    const line = createPhysicObjects({
        geometry: {
            type: 'line',
            vector: new Victor(10, 0)
        } as Line,
        position: new Victor(60, 50)
    });

    const SCALE = 6;
    const sketch: Sketch = (p5) => {
        const worldDimensions = new Victor(100, 100)
        const screenDimensions = worldToScreenScale(worldDimensions, SCALE) as Victor;
        p5.setup = () => {
            _p5 = p5;
            p5.createCanvas(screenDimensions.x, screenDimensions.y);
            p5.noFill();
        };

        let selected: string | undefined;
        p5.draw = () => {
            p5.background(0);

            if (!mouseIsPressedOnScreen(p5)) {
                selected = undefined;
            } else {
                const worldPos = screenToWorldScale(new Victor(p5.mouseX, p5.height - p5.mouseY), SCALE) as Victor;

                if (!selected) {
                    if (worldPos.distance(sphere.position) <= (sphere.geometry as Sphere).r) {
                        selected = 'sphere';
                    } else if (worldPos.distance(line.position) <= 6) {
                        selected = 'linestart';
                    } else if (worldPos.distance((line.geometry as Line).vector.clone().add(line.position)) <= 6) {
                        selected = 'lineend';
                    }
                }

                if (selected === 'sphere') {
                    sphere.position.copy(worldPos);
                } else if (selected === 'linestart') {
                    line.position.copy(worldPos);
                } else if (selected === 'lineend') {
                    const diff = worldPos.clone().subtract(line.position);
                    (line.geometry as Line).vector.copy(diff);
                }
            }

            p5.stroke(255);
            const spherepos = worldToScreenScale(sphere.position, SCALE) as Victor;
            p5.circle(spherepos.x, p5.height - spherepos.y, 2 * (sphere.geometry as Sphere).r * SCALE);

            p5.stroke(255);
            const {x, y} = worldToScreenScale(line.position, SCALE) as Victor;
            const linevec = worldToScreenScale((line.geometry as Line).vector, SCALE) as Victor;
            p5.line(x, p5.height - y, x + linevec.x,  p5.height - (y + linevec.y));
        };

    };
    onDestroy(() => {
        _p5?.remove();
    });
</script>

<div class="d-flex justify-content-center">
    <P5 {sketch} />
</div>

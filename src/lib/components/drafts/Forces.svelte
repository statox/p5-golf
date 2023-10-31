<script lang="ts">
    import { World, createPhysicObjects } from '$lib/engine';
    import type { Sphere, Line } from '$lib/engine/Geometry';
    import { drawWorldDebug, mouseIsPressedOnScreen, screenToWorldScale, worldToScreenScale } from '$lib/services/p5utils';
    import type p5 from 'p5';
    import P5, { type Sketch } from 'p5-svelte';
    import { onDestroy } from 'svelte';
    import Victor from 'victor';

    console.clear();
    let _p5: p5;
    const s1 = createPhysicObjects({
        geometry: {
            type: 'sphere',
            r: 5
        } as Sphere,
        position: new Victor(10, 90),
        velocity: new Victor(20, 0)
    });
    const s2 = createPhysicObjects({
        geometry: {
            type: 'sphere',
            r: 5
        } as Sphere,
        position: new Victor(50, 50)
    });

    const SCALE = 6;
    let world: World;;
    const sketch: Sketch = (p5) => {
        const worldDimensions = new Victor(100, 100)
        const screenDimensions = worldToScreenScale(worldDimensions, SCALE) as Victor;
        p5.setup = () => {
            _p5 = p5;
            p5.createCanvas(screenDimensions.x, screenDimensions.y);
            p5.noFill();
            world = new World({
                enableGravity: false,
                enableCollisions: false,
                dimensions: worldDimensions,
                drag: 0
            });

            world.addObjects([s1, s2]);
        };

        let selected: string | undefined;
        p5.draw = () => {
            p5.background(0);
            world.step();

            if (!mouseIsPressedOnScreen(p5)) {
                selected = undefined;
            } else {
                const worldPos = screenToWorldScale(new Victor(p5.mouseX, p5.height - p5.mouseY), SCALE) as Victor;

                if (!selected) {
                    if (worldPos.distance(s1.position) <= (s1.geometry as Sphere).r) {
                        selected = 's1';
                    } else if (worldPos.distance(s2.position) <= (s2.geometry as Sphere).r) {
                        selected = 's2';
                    }
                }

                if (selected === 's1') {
                    s1.position.copy(worldPos);
                } else if (selected === 's2') {
                    s2.position.copy(worldPos);
                }
            }

            drawWorldDebug(p5, world);
        };

    };
    onDestroy(() => {
        _p5?.remove();
    });
</script>

<div class="d-flex justify-content-center">
    <P5 {sketch} />
</div>


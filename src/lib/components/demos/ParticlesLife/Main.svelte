<script lang="ts">
    import Victor from 'victor';
    import type p5 from 'p5';
    import P5, { type Sketch } from 'p5-svelte';
    import { onDestroy, onMount } from 'svelte';
    import type { Sphere } from '$lib/engine/Geometry';
    import { World, createPhysicObjects, type PhysicObject } from '$lib/engine';
    import { dragAndDropObject, drawWorld, drawWorldDebug, worldToScreenScale } from '$lib/services/p5utils';
    import { initGUI, destroyGUI } from './gui';
    import type { Settings } from './gui';
    import { lifeStep } from './life';

    console.clear();
    let _p5: p5;

    const SCALE = 1;
    let world: World;
    const worldDimensions = new Victor(800, 800)

    const resetWorld = (worldDimensions: Victor) => {
        world = new World({
            enableGravity: false,
            enableCollisions: false,
            enableOverlaps: settings.world.allowOverlaps,
            dimensions: worldDimensions,
            drag: 0.01,
            bordersMode: 'wrap'
        });

        const objects: PhysicObject[] = [];
        for (let i=0; i< settings.world.nbParticles; i++) {
            objects.push(createPhysicObjects({
                geometry: {
                    type: 'sphere',
                    r: 0.5
                } as Sphere,

                position: new Victor(Math.random() * worldDimensions.x, Math.random() * worldDimensions.y)
            }));
        }
        world.addObjects(objects);
    };

    const sketch: Sketch = (p5) => {
        const screenDimensions = worldToScreenScale(worldDimensions, SCALE) as Victor;
        p5.setup = () => {
            _p5 = p5;
            p5.createCanvas(screenDimensions.x, screenDimensions.y);
            p5.noFill();
        };

        const selectionState = { selectedId: undefined, selectedPart: undefined };
        p5.draw = () => {
            p5.background(0);
            lifeStep(world, settings);
            world.step();

            dragAndDropObject(p5, world, selectionState);

            if (!settings.render.showPerception && !settings.render.showVelocity) {
                drawWorld(p5, world);
            } else {
                drawWorldDebug(p5, world, settings.render);
                drawWorldMoreDebug(p5, world);
            }
        };

    };

    const drawWorldMoreDebug = (p5: p5, world: World) => {
        if (settings.render.showPerception) {
            const attractionR = worldToScreenScale(settings.physics.attractionRadius, SCALE) as number;
            const repulsionR = worldToScreenScale(settings.physics.repulsionRadius, SCALE) as number;
            p5.noFill();
            for (const o of world.objects) {
                const worldPos = worldToScreenScale(o.position, SCALE) as Victor;
                p5.stroke(0, 255, 0, 50);
                p5.circle(worldPos.x, p5.height - worldPos.y, attractionR)
                p5.stroke(255,0, 0, 50);
                p5.circle(worldPos.x, p5.height - worldPos.y, repulsionR)
            }
        }
    };

    let settings: Settings;
    onMount(async () => {
        settings = await initGUI(() => resetWorld(world.dimensions));
        resetWorld(worldDimensions);
    });
    onDestroy(() => {
        destroyGUI();
        _p5?.remove();
    });
</script>

<div class="d-flex justify-content-center">
    <P5 {sketch} />
</div>

<script lang="ts">
    import Victor from 'victor';
    import type p5 from 'p5';
    import P5, { type Sketch } from 'p5-svelte';
    import { onDestroy, onMount } from 'svelte';
    import type { Sphere } from '$lib/engine/Geometry';
    import { World, createPhysicObjects, type PhysicObject } from '$lib/engine';
    import { dragAndDropObject, drawWorldDebug, worldToScreenScale } from '$lib/services/p5utils';
    import { initGUI, destroyGUI } from './gui';
    import type { Settings } from './gui';

    console.clear();
    let _p5: p5;
    const objects: PhysicObject[] = [];
    for (let i=0; i<200; i++) {
        objects.push(createPhysicObjects({
            geometry: {
                type: 'sphere',
                r: 0.5
            } as Sphere,
            position: new Victor(50, 50)
        }));
    }

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
                enableOverlaps: true,
                dimensions: worldDimensions
            });

            world.addObjects(objects);
        };

        const selectionState = { selectedId: undefined, selectedPart: undefined };
        const MAX_VEL = 20;
        p5.draw = () => {
            p5.background(0);
            for (const o of world.objects) {
                if (o.position.x < 0 || o.position.y < 0 || o.position.x > worldDimensions.x || o.position.y > worldDimensions.y) {
                    o.position = new Victor(Math.random() * worldDimensions.x, Math.random() * worldDimensions.y);
                    o.velocity = new Victor(Math.random() * 20 - 10, Math.random() * 20 - 10);
                }
                if (o.velocity.length() > MAX_VEL) {
                    o.velocity.normalize().multiplyScalar(MAX_VEL);
                }
            }
            // randomWobble();
            for (let i=0; i<objects.length; i++) {
                for (let j=0; j<objects.length; j++) {
                    if (i === j) {
                        continue;
                    }
                    const s1 = objects[i];
                    const s2 = objects[j];

                    repulsion(s1, s2);
                    attraction(s1, s2);
                }
            }
            world.step();

            dragAndDropObject(p5, world, selectionState);
            drawWorldDebug(p5, world);
        };

    };

    const randomWobble = (o: PhysicObject) => {
        const x = _p5.noise(_p5.frameCount);
        const y = _p5.noise(_p5.frameCount + 1231023);
        const diff = new Victor(x * 2 -1, y * 2 -1);
        o.position.add(diff);
    }

    const attraction = (o1: PhysicObject, o2: PhysicObject) => {
        const F = o2.position.clone().subtract(o1.position);
        const d = o2.position.distance(o1.position);
        const G = settings.physics.attraction;;

        const Fmag = G / (d*d);
        F.norm().multiplyScalar(Fmag);
        world.applyForce(o1, F);
    };

    const repulsion = (o1: PhysicObject, o2: PhysicObject) => {
        const d = o2.position.distance(o1.position);
        if (d > 100) {
            return;
        }
        const F = o1.position.clone().subtract(o2.position);
        const G = settings.physics.repulsion;

        const Fmag = G / (d*d);
        F.norm().multiplyScalar(Fmag);
        world.applyForce(o1, F);
    };

    let settings: Settings;
    onMount(async () => {
        settings = await initGUI();
    });
    onDestroy(() => {
        destroyGUI();
        _p5?.remove();
    });
</script>

<div class="d-flex justify-content-center">
    <P5 {sketch} />
</div>

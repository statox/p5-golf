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
            drag: 0.01
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
        // const MAX_VEL = 50;
        p5.draw = () => {
            p5.background(0);
            for (const o of world.objects) {
                // reset out of bound particles
                // if (o.position.x < 0 || o.position.y < 0 || o.position.x > worldDimensions.x || o.position.y > worldDimensions.y) {
                //     o.position = new Victor(Math.random() * worldDimensions.x, Math.random() * worldDimensions.y);
                //     o.velocity = new Victor(0, 0);
                // }

                // Limit velocity
                // if (o.velocity.length() > MAX_VEL) {
                //     o.velocity.normalize().multiplyScalar(MAX_VEL);
                // }
            }
            // randomWobble();
            for (let i=0; i<world.objects.length; i++) {
                for (let j=0; j<world.objects.length; j++) {
                    if (i === j) {
                        continue;
                    }
                    const s1 = world.objects[i];
                    const s2 = world.objects[j];

                    repulsion(s1, s2);
                    attraction(s1, s2);
                }
            }
            world.step();

            dragAndDropObject(p5, world, selectionState);
            // drawWorld(p5, world);
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

    // const randomWobble = (o: PhysicObject) => {
    //     const x = _p5.noise(_p5.frameCount);
    //     const y = _p5.noise(_p5.frameCount + 1231023);
    //     const diff = new Victor(x * 2 -1, y * 2 -1);
    //     o.position.add(diff);
    // }

    const attraction = (o1: PhysicObject, o2: PhysicObject) => {
        const d = o2.position.distance(o1.position);
        if (d > settings.physics.attractionRadius) {
            return;
        }
        const F = o2.position.clone().subtract(o1.position);
        const G = settings.physics.attraction;;

        const Fmag = G / (d*d);
        F.norm().multiplyScalar(Fmag);
        world.applyForce(o1, F);
        world.applyForce(o2, F.clone().multiplyScalar(-1));
    };

    const repulsion = (o1: PhysicObject, o2: PhysicObject) => {
        const d = o2.position.distance(o1.position);
        if (d > settings.physics.repulsionRadius) {
            return;
        }
        const F = o1.position.clone().subtract(o2.position);
        const G = settings.physics.repulsion;

        const Fmag = G / (d*d);
        F.norm().multiplyScalar(Fmag);
        world.applyForce(o1, F);
        world.applyForce(o2, F.clone().multiplyScalar(-1));
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

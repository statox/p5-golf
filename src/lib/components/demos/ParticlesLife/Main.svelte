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
    import { lifeStep } from './life';
    import type { ParticleType, TypesData } from './life';

    console.clear();
    let _p5: p5;

    const SCALE = 1;
    let world: World;
    const worldDimensions = new Victor(800, 800)

    const particlesType: ParticleType = {};
    const typesData: TypesData[] = [
        {
            color: '#fc55ae',
            reactions: {
                0: 0,
                1: 50000,
                2: 0,
                3: 0
            }
        },
        {
            color: '#eab410',
            reactions: {
                0: -25000,
                1: 25000,
                2: 0,
                3: 0
            }
        },
        {
            color: '#40f78c',
            reactions: {
                0: -10000,
                1: -10000,
                2: -10000,
                3: -10000
            }
        },
        {
            color: '#406ef7',
            reactions: {
                0: 50000,
                1: -10000,
                2: -10000,
                3: -10000
            }
        }
    ];

    const resetWorld = (worldDimensions: Victor) => {
        world = new World({
            enableGravity: false,
            enableCollisions: false,
            enableOverlaps: settings.world.allowOverlaps,
            dimensions: worldDimensions,
            drag: 0.01,
            bordersMode: 'none'
        });

        const objects: PhysicObject[] = [];
        for (let i=0; i< settings.world.nbParticles; i++) {
            const o = createPhysicObjects({
                geometry: {
                    type: 'sphere',
                    r: 1
                } as Sphere,

                position: new Victor(Math.random() * worldDimensions.x, Math.random() * worldDimensions.y)
            });

            objects.push(o);
            const worldObject = world.addObject(o);
            const id = worldObject.data.id;

            particlesType[id] =  Math.floor(Math.random() * typesData.length);
        }
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
            lifeStep(world, typesData, particlesType);
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

    export const drawWorld = (p5: p5, world: World) => {
        const scale = p5.width / world.dimensions.x;
        for (const o of world.objects) {
            const type = particlesType[o.data.id];
            const { color } = typesData[type];
            p5.stroke(color);

            const x = p5.map(o.position.x, 0, world.dimensions.x, 0, p5.width);
            const y = p5.map(o.position.y, 0, world.dimensions.y, p5.height, 0);

            if (o.geometry.type === 'sphere') {
                const scaledDiameter = worldToScreenScale(o.geometry.r * 2, scale) as number;
                p5.strokeWeight(scaledDiameter * 2);
                p5.point(x, y);
            }
        }
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

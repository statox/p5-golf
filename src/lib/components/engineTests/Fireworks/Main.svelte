<script lang="ts">
    import { World, createPhysicObjects } from '$lib/engine';
    import { drawWorld, worldToScreenScale } from '$lib/services/p5utils';
    import type p5 from 'p5';
    import P5, { type Sketch } from 'p5-svelte';
    import { onDestroy } from 'svelte';
    import Victor from 'victor';

    console.clear();
    let _p5: p5;

    const addParticle = (world: World) => {
        const particle = {
            ...createPhysicObjects({
                geometry: {
                    type: 'sphere',
                    r: 1
                },
                position: new Victor(world.dimensions.x / 2, 10),
                velocity: new Victor(Math.random() * 30 - 15, 30 + Math.random() * 20)
            }),
            age: 0
        };
        world.addObject(particle);
    };
    let world: World;
    const SCALE = 6;
    const sketch: Sketch = (p5) => {
        const worldDimensions = new Victor(100, 100)
        const screenDimensions = worldToScreenScale(worldDimensions, SCALE) as Victor;
        p5.setup = () => {
            _p5 = p5;
            p5.createCanvas(screenDimensions.x, screenDimensions.y);
            p5.noFill();

            world = new World({
                dimensions: worldDimensions,
                enableGravity: true,
                enableCollisions: false
            });
            addParticle(world);
        };

        p5.draw = () => {
            p5.background(0);

            if (p5.frameCount % 1 === 0 && world.objects.length < 300) {
                addParticle(world);
            }
            world.step();
            world.objects.forEach(o => {
                if (o.data.age > 800) {
                    world.removeObject(o);
                }
            });

            console.log('nb objects', world.objects.length);
            drawWorld(p5, world);
        };

    };
    onDestroy(() => {
        _p5?.remove();
    });
</script>

<div class="d-flex justify-content-center">
    <P5 {sketch} />
</div>


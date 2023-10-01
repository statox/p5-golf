<script lang="ts">
    import Victor from 'victor';
    import type p5 from 'p5';
    import P5, { type Sketch } from 'p5-svelte';
    import { World, type PhysicObject } from '$lib/engine';
    import { onDestroy } from 'svelte';
    import { drawWorld, mouseIsOnScreen } from '$lib/services/p5utils';
    import { makeObjects } from './worldUtils';

    console.clear();

    let world: World;

    let sphere: PhysicObject;
    let sphereInitialPosition: Victor;
    const onHitTarget = () => {
        setTimeout(resetWorld, 1000);
    };
    const resetWorld = () => {
        world = new World({
            dimensions: new Victor(15, 15),
            reporter: () => {},
            enableGravity: true
        });

        const objects = makeObjects(world.dimensions, onHitTarget);
        objects.sphere.fixed = true;
        sphere = objects.sphere;
        sphereInitialPosition = sphere.position.clone();
        for (const object of objects.objects) {
            world.addObject(object);
        }
    };

    const worldToScreenScale = (value: number | Victor) => {
        if (typeof value === 'number') {
            return value * SCALE;
        }

        return (value as Victor).clone().multiplyScalar(SCALE);
    };

    const SCALE = 60;
    let _p5: p5;
    const sketch: Sketch = (p5) => {
        p5.setup = () => {
            _p5 = p5;
            resetWorld();
            const screenDim = worldToScreenScale(world.dimensions) as Victor;
            p5.createCanvas(screenDim.x, screenDim.y);
            p5.background(0);
            p5.fill(255);
            p5.stroke(255);
            resetWorld();
        };

        p5.draw = () => {
            p5.background(0);
            world.step();
            drawWorld(p5, world);
            drawInputForce(p5);
        };

        let pressPosition: Victor | undefined;
        p5.mousePressed = () => {
            if (!mouseIsOnScreen(p5)) {
                return;
            }
            pressPosition = new Victor(p5.width, p5.height).divideScalar(2);
            sphere.position.copy(sphereInitialPosition);
            sphere.velocity.zero();
            sphere.fixed = true;
        };
        p5.mouseReleased = () => {
            if (!mouseIsOnScreen(p5) || !pressPosition) {
                return;
            }

            const origin = pressPosition;
            const dest = new Victor(p5.mouseX, p5.mouseY);
            const vel = dest.clone().subtract(origin).multiplyScalar(20);
            vel.x *= -1;

            world.applyForce(sphere, vel);
            sphere.fixed = false;
            pressPosition = undefined;
        };
        const drawInputForce = (p5: p5) => {
            if (!sphere.fixed || !pressPosition) {
                return;
            }
            p5.stroke('red');
            p5.strokeWeight(1);
            p5.noFill();
            p5.circle(pressPosition.x, pressPosition.y, 15);
            p5.stroke('blue');
            p5.strokeWeight(2);

            const origin = pressPosition;
            const dest = new Victor(p5.mouseX, p5.mouseY);
            const vel = dest.clone().subtract(origin);

            p5.line(origin.x, origin.y, origin.x + vel.x, origin.y + vel.y);

            const sphereScreenPos = worldToScreenScale(sphere.position) as Victor;
            vel.x *= -1;
            vel.y *= -1;
            p5.line(sphereScreenPos.x, p5.height - sphereScreenPos.y, sphereScreenPos.x + vel.x, p5.height - sphereScreenPos.y + vel.y);
        };
    };

    onDestroy(() => {
        _p5?.remove();
    });
</script>

<div class="d-flex justify-content-center">
    <P5 {sketch} />
</div>

<div>
    <button on:click={resetWorld}>Reset</button>
</div>

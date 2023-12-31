<script lang="ts">
    import Victor from 'victor';
    import type p5 from 'p5';
    import P5, { type Sketch } from 'p5-svelte';
    import { World, type PhysicObject, createPhysicObjects } from '$lib/engine';
    import { onDestroy } from 'svelte';
    import { drawWorld, mouseIsOnScreen, mouseIsPressedOnScreen } from '$lib/services/p5utils';
    import EngineSettings from '$lib/components/engine/EngineSettings.svelte';
    import Shooter from '$lib/components/engine/Shooter.svelte';
    import { makeObjects } from './worldUtils';

    console.clear();

    let pause = false;
    let objectsParams = {
        nbBalls: 5,
        rBalls: 0.2
    };
    let world: World;

    let sphere: PhysicObject;
    const resetWorld = () => {
        const gravity = world?.gravityEnabled ?? true;
        world = new World({
            dimensions: new Victor(15, 15),
            reporter: () => {},
            enableGravity: gravity
        });

        const objects = makeObjects(objectsParams);
        sphere = objects.sphere;
        for (const object of objects.objects) {
            world.addObject(object);
        }
    };
    const addBall = ()=> {
        const s = createPhysicObjects({
            geometry: {
                type: 'sphere',
                r: objectsParams.rBalls
            },
            position: new Victor(7, 7),
            velocity: new Victor(0, 0)
        });
        world.addObject(s);
    };

    const worldToScreenScale = (value: number | Victor) => {
        if (typeof value === 'number') {
            return value * SCALE;
        }

        return (value as Victor).clone().multiplyScalar(SCALE);
    };
    const screenToWorldScale = (value: number | Victor) => {
        if (typeof value === 'number') {
            return value / SCALE;
        }

        return (value as Victor).clone().divideScalar(SCALE);
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
            if (mouseIsPressedOnScreen(p5)) {
                sphere.fixed = true;
            } else {
                sphere.fixed = false;
            }
            if (!pause) {
                world.step();
            }
            drawWorld(p5, world);
            drawInputForce(p5);
        };

        let pressPosition: Victor | undefined;
        p5.mousePressed = () => {
            if (!mouseIsOnScreen(p5)) {
                return;
            }
            pressPosition = screenToWorldScale(
                new Victor(p5.mouseX, p5.height - p5.mouseY)
            ) as Victor;
            sphere.position.copy(pressPosition);
        };
        p5.mouseReleased = () => {
            if (!mouseIsOnScreen(p5)) {
                return;
            }
            if (!pressPosition) {
                return;
            }
            const pos = screenToWorldScale(new Victor(p5.mouseX, p5.height - p5.mouseY)) as Victor;
            const vel = pressPosition.subtract(pos).multiplyScalar(3);
            pressPosition = undefined;
            sphere.velocity.copy(vel);
        };
        const drawInputForce = (p5: p5) => {
            if (!pressPosition) {
                return;
            }

            p5.stroke('blue');
            p5.strokeWeight(2);

            const pressPosScreen = worldToScreenScale(pressPosition) as Victor;
            p5.line(pressPosScreen.x, p5.height -pressPosScreen.y, p5.mouseX, p5.mouseY);
        };
    };

    const shoot = (shoot: Victor) => {
        shoot.multiplyScalar(10000);
        world.applyForce(sphere, shoot);
    };

    onDestroy(() => {
        _p5?.remove();
    });
</script>

<div class="d-flex justify-content-center">
    <P5 {sketch} />
</div>

<div>
    <button on:click={() => pause = !pause}>{pause ? 'Play' : 'Pause'}</button>
    <button on:click={resetWorld}>Reset</button>
    <button on:click={addBall}>Add ball</button>
</div>

<Shooter onShoot={shoot} />
<EngineSettings {world} />

<table>
    <tbody>
        <tr>
            <th>Number of balls</th>
            <td>
                <input type="number" min=1 on:change={resetWorld} bind:value={objectsParams.nbBalls}/>
            </td>
        </tr>
        <tr>
            <th>Balls radius</th>
            <td>
                <input type="number" min=1 on:change={resetWorld} bind:value={objectsParams.rBalls}/>
            </td>
        </tr>
    </tbody>
</table>



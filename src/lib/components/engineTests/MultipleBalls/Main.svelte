<script lang="ts">
    import Victor from 'victor';
    import type p5 from 'p5';
    import P5, { type Sketch } from 'p5-svelte';
    import { World, createPhysicObjects } from '$lib/engine';
    import { onDestroy } from 'svelte';
    import EngineSettings from '$lib/components/engine/EngineSettings.svelte';
    import { makeObjects } from './worldUtils';
    import { drawWorld } from '$lib/services/p5utils';

    console.clear();

    let pauseOnCollision = false;
    let pause = false;
    let observedData = {
        t: '0',
        frameTime: '0',
    };
    let world: World;

    const resetWorld = () => {
        clearInterval(ballInterval);
        ballInterval = setInterval(addBall, 100);
        world = new World({
            dimensions: new Victor(15, 15),
            reporter: (reportedData: any) => {
                observedData.t = reportedData?.t?.toFixed(1);
                observedData.frameTime = reportedData.frameTime.toFixed(2);
                observedData = observedData;
            },
            enableGravity: true
        });

        const objects = makeObjects();
        for (const object of objects.objects) {
            world.addObject(object);
        }
    };

    const addBall = () => {
        console.log('add ball');
        const x = Math.random() * world.dimensions.x;
        const y = Math.random() * world.dimensions.y;
        const vx = -5 + Math.random() * 10;
        const vy = -5 + Math.random() * 10;
        const sphere = createPhysicObjects({
            geometry: {
                type: 'sphere',
                r: 0.1
            },
            position: new Victor(x, y),
            velocity: new Victor(vx, vy)
        });
        world.addObject(sphere);
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
    let ballInterval: NodeJS.Timer | undefined;
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
            if (!pause) {
                world.step();
            }
            drawWorld(p5, world);
        };
    };

    onDestroy(() => {
        _p5?.remove();
        clearInterval(ballInterval);
    });
</script>

<div class="d-flex justify-content-center">
    <P5 {sketch} />
</div>

<div>
    <button on:click={() => pauseOnCollision = !pauseOnCollision}>{pauseOnCollision? 'Disable' : 'Enable'} pause on collision</button>
    <button on:click={() => pause = !pause}>{pause ? 'Play' : 'Pause'}</button>
    <button on:click={resetWorld}>Reset</button>
</div>

<EngineSettings {world} />

<table>
    <tbody>
        <tr>
            <th>Simulation time/Frame duration</th>
            <td>
                {observedData.t}
            </td>
            <td>
                {observedData.frameTime}
            </td>
        </tr>
    </tbody>
</table>


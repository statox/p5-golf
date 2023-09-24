<script lang="ts">
    import Victor from 'victor';
    import type p5 from 'p5';
    import P5, { type Sketch } from 'p5-svelte';
    import { World, type PhysicObject } from '$lib/engine';
    import { onDestroy } from 'svelte';
    import { mouseIsOnScreen, mouseIsPressedOnScreen } from '$lib/services/p5utils';
    import EngineSettings from '$lib/components/engine/EngineSettings.svelte';
    import { makeObjects } from './worldUtils';

    console.clear();

    let pauseOnCollision = false;
    let pause = false;
    let observedData = {
        t: '0',
        frameTime: '0',
        spherePos: new Victor(0, 0),
        sphereVel: new Victor(0, 0),
        ballIsColliding: false
    };
    let world: World;

    let sphere: PhysicObject;
    const resetWorld = () => {
        world = new World({
            dimensions: new Victor(15, 15),
            reporter: (reportedData: any) => {
                observedData.t = reportedData?.t?.toFixed(1);
                observedData.spherePos.copy(sphere.position).unfloat();
                observedData.sphereVel.copy(sphere.velocity).unfloat();
                observedData.frameTime = reportedData.frameTime.toFixed(2);
                observedData = observedData;
                observedData.ballIsColliding = sphere.data.isColliding;

                if (pauseOnCollision && sphere.data.isColliding && !pause) {
                    pause = true;
                }
            },
            enableGravity: true
        });

        const objects = makeObjects();
        sphere = objects.sphere;
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
    const screenToWorldScale = (value: number | Victor) => {
        if (typeof value === 'number') {
            return value / SCALE;
        }

        return (value as Victor).clone().divideScalar(SCALE);
    };

    const drawWorld = (p5: p5, world: World) => {
        for (const o of world.objects) {
            p5.stroke(o.data.isColliding ? 'red' : 'white');

            const x = p5.map(o.position.x, 0, world.dimensions.x, 0, p5.width);
            const y = p5.map(o.position.y, 0, world.dimensions.y, p5.height, 0);
            if (o.geometry.type === 'sphere') {
                const scaledDiameter = worldToScreenScale(o.geometry.r * 2) as number;
                p5.strokeWeight(scaledDiameter);
                p5.point(x, y);
            }

            if (o.geometry.type === 'line') {
                const x1 = x + p5.map(o.geometry.vector.x, 0, world.dimensions.x, 0, p5.width);
                const y1 = y - p5.map(o.geometry.vector.y, 0, world.dimensions.y, 0, p5.height);
                p5.strokeWeight(2);
                p5.line(x, y, x1, y1);
            }
        }
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

    onDestroy(() => {
        _p5?.remove();
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
        <tr>
            <th>Sphere position</th>
            <td>
                {observedData.spherePos.x.toFixed(2)}
            </td>
            <td>
                {observedData.spherePos.y.toFixed(2)}
            </td>
        <tr>
            <th>Sphere velocity</th>
            <td>
                {observedData.sphereVel.x.toFixed(2)}
            </td>
            <td>
                {observedData.sphereVel.y.toFixed(2)}
            </td>
        </tr>
    </tbody>
</table>


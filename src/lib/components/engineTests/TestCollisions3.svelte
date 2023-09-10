<script lang="ts">
    import Victor from 'victor';
    import type p5 from 'p5';
    import P5, { type Sketch } from 'p5-svelte';
    import { World, createPhysicObjects, type PhysicObject } from '$lib/engine';
    import { onDestroy } from 'svelte';
    import { mouseIsOnScreen, mouseIsPressedOnScreen } from '$lib/services/p5utils';

    console.clear();

    const world = new World({
        reporter: () => {
            return;
        },
        enableGravity: true
    });

    let sphere: PhysicObject;
    const resetWorld = () => {
        while (world.objects.length) world.objects.pop();
        const bottom = createPhysicObjects({
            geometry: {
                type: 'line',
                vector: new Victor(100, 0)
            },
            position: new Victor(0, 0),
            fixed: true
        });
        world.addObject(bottom);
        const top = createPhysicObjects({
            geometry: {
                type: 'line',
                vector: new Victor(100, 0)
            },
            position: new Victor(0, 100),
            fixed: true
        });
        world.addObject(top);
        const left = createPhysicObjects({
            geometry: {
                type: 'line',
                vector: new Victor(0, 100)
            },
            position: new Victor(0, 0),
            fixed: true
        });
        world.addObject(left);
        const right = createPhysicObjects({
            geometry: {
                type: 'line',
                vector: new Victor(0, 100)
            },
            position: new Victor(100, 0),
            fixed: true
        });
        world.addObject(right);
        const diag = createPhysicObjects({
            geometry: {
                type: 'line',
                vector: new Victor(50, 50)
            },
            position: new Victor(20, 10),
            fixed: true
        });
        world.addObject(diag);
        sphere = createPhysicObjects({
            geometry: {
                type: 'sphere',
                r: 2
            },
            position: new Victor(20, 50),
            velocity: new Victor(Math.random() * 5 - 2.5, Math.random() * 20)
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

    const SCALE = 6;
    let _p5: p5;
    const sketch: Sketch = (p5) => {
        p5.setup = () => {
            _p5 = p5;
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
                const pos = screenToWorldScale(
                    new Victor(p5.mouseX, p5.height - p5.mouseY)
                ) as Victor;
                sphere.position.copy(pos);
            } else {
                sphere.fixed = false;
            }
            world.step();
            drawWorld(p5, world);
        };

        let pressPosition: Victor;
        p5.mousePressed = () => {
            if (!mouseIsOnScreen(p5)) {
                return;
            }
            pressPosition = screenToWorldScale(
                new Victor(p5.mouseX, p5.height - p5.mouseY)
            ) as Victor;
        };
        p5.mouseReleased = () => {
            if (!mouseIsOnScreen(p5)) {
                return;
            }
            const pos = screenToWorldScale(new Victor(p5.mouseX, p5.height - p5.mouseY)) as Victor;
            const vel = pressPosition.subtract(pos);
            sphere.position.copy(pos);
            sphere.velocity.copy(vel);
        };
    };

    onDestroy(() => {
        _p5?.remove();
    });
</script>

<div class="d-flex justify-content-center">
    <P5 {sketch} />
</div>

<table>
    <tbody>
        <tr>
            <th>Gravity</th>
            <td>
                <button on:click={() => world.toggleGravity()}> Toggle </button>
            </td>
        </tr>
    </tbody>
</table>

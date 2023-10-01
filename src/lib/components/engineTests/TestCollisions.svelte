<script lang="ts">
    import Victor from 'victor';
    import type p5 from 'p5';
    import P5, { type Sketch } from 'p5-svelte';
    import { World, createPhysicObjects, type PhysicObject } from '$lib/engine';
    import { onDestroy } from 'svelte';

    console.clear();

    let history: any[] = [];
    const SCALE = 6;
    const reporter = (world: World) => {
        const lastObject = world.objects[world.objects.length - 1];
        const pos = lastObject.position.clone().toFixed(2);
        const vel = lastObject.velocity.clone().toFixed(2);
        history.push(`${world.t.toFixed(2)} - pos: ${pos} - vel: ${vel}`);
        if (history.length > 50) {
            history.shift();
        }
        history = history;
    };

    const world = new World({ reporter, enableGravity: true });
    let sphere: PhysicObject;
    let wall: PhysicObject;

    const addBallToWorld = () => {
        while (world.objects.length) world.objects.pop();
        wall = createPhysicObjects({
            geometry: {
                type: 'line',
                vector: new Victor(40, 40)
            },
            position: new Victor(30, 30),
            fixed: true
        });
        world.addObject(wall);
        sphere = createPhysicObjects({
            geometry: {
                type: 'sphere',
                r: 10
            },
            position: new Victor(20, 50),
            velocity: new Victor(2.5, 2.5),
            fixed: true
        });
        world.addObject(sphere);
    };

    let _p5: p5;
    const sketch: Sketch = (p5) => {
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
        p5.setup = () => {
            _p5 = p5;
            const screenDim = worldToScreenScale(world.dimensions) as Victor;
            p5.createCanvas(screenDim.x, screenDim.y);
            p5.background(0);
            p5.fill(255);
            p5.stroke(255);
            addBallToWorld();
        };

        let selected: string | undefined;
        p5.draw = () => {
            p5.background(0);
            world.step();

            if (p5.mouseIsPressed) {
                const pos = screenToWorldScale(
                    new Victor(p5.mouseX, p5.height - p5.mouseY)
                ) as Victor;

                if (!selected) {
                    if (pos.distance(sphere.position) < 2) {
                        selected = 'sphere';
                    } else if (pos.distance(wall.position) < 2) {
                        selected = 'wallstart';
                    } else if (pos.distance(wall.geometry.vector.clone().add(wall.position)) < 2) {
                        selected = 'wallend';
                    }
                }

                if (selected === 'sphere') {
                    sphere.position.copy(pos);
                }
                if (selected === 'wallstart') {
                    wall.position.copy(pos);
                }
                if (selected === 'wallend') {
                    const diff = pos.clone().subtract(wall.position);
                    wall.geometry.vector.copy(diff);
                }
            } else {
                selected = undefined;
            }

            for (const o of world.objects) {
                p5.stroke(sphere.data.isColliding ? 'red' : 'white');

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
    };

    onDestroy(() => {
        _p5?.remove();
    });
</script>

<div class="d-flex justify-content-center">
    <P5 {sketch} />
</div>

<p>{history[history.length - 1]}</p>

<button on:click={addBallToWorld}>New ball</button>

<script lang="ts">
    import Victor from 'victor';
    import type p5 from 'p5';
    import P5, { type Sketch } from 'p5-svelte';
    import { World, applyForce, createPhysicObjects } from '$lib/engine';
    import { onDestroy } from 'svelte';

    console.clear();

    let history: any[] = [];
    const reporter = (world: World) => {
        const lastObject = world.objects[world.objects.length - 1];
        const pos = lastObject.position.clone().toFixed(1);
        const vel = lastObject.velocity.clone().toFixed(1);
        history.push(`${world.t} - pos: ${pos} - vel: ${vel}`);
        if (history.length > 50) {
            history.shift();
        }
        history = history;
    };

    const world = new World({ reporter, enableGravity: true });

    const addBallToWorld = () => {
        while (world.objects.length) world.objects.pop();
        for (let _ = 0; _ < 1; _++) {
            const o = createPhysicObjects();
            o.position.x = 50;
            o.position.y = 50;
            o.velocity.x = Math.random() * 5 - 2.5;
            o.velocity.y = Math.random() * 20;
            world.addObject(o);
        }
    };

    let _p5: p5;
    const sketch: Sketch = (p5) => {
        p5.setup = () => {
            _p5 = p5;
            p5.createCanvas(900, 600);
            p5.background(0);
            p5.fill(255);
            p5.stroke(255);
            addBallToWorld();
        };

        p5.draw = () => {
            p5.background(0);
            // applyForce(o, new Victor(Math.random() * 2 - 1, Math.random() * 2 - 1));
            world.step();

            for (const o of world.objects) {
                const x = p5.map(o.position.x, 0, world.dimensions.x, 0, p5.width);
                const y = p5.map(o.position.y, 0, world.dimensions.y, p5.height, 0);
                p5.strokeWeight(o.r * 2);
                p5.point(x, y);
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

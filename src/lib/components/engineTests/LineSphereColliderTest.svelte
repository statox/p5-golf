<script lang="ts">
    import { World, createPhysicObjects } from '$lib/engine';
    import type { Sphere, Line } from '$lib/engine/Geometry';
    import { LineSphereCollider } from '$lib/engine/LineSphereCollider';
    import { mouseIsPressedOnScreen, screenToWorldScale, worldToScreenScale } from '$lib/services/p5utils';
    import type p5 from 'p5';
    import P5, { type Sketch } from 'p5-svelte';
    import { onDestroy } from 'svelte';
    import Victor from 'victor';

    console.clear();
    let _p5: p5;
    const sphere = createPhysicObjects({
        geometry: {
            type: 'sphere',
            r: 10
        } as Sphere,
        position: new Victor(30, 50),
        velocity: new Victor(0, 0)
    });
    const line1 = createPhysicObjects({
        geometry: {
            type: 'line',
            vector: new Victor(80, 0)
        } as Line,
        position: new Victor(10, 70),
        fixed: true
    });
    const line2 = createPhysicObjects({
        geometry: {
            type: 'line',
            vector: new Victor(80, 0)
        } as Line,
        position: new Victor(10, 30),
        fixed: true
    });

    const SCALE = 6;
    const sketch: Sketch = (p5) => {
        const worldDimensions = new Victor(100, 100)
        const screenDimensions = worldToScreenScale(worldDimensions, SCALE) as Victor;
        let world: World;
        p5.setup = () => {
            _p5 = p5;
            p5.createCanvas(screenDimensions.x, screenDimensions.y);
            p5.noFill();

            world = new World({
                dimensions: worldDimensions,
                enableGravity: false,
                enableCollisions: true
            });
            world.addObject(line1);
            world.addObject(line2);
            world.addObject(sphere);
        };

        let selected: string | undefined;
        p5.draw = () => {
            p5.background(0);

            if (!mouseIsPressedOnScreen(p5)) {
                selected = undefined;
            } else {
                const worldPos = screenToWorldScale(new Victor(p5.mouseX, p5.height - p5.mouseY), SCALE) as Victor;

                if (!selected) {
                    if (worldPos.distance(sphere.position) <= (sphere.geometry as Sphere).r) {
                        selected = 'sphere';
                    } else if (worldPos.distance(sphere.position.clone().add(sphere.velocity)) <= 6) {
                        selected = 'spherevelocity';
                    } else if (worldPos.distance(line1.position) <= 6) {
                        selected = 'line1start';
                    } else if (worldPos.distance((line1.geometry as Line).vector.clone().add(line1.position)) <= 6) {
                        selected = 'line1end';
                    } else if (worldPos.distance(line2.position) <= 6) {
                        selected = 'line2start';
                    } else if (worldPos.distance((line2.geometry as Line).vector.clone().add(line2.position)) <= 6) {
                        selected = 'line2end';
                    }
                }

                if (selected === 'sphere') {
                    sphere.position.copy(worldPos);
                } else if (selected === 'spherevelocity') {
                    const diff = worldPos.clone().subtract(sphere.position);
                    sphere.velocity.copy(diff);
                } else if (selected === 'line1start') {
                    line1.position.copy(worldPos);
                } else if (selected === 'line1end') {
                    const diff = worldPos.clone().subtract(line1.position);
                    (line1.geometry as Line).vector.copy(diff);
                } else if (selected === 'line2start') {
                    line2.position.copy(worldPos);
                } else if (selected === 'line2end') {
                    const diff = worldPos.clone().subtract(line2.position);
                    (line2.geometry as Line).vector.copy(diff);
                }
            }

            world.step();

            p5.stroke(255);
            p5.noFill();
            const spherePos = worldToScreenScale(sphere.position, SCALE) as Victor;
            p5.circle(spherePos.x, p5.height - spherePos.y, 2 * (sphere.geometry as Sphere).r * SCALE);

            p5.stroke(255);
            const velocityVec = worldToScreenScale(sphere.velocity, SCALE) as Victor;
            p5.line(spherePos.x, p5.height - spherePos.y,  spherePos.x+ velocityVec.x,  p5.height - (spherePos.y+ velocityVec.y));

            p5.stroke(255);
            let {x: l1x, y: l1y} = worldToScreenScale(line1.position, SCALE) as Victor;
            const l1Vec = worldToScreenScale((line1.geometry as Line).vector, SCALE) as Victor;
            p5.line(l1x, p5.height - l1y, l1x + l1Vec.x,  p5.height - (l1y + l1Vec.y));

            p5.stroke(255);
            let {x: l2x, y: l2y} = worldToScreenScale(line2.position, SCALE) as Victor;
            const l2Vec = worldToScreenScale((line2.geometry as Line).vector, SCALE) as Victor;
            p5.line(l2x, p5.height - l2y, l2x + l2Vec.x,  p5.height - (l2y + l2Vec.y));


            // if (intersection) {
            //     p5.stroke('#54d7ff');
            //     p5.fill('#54d7ff');
            //     const intersectionPos = worldToScreenScale(intersection, SCALE) as Victor;
            //     p5.circle(intersectionPos.x, p5.height - intersectionPos.y, 5);
            // }

            // if (bouncedVelocity) {
            //     p5.stroke('green');
            //     p5.fill('green');
            //     const bouncedVelWorld = worldToScreenScale(bouncedVelocity, SCALE) as Victor;
            //     p5.line(spherePos.x, p5.height - spherePos.y,  spherePos.x+ bouncedVelWorld.x,  p5.height - (spherePos.y+ bouncedVelWorld.y));
            // }
        };

    };
    onDestroy(() => {
        _p5?.remove();
    });
</script>

<div class="d-flex justify-content-center">
    <P5 {sketch} />
</div>

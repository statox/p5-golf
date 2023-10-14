<script lang="ts">
    import { createPhysicObjects } from '$lib/engine';
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
        velocity: new Victor(15, 15)
    });
    const line = createPhysicObjects({
        geometry: {
            type: 'line',
            vector: new Victor(80, 0)
        } as Line,
        position: new Victor(10, 70)
    });
    const collider = new LineSphereCollider();

    const SCALE = 6;
    const sketch: Sketch = (p5) => {
        const worldDimensions = new Victor(100, 100)
        const screenDimensions = worldToScreenScale(worldDimensions, SCALE) as Victor;
        p5.setup = () => {
            _p5 = p5;
            p5.createCanvas(screenDimensions.x, screenDimensions.y);
            p5.noFill();
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
                    } else if (worldPos.distance(line.position) <= 6) {
                        selected = 'linestart';
                    } else if (worldPos.distance((line.geometry as Line).vector.clone().add(line.position)) <= 6) {
                        selected = 'lineend';
                    }
                }

                if (selected === 'sphere') {
                    sphere.position.copy(worldPos);
                } else if (selected === 'spherevelocity') {
                    const diff = worldPos.clone().subtract(sphere.position);
                    sphere.velocity.copy(diff);
                } else if (selected === 'linestart') {
                    line.position.copy(worldPos);
                } else if (selected === 'lineend') {
                    const diff = worldPos.clone().subtract(line.position);
                    (line.geometry as Line).vector.copy(diff);
                }
            }

            const { intersection, positionCorrection, bouncedVelocity } = collider.apply(line, sphere);
            if (positionCorrection) {
                sphere.position.add(positionCorrection);
            }

            p5.stroke(255);
            p5.noFill();
            const spherePos = worldToScreenScale(sphere.position, SCALE) as Victor;
            p5.circle(spherePos.x, p5.height - spherePos.y, 2 * (sphere.geometry as Sphere).r * SCALE);

            p5.stroke(255);
            const velocityVec = worldToScreenScale(sphere.velocity, SCALE) as Victor;
            p5.line(spherePos.x, p5.height - spherePos.y,  spherePos.x+ velocityVec.x,  p5.height - (spherePos.y+ velocityVec.y));

            p5.stroke(255);
            const {x: lx, y: ly} = worldToScreenScale(line.position, SCALE) as Victor;
            const lVec = worldToScreenScale((line.geometry as Line).vector, SCALE) as Victor;
            p5.line(lx, p5.height - ly, lx + lVec.x,  p5.height - (ly + lVec.y));

            if (intersection) {
                p5.stroke('blue');
                p5.fill('blue');
                const intersectionPos = worldToScreenScale(intersection, SCALE) as Victor;
                p5.circle(intersectionPos.x, p5.height - intersectionPos.y, 5);
            }

            if (bouncedVelocity) {
                p5.stroke('green');
                p5.fill('green');
                const bouncedVelWorld = worldToScreenScale(bouncedVelocity, SCALE) as Victor;
                p5.line(spherePos.x, p5.height - spherePos.y,  spherePos.x+ bouncedVelWorld.x,  p5.height - (spherePos.y+ bouncedVelWorld.y));
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

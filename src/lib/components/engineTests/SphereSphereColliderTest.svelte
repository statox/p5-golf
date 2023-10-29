<script lang="ts">
    import { World, createPhysicObjects } from '$lib/engine';
    import type { Sphere } from '$lib/engine/Geometry';
    import { SphereSphereCollider } from '$lib/engine/SphereSphereCollider';
    import { drawWorldDebug, mouseIsPressedOnScreen, screenToWorldScale, worldToScreenScale } from '$lib/services/p5utils';
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
        velocity: new Victor(15, -15)
    });
    const sphere2 = createPhysicObjects({
        geometry: {
            type: 'sphere',
            r: 10
        } as Sphere,
        position: new Victor(70, 50),
        velocity: new Victor(0, 45)
    });
    const collider = new SphereSphereCollider();

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
            });
            world.addObject(sphere);
            world.addObject(sphere2);
        };

        p5.draw = () => {
            p5.background(0);
            moveObjects(p5);
            drawWorldDebug(p5, world);

            const { intersection, bouncedVelocity } = collider.apply(sphere, sphere2);
            for (let _=0; _<10; _++) {
                const { positionCorrection } = collider.apply(sphere, sphere2);
                if (positionCorrection) {
                    sphere.position.add(positionCorrection.multiplyScalar(0.5));
                    sphere2.position.subtract(positionCorrection.multiplyScalar(0.5));
                }
            }

            p5.stroke(255);
            p5.noFill();
            const spherePos = worldToScreenScale(sphere.position, SCALE) as Victor;
            p5.circle(spherePos.x, p5.height - spherePos.y, 2 * (sphere.geometry as Sphere).r * SCALE);

            p5.stroke(255);
            const velocityVec = worldToScreenScale(sphere.velocity, SCALE) as Victor;
            p5.line(spherePos.x, p5.height - spherePos.y,  spherePos.x+ velocityVec.x,  p5.height - (spherePos.y+ velocityVec.y));

            p5.stroke(255);
            p5.noFill();
            const sphere2Pos = worldToScreenScale(sphere2.position, SCALE) as Victor;
            p5.circle(sphere2Pos.x, p5.height - sphere2Pos.y, 2 * (sphere2.geometry as Sphere).r * SCALE);

            p5.stroke(255);
            const velocity2Vec = worldToScreenScale(sphere2.velocity, SCALE) as Victor;
            p5.line(sphere2Pos.x, p5.height - sphere2Pos.y,  sphere2Pos.x+ velocity2Vec.x,  p5.height - (sphere2Pos.y+ velocity2Vec.y));


            if (intersection) {
                p5.stroke('#54d7ff');
                p5.fill('#54d7ff');
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

    let selected: string | undefined;
    const moveObjects = (p5: p5) => {
        if (!mouseIsPressedOnScreen(p5)) {
            selected = undefined;
        } else {
            const worldPos = screenToWorldScale(new Victor(p5.mouseX, p5.height - p5.mouseY), SCALE) as Victor;

            if (!selected) {
                if (worldPos.distance(sphere.position) <= (sphere.geometry as Sphere).r) {
                    selected = 'sphere';
                } else if (worldPos.distance(sphere.position.clone().add(sphere.velocity)) <= 6) {
                    selected = 'spherevelocity';
                } else if (worldPos.distance(sphere2.position) <= (sphere2.geometry as Sphere).r) {
                    selected = 'sphere2';
                } else if (worldPos.distance(sphere2.position.clone().add(sphere2.velocity)) <= 6) {
                    selected = 'sphere2velocity';
                }
            }

            if (selected === 'sphere') {
                sphere.position.copy(worldPos);
            } else if (selected === 'spherevelocity') {
                const diff = worldPos.clone().subtract(sphere.position);
                sphere.velocity.copy(diff);
            } else if (selected === 'sphere2') {
                sphere2.position.copy(worldPos);
            } else if (selected === 'sphere2velocity') {
                const diff = worldPos.clone().subtract(sphere2.position);
                sphere2.velocity.copy(diff);
            }
        }
    };
    onDestroy(() => {
        _p5?.remove();
    });
</script>

<div class="d-flex justify-content-center">
    <P5 {sketch} />
</div>

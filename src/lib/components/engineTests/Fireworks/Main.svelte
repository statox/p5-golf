<script lang="ts">
    import type { GUI } from 'dat.gui';
    import { World, createPhysicObjects } from '$lib/engine';
    import { drawWorld, mouseIsPressedOnScreen, screenToWorldScale, worldToScreenScale } from '$lib/services/p5utils';
    import type p5 from 'p5';
    import P5, { type Sketch } from 'p5-svelte';
    import { onDestroy } from 'svelte';
    import Victor from 'victor';

    console.clear();
    let _p5: p5;

    const settings = {
        world: {
            gravity: true,
            collisions: false,
            ttl: 160,
            maxNbObjects: 300,
            particleSize: 1
        },
        cannon: {
            angle: 270,
            creationDelay: 1,
            minYVelocity: 30,
            maxYVelocityVariation: 1,
            maxXVelocity: 30
        }
    };

    let gui: GUI;
    const initGUI = async () => {
        // Imported here to avoid "window is not defined" error
        // https://github.com/dataarts/dat.gui/issues/271
        const dat = await import('dat.gui');
        gui = new dat.GUI();

        gui.domElement.setAttribute('style', 'background-color: black');

        const worldFolder = gui.addFolder('World');
        worldFolder.open();
        worldFolder.add(world?.objects, 'length').name('Nb objects').listen();
        worldFolder.add(settings.world, 'gravity').name('Enable gravity').onFinishChange(() => world.gravityEnabled = settings.world.gravity);
        worldFolder.add(settings.world, 'collisions').name('Enable collisions').onFinishChange(() => world.collisionEnabled = settings.world.collisions);
        worldFolder.add(settings.world, 'ttl', 0, 10000).name('Particles TTL');
        worldFolder.add(settings.world, 'maxNbObjects', 0, 3000).name('Max nb particles');
        worldFolder.add(settings.world, 'particleSize', 1, 20, 1).name('Particles size');

        const cannonFolder = gui.addFolder('Cannon');
        cannonFolder.open();
        cannonFolder.add(settings.cannon, 'angle', 0, 360).name('Angle');
        cannonFolder.add(settings.cannon, 'minYVelocity', 0, 100).name('min. Y velocity');
        cannonFolder.add(settings.cannon, 'maxYVelocityVariation', 0, 2).name('Y vel. variation');
        cannonFolder.add(settings.cannon, 'maxXVelocity', 0, 100).name('max. X velocity ');
        cannonFolder.add(settings.cannon, 'creationDelay', 1, 30, 1).name('Fire rate');
    };

    const getRandomInitialVelocity = () => {
        const { minYVelocity, maxYVelocityVariation, maxXVelocity } = settings.cannon;

        const x = Math.random() * maxXVelocity - (maxXVelocity / 2);
        const y = minYVelocity + (maxYVelocityVariation - Math.random()) * minYVelocity

        return new Victor(x, y).rotateByDeg(settings.cannon.angle);
    };

    const addParticle = (world: World) => {
        const particle = {
            ...createPhysicObjects({
                geometry: {
                    type: 'sphere',
                    r: settings.world.particleSize
                },
                position: initialParticlesPosition,
                velocity: getRandomInitialVelocity()
            }),
            age: 0
        };
        world.addObject(particle);
    };
    const initialParticlesPosition = new Victor(0, 0);
    let world: World;
    const SCALE = 6;
    const sketch: Sketch = (p5) => {
        const worldDimensions = new Victor(100, 100)
        const screenDimensions = worldToScreenScale(worldDimensions, SCALE) as Victor;
        initialParticlesPosition.x = worldDimensions.x / 2;
        initialParticlesPosition.y = 10;

        p5.setup = () => {
            _p5 = p5;
            p5.createCanvas(screenDimensions.x, screenDimensions.y);
            p5.noFill();

            world = new World({
                dimensions: worldDimensions,
                enableGravity: true,
                enableCollisions: false
            });
            addParticle(world);
            initGUI();
        };

        p5.draw = () => {
            p5.background(0);

            if (mouseIsPressedOnScreen(p5)) {
                const worldPos = screenToWorldScale(new Victor(p5.mouseX, p5.height - p5.mouseY), SCALE) as Victor;
                initialParticlesPosition.copy(worldPos);
            }

            if (p5.frameCount % settings.cannon.creationDelay === 0 && world.objects.length < settings.world.maxNbObjects) {
                addParticle(world);
            }
            world.step();
            world.objects.forEach(o => {
                if (o.data.age > settings.world.ttl) {
                    world.removeObject(o);
                }
            });

            drawWorld(p5, world);
        };

    };

    onDestroy(() => {
        gui?.destroy();
        _p5?.remove();
    });
</script>

<div class="d-flex justify-content-center">
    <P5 {sketch} />
</div>


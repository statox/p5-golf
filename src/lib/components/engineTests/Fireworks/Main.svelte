<script lang="ts">
    import { base } from '$app/paths';
    import { page } from '$app/stores';
    import type { GUI } from 'dat.gui';
    import { World, createPhysicObjects } from '$lib/engine';
    import { mouseIsPressedOnScreen, screenToWorldScale, worldToScreenScale } from '$lib/services/p5utils';
    import type p5 from 'p5';
    import P5, { type Sketch } from 'p5-svelte';
    import { onDestroy, onMount } from 'svelte';
    import Victor from 'victor';
    import { configs } from './presets';
    import type { Config } from './presets';
    import { makeBox, makeWalls } from './worldUtils';
    import { copyTextToClipboard } from '../../utils/clipboard';

    console.clear();
    let _p5: p5;

    let settings: Config = configs['torch'];

    let configNameParam = 'torch';
    onMount(() => {
        configNameParam = $page.url.searchParams.get('config') || 'torch';
        if (configNameParam) {
            settings = configs[configNameParam];
            configActions.configName = configNameParam;
        }
    });

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

        const renderFolder = gui.addFolder('Render');
        renderFolder.open();
        renderFolder.add(settings.render, 'colors').name('Use colors');
        renderFolder.add(settings.render, 'blurPx', 0, 50).name('Blur (px)');

        const configFolder = gui.addFolder('Config');
        configFolder.open();
        configFolder.add(configActions, 'copyCurrentConfig').name('Copy current');
        configFolder.add(configActions, 'configName', Object.keys(configs)).name('Change preset').onFinishChange((name) => {
            // Changing the settings object doesn't refresh dat.gui instead we
            // use a hack to reload the page with a search parameter which is used
            // to initialize settings
            window.location.href = window.location.origin + `${base}/engineTests?config=${name}`;
        });
    };

    const configActions = {
        copyCurrentConfig: () => {
            const settingsStr = JSON.stringify(settings);
            copyTextToClipboard(settingsStr);
        },
        configName: configNameParam
    }

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
    const SCALE = 8;
    const sketch: Sketch = (p5) => {
        const worldDimensions = new Victor(100, 100)
        const screenDimensions = worldToScreenScale(worldDimensions, SCALE) as Victor;
        initialParticlesPosition.x = worldDimensions.x / 2;
        initialParticlesPosition.y = worldDimensions.y / 3;

        p5.setup = () => {
            _p5 = p5;
            p5.createCanvas(screenDimensions.x, screenDimensions.y);
            p5.noFill();

            world = new World({
                dimensions: worldDimensions,
                enableGravity: settings.world.gravity,
                enableCollisions: settings.world.collisions
            });
            addParticle(world);

            makeWalls(worldDimensions).forEach(w => world.addObject(w));
            makeBox(worldDimensions, 0.5).forEach(w => world.addObject(w));
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

    const colors = [
        [239, 113, 81],
        [229, 144, 25],
        [211, 202, 156],
        [153, 47, 15],
        [234, 93, 180]
    ];
    const drawWorld = (p5: p5, world: World) => {
        const scale = p5.width / world.dimensions.x;
        for (const o of world.objects) {
            if (o.geometry.type !== 'sphere') {
                continue;
            }

            if (settings.render.colors) {
                const colorId = o.data.id % colors.length;
                const color =  colors[colorId];
                p5.stroke([...color]);
            }

            const x = p5.map(o.position.x, 0, world.dimensions.x, 0, p5.width);
            const y = p5.map(o.position.y, 0, world.dimensions.y, p5.height, 0);

            const scaledDiameter = worldToScreenScale(o.geometry.r * 2, scale) as number;
            p5.strokeWeight(scaledDiameter);
            p5.point(x, y);
        }

        for (const o of world.objects) {
            if (o.geometry.type !== 'line') {
                continue;
            }
            p5.stroke('white');

            const x1 = p5.map(o.position.x, 0, world.dimensions.x, 0, p5.width);
            const y1 = p5.map(o.position.y, 0, world.dimensions.y, p5.height, 0);
            const x2 = p5.map(o.position.x + o.geometry.vector.x, 0, world.dimensions.x, 0, p5.width);
            const y2 = p5.map(o.position.y + o.geometry.vector.y, 0, world.dimensions.y, p5.height, 0);

            p5.strokeWeight(3);
            p5.line(x1, y1, x2, y2);
        }

        p5.drawingContext.filter = `blur(${settings.render.blurPx}px)`;
    };

    onDestroy(() => {
        gui?.destroy();
        _p5?.remove();
    });
</script>

<div class="d-flex justify-content-center">
    <P5 {sketch} />
</div>


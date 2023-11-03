import type { GUI } from 'dat.gui';

let gui: GUI;

export type Settings = {
    physics: {
        attraction: number;
        attractionRadius: number;
        repulsion: number;
        repulsionRadius: number;
    };
    world: {
        nbParticles: number;
        allowOverlaps: boolean;
    };
    render: {
        showPerception: boolean;
        showVelocity: boolean;
        uniformVelocities: boolean; // if false velocities are all the same size
    };
};

const settings: Settings = {
    physics: {
        attraction: 1580,
        attractionRadius: 90,
        repulsion: 2000,
        repulsionRadius: 20
    },
    world: {
        nbParticles: 2000,
        allowOverlaps: true
    },
    render: {
        showPerception: false,
        showVelocity: false,
        uniformVelocities: true
    }
};

export const initGUI = async (resetWorld: () => void) => {
    // Imported here to avoid "window is not defined" error
    // https://github.com/dataarts/dat.gui/issues/271
    const dat = await import('dat.gui');
    gui = new dat.GUI({
        width: 200
    });

    gui.domElement.setAttribute('style', 'background-color: black');

    const physicsFolder = gui.addFolder('Physics');
    physicsFolder.open();
    physicsFolder.add(settings.physics, 'attraction');
    physicsFolder.add(settings.physics, 'attractionRadius', 0, 150);
    physicsFolder.add(settings.physics, 'repulsion');
    physicsFolder.add(settings.physics, 'repulsionRadius', 0, 150);

    const worldFolder = gui.addFolder('World');
    worldFolder.open();
    worldFolder.add(settings.world, 'nbParticles', 0, 5000);
    worldFolder.add(settings.world, 'allowOverlaps').onChange(resetWorld);
    worldFolder.add({ resetWorld }, 'resetWorld');

    const renderFolder = gui.addFolder('Render');
    renderFolder.open();
    renderFolder.add(settings.render, 'showPerception');
    renderFolder.add(settings.render, 'showVelocity');
    renderFolder.add(settings.render, 'uniformVelocities');

    return settings;
};

export const destroyGUI = () => {
    gui?.destroy();
};

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
    };
    render: {
        showPerception: boolean;
    };
};

const settings: Settings = {
    physics: {
        attraction: 100,
        attractionRadius: 10,
        repulsion: 200,
        repulsionRadius: 8
    },
    world: {
        nbParticles: 200
    },
    render: {
        showPerception: true,
        showVelocity: true,
        scaledVelocity: true // if false velocities are all the same size
    }
};

export const initGUI = async (resetWorld: () => void) => {
    // Imported here to avoid "window is not defined" error
    // https://github.com/dataarts/dat.gui/issues/271
    const dat = await import('dat.gui');
    gui = new dat.GUI({
        width: 500
    });

    gui.domElement.setAttribute('style', 'background-color: black');

    const physicsFolder = gui.addFolder('Physics');
    physicsFolder.open();
    physicsFolder.add(settings.physics, 'attraction');
    physicsFolder.add(settings.physics, 'attractionRadius', 0, 50);
    physicsFolder.add(settings.physics, 'repulsion');
    physicsFolder.add(settings.physics, 'repulsionRadius', 0, 50);

    const worldFolder = gui.addFolder('World');
    worldFolder.open();
    worldFolder.add(settings.world, 'nbParticles', 0, 1000);
    worldFolder.add({ resetWorld }, 'resetWorld');

    const renderFolder = gui.addFolder('Render');
    renderFolder.open();
    renderFolder.add(settings.render, 'showPerception');
    renderFolder.add(settings.render, 'showVelocity');

    return settings;
};

export const destroyGUI = () => {
    gui?.destroy();
};

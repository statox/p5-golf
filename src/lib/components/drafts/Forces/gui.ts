import type { GUI } from 'dat.gui';

let gui: GUI;

export type Settings = {
    physics: {
        attraction: number;
        attractionRadius: number;
        repulsion: number;
        repulsionRadius: number;
    };
};

const settings: Settings = {
    physics: {
        attraction: 0,
        attractionRadius: 10,
        repulsion: 0,
        repulsionRadius: 8
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

    const programFolder = gui.addFolder('Physics');
    programFolder.open();
    programFolder.add(settings.physics, 'attraction');
    programFolder.add(settings.physics, 'attractionRadius', 0, 20);
    programFolder.add(settings.physics, 'repulsion');
    programFolder.add(settings.physics, 'repulsionRadius', 0, 20);
    programFolder.add({ resetWorld }, 'resetWorld');

    return settings;
};

export const destroyGUI = () => {
    gui?.destroy();
};

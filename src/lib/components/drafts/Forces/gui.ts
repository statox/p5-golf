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
        attractionRadius: 100,
        repulsion: 0,
        repulsionRadius: 100
    }
};

export const initGUI = async () => {
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
    programFolder.add(settings.physics, 'attractionRadius');
    programFolder.add(settings.physics, 'repulsion');
    programFolder.add(settings.physics, 'repulsionRadius');

    return settings;
};

export const destroyGUI = () => {
    gui?.destroy();
};

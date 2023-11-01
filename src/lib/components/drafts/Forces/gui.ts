import type { GUI } from 'dat.gui';

let gui: GUI;

export type Settings = {
    physics: {
        attraction: number;
        repulsion: number;
    };
};

const settings: Settings = {
    physics: {
        attraction: 5000,
        repulsion: 5000
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
    programFolder.add(settings.physics, 'repulsion');

    return settings;
};

export const destroyGUI = () => {
    gui?.destroy();
};

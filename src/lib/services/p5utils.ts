import type p5 from 'p5';

export const mouseIsPressedOnScreen = (p5: p5) => {
    if (!p5.mouseIsPressed) {
        return false;
    }
    const { mouseX: x, mouseY: y, width: w, height: h } = p5;
    return x > 0 && x < w && y > 0 && y < h;
};

export const mouseIsOnScreen = (p5: p5) => {
    const { mouseX: x, mouseY: y, width: w, height: h } = p5;
    return x > 0 && x < w && y > 0 && y < h;
};

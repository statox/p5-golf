import type { World } from '$lib/engine';
import type p5 from 'p5';
import type Victor from 'victor';

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

export const worldToScreenScale = (value: number | Victor, scale: number) => {
    if (typeof value === 'number') {
        return value * scale;
    }

    return (value as Victor).clone().multiplyScalar(scale);
};

export const screenToWorldScale = (value: number | Victor, scale: number) => {
    if (typeof value === 'number') {
        return value / scale;
    }

    return (value as Victor).clone().divideScalar(scale);
};

export const drawWorld = (p5: p5, world: World) => {
    const scale = p5.width / world.dimensions.x;
    for (const o of world.objects) {
        p5.stroke(o.data.isColliding ? 'red' : 'white');

        const x = p5.map(o.position.x, 0, world.dimensions.x, 0, p5.width);
        const y = p5.map(o.position.y, 0, world.dimensions.y, p5.height, 0);

        if (o.geometry.type === 'sphere') {
            const scaledDiameter = worldToScreenScale(o.geometry.r * 2, scale) as number;
            p5.strokeWeight(scaledDiameter);
            p5.point(x, y);
        }

        if (o.geometry.type === 'line') {
            const x1 = x + p5.map(o.geometry.vector.x, 0, world.dimensions.x, 0, p5.width);
            const y1 = y - p5.map(o.geometry.vector.y, 0, world.dimensions.y, 0, p5.height);
            p5.strokeWeight(2);
            p5.line(x, y, x1, y1);
        }
    }
};

export const drawWorldDebug = (p5: p5, world: World) => {
    p5.noFill();
    p5.strokeWeight(2);
    const scale = p5.width / world.dimensions.x;
    for (const o of world.objects) {
        const { x, y } = worldToScreenScale(o.position, scale) as Victor;

        if (o.geometry.type === 'sphere') {
            const scaledDiameter = worldToScreenScale(o.geometry.r * 2, scale) as number;
            p5.stroke('white');
            p5.circle(x, p5.height - y, scaledDiameter);
        }

        if (o.geometry.type === 'line') {
            const { x: dx, y: dy } = worldToScreenScale(o.geometry.vector, scale) as Victor;
            const x1 = x + dx;
            const y1 = y + dy;
            p5.stroke('white');
            p5.line(x, p5.height - y, x1, p5.height - y1);
        }

        if (!o.fixed) {
            p5.stroke('white');
            const { x: dx, y: dy } = worldToScreenScale(o.velocity, scale) as Victor;
            const x1 = x + dx;
            const y1 = y + dy;
            p5.line(x, p5.height - y, x1, p5.height - y1);
        }
    }
};

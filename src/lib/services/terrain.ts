import type { Terrain } from '$lib/types/terrain';
import type p5 from 'p5';
import { interpolations } from './interpolation';

export const generateTerrain = (): Terrain => {
    const ground = [];
    const yOffset = 50;
    let prevX = 0;
    let prevY = 50 + yOffset;
    for (let x = 0; x <= 900; x += 100) {
        const f = interpolations[Math.floor(Math.random() * interpolations.length)];
        const y = Math.random() * 100 + yOffset;
        ground.push({ x1: prevX, y1: prevY, x2: x, y2: y, f });
        prevX = x;
        prevY = y;
    }
    return ground;
};

export const drawTerrain = (p5: p5, terrain: Terrain) => {
    p5.stroke('white');

    for (const groundLine of terrain) {
        for (let x = groundLine.x1; x < groundLine.x2; x++) {
            const percent = p5.map(x, groundLine.x1, groundLine.x2, 0, 1);

            const y = groundLine.f(percent, groundLine.y1, groundLine.y2);
            p5.point(x, y);
        }
    }
};

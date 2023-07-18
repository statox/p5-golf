import type { Terrain } from '$lib/types/terrain';
import type p5 from 'p5';
import { interpolations } from './interpolation';

export const generateTerrain = (params: {
    terrainLength: number;
    maxHeight: number;
    minHeight: number;
    nbSegments: number;
}): Terrain => {

    const { terrainLength, maxHeight, minHeight, nbSegments } = params;

    const ground = [];
    let prevX = 0;
    let prevY = maxHeight - (maxHeight - minHeight) / 2;

    for (let x = 0; x <= terrainLength; x += terrainLength / nbSegments) {
        const f = interpolations[Math.floor(Math.random() * interpolations.length)];
        const y = minHeight + Math.random() * (maxHeight - minHeight);

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

            const y = p5.height - groundLine.f(percent, groundLine.y1, groundLine.y2);
            p5.point(x, y);
        }
    }
};

export const getSegmentAtX = (x: number, terrain: Terrain) => {
    if (x < 0 || x > terrain[terrain.length - 1].x2) {
        return;
    }
    return terrain.find(s => s.x1 <= x && s.x2 > x);
}

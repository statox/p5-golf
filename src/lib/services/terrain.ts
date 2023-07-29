import type { Terrain } from '$lib/types/terrain';
import type p5 from 'p5';
import { interpolations, map } from './interpolation';

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

    const segmentsLength = terrainLength / nbSegments;
    for (let x = segmentsLength; x <= terrainLength; x += segmentsLength) {
        const f = interpolations[Math.floor(Math.random() * interpolations.length)];
        const y = minHeight + Math.random() * (maxHeight - minHeight);

        ground.push({ x1: prevX, y1: prevY, x2: x, y2: y, f });
        prevX = x;
        prevY = y;
    }
    return ground;
};

export const drawTerrain = (p5: p5, terrain: Terrain) => {
    p5.strokeWeight(2);
    p5.stroke('white');

    for (const groundLine of terrain) {
        for (let x = groundLine.x1; x < groundLine.x2; x++) {
            const percent = p5.map(x, groundLine.x1, groundLine.x2, 0, 1);

            const y = p5.height - groundLine.f(percent, groundLine.y1, groundLine.y2);
            p5.point(x, y);
        }
    }
};

export const getSegmentAtX = (terrain: Terrain, x: number) => {
    if (!terrain || x < 0 || x > terrain[terrain.length - 1].x2) {
        return;
    }
    return terrain.find((s) => s.x1 <= x && s.x2 >= x);
};

export const getElevationAtX = (terrain: Terrain, x: number) => {
    const currentTerrainSegment = getSegmentAtX(terrain, x);
    if (!currentTerrainSegment) {
        return;
    }
    const percent = map(x, currentTerrainSegment.x1, currentTerrainSegment.x2, 0, 1);

    const y = currentTerrainSegment.f(percent, currentTerrainSegment.y1, currentTerrainSegment.y2);

    return y;
};

export const getContactSegmentAtX = (terrain: Terrain, x: number, segmentLength: number) => {
    const segment = getSegmentAtX(terrain, x);
    if (!segment) {
        console.log('no segment');
        return;
    }
    const x1 = Math.max(segment.x1, Math.ceil(x - segmentLength / 2));
    const x2 = Math.min(segment.x2, Math.ceil(x + segmentLength / 2));
    const y1 = getElevationAtX(terrain, x1);
    const y2 = getElevationAtX(terrain, x2);
    // console.log({ x1, y1, x2, y2 });

    return { x1, y1, x2, y2 };
};

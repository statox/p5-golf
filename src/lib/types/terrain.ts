import type { InterpolationFn } from './interpolation';

export type Terrain = {
    x1: number;
    y1: number;
    x2: number;
    y2: number;
    f: InterpolationFn;
}[];

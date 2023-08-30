import type Victor from 'victor';

export interface Sphere {
    type: 'sphere';
    r: number;
}

export interface Line {
    type: 'line';
    vector: Victor;
}

export type Geometry = Sphere | Line;

import type { PhysicObject } from './PhysicObject';

// https://stackoverflow.com/a/1084899
export const LineSphereCollider = (line: PhysicObject, sphere: PhysicObject) => {
    if (sphere.geometry.type !== 'sphere' || line.geometry.type !== 'line') {
        throw new Error('invalid geometry');
    }

    const E = line.position.clone();
    const L = line.position.clone().add(line.geometry.vector);
    const C = sphere.position.clone();
    const r = sphere.geometry.r;

    const d = L.clone().subtract(E);
    const f = E.clone().subtract(C);

    const a = d.dot(d);
    const b = f.dot(d) * 2;
    const c = f.dot(f) - r * r;

    let discriminant = b * b - 4 * a * c;

    if (discriminant < 0) {
        return;
    }

    discriminant = Math.sqrt(discriminant);

    // either solution may be on or off the ray so we need to test both
    // t1 is always the smaller value, because BOTH discriminant and
    // a are nonnegative.
    const t1 = (-b - discriminant) / (2 * a);
    const t2 = (-b + discriminant) / (2 * a);

    // Impale, Poke
    if (t1 >= 0 && t1 <= 1) {
        return E.add(d.multiplyScalar(t1));
    }

    // ExitWound
    if (t2 >= 0 && t2 <= 1) {
        return E.add(d.multiplyScalar(t2));
    }
};

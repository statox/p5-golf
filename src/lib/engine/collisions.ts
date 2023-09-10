import Victor from 'victor';
import type { PhysicObject } from './PhysicObject';

// TO FIX:
//  - If the speed is big enough the ball is too far for getLineSphereIntersectionPoint to detect
//  a collision so the sphere passes through.
//  - In some cases (e.g. dropping the ball on the extremity of an 45deg inclined wall) the sphere
//  gets impaled on the wall, maybe I need to move the sphere to make it impossible to get stuck.
export const LineSphereCollider = (line: PhysicObject, sphere: PhysicObject) => {
    if (sphere.geometry.type !== 'sphere' || line.geometry.type !== 'line') {
        throw new Error('invalid geometry');
    }

    const intersection = getLineSphereIntersectionPoint(line, sphere);
    if (!intersection) {
        sphere.data.isColliding = false;
        return;
    }
    sphere.data.isColliding = true;

    const restitutionCoefficient = 0.8;
    const frictionCoefficient = 0.2;

    /* x1,y1, x2,y2: both extremities of the line */
    const x1 = line.position.x;
    const y1 = line.position.y;
    const x2 = line.position.x + line.geometry.vector.x;
    const y2 = line.position.y + line.geometry.vector.y;

    /* wallNormal: Normal to the wall with in the direction of the incoming speed*/
    // https://stackoverflow.com/a/1243676/4194289
    const dx = x2 - x1;
    const dy = y2 - y1;

    const possibleWallNormal1 = new Victor(-dy, dx);
    const possibleWallNormal2 = new Victor(dy, -dx);

    // Test points are used to determine which side of the line each normal points to
    // to allow choosing the normal pointing in the incoming direction of v1
    const testPointWallNormal1 = intersection.clone().add(possibleWallNormal1);
    const testPointWallNormal2 = intersection.clone().add(possibleWallNormal2);

    let wallNormal: Victor;
    if (
        sphere.position.distanceSq(testPointWallNormal1) <
        sphere.position.distanceSq(testPointWallNormal2)
    ) {
        wallNormal = possibleWallNormal1;
    } else {
        wallNormal = possibleWallNormal2;
    }

    /* u,w: Components of the speed along the wall and the normal */
    // https://stackoverflow.com/a/573206/4194289
    const n = wallNormal.clone().normalize();
    const v = sphere.velocity.clone();

    // u = (v · n / n · n) n
    // w = v − u
    const u = n.multiplyScalar(v.dot(n));
    const w = v.subtract(u);

    /* bouncedVelocity: Resulting velocity affected by friction and restitution */
    const r = restitutionCoefficient;
    const f = frictionCoefficient;
    const bouncedVelocity = w.multiplyScalar(1 - f).subtract(u.multiplyScalar(r));

    return bouncedVelocity;
};

export const getLineSphereIntersectionPoint = (line: PhysicObject, sphere: PhysicObject) => {
    if (sphere.geometry.type !== 'sphere' || line.geometry.type !== 'line') {
        throw new Error('invalid geometry');
    }

    // Get the intersection point between a sphere and a line
    // https://stackoverflow.com/a/1084899
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
    return;
};
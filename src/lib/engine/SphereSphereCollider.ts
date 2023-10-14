import Victor from 'victor';
import type { PhysicObject } from './PhysicObject';
import type { Collider } from './Collider';

export class SphereSphereCollider implements Collider {
    constructor() {}

    apply = (s1: PhysicObject, s2: PhysicObject) => {
        return {
            ...this.pullApart(s1, s2)!,
            ...this.bounce(s1, s2)!
        };
    };

    intersectionPoint = (s1: PhysicObject, s2: PhysicObject) => {
        if (s1.geometry.type !== 'sphere' || s2.geometry.type !== 'sphere') {
            return;
        }

        const r1 = s1.geometry.r;
        const r2 = s2.geometry.r;

        const dSq = s1.position.distanceSq(s2.position);
        const minDSq = (r1 + r2) ** 2;

        if (dSq > minDSq) {
            return;
        }

        const l = s2.position.clone().subtract(s1.position);
        const r = r1 / (r1 + r2);
        l.multiplyScalar(r);
        return s1.position.clone().add(l);
    };

    // TO FIX:
    //  - If the speed is big enough the ball is too far for getLineSphereIntersectionPoint to detect
    //  a collision so the sphere passes through.
    //  - In some cases (e.g. dropping the ball on the extremity of an 45deg inclined wall) the sphere
    //  gets impaled on the wall, maybe I need to move the sphere to make it impossible to get stuck.
    bounce = (s1: PhysicObject, s2: PhysicObject) => {
        if (s1.geometry.type !== 'sphere' || s2.geometry.type !== 'sphere') {
            throw new Error('invalid geometry');
        }

        const intersection = this.intersectionPoint(s1, s2);
        if (!intersection) {
            return;
        }

        const restitutionCoefficient = s1.restitution * s2.restitution;
        const frictionCoefficient = s1.friction * s2.friction;

        /* x1,y1, x2,y2: both extremities of the line */
        const x1 = s2.position.x;
        const y1 = s2.position.y;
        const x2 = s2.position.x + s2.velocity.x;
        const y2 = s2.position.y + s2.velocity.y;

        const x3 = s1.position.x;
        const y3 = s1.position.y;
        const x4 = s1.position.x + s1.velocity.x;
        const y4 = s1.position.y + s1.velocity.y;

        /* m1,m2: slope of each line */
        let m1 = (y2 - y1) / (x2 - x1);
        let m2 = (y4 - y3) / (x4 - x3);

        m1 = [Infinity, -Infinity].includes(m1) ? 360 : m1;
        m2 = [Infinity, -Infinity].includes(m2) ? 360 : m2;

        /* theta: angle between the vectors */
        // theta is the angle between the velocity and the wall
        const tanTheta = (m1 - m2) / (1 + m1 * m2);

        // If tanTheta is zero lines are colinear
        // This is a hack made by me to avoid the ball getting stuck on the end of a line
        if (tanTheta === 0) {
            const r = restitutionCoefficient;
            const f = frictionCoefficient;
            const bouncedVelocity = s1.velocity.multiplyScalar(1 - f).multiplyScalar(-r);
            return { bouncedVelocity, intersection };
        }

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
            s1.position.distanceSq(testPointWallNormal1) <
            s1.position.distanceSq(testPointWallNormal2)
        ) {
            wallNormal = possibleWallNormal1;
        } else {
            wallNormal = possibleWallNormal2;
        }

        /* u,w: Components of the speed along the wall and the normal */
        // https://stackoverflow.com/a/573206/4194289
        const n = wallNormal.clone().normalize();
        const v = s1.velocity.clone();

        // u = (v · n / n · n) n
        // w = v − u
        const u = n.multiplyScalar(v.dot(n));
        const w = v.subtract(u);

        /* bouncedVelocity: Resulting velocity affected by friction and restitution */
        const r = restitutionCoefficient;
        const f = frictionCoefficient;
        const bouncedVelocity = w.multiplyScalar(1 - f).subtract(u.multiplyScalar(r));

        return { bouncedVelocity, intersection };
    };

    pullApart = (s1: PhysicObject, s2: PhysicObject) => {
        if (s1.geometry.type !== 'sphere' || s2.geometry.type !== 'sphere') {
            throw new Error('invalid geometry');
        }

        const intersection = this.intersectionPoint(s1, s2);
        if (!intersection) {
            return;
        }
        const intersectionToSphere = s1.position.clone().subtract(intersection);
        const distanceToIntersection = intersectionToSphere.length();
        const requiredDistance = s1.geometry.r - distanceToIntersection;
        intersectionToSphere.normalize().multiplyScalar(requiredDistance);

        return { positionCorrection: intersectionToSphere };
    };
}

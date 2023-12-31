<script lang="ts">
    import type p5 from 'p5';
    import P5, { type Sketch } from 'p5-svelte';
    import { onDestroy } from 'svelte';
    import Victor from 'victor';

    let _p5: p5;
    let slope1 = 0;
    let slope2 = 0;
    let tanTheta = 0;
    let theta = 0;
    let bouncedVelocity: Victor;

    let frictionCoefficient = 0.2;
    let restitutionCoefficient = 0.8;

    let wallNormal: Victor;

    // https://en.wikipedia.org/wiki/Line%E2%80%93line_intersection
    const updateIntersection = () => {
        const x1 = v1.position.x;
        const y1 = v1.position.y;
        const x2 = v1.end.x;
        const y2 = v1.end.y;
        const x3 = v2.position.x;
        const y3 = v2.position.y;
        const x4 = v2.end.x;
        const y4 = v2.end.y;

        const denominator = (x1 - x2) * (y3 - y4) - (y1 - y2) * (x3 - x4);
        const numeratorT = (x1 - x3) * (y3 - y4) - (y1 - y3) * (x3 - x4);
        const t = numeratorT / denominator;
        const numeratorU = (x1 - x3) * (y1 - y2) - (y1 - y3) * (x1 - x2);
        const u = numeratorU / denominator;

        if (0 <= t && t <= 1 && 0 <= u && u <= 1) {
            intersection.x = x1 + t * (x2 - x1);
            intersection.y = y1 + t * (y2 - y1);
        } else {
            intersection.x = -1;
            intersection.y = -1;
        }
    };

    const vecStr = (v: Victor) => {
        const x = v.x.toFixed(0);
        const y = v.y.toFixed(0);
        return `${x};${y}`;
    };

    const updateAngle = () => {
        // v1 is the object's velocity
        const x1 = v1.position.x;
        const y1 = v1.position.y;
        const x2 = v1.end.x;
        const y2 = v1.end.y;
        // v2 is the position of the wall
        const x3 = v2.position.x;
        const y3 = v2.position.y;
        const x4 = v2.end.x;
        const y4 = v2.end.y;

        /* m1,m2: slope of each line */
        let m1 = (y2 - y1) / (x2 - x1);
        let m2 = (y4 - y3) / (x4 - x3);

        m1 = [Infinity, -Infinity].includes(m1) ? 360 : m1;
        m2 = [Infinity, -Infinity].includes(m2) ? 360 : m2;

        slope1 = m1;
        slope2 = m2;

        /* theta: angle between the vectors */
        // theta is the angle between the velocity and the wall
        tanTheta = (m1 - m2) / (1 + m1 * m2);
        theta = Math.atan(tanTheta);

        /* wallNormal: Normal to the wall with in the direction of the incoming speed*/
        // https://stackoverflow.com/a/1243676/4194289
        const dx = x4 - x3;
        const dy = y4 - y3;

        const possibleWallNormal1 = new Victor(-dy, dx);
        const possibleWallNormal2 = new Victor(dy, -dx);

        // Test points are used to determine which side of the line each normal points to
        // to allow choosing the normal pointing in the incoming direction of v1
        const testPointWallNormal1 = intersection.clone().add(possibleWallNormal1);
        const testPointWallNormal2 = intersection.clone().add(possibleWallNormal2);

        if (
            v1.position.distanceSq(testPointWallNormal1) <
            v1.position.distanceSq(testPointWallNormal2)
        ) {
            wallNormal = possibleWallNormal1;
        } else {
            wallNormal = possibleWallNormal2;
        }

        /* u,w: Components of the speed along the wall and the normal */
        // https://stackoverflow.com/a/573206/4194289
        const n = wallNormal.clone().normalize();
        const v = v1.end.clone().subtract(v1.position);

        // u = (v · n / n · n) n
        // w = v − u
        const u = n.multiplyScalar(v.dot(n));
        const w = v.subtract(u);

        /* bouncedVelocity: Resulting velocity affected by friction and restitution */
        const r = restitutionCoefficient;
        const f = frictionCoefficient;
        bouncedVelocity = w.multiplyScalar(1 - f).subtract(u.multiplyScalar(r));
    };

    const radToDeg = (r: number) => r * (180 / Math.PI);

    const v1 = {
        position: new Victor(400, 200),
        end: new Victor(500, 400),
        color: 'white'
    };
    const v2 = {
        position: new Victor(200, 300),
        end: new Victor(600, 300),
        color: 'yellow'
    };
    const intersection = new Victor(-1, -1);
    let selected: string | undefined;

    const sketch: Sketch = (p5) => {
        p5.setup = () => {
            _p5 = p5;
            p5.createCanvas(900, 600);
        };
        p5.draw = () => {
            p5.background(0);

            updateIntersection();
            updateAngle();

            p5.stroke(v1.color);
            p5.line(v1.position.x, v1.position.y, v1.end.x, v1.end.y);
            p5.stroke(v2.color);
            p5.strokeWeight(3);
            p5.line(v2.position.x, v2.position.y, v2.end.x, v2.end.y);
            p5.strokeWeight(1);
            p5.noStroke();

            p5.fill('green');
            p5.circle(v1.position.x, v1.position.y, 10);
            p5.circle(v2.position.x, v2.position.y, 10);

            p5.fill('red');
            p5.circle(v1.end.x, v1.end.y, 10);
            p5.circle(v2.end.x, v2.end.y, 10);

            p5.fill(255);
            p5.text(vecStr(v1.position), v1.position.x, v1.position.y);
            p5.text(vecStr(v1.end), v1.end.x, v1.end.y);
            p5.text(vecStr(v2.position), v2.position.x, v2.position.y);
            p5.text(vecStr(v2.end), v2.end.x, v2.end.y);

            if (intersection.x > 0) {
                p5.fill('blue');
                p5.circle(intersection.x, intersection.y, 8);

                if (wallNormal) {
                    p5.stroke('red');
                    p5.line(
                        intersection.x,
                        intersection.y,
                        intersection.x + wallNormal.x,
                        intersection.y + wallNormal.y
                    );
                }

                if (bouncedVelocity) {
                    p5.stroke('green');
                    p5.line(
                        intersection.x,
                        intersection.y,
                        intersection.x + bouncedVelocity.x,
                        intersection.y + bouncedVelocity.y
                    );
                }
            }

            if (p5.mouseIsPressed) {
                const mousePosition = new Victor(p5.mouseX, p5.mouseY).unfloat();
                if (!selected) {
                    if (mousePosition.distance(v1.position) < 20) {
                        selected = '1pos';
                    } else if (mousePosition.distance(v1.end) < 20) {
                        selected = '1end';
                    } else if (mousePosition.distance(v2.position) < 20) {
                        selected = '2pos';
                    } else if (mousePosition.distance(v2.end) < 20) {
                        selected = '2end';
                    }
                }

                if (selected === '1pos') {
                    const diff = v1.end.clone().subtract(v1.position);
                    v1.position = mousePosition;
                    v1.end = v1.position.clone().add(diff);
                } else if (selected === '1end') {
                    v1.end = mousePosition;
                } else if (selected === '2pos') {
                    const diff = v2.end.clone().subtract(v2.position);
                    v2.position = mousePosition;
                    v2.end = v2.position.clone().add(diff);
                } else if (selected === '2end') {
                    v2.end = mousePosition;
                }
            } else {
                selected = undefined;
            }
        };
    };

    onDestroy(() => {
        _p5?.remove();
    });
</script>

<div class="d-flex justify-content-center">
    <p>
        The <span style="color:{v1.color}">{v1.color} line</span> represents an incoming velocity
        and the <span style="color:{v2.color}">{v2.color} line</span> is a wall to bounce of off.
    </p>
    <p>
        The <span style="color:{'red'}">red line</span> is the normal vector of the wall. And the
        <span style="color:{'green'}">green line</span> is the velocity after the bounce applied to the
        intersection point and affected by restitution and friction coefficient.
    </p>
    <p>Move the lines around by drag-and-droping each ends.</p>

    <P5 {sketch} />

    <table>
        <tbody>
            <tr>
                <th>Friction coefficient</th>
                <td
                    ><input
                        bind:value={frictionCoefficient}
                        type="number"
                        min="0"
                        max="1"
                        step="0.1"
                    /></td
                >
                <td>From 0 (No friction) to 1 (Maximal friction)</td>
            </tr>
            <tr>
                <th>Restitution coefficient</th>
                <td
                    ><input
                        bind:value={restitutionCoefficient}
                        type="number"
                        min="0"
                        max="1"
                        step="0.1"
                    /></td
                >
                <td>From 0 (Fully inelastic) to 1 (Fully elastic)</td>
            </tr>
            <tr>
                <th>Slope</th>
                <td>Velocity: {slope1.toFixed(2)}</td>
                <td>Wall: {slope2.toFixed(2)}</td>
            </tr>
            <tr>
                <th>Theta</th>
                <td>{theta.toFixed(2)} rad</td>
                <td>{radToDeg(theta).toFixed(2)} deg</td>
            </tr>
            <tr>
                <th>Bounced velocity</th>
                <td>{bouncedVelocity?.clone().unfloat().toString()}</td>
                <td>
                    Mag: {bouncedVelocity?.length().toFixed(2)}
                    ({(
                        (100 * bouncedVelocity?.length()) /
                        v1.end.clone().subtract(v1.position)?.length()
                    ).toFixed(2)})% of incoming
                </td>
            </tr>
            <tr>
                <th>Incoming velocity</th>
                <td>{v1.end.clone().subtract(v1.position).unfloat().toString()}</td>
                <td>Mag: {v1.end.clone().subtract(v1.position)?.length().toFixed(2)} </td>
            </tr>
        </tbody>
    </table>
</div>

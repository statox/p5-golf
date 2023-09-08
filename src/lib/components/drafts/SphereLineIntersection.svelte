<script lang="ts">
    import type p5 from 'p5';
    import P5, { type Sketch } from 'p5-svelte';
    import { onDestroy } from 'svelte';
    import Victor from 'victor';

    let _p5: p5;
    let watcherA = new Victor(0, 0);
    let watcherB = new Victor(0, 0);

    // https://stackoverflow.com/a/1084899
    const updateIntersection = () => {
        watcherA = intersection.clone();
        watcherB = intersection.clone();
        const E = wall.position.clone();
        const L = wall.end.clone();
        const C = sphere.position.clone();
        const r = sphere.radius;

        const d = L.clone().subtract(E);
        const f = E.clone().subtract(C);

        const a = d.dot(d);
        const b = f.dot(d) * 2;
        const c = f.dot(f) - r * r;

        let discriminant = b * b - 4 * a * c;

        if (discriminant < 0) {
            intersection.x = -1;
            intersection.y = -1;
            sphere.intersect = false;
            sphere.intersectType = 'white';
            return;
        }

        discriminant = Math.sqrt(discriminant);

        // either solution may be on or off the ray so we need to test both
        // t1 is always the smaller value, because BOTH discriminant and
        // a are nonnegative.
        const t1 = (-b - discriminant) / (2 * a);
        const t2 = (-b + discriminant) / (2 * a);

        // 3x HIT cases:
        //          -o->             --|-->  |            |  --|->
        // Impale(t1 hit,t2 hit), Poke(t1 hit,t2>1), ExitWound(t1<0, t2 hit),

        // 3x MISS cases:
        //       ->  o                     o ->              | -> |
        // FallShort (t1>1,t2>1), Past (t1<0,t2<0), CompletelyInside(t1<0, t2>1)

        // Impale, Poke
        if (t1 >= 0 && t1 <= 1) {
            sphere.intersect = true;
            sphere.intersectType = 'red';
            const newIntersection = E.add(d.multiplyScalar(t1));
            intersection.copy(newIntersection);

            const intersectionToSphere = sphere.position.clone().subtract(intersection);
            const intersectionToEnd = wall.end.clone().subtract(intersection);

            const a = intersectionToSphere.clone();
            const b = intersectionToEnd.clone();
            const sphereProjectedOnEnd = b.multiplyScalar(a.dot(b) / b.dot(b));

            watcherA = intersectionToSphere;
            watcherB = sphereProjectedOnEnd;
            return;
        }

        // ExitWound
        if (t2 >= 0 && t2 <= 1) {
            sphere.intersect = true;
            sphere.intersectType = 'blue';
            const newIntersection = E.add(d.multiplyScalar(t2));
            intersection.copy(newIntersection);

            const intersectionToSphere = sphere.position.clone().subtract(intersection);
            const intersectionToStart = wall.position.clone().subtract(intersection);

            const a = intersectionToSphere.clone();
            const b = intersectionToStart.clone();
            const sphereProjectedOnStart = b.multiplyScalar(a.dot(b) / b.dot(b));

            watcherA = intersectionToSphere;
            watcherB = sphereProjectedOnStart;
            return;
        }

        // no intn: FallShort, Past, CompletelyInside
        sphere.intersect = false;
        sphere.intersectType = 'white';
    };

    const vecStr = (v: Victor) => {
        const x = v.x.toFixed(0);
        const y = v.y.toFixed(0);
        return `${x};${y}`;
    };

    const sphere = {
        intersect: false,
        intersectType: 'white',
        radius: 100,
        position: new Victor(200, 200),
        end: new Victor(600, 400)
    };
    const wall = {
        position: new Victor(250, 300),
        end: new Victor(700, 300)
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

            p5.noFill();
            p5.stroke(255);
            p5.line(sphere.position.x, sphere.position.y, sphere.end.x, sphere.end.y);
            p5.line(wall.position.x, wall.position.y, wall.end.x, wall.end.y);
            p5.noStroke();

            p5.stroke(sphere.intersectType);
            p5.circle(sphere.position.x, sphere.position.y, sphere.radius * 2);
            p5.noStroke();

            p5.fill('green');
            p5.circle(sphere.position.x, sphere.position.y, 10);
            p5.circle(wall.position.x, wall.position.y, 10);

            p5.fill('red');
            p5.circle(sphere.end.x, sphere.end.y, 10);
            p5.circle(wall.end.x, wall.end.y, 10);

            p5.fill(255);
            p5.text(vecStr(sphere.position), sphere.position.x, sphere.position.y);
            p5.text(vecStr(sphere.end), sphere.end.x, sphere.end.y);
            p5.text(vecStr(wall.position), wall.position.x, wall.position.y);
            p5.text(vecStr(wall.end), wall.end.x, wall.end.y);

            if (intersection.x > 0) {
                p5.fill('blue');
                p5.circle(intersection.x, intersection.y, 8);
                p5.stroke('purple');
                p5.line(
                    intersection.x,
                    intersection.y,
                    intersection.x + watcherA.x,
                    intersection.y + watcherA.y
                );
                p5.stroke('yellow');
                p5.line(
                    intersection.x,
                    intersection.y,
                    intersection.x + watcherB.x,
                    intersection.y + watcherB.y
                );
                p5.noStroke();
            }

            if (p5.mouseIsPressed) {
                const mousePosition = new Victor(p5.mouseX, p5.mouseY).unfloat();
                if (!selected) {
                    if (mousePosition.distance(sphere.position) < 20) {
                        selected = '1pos';
                    } else if (mousePosition.distance(sphere.end) < 20) {
                        selected = '1end';
                    } else if (mousePosition.distance(wall.position) < 20) {
                        selected = '2pos';
                    } else if (mousePosition.distance(wall.end) < 20) {
                        selected = '2end';
                    }
                }

                let diff = mousePosition.clone().subtract(sphere.position);
                if (selected === '1pos') {
                    sphere.position = mousePosition;
                } else if (selected === '1end') {
                    sphere.end = mousePosition;
                } else if (selected === '2pos') {
                    wall.position = mousePosition;
                } else if (selected === '2end') {
                    wall.end = mousePosition;
                }

                if (p5.keyIsDown(p5.CONTROL)) {
                    sphere.end.add(diff);
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
    <P5 {sketch} />
</div>

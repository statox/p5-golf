<script lang="ts">
    import type p5 from 'p5';
    import P5, { type Sketch } from 'p5-svelte';
    import { onDestroy } from 'svelte';
    import Victor from 'victor';

    let _p5: p5;
    let t = 0;
    let u = 0;

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
        t = numeratorT / denominator;
        const numeratorU = (x1 - x3) * (y1 - y2) - (y1 - y3) * (x1 - x2);
        u = numeratorU / denominator;

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

    const v1 = {
        position: new Victor(200, 200),
        end: new Victor(600, 400)
    };
    const v2 = {
        position: new Victor(300, 500),
        end: new Victor(500, 200)
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

            p5.stroke(255);
            p5.line(v1.position.x, v1.position.y, v1.end.x, v1.end.y);
            p5.line(v2.position.x, v2.position.y, v2.end.x, v2.end.y);
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
                    v1.position = mousePosition;
                } else if (selected === '1end') {
                    v1.end = mousePosition;
                } else if (selected === '2pos') {
                    v2.position = mousePosition;
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
    <P5 {sketch} />
    <p>t: {t}</p>
    <p>u: {u}</p>
</div>

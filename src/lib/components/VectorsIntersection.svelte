<script lang="ts">
    import type p5 from 'p5';
    import P5, { type Sketch } from 'p5-svelte';
    import { onDestroy } from 'svelte';
    import Victor from 'victor';

    let _p5: p5;

    const v1 = {
        position: new Victor(10, 10),
        end: new Victor(100, 100)
    };
    const v2 = {
        position: new Victor(100, 10),
        end: new Victor(10, 100)
    };
    let selected: string | undefined;

    const sketch: Sketch = (p5) => {
        p5.setup = () => {
            _p5 = p5;
            p5.createCanvas(900, 600);
            p5.stroke(255);
        };
        p5.draw = () => {
            p5.background(0);

            p5.line(v1.position.x, v1.position.y, v1.end.x, v1.end.y);
            p5.line(v2.position.x, v2.position.y, v2.end.x, v2.end.y);

            if (p5.mouseIsPressed) {
                const mousePosition = new Victor(p5.mouseX, p5.mouseY);
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
</div>

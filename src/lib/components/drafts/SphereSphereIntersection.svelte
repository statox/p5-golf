<script lang="ts">
    import { createPhysicObjects } from '$lib/engine';
    import { mouseIsPressedOnScreen, screenToWorldScale, worldToScreenScale } from '$lib/services/p5utils';
    import type p5 from 'p5';
    import P5, { type Sketch } from 'p5-svelte';
    import { onDestroy } from 'svelte';
    import Victor from 'victor';

    console.clear();
    let _p5: p5;
    const s1 = createPhysicObjects({
        geometry: {
            type: 'sphere',
            r: 10
        },
        position: new Victor(15, 50),
    });
    const s2 = createPhysicObjects({
        geometry: {
            type: 'sphere',
            r: 20
        },
        position: new Victor(50, 50),
    });

    let intersect = false;
    let intersectionPoint1: Victor | undefined;
    let intersectionPoint2: Victor | undefined;
    const testIntersect = () => {
        const r1 = s1.geometry.r;
        const r2 = s2.geometry.r;

        const dSq = s1.position.distanceSq(s2.position);
        const minDSq = (r1 + r2) ** 2;

        if (dSq > minDSq) {
            intersect = false;
            intersectionPoint1 = undefined;
            return;
        }

        intersect = true;

        const l = s2.position.clone().subtract(s1.position);
        const r = r1 / (r1 + r2);
        l.multiplyScalar(r);
        intersectionPoint1 = s1.position.clone().add(l);
    };
    const SCALE = 6;
    const sketch: Sketch = (p5) => {
        const worldDimensions = new Victor(100, 100)
        const screenDimensions = worldToScreenScale(worldDimensions, SCALE);
        p5.setup = () => {
            _p5 = p5;
            p5.createCanvas(screenDimensions.x, screenDimensions.y);
        };
        p5.draw = () => {
            p5.background(0);

            if (mouseIsPressedOnScreen(p5)) {
                const worldPos = screenToWorldScale(new Victor(p5.mouseX, p5.height - p5.mouseY), SCALE) as Victor;
                if (worldPos.distance(s1.position) <= s1.geometry.r) {
                    s1.position.copy(worldPos);
                }
            }

            testIntersect();
            p5.stroke(intersect ? 'red' : 'white');
            p5.noFill();

            const s1pos = worldToScreenScale(s1.position, SCALE);
            p5.circle(s1pos.x, p5.height - s1pos.y, 2 * s1.geometry.r * SCALE);
            p5.text(`${s1.position.x.toFixed(0)};${s1.position.y.toFixed(0)}`, s1pos.x, p5.height - s1pos.y);

            const s2pos = worldToScreenScale(s2.position, SCALE);
            p5.circle(s2pos.x, p5.height - s2pos.y, 2 * s2.geometry.r * SCALE);
            p5.text(`${s2.position.x.toFixed(0)};${s2.position.y.toFixed(0)}`, s2pos.x, p5.height - s2pos.y);

            if (intersectionPoint1) {
                p5.fill('blue');
                p5.stroke('blue');
                const interPos = worldToScreenScale(intersectionPoint1, SCALE);
                p5.circle(interPos.x, p5.height - interPos.y, 10);
            }
            if (intersectionPoint2) {
                p5.fill('green');
                p5.stroke('green');
                const interPos = worldToScreenScale(intersectionPoint2, SCALE);
                p5.circle(interPos.x, p5.height - interPos.y, 10);
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

<table>
    <tr>
        <td>s1 radius</td>
        <td>
            <input type=number bind:value={s1.geometry.r} min=0/>
        </td>
    </tr>
    <tr>
        <td>s2 radius</td>
        <td>
            <input type=number bind:value={s2.geometry.r} min=0/>
        </td>
    </tr>
</table>

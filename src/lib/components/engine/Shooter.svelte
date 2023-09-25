<script lang="ts">
    import Victor from "victor";


    export let onShoot: (shoot: Victor) => void;

    let angle = 0;
    let mag = 0.5; // [0, 1]

    const shoot = () => {
        const shoot = new Victor(1, 0);
        shoot.rotateDeg(angle);
        shoot.multiplyScalar(mag);

        onShoot(shoot);
    };
</script>

<p class="title">Shooter</p>

<span>
    <label for="angleSlider">Angle</label>
    <input id="angleSlider" type="range" bind:value={angle} min=0 max=360 />
    {angle} deg
</span>

<span>
    <label for="magSlider">Magnitude</label>
    <input id="magSlider" type="range" bind:value={mag} min=0 max=1 step=0.01 />
    {mag}
</span>

<br/>

<button on:click={() => shoot()}>Shoot</button>


<style>
    .title {
    border-bottom: 1pt solid white;
    }
</style>

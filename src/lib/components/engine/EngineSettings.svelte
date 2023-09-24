<script lang="ts">
    import type { World } from "$lib/engine";

    export let world: World;
</script>

<p class="title">Engine settings</p>

{#if world}
<table>
    <tbody>
        <tr>
            <th>dt</th>
            <td>
                <input bind:value={world.dt} type="number" min=0 max=0.5 step=0.001/>
            </td>
        </tr>
        <tr>
            <th>drag</th>
            <td>
                <input bind:value={world.drag} type="number" min=0 max=0.01 step=0.001/>
            </td>
        </tr>
        <tr>
            <th>gravity enabled</th>
            <td>
                <input type="checkbox" bind:checked={world.gravityEnabled} />
            </td>
        </tr>
    </tbody>
</table>

<p>{JSON.stringify(world)}</p>
{/if}


<style>
    .title {
    border-bottom: 1pt solid white;
    }
</style>

<script lang="ts">
    import Select from 'svelte-select';
    import TerrainGenerator from '$lib/components/drafts/TerrainGenerator.svelte';
    import Ball from '$lib/components/drafts/Ball.svelte';
    import Physics1d from '$lib/components/drafts/Physics1d.svelte';
    import BounceDirection from '$lib/components/drafts/BounceDirection.svelte';
    import VectorsIntersection from '$lib/components/drafts/VectorsIntersection.svelte';
    import VectorsAngle from '$lib/components/drafts/VectorsAngle.svelte';
    import SphereLineIntersection from '$lib/components/drafts/SphereLineIntersection.svelte';
    import SphereSphereIntersection from '$lib/components/drafts/SphereSphereIntersection.svelte';

    const tabs = [
        { label: 'Sphere-Sphere intersection', value: SphereSphereIntersection },
        { label: 'Bounce', value: VectorsAngle },
        { label: 'Sphere-Line intersection', value: SphereLineIntersection },
        { label: 'Vectors intersection', value: VectorsIntersection },
        { label: 'Terrain Generator', value: TerrainGenerator },
        { label: 'Ball', value: Ball },
        { label: 'Physics 1d', value: Physics1d },
        { label: 'Bounce direction', value: BounceDirection }
    ];

    let currentTab = tabs[0];
</script>

<div>
    <span>This page is a list of preparatory tests. They don't use the actual engine (or only some part of it) and I use them to test out the math and prepare my algorithms.</span>
    <br/>
    <span>Use the selection menu to see the different pages</span>
</div>
<br/>

<Select items={tabs} showChevron={true} bind:value={currentTab}/>
<svelte:component this={currentTab.value} />

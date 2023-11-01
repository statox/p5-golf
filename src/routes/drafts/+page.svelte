<script lang="ts">
    import ComponentSelector from '$lib/components/utils/ComponentSelector.svelte';

    import Forces from '$lib/components/drafts/Forces/Main.svelte';
    import TerrainGenerator from '$lib/components/drafts/TerrainGenerator.svelte';
    import Ball from '$lib/components/drafts/Ball.svelte';
    import BouncingBallGraph from '$lib/components/drafts/BouncingBallGraph.svelte';
    import TerrainBounceDirection from '$lib/components/drafts/TerrainBounceDirection.svelte';
    import LineLineIntersection from '$lib/components/drafts/LineLineIntersection.svelte';
    import BounceVelocity from '$lib/components/drafts/BounceVelocity.svelte';
    import SphereLineIntersection from '$lib/components/drafts/SphereLineIntersection.svelte';
    import SphereSphereIntersection from '$lib/components/drafts/SphereSphereIntersection.svelte';

    const tabs = [
        { label: 'Forces', value: Forces },
        { label: 'Intersection - Sphere-Sphere', value: SphereSphereIntersection },
        { label: 'Intersection - Sphere-Line', value: SphereLineIntersection },
        { label: 'Intersection - Line-Line', value: LineLineIntersection },
        { label: 'Bounce velocity', value: BounceVelocity },
        { label: 'Terrain - Generator', value: TerrainGenerator },
        { label: 'Terrain - Bounce direction', value: TerrainBounceDirection },
        { label: 'Ball bounce with graph', value: BouncingBallGraph },
        { label: 'Broken bouncing ball', value: Ball },
    ];
</script>

<div>
    <span>This page is a list of preparatory tests. They don't use the actual engine (or only some part of it) and I use them to test out the math and prepare my algorithms.</span>
    <br/>
    <span>Use the selection menu to see the different pages</span>
</div>
<br/>

<ComponentSelector {tabs}/>

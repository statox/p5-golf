<script>
    import { Tabs, Tab, TabList, TabPanel } from 'svelte-tabs';
    import TerrainGenerator from '$lib/components/drafts/TerrainGenerator.svelte';
    import Ball from '$lib/components/drafts/Ball.svelte';
    import Physics1d from '$lib/components/drafts/Physics1d.svelte';
    import BounceDirection from '$lib/components/drafts/BounceDirection.svelte';
    import VectorsIntersection from '$lib/components/drafts/VectorsIntersection.svelte';
    import VectorsAngle from '$lib/components/drafts/VectorsAngle.svelte';
    import SphereLineIntersection from '$lib/components/drafts/SphereLineIntersection.svelte';

    const tabs = [
        { title: 'Bounce', component: VectorsAngle },
        { title: 'Sphere-Line intersection', component: SphereLineIntersection },
        { title: 'Vectors intersection', component: VectorsIntersection },
        { title: 'Terrain Generator', component: TerrainGenerator },
        { title: 'Ball', component: Ball },
        { title: 'Physics 1d', component: Physics1d },
        { title: 'Bounce direction', component: BounceDirection }
    ];
</script>

<Tabs>
    <TabList>
        {#each tabs as tab}
            <Tab>{tab.title}</Tab>
        {/each}
    </TabList>

    {#each tabs as tab}
        <TabPanel>
            <svelte:component this={tab.component} />
        </TabPanel>
    {/each}
</Tabs>

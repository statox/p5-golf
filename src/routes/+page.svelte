<script>
    import { Tabs, Tab, TabList, TabPanel } from 'svelte-tabs';
    import TerrainGenerator from '$lib/components/TerrainGenerator.svelte';
    import Ball from '$lib/components/Ball.svelte';
    import Physics1d from '$lib/components/Physics1d.svelte';
    import BounceDirection from '$lib/components/BounceDirection.svelte';
    import VectorsIntersection from '$lib/components/VectorsIntersection.svelte';
    import SphereLineIntersection from '$lib/components/SphereLineIntersection.svelte';
</script>

<Tabs>
    <TabList>
        <Tab>Bounce direction</Tab>
        <Tab>Physics 1d</Tab>
        <Tab>Ball</Tab>
        <Tab>Terrain Generator</Tab>
        <Tab>Vectors intersection</Tab>
        <Tab>Sphere-Line intersection</Tab>
    </TabList>

    <TabPanel>
        <BounceDirection />
    </TabPanel>
    <TabPanel>
        <Physics1d />
    </TabPanel>
    <TabPanel>
        <Ball />
    </TabPanel>
    <TabPanel>
        <TerrainGenerator />
    </TabPanel>
    <TabPanel>
        <VectorsIntersection />
    </TabPanel>
    <TabPanel>
        <SphereLineIntersection />
    </TabPanel>
</Tabs>

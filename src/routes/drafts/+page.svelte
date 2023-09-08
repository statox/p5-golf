<script>
    import { Tabs, Tab, TabList, TabPanel } from 'svelte-tabs';
    import TerrainGenerator from '$lib/components/drafts/TerrainGenerator.svelte';
    import Ball from '$lib/components/drafts/Ball.svelte';
    import Physics1d from '$lib/components/drafts/Physics1d.svelte';
    import BounceDirection from '$lib/components/drafts/BounceDirection.svelte';
    import VectorsIntersection from '$lib/components/drafts/VectorsIntersection.svelte';
    import VectorsAngle from '$lib/components/drafts/VectorsAngle.svelte';
    import SphereLineIntersection from '$lib/components/drafts/SphereLineIntersection.svelte';
</script>

<Tabs>
    <TabList>
        <Tab>Bounce direction</Tab>
        <Tab>Physics 1d</Tab>
        <Tab>Ball</Tab>
        <Tab>Terrain Generator</Tab>
        <Tab>Vectors intersection</Tab>
        <Tab>Sphere-Line intersection</Tab>
        <Tab>Vectors angles</Tab>
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
    <TabPanel>
        <VectorsAngle />
    </TabPanel>
</Tabs>

<script>
    import { Tabs, Tab, TabList, TabPanel } from 'svelte-tabs';
    import TerrainGenerator from '$lib/components/TerrainGenerator.svelte';
    import Ball from '$lib/components/Ball.svelte';
    import Physics1d from '$lib/components/Physics1d.svelte';
    import BounceDirection from '$lib/components/BounceDirection.svelte';
</script>

<Tabs>
    <TabList>
        <Tab>Bounce direction</Tab>
        <Tab>Physics 1d</Tab>
        <Tab>Ball</Tab>
        <Tab>Terrain Generator</Tab>
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
</Tabs>

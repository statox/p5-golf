<script>
    import { Tabs, Tab, TabList, TabPanel } from 'svelte-tabs';
    import TerrainGenerator from '$lib/components/TerrainGenerator.svelte';
    import Ball from '$lib/components/Ball.svelte';
    import Physics1d from '$lib/components/Physics1d.svelte';
</script>

<Tabs>
    <TabList>
        <Tab>Physics 1d</Tab>
        <Tab>Ball</Tab>
        <Tab>Terrain Generator</Tab>
    </TabList>

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

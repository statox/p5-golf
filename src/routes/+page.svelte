<script>
    import { Tabs, Tab, TabList, TabPanel } from 'svelte-tabs';
    import TerrainGenerator from '$lib/components/TerrainGenerator.svelte';
    import Ball from '$lib/components/Ball.svelte';
</script>

<Tabs>
    <TabList>
        <Tab>Terrain Generator</Tab>
        <Tab>Ball</Tab>
    </TabList>

    <TabPanel>
        <TerrainGenerator />
    </TabPanel>
    <TabPanel>
        <Ball />
    </TabPanel>
</Tabs>

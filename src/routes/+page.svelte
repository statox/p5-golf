<script>
    import { Tabs, Tab, TabList, TabPanel } from 'svelte-tabs';
    import TerrainGenerator from '$lib/components/TerrainGenerator.svelte';
</script>

<Tabs>
    <TabList>
        <Tab>Terrain Generator</Tab>
    </TabList>

    <TabPanel>
        <TerrainGenerator />
    </TabPanel>
</Tabs>

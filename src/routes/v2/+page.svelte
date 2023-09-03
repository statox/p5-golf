<script>
    import { Tabs, Tab, TabList, TabPanel } from 'svelte-tabs';
    import TestEngine from '$lib/components/v2/TestEngine.svelte';
    import TestCollisions from '$lib/components/v2/TestCollisions.svelte';
</script>

<Tabs>
    <TabList>
        <Tab>Test collisions</Tab>
        <Tab>Test engine</Tab>
    </TabList>

    <TabPanel>
        <TestCollisions />
    </TabPanel>
    <TabPanel>
        <TestEngine />
    </TabPanel>
</Tabs>

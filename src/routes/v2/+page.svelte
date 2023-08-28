<script>
    import { Tabs, Tab, TabList, TabPanel } from 'svelte-tabs';
    import TestEngine from '$lib/components/v2/TestEngine.svelte';
</script>

<Tabs>
    <TabList>
        <Tab>Test engine</Tab>
    </TabList>

    <TabPanel>
        <TestEngine />
    </TabPanel>
</Tabs>

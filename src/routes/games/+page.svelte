<script>
    import { Tabs, Tab, TabList, TabPanel } from 'svelte-tabs';
    import Bucket from '$lib/components/games/Bucket/Main.svelte';
    const tabs = [
        { title: 'Bucket', component: Bucket }
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

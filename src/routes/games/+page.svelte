<script>
    import { Tabs, Tab, TabList, TabPanel } from 'svelte-tabs';
    import Golf from '$lib/components/games/Golf/Main.svelte';
    const tabs = [
        { title: 'Golf', component: Golf }
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

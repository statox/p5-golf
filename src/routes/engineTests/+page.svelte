<script>
    import { Tabs, Tab, TabList, TabPanel } from 'svelte-tabs';
    import TestEngine from '$lib/components/engineTests/TestEngine.svelte';
    import TestCollisions from '$lib/components/engineTests/TestCollisions.svelte';
    import TestCollisions2 from '$lib/components/engineTests/TestCollisions2.svelte';
    import TestCollisions3 from '$lib/components/engineTests/TestCollisions3.svelte';
    import Obstacles from '$lib/components/engineTests/Obstacles/Main.svelte';

    const tabs = [
        { title: 'Obstacles', component: Obstacles },
        { title: 'Test collisions 3', component: TestCollisions3 },
        { title: 'Test collisions 2', component: TestCollisions2 },
        { title: 'Test collisions', component: TestCollisions },
        { title: 'Test engine', component: TestEngine }
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

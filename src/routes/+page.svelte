<script>
    import { Tabs, Tab, TabList, TabPanel } from 'svelte-tabs';
    import Game from '$lib/components/Game.svelte';
</script>

<Tabs>
    <TabList>
        <Tab>Game</Tab>
    </TabList>

    <TabPanel>
        <Game />
    </TabPanel>
</Tabs>

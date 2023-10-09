<script lang="ts">
    import type { ComponentType } from 'svelte';
    import Select from 'svelte-select';

    export let tabs: {
        label: string;
        value: ComponentType;
    }[];

    let currentTab = tabs[0];
</script>

<Select items={tabs} showChevron={true} bind:value={currentTab}/>
<svelte:component this={currentTab.value} />

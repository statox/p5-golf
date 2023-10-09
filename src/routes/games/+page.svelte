<script>
    import Select from 'svelte-select';
    import Bucket from '$lib/components/games/Bucket/Main.svelte';
    const tabs = [
        { label: 'Bucket', value: Bucket }
    ];

    let currentTab = tabs[0];
</script>

<div>
    <span>A list of games implemented using the engine.</span>
</div>
<br/>

<Select items={tabs} showChevron={true} bind:value={currentTab}/>
<svelte:component this={currentTab.value} />

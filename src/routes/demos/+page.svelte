<script>
    import ComponentSelector from '$lib/components/utils/ComponentSelector.svelte';

    import Bucket from '$lib/components/demos/Bucket/Main.svelte';
    const tabs = [
        { label: 'Bucket', value: Bucket }
    ];
</script>

<div>
    <span>A list of games implemented using the engine.</span>
</div>
<br/>

<ComponentSelector {tabs}/>

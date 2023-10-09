<script>
    import ComponentSelector from '$lib/components/utils/ComponentSelector.svelte';

    import TestEngine from '$lib/components/engineTests/TestEngine.svelte';
    import TestCollisions from '$lib/components/engineTests/TestCollisions.svelte';
    import TestCollisions2 from '$lib/components/engineTests/TestCollisions2.svelte';
    import TestCollisions3 from '$lib/components/engineTests/TestCollisions3.svelte';
    import Obstacles from '$lib/components/engineTests/Obstacles/Main.svelte';
    import Obstacles2 from '$lib/components/engineTests/Obstacles2/Main.svelte';

    const tabs = [
        { label: 'Obstacles2', value: Obstacles2 },
        { label: 'Obstacles', value: Obstacles },
        { label: 'Test collisions 3', value: TestCollisions3 },
        { label: 'Test collisions 2', value: TestCollisions2 },
        { label: 'Test collisions', value: TestCollisions },
        { label: 'Test engine', value: TestEngine }
    ];
</script>

<div>
    <span>This page is a list of engine tests. They use the actual engine and allow me to setup different situations and check manually for regressions and bugs.</span>
    <br/>
    <span>Use the selection menu to see the different pages</span>
</div>
<br/>

<ComponentSelector {tabs}/>

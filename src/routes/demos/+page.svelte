<script>
    import ComponentSelector from '$lib/components/utils/ComponentSelector.svelte';

    import Bucket from '$lib/components/demos/Bucket/Main.svelte';
    import Particles from '$lib/components/demos/Particles/Main.svelte';
    import ParticlesLife from '$lib/components/demos/ParticlesLife/Main.svelte';

    const tabs = [
        { label: 'Particles Life', value: ParticlesLife },
        { label: 'Particles', value: Particles },
        { label: 'Bucket', value: Bucket }
    ];
</script>

<div>
    <span>A list of games implemented using the engine.</span>
</div>
<br/>

<ComponentSelector {tabs}/>

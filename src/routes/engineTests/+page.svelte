<script>
    import ComponentSelector from '$lib/components/utils/ComponentSelector.svelte';

    import Ballpool from '$lib/components/engineTests/Ballpool/Main.svelte';
    import SingleBallAndGround from '$lib/components/engineTests/SingleBallAndGround.svelte';
    import SphereLinePullAppart from '$lib/components/engineTests/SphereLinePullAppart.svelte';
    import SphereLineDynamicsCollisions1 from '$lib/components/engineTests/SphereLineDynamicsCollisions1.svelte';
    import SphereLineDynamicsCollisions2 from '$lib/components/engineTests/SphereLineDynamicsCollisions2.svelte';
    import EngineSettings from '$lib/components/engineTests/EngineSettings/Main.svelte';
    import MultipleBalls from '$lib/components/engineTests/MultipleBalls/Main.svelte';
    import LineSphereColliderTest from '$lib/components/engineTests/LineSphereColliderTest.svelte';
    import SphereSphereColliderTest from '$lib/components/engineTests/SphereSphereColliderTest.svelte';

    const tabs = [
        { label: 'Ball pool', value: Ballpool },
        { label: 'Sphere Sphere Collider', value: SphereSphereColliderTest },
        { label: 'Line Sphere Collider', value: LineSphereColliderTest },
        { label: 'Perfs - Multiple balls', value: MultipleBalls },
        { label: 'Playground - Engine settings', value: EngineSettings },
        { label: 'Dynamics + collisions - 1', value: SphereLineDynamicsCollisions2 },
        { label: 'Dynamics + collisions - 2', value: SphereLineDynamicsCollisions1 },
        { label: 'Sphere Line - pull apart', value: SphereLinePullAppart },
        { label: 'One ball bounce', value: SingleBallAndGround }
    ];
</script>

<div>
    <span>This page is a list of engine tests. They use the actual engine and allow me to setup different situations and check manually for regressions and bugs.</span>
    <br/>
    <span>Use the selection menu to see the different pages</span>
</div>
<br/>

<ComponentSelector {tabs}/>

<script>
    import { base } from '$app/paths';
</script>

<header>
    <h1>My physics engine</h1>

    <nav>
        <a href="{base}/">Home</a> |
        <a href="{base}/drafts">Drafts</a> |
        <a href="{base}/engineTests">Tests engine</a> |
        <a href="{base}/demos">Demos</a> |
    </nav>
</header>

<slot />

<style>
    :global(.svelte-tabs li.svelte-tabs__tab) {
        background-color: #bfbec6;
        margin-right: 4px;
    }
</style>

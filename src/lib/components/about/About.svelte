<script>
    import { base } from '$app/paths';
    import SvelteMarkdown from 'svelte-markdown';
    import ImageRenderer from './renderer/ImageAbout.svelte';
    import LinkRenderer from './renderer/LinkAbout.svelte';
    import source from './about.md';

    // Shitty hack because I didn't figure out how to tweak the pre-renderer
    // to properly include the baseUrl in the image links
    const sourceWithFixedLinks = source.replaceAll('{baseUrl}', base);
</script>

<SvelteMarkdown
    source={sourceWithFixedLinks}
    renderers={{ image: ImageRenderer, link: LinkRenderer }}
/>

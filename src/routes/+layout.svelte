<script>
  import "../app.css";
  import Header from "$lib/components/layout/Header.svelte";
  import Footer from "$lib/components/layout/Footer.svelte";
  import { base } from "$app/paths";

  let { children } = $props();
</script>

<svelte:head>
  <link rel="icon" href="{base}/favicon.webp" />
</svelte:head>

<Header />

{@render children()}

<Footer />

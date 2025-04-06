<script>
  import "../app.css";
  import Header from "$lib/components/layout/Header.svelte";
  import Footer from "$lib/components/layout/Footer.svelte";

  let { children } = $props();
</script>

<svelte:head>
  <link rel="icon" href="/favicon.webp" />
</svelte:head>
<Header />

{@render children()}

<Footer />

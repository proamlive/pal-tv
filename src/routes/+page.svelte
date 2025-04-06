<script>
  import Categories from "$lib/components/page/Categories.svelte";
  import Trending from "$lib/components/page/Trending.svelte";
  import YouthSpotlight from "$lib/components/page/YouthSpotlight.svelte";
  import FeaturedShows from "$lib/components/page/FeaturedShows.svelte";
  import UpcomingEvents from "$lib/components/page/UpcomingEvents.svelte";
  import Partners from "$lib/components/page/Partners.svelte";
  import Hero from "$lib/components/page/Hero.svelte";
</script>

<Hero />

<main class="max-w-7xl mx-auto px-6 py-8">
  <Categories />
  <Trending />
  <YouthSpotlight />
  <FeaturedShows />
  <UpcomingEvents />
  <Partners />
</main>

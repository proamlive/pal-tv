<script>
  import { base } from "$app/paths";
</script>

<section class="relative">
  <div class="w-full h-96 md:h-[32rem] bg-gray-900 overflow-hidden">
    <img
      src="{base}/hero.jpg"
      alt="Esports team competing"
      class="w-full h-full object-cover object-center opacity-70"
    />
  </div>

  <div class="absolute inset-0 hero-gradient flex items-center">
    <div class="max-w-7xl mx-auto px-6 py-12">
      <div class="max-w-xl">
        <div class="flex items-center space-x-2 mb-4">
          <span
            class="live-badge bg-red-600 text-white text-xs px-2 py-1 rounded uppercase font-bold animate-pulse"
          >
            Live Now
          </span>
          <span class="text-sm font-medium">
            Philadelphia High School Esports League
          </span>
        </div>
        <h1 class="text-3xl md:text-5xl font-bold leading-tight mb-4">
          Season 3 Championship Finals
        </h1>
        <p class="text-gray-300 mb-6">
          Watch the best high school esports athletes compete for glory in
          Rocket League, Valorant, and Super Smash Bros.
        </p>
        <div class="flex space-x-3">
          <button
            class="bg-primary hover:bg-purple-700 text-white px-6 py-3 rounded-full font-medium flex items-center"
          >
            <i class="fas fa-play mr-2"></i> Watch Live
          </button>
          <button
            class="bg-white bg-opacity-10 hover:bg-opacity-20 text-black px-6 py-3 rounded-full font-medium flex items-center"
          >
            <i class="fas fa-info-circle mr-2"></i> Details
          </button>
        </div>
      </div>
    </div>
  </div>
</section>

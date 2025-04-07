<script>
  import { base } from "$app/paths";
</script>

<section class="mt-8">
  <div class="flex justify-between items-center mb-4">
    <h2 class="text-xl font-bold">Trending Now</h2>
    <a href="#" class="text-sm text-primary hover:underline">View All</a>
  </div>

  <div
    class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6"
  >
    <!-- Video Card 1 -->
    <div
      class="video-card bg-gray-800 rounded-lg overflow-hidden hover:shadow-lg transition-shadow duration-300"
    >
      <div class="relative">
        <img
          src="{base}/dbfz.jpg"
          alt="Video thumbnail"
          class="w-full h-40 object-cover"
        />
        <div
          class="absolute inset-0 bg-black bg-opacity-30 flex items-center justify-center play-icon opacity-0 transition-opacity duration-300"
        >
          <div
            class="w-12 h-12 rounded-full bg-primary bg-opacity-90 flex items-center justify-center"
          >
            <i class="fas fa-play text-white"></i>
          </div>
        </div>
        <div
          class="absolute bottom-2 right-2 bg-black bg-opacity-70 text-white text-xs px-2 py-1 rounded"
        >
          24:15
        </div>
      </div>
      <div class="p-4">
        <h3 class="font-medium mb-1">
          From Bronze to Gold: Our Dragon Ball FighterZ Journey
        </h3>
        <p class="text-gray-400 text-sm mb-2">Marcus "Ace" Johnson</p>
        <div class="flex justify-between text-xs text-gray-400">
          <span>12.5K views</span>
          <span>3 days ago</span>
        </div>
      </div>
    </div>

    <!-- Video Card 2 -->
    <div
      class="video-card bg-gray-800 rounded-lg overflow-hidden hover:shadow-lg transition-shadow duration-300"
    >
      <div class="relative">
        <img
          src="{base}/hs.jpg"
          alt="Video thumbnail"
          class="w-full h-40 object-cover"
        />
        <div
          class="absolute inset-0 bg-black bg-opacity-30 flex items-center justify-center play-icon opacity-0 transition-opacity duration-300"
        >
          <div
            class="w-12 h-12 rounded-full bg-primary bg-opacity-90 flex items-center justify-center"
          >
            <i class="fas fa-play text-white"></i>
          </div>
        </div>
        <div
          class="absolute bottom-2 right-2 bg-black bg-opacity-70 text-white text-xs px-2 py-1 rounded"
        >
          45:32
        </div>
      </div>
      <div class="p-4">
        <h3 class="font-medium mb-1">
          High School Esports: Season 3 Highlights
        </h3>
        <p class="text-gray-400 text-sm mb-2">MoC TV Productions</p>
        <div class="flex justify-between text-xs text-gray-400">
          <span>32.1K views</span>
          <span>1 week ago</span>
        </div>
      </div>
    </div>

    <!-- Video Card 3 -->
    <div
      class="video-card bg-gray-800 rounded-lg overflow-hidden hover:shadow-lg transition-shadow duration-300"
    >
      <div class="relative">
        <img
          src="{base}/mc.jpg"
          alt="Video thumbnail"
          class="w-full h-40 object-cover"
        />
        <div
          class="absolute inset-0 bg-black bg-opacity-30 flex items-center justify-center play-icon opacity-0 transition-opacity duration-300"
        >
          <div
            class="w-12 h-12 rounded-full bg-primary bg-opacity-90 flex items-center justify-center"
          >
            <i class="fas fa-play text-white"></i>
          </div>
        </div>
        <div
          class="absolute bottom-2 right-2 bg-black bg-opacity-70 text-white text-xs px-2 py-1 rounded"
        >
          18:45
        </div>
      </div>
      <div class="p-4">
        <h3 class="font-medium mb-1">Coding Your First Game: Unity Basics</h3>
        <p class="text-gray-400 text-sm mb-2">Tech Mentor Series</p>
        <div class="flex justify-between text-xs text-gray-400">
          <span>8.2K views</span>
          <span>2 weeks ago</span>
        </div>
      </div>
    </div>

    <!-- Video Card 4 -->
    <div
      class="video-card bg-gray-800 rounded-lg overflow-hidden hover:shadow-lg transition-shadow duration-300"
    >
      <div class="relative">
        <img
          src="https://images.unsplash.com/photo-1547082299-de196ea013d6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
          alt="Video thumbnail"
          class="w-full h-40 object-cover"
        />
        <div
          class="absolute inset-0 bg-black bg-opacity-30 flex items-center justify-center play-icon opacity-0 transition-opacity duration-300"
        >
          <div
            class="w-12 h-12 rounded-full bg-primary bg-opacity-90 flex items-center justify-center"
          >
            <i class="fas fa-play text-white"></i>
          </div>
        </div>
        <div
          class="absolute bottom-2 right-2 bg-black bg-opacity-70 text-white text-xs px-2 py-1 rounded"
        >
          32:10
        </div>
      </div>
      <div class="p-4">
        <h3 class="font-medium mb-1">Esports & Education: Finding Balance</h3>
        <p class="text-gray-400 text-sm mb-2">Mindset Matters</p>
        <div class="flex justify-between text-xs text-gray-400">
          <span>15.7K views</span>
          <span>5 days ago</span>
        </div>
      </div>
    </div>
  </div>
</section>

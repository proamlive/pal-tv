<script>
  import { base } from "$app/paths";
</script>

<nav
  class="bg-darker text-light py-4 px-6 sticky top-0 z-50 border-b border-gray-800"
>
  <div class="max-w-7xl mx-auto flex justify-between items-center">
    <div class="flex items-center space-x-8">
      <a href="#" class="flex items-center">
        <div class="w-16 h-16 flex items-center justify-center">
          <img
            src="{base}/favicon-white.webp"
            alt="PRO AM LIVE TV logo"
            class=""
          />
        </div>
        <span class="ml-2 font-bold text-xl hidden md:block"
          >PRO AM LIVE TV</span
        >
      </a>

      <div class="hidden md:flex space-x-6">
        <a href="#" class="nav-link active">Home</a>
        <a href="#" class="nav-link">Live</a>
        <a href="#" class="nav-link">Shows</a>
        <a href="#" class="nav-link">Workshops</a>
        <a href="#" class="nav-link">Community</a>
        <a href="#" class="nav-link">Donate</a>
      </div>
    </div>

    <div class="flex items-center space-x-4">
      <div class="relative hidden md:block">
        <input
          type="text"
          placeholder="Search PAL TV..."
          class="search-input bg-gray-800 rounded-full py-2 px-4 pl-10 text-sm w-64 focus:outline-none"
        />
        <i class="fas fa-search absolute left-3 top-2.5 text-gray-400"></i>
      </div>
      <button
        class="bg-primary hover:bg-purple-700 text-light px-4 py-2 rounded-full text-sm font-medium hidden md:block"
      >
        Join the League
      </button>
      <!-- <button
        class="bg-primary text-light hover:bg-secondary px-4 py-2 text-md font-medium"
      >
        Donate
      </button> -->
      <a
        href="#"
        class="w-8 h-8 rounded-full bg-gray-700 flex items-center justify-center"
      >
        <i class="fas fa-user text-sm"></i>
      </a>
      <button class="md:hidden">
        <i class="fas fa-bars text-xl"></i>
      </button>
    </div>
  </div>
</nav>

<!-- Mobile Menu -->
<div class="md:hidden bg-darker px-6 py-3 border-b border-gray-800 hidden">
  <div class="flex flex-col space-y-3">
    <a href="#" class="nav-link active">Home</a>
    <a href="#" class="nav-link">Live</a>
    <a href="#" class="nav-link">Shows</a>
    <a href="#" class="nav-link">Workshops</a>
    <a href="#" class="nav-link">Community</a>
    <div class="relative pt-2">
      <input
        type="text"
        placeholder="Search MoC TV..."
        class="search-input bg-gray-800 rounded-full py-2 px-4 pl-10 text-sm w-full focus:outline-none"
      />
      <i class="fas fa-search absolute left-3 top-4 text-gray-400"></i>
    </div>
  </div>
</div>

<script>
  import { base } from "$app/paths";
</script>

<section class="mt-12">
  <div class="flex justify-between items-center mb-4">
    <h2 class="text-xl font-bold">Youth Spotlight</h2>
    <a href="#" class="text-sm text-primary hover:underline">Nominate Someone</a
    >
  </div>

  <div class="bg-gradient-to-r from-primary to-secondary rounded-lg p-6">
    <div class="flex flex-col md:flex-row items-center">
      <div
        class="w-24 h-24 md:w-32 md:h-32 rounded-full border-4 border-white overflow-hidden mb-4 md:mb-0 md:mr-6"
      >
        <img
          src="{base}/spotlight.jpg"
          alt="Youth spotlight"
          class="w-full h-full object-cover object-top"
        />
      </div>
      <div class="flex-1">
        <h3 class="text-xl font-bold mb-1">Khalil Smith</h3>
        <p class="text-white text-opacity-90 mb-2">
          Age 16 | NBA 2K Player & Coding Enthusiast
        </p>
        <p class="text-white text-opacity-80 mb-4">
          Big props to <a href="#">@gglil2020</a> for being the first
          <a href="#">@proamlive</a>
          <a href="#">@columbianorthymca</a> champion of the week! The young man
          literally showed up and declared victory from the start! He’s already preparing
          to defend his title next week! Stay turned!
        </p>
        <div class="flex space-x-3">
          <button
            class="bg-white text-primary hover:bg-gray-100 px-4 py-2 rounded-full text-sm font-medium"
          >
            <i class="fas fa-play mr-1"></i> Watch Story
          </button>
          <button
            class="bg-white bg-opacity-20 hover:bg-opacity-30 text-black px-4 py-2 rounded-full text-sm font-medium"
          >
            <i class="fas fa-share-alt mr-1"></i> Share
          </button>
        </div>
      </div>
    </div>
  </div>
</section>

//import adapter from "@sveltejs/adapter-auto";
import adapterGhpages from "svelte-adapter-ghpages";

const config = {
  // ...
  kit: {
    // ...
    paths: {
      base: "/pal-tv",
    },
    // ...
    adapter: adapterGhpages({
      // default options are shown
      pages: "build",
      assets: "build",
      fallback: null,
    }),
    // ...
  },
};

export default config;

//import adapter from "@sveltejs/adapter-auto";
//import adapterGhpages from "svelte-adapter-ghpages";
import adapterStatic from "@sveltejs/adapter-static";

const config = {
  // ...
  kit: {
    // ...
    // paths: {
    //   base: "/pal-tv",
    // },
    // ...
    // adapter: adapterGhpages({
    //   // default options are shown
    //   pages: "docs",
    //   assets: "docs",
    //   fallback: null,
    // }),
    adapter: adapterStatic({ pages: "docs", assets: "docs", fallback: null }),
    // ...
  },
};

export default config;

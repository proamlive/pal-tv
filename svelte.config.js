import adapter from "@sveltejs/adapter-auto";

const config = {
  kit: {
    adapter: adapter(),
  },
  vitePlugin: {
    inspector: true,
  },
};

export default config;

import { mdsvex } from "mdsvex";
import mdsvexConfig from "./mdsvex.config.js";
// import adapter from "@sveltejs/adapter-auto";
import adapter from '@sveltejs/adapter-static';
import preprocess from "svelte-preprocess";

/** @type {import('@sveltejs/kit').Config} */
const config = {
  extensions: ['.svelte', ...mdsvexConfig.extensions],

  // Consult https://github.com/sveltejs/svelte-preprocess
  // for more information about preprocessors
  preprocess: [
    preprocess({
      postcss: true,
    }),
    mdsvex(mdsvexConfig),
  ],

  kit: {
    adapter: adapter({
			// default options are shown
			pages: 'docs',
			assets: 'docs',
			fallback: null
		}),
		appDir: '../assets',
		paths: {
			// base: dev ? '' : '/relicjs.github.io',
			base: ''
		},

    // hydrate the <div id="svelte"> element in src/app.html
    target: "#svelte",
  },
};

export default config;

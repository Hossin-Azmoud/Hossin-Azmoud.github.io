// import adapter from '@sveltejs/adapter-node';
// import adapter from '@sveltejs/adapter-netlify';
import adapter from '@sveltejs/adapter-static';
import preprocess from "svelte-preprocess";

const dev = process.argv.includes('dev');

/** @type {import('@sveltejs/kit').Config} */
const config = {
	preprocess: [
    	preprocess({
    		postcss: true,
    	}),
  	],
	kit: {
    	adapter: adapter({
			pages: 'build',
			assets: 'build',
			fallback: undefined,
			precompress: false,
			strict: true
		}),
		paths: {
  	    	base: dev ? '' : process.env.BASE_PATH,
    	}
  	}
};

export default config;

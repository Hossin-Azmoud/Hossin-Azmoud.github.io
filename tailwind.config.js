/** @type {import('tailwindcss').Config} */
const tailwindConfig = {
  mode:'jit',
  content: [
		"./src/**/*.{html,js,svelte}", 
		"./*.html",
		"./src/lib/**/*.svelte"
  ],
  theme: {
    extend: {},
  },
  plugins: [],
};

export default tailwindConfig;

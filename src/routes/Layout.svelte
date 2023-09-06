<script>
	import Router from 'svelte-spa-router'
	import Header from '../lib/components/Header.svelte';
	import Footer from '../lib/components/Footer.svelte';
	export let routes = {};
</script>

<main class="w-11/12  lg:w-[1000px] flex flex-col items-center justify-center p-0 m-0 poppins">
	<Header />
	<Router {routes}/>
	<Footer />
</main>



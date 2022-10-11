<script>
	import Header from '$lib/components/Header.svelte';

	import Footer from '$lib/components/Footer.svelte';
	import './styles.css';

	// import ArtImage from '$lib/images/illustrations/art/importer_.svelte';

	// import { onMount } from "svelte";

</script>

<div class="app reveal w-11/12 lg:w-[900px] md:w-11/12 sm:w-11/12 flex flex-col items-center justify-center p-0 m-0 poppins">
	
	<Header />

	<main class="w-full m-0 p-0">
		<slot />
	</main>

	<Footer />
	

	<!-- <ArtImage width="100"/> -->
</div>

<style lang="css">
	
	@import url('https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,200;0,300;0,400;0,600;1,100;1,200;1,300;1,400;1,700&display=swap');

	.poppins {
		font-family: 'Poppins', sans-serif;
	}

</style>
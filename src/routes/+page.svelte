<script>
	import Hero from '$lib/images/Illustrations/hero/Hero.svg';
	import { page } from '$app/stores';
	import ArtSection from '$lib/components/ArtSection.svelte';
	import Fa from 'svelte-fa';
	import { faDownload } from '@fortawesome/free-solid-svg-icons'
	import { faGithub } from '@fortawesome/free-brands-svg-icons';


</script>

<svelte:head>
	<title>Home</title>
	<meta name="description" content="Svelte demo app" />
</svelte:head>

<section class="flex-col justify-center sm:flex-row flex sm:justify-between items-center w-full p-1 h-[90vh]">
	<div class="w-full sm:w-1/2 flex flex-col sm:block justify-center items-center">
		<h1 class="text-2xl text-white my-1 font-bold"> 
		<span class="text-green-300">Full-stack</span> developer 
		</h1>
		<h1 class="text-2xl text-white my-1 font-bold"> 
		Python enthusiast
		</h1>
		<p class="text-base text-white mt-4 font-semibold text-center sm:text-left"> 
		I build high
		quality degital
		products, I deliver clean, understandable code, I also make some
		Art from time to time.
		</p>


		<div class="flex justify-start items-center flex-col sm:flex-row my-3">
			<button style="box-shadow: -34px 23px 116px 42px rgba(170, 0, 0, 0.5);" class="bg-green-500 hover:bg-green-400 hover:border-green-400 px-3 my-2 mr-2 py-1 rounded border border-green-500 ">
				<a class:active={$page.url.pathname === '/'} class="text-white text-xl font-normal" href="/">
					Get in touch!
				</a>
			</button>

		
			<button class="btt px-3 my-2 py-1 rounded border border-white flex items-center justify-between flex-row" class:active={$page.url.pathname === '/contact'}>
				<a href="/contact" class="text-white text-xl font-normal mx-2"> 
					Resume
				</a>
				<Fa icon={faDownload} size="sm" color="white" />
			</button>	
		</div>
		
	

	</div>

	<img style="box-shadow: -34px 23px 116px 42px rgba(90, 53, 169, 0.25);" src={Hero} alt='hero image' width="220" class="hidden sm:block">
</section>


<ArtSection />
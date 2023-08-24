<script lang="javascript">
	import Hero from '$lib/images/Illustrations/hero/Hero.svg';
	import { page } from '$app/stores';
	import Fa from 'svelte-fa';
	import { faDownload } from '@fortawesome/free-solid-svg-icons'
	import FancyButton from '$lib/components/MicroComps/FancyButton.svelte';
	import Terminal from './Terminal/Terminal.svelte';
</script>

<section class="flex-col justify-center sm:flex-row flex sm:justify-between items-center w-full p-1 h-[90vh]">
	<div class="w-full sm:w-1/2 flex flex-col sm:block justify-center items-center">
		<h1   class="text-2xl text-white my-1 font-semibold"> 
		<span class="text-green-300">Full-stack</span> developer 
		</h1>
		<h1 class="text-2xl text-white my-1"> 
		Python enthusiast
		</h1>
		<p class="text-base text-white mt-4 font-normal text-center sm:text-left"> 
			I build high
			quality degital
			products, I deliver clean, understandable code, I also make some
			Art from time to time.
		</p>

		<div class="flex justify-start items-center flex-col sm:flex-row my-3 gap-2">
			<FancyButton Class="p-2 text-white text-sm bg-green-500 hover:bg-green-400">
				<a class:active={$page.url.pathname === '/'} href="/">
					Get in touch!
				</a>
			</FancyButton>

			<FancyButton Class="p-2 border gap-4 border-white flex items-center justify-between flex-row text-white">
				<a href="/contact" class="text-sm"
				 class:active={$page.url.pathname === '/contact'}> 
					Resume
				</a>
				<Fa icon={ faDownload } size="sm" color="white" />
			</FancyButton>
			<Terminal />
		</div>
	</div>

	<img style="box-shadow: -34px 23px 116px 42px rgba(90, 53, 169, 0.25);" src={Hero} alt='hero' width="220" class="hidden sm:block">
</section>
<script>
	import Hero from '../images/Illustrations/hero/Hero.svg';
	import Fa from 'svelte-fa';
	import {link as Link} from 'svelte-spa-router'
	import { faDownload } from '@fortawesome/free-solid-svg-icons'
	import FancyButton from './MicroComps/FancyButton.svelte';
	import Terminal from './Terminal/Terminal.svelte';
</script>

<section class="flex-col justify-center sm:flex-row flex sm:justify-between items-center w-full p-1 h-[90vh]">
	<div class="w-full sm:w-1/2 flex flex-col sm:block justify-center items-center gap-4">
		<h1 class="text-2xl text-white font-semibold"> 
		<span class="text-green-300">Front-End</span> developer 
		</h1>
		
		<p class="text-xl text-white mt-4 font-normal text-center sm:text-left"> 
			I am into making things look beautiful, interactive, fluid and safe.
		</p>

		<div class="flex justify-start items-center flex-col sm:flex-row my-3 gap-2">
			<FancyButton Class="py-3 px-6 text-white text-base bg-green-600">
				<a href="/contact" use:Link>
					Get in touch!
				</a>
			</FancyButton>
			<FancyButton Class="py-3 px-6 gap-4 flex items-center justify-between flex-row text-white bg-slate-800">
				<a href="/" use:Link class="text-base"> 
					Resume
				</a>
				<Fa icon={ faDownload } size="md" color="white" />
			</FancyButton>
			<Terminal />
		</div>
	</div>

	<img style="box-shadow: -34px 23px 116px 42px rgba(90, 53, 169, 0.25);" src={Hero} alt='hero' width="220" class="hidden sm:block">
</section>

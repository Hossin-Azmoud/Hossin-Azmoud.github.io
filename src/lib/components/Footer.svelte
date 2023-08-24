<script>

	import { page } from '$app/stores';
	import logo from '$lib/icons/brands/Logo.svg';
	import Fa from "svelte-fa";
	import { faGithub, faTwitter } from '@fortawesome/free-brands-svg-icons';
	import { faEnvelope, faFaceSmileWink } from '@fortawesome/free-solid-svg-icons';
	import { EffectNavButtons } from "./FuncLib.js";

</script>

<footer class="w-screen bg-slate-800 shadow-2xl flex justify-between sm:iterms-center sm:justify-center sm:gap-10 items-start flex-col gap-2 sm:flex-row flex-wrap p-6">
	<img alt="Logo" src={logo} width="40">
	 
	<ul>
	 	<li> 
			<h1 class="text-white text-normal font-semibold my-4"> Navigation. <div class="h-[4px] w-[50px] bg-green-400 rounded-md"></div>  </h1> 
		</li>

	 	<li class="w-full flex justify-start items-center flex-col" class:active={$page.url.pathname === '/'}>
			<a on:click={EffectNavButtons} on:keydown={EffectNavButtons}  class="w-full LINK BTT hover:text-blue-400 text-white font-normal text-sm" href="/">Home</a>
		</li>

		<li class="w-full flex justify-start items-center flex-col" class:active={$page.url.pathname === '/about'}>
			<a on:click={EffectNavButtons} on:keydown={EffectNavButtons}  class="w-full LINK BTT hover:text-blue-400 preventDefault text-white font-normal text-sm" href="/about">About</a>

		</li>
		<li class="w-full flex justify-start items-center flex-col" class:active={$page.url.pathname === '/contact'}>
			<a on:click={EffectNavButtons} on:keydown={EffectNavButtons}  class="w-full LINK BTT hover:text-blue-400 text-sm text-white font-normal" href="/contact">contact</a>
		</li>
	 </ul>

	 <ul>	
	 	<li> 
			<h1 class="text-white text-normal font-semibold my-4"> FIND ME ONLINE. <div class="h-[4px] w-[50px] bg-green-400 rounded-md"></div> </h1> 
	 	</li>
	
	 	<li class="flex gap-2 items-center justify-start flex-row ">
			<a class="jump" target="blank_" href="https://github.com/Moody0101-X">
				<Fa icon={faGithub} size="1x" color="white"/>
			</a>
			<a class="jump" target="blank_" href="mailto:azmoudhossin0101@gmail.com">
				<Fa icon={faEnvelope} size="1x" color="white"/>
			</a>
			<a class="jump" target="blank_" href="https://twitter.com/Moody010111">
				<Fa icon={faTwitter} size="1x" color="white"/>
			</a>
	 	</li>
	 </ul>

	 <ul>
	 	<li> 
	 		<h1 class="text-white text-normal font-semibold my-4"> 
	 		Additional info.
			<div class="h-[4px] w-[50px] bg-green-400 rounded-md"></div> </h1> 
		</li>
	 	<li>
	 		<h2 class="text-white text-normal font-thin w-full"> 
				+212 637-703384
			</h2>
		</li>
	 	<li>
	 		<h2 class="text-white text-normal font-thin w-full"> 
			azmoudhossin0101@gmail.com 
			</h2>
	 	</li>
	 </ul>

</footer>
<script>
	
	import { link as Link } from 'svelte-spa-router'
	import Fa from 'svelte-fa';
	import { faGithub, faTwitter } from '@fortawesome/free-brands-svg-icons';
	import { faEnvelope, faFaceSmileWink } from '@fortawesome/free-solid-svg-icons';
	import { EffectNavButtons } from "../FuncLib.js";
	var ShowNav = false;
	var LinkButtons;
	
	const Navigate_ = (e=null) => {
		ShowNav = !ShowNav;
		if(e) EffectNavButtons(e.target);
	}

</script>

<!-- for Mobile -->
<button 
class="flex flex-col justify-between items-center sm:hidden w-8 static z-50"
on:click={() => { Navigate_(); }}
>	
	<span class="transition ease-in duration-200 {(ShowNav) ? "bg-black -translate-x-2" : "bg-white translate-x-0"} my-1 h-[2px] w-full"></span>
	<span class="transition ease-in duration-200 {(ShowNav) ? "bg-black translate-x-2" : "bg-white"} my-1 h-[2px] w-full "></span>
	<span class="transition ease-in duration-200 {(ShowNav) ? "-translate-x-2 bg-black" : "bg-white"} my-1 h-[2px] w-full"></span>

</button>

<!-- for Mobile -->
<nav class="transition ease-in-out duration-200 {(ShowNav) ? "showFromRight" : "-translate-x-full"} fixed w-screen h-screen top-0 left-0 bg-white text-black flex flex-col justify-center items-center sm:hidden">
	<ul class="flex flex-col items-center justify-center">
		<li on:click={(e) => Navigate_(e)} on:keydown={(e) => Navigate_(e)} group={LinkButtons} class="mx-2 my-4 flex justify-center items-center flex-col">
			<a use:Link class="text-2xl LINK BTT hover:text-blue-400" href="/" >Home</a>
		</li>
		<li on:click={(e) => Navigate_(e)} on:keydown={(e) => Navigate_(e)} group={LinkButtons} class="mx-2 my-4 flex justify-center items-center flex-col">
			<a use:Link class="text-2xl LINK BTT hover:text-blue-400" href="/about" >About</a>

		</li>
		<li on:click={(e) => Navigate_(e)} on:keydown={(e) => Navigate_(e)} group={LinkButtons} class="mx-2 my-4 flex justify-center items-center flex-col">
			<a use:Link class="text-2xl LINK BTT hover:text-blue-400" href="/contact" >contact</a>
		</li>
	</ul>
	<div class="flex justify-center items-center flex-col my-6">
		<nav class="flex items-center justify-center">
			<a class="mx-3 jump" target="blank_" href="https://github.com/Hossin-Azmoud">
				<Fa class="rounded shadow-c p-2 bg-blue-900" icon={faGithub} size="3x" color="white"/>
			</a>

			<a class="mx-3 jump" target="blank_" href="mailto:azmoudhossin0101@gmail.com">
				<Fa class="rounded shadow-c p-2 bg-blue-900" icon={faEnvelope} size="3x" color="white"/>
			</a>

			<a class="mx-3 jump" target="blank_" href="https://twitter.com/Moody010111">
				<Fa class="rounded shadow-c p-2 bg-blue-900" icon={faTwitter} size="3x" color="white"/>
			</a>
		</nav>	
		<h1 class="mt-6 flex items-center justify-center"> Contact me!!! <Fa icon={faFaceSmileWink} class="mx-4" color="black"/> </h1>
	</div>
</nav>

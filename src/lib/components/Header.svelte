<script>
	import { link as Link} from 'svelte-spa-router'
	import logo from '../icons/brands/Logo.svg';
	import Fa from 'svelte-fa';
	import { faGithub, faTwitter } from '@fortawesome/free-brands-svg-icons';
	import { faEnvelope, faFaceSmileWink } from '@fortawesome/free-solid-svg-icons';
	import Router from 'svelte-spa-router'
	import { EffectNavButtons } from "./FuncLib.js";
	var ShowNav = false;
	var LinkButtons;
	
	const Navigate_ = (e=null) => {
		ShowNav = !ShowNav;
		if(e) EffectNavButtons(e.target);
	}
</script>

<header class="text-white flex items-center justify-between p-2 w-full">
	<div class="corner">
		<a href="/" use:Link>
			<img src={logo} alt="SvelteKit" width="36"/>
		</a>
	</div>
	<!-- for desktop -->
	<nav class="hidden sm:flex items-center justify-center ">
		<ul class="flex items-center justify-center">
			<li class="text-sm mx-2 flex justify-center items-center flex-col">
				<a on:click={EffectNavButtons} on:keydown={EffectNavButtons}  class="LINK BTT hover:text-blue-400" href="/" use:Link>Home</a>
			</li>
			<li class="mx-2 flex justify-center items-center flex-col">
				<a on:click={EffectNavButtons} on:keydown={EffectNavButtons}  class="LINK BTT hover:text-blue-400" href="/about" use:Link>About</a>

			</li>
			<li class="mx-2 flex justify-center items-center flex-col">
				<a on:click={EffectNavButtons} on:keydown={EffectNavButtons}  class="LINK BTT hover:text-blue-400" href="/contact" use:Link>contact</a>
			</li>
		</ul>
		<!-- for desktop -->
		<nav class="hidden sm:flex items-center justify-center">	 
			<a class="jump mx-3" target="blank_" href="https://github.com/Moody0101-X">
				<Fa icon={faGithub} size="1x" color="white"/>
			</a>
			<a class="jump mx-3" target="blank_" href="mailto:azmoudhossin0101@gmail.com">
				<Fa icon={faEnvelope} size="1x" color="white"/>
			</a>
			<a class="jump mx-3" target="blank_" href="https://twitter.com/Moody010111">
				<Fa icon={faTwitter} size="1x" color="white"/>
			</a>
		</nav>
	</nav>
	


	<!-- for Mobile -->
	<button 
	class="flex flex-col justify-between items-center sm:hidden w-8 right-5 absolute z-50"
	on:click={() => {Navigate_();}}
	>	

		<span class="{(ShowNav) ? "bg-black -translate-x-2" : "bg-white"} my-1 h-[2px] w-full"></span>
		<span class="{(ShowNav) ? "bg-black translate-x-2" : "bg-white"} my-1 h-[2px] w-full "></span>
		<span class="{(ShowNav) ? "-translate-x-2 bg-black" : "bg-white"} my-1 h-[2px] w-full"></span>

	</button>

	<!-- for Mobile -->
	<nav class="{(ShowNav) ? "showFromRight" : "-translate-x-full"} fixed w-screen h-screen top-0 left-0 bg-white text-black flex flex-col justify-center items-center sm:hidden">
		<ul class="flex flex-col items-center justify-center">
			<li on:click={Navigate_} on:keydown={Navigate_} group={LinkButtons} class="mx-2 my-4 flex justify-center items-center flex-col">
				<a class="text-2xl LINK BTT hover:text-blue-400" href="/" use:Link>Home</a>
			</li>
			<li on:click={Navigate_} on:keydown={Navigate_} group={LinkButtons} class="mx-2 my-4 flex justify-center items-center flex-col">
				<a class="text-2xl LINK BTT hover:text-blue-400" href="/about" use:Link>About</a>

			</li>
			<li on:click={Navigate_} on:keydown={Navigate_} group={LinkButtons} class="mx-2 my-4 flex justify-center items-center flex-col">
				<a class="text-2xl LINK BTT hover:text-blue-400" href="/contact" use:Link>contact</a>
			</li>
		</ul>

		<div class="flex justify-center items-center flex-col my-6">
			<nav class="flex items-center justify-center">
	 
				<a class="mx-3 jump" target="blank_" href="https://github.com/Moody0101-X">
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
</header>

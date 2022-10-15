<script>
	import { page } from '$app/stores';
	import logo from '$lib/icons/brands/Logo.svg';
	import Fa from 'svelte-fa';
	import { faGithub, faTwitter } from '@fortawesome/free-brands-svg-icons';
	import { faEnvelope, faFaceSmileWink } from '@fortawesome/free-solid-svg-icons';
	import { onMount } from "svelte";

	var ShowNav = false;
	var LinkButtons;
	
	const Navigate_ = (e=null) => {
		ShowNav = !ShowNav;
		if(e) EffectNavButtons(e.target);
	}

	const EffectNavButtons = (target) => {
		console.log(target)
		const EL = (target.target) ? target.target : target;

		if(EL){
			LinkButtons.map((v) => {
				if(v === EL) {
					v.classList.add("text-blue-400");
				} else {
					v.classList.remove("text-blue-400");
				}
			});
		}
	}
	
	onMount(() => {
		LinkButtons = [...document.getElementsByClassName('LINK')];
		console.log(LinkButtons)
	});


</script>

<header class="text-white flex items-center justify-between p-2 w-full">
	
	<div class="corner">
		<span class:active={$page.url.pathname === '/'}>
			<a href="/">
				<img src={logo} alt="SvelteKit" width="40"/>
			</a>
		</span>
	</div>

	<!-- for desktop -->
	<nav class="hidden sm:flex items-center justify-center ">
		<ul class="flex items-center justify-center">
			<li class="mx-2 flex justify-center items-center flex-col" class:active={$page.url.pathname === '/'}>
				<a on:click={EffectNavButtons} on:keydown={EffectNavButtons}  class="LINK BTT hover:text-blue-400" href="/">Home</a>
			</li>

			<li class="mx-2 flex justify-center items-center flex-col" class:active={$page.url.pathname === '/about'}>
				<a on:click={EffectNavButtons} on:keydown={EffectNavButtons}  class="LINK BTT hover:text-blue-400" href="/about">About</a>

			</li>
			<li class="mx-2 flex justify-center items-center flex-col" class:active={$page.url.pathname === '/contact'}>
				<a on:click={EffectNavButtons} on:keydown={EffectNavButtons}  class="LINK BTT hover:text-blue-400" href="/contact">contact</a>
			</li>
		</ul>
	</nav>
	
	<!-- for desktop -->
	<nav class="hidden sm:flex items-center justify-center">	 
		
		<a class="jump mx-3" target="blank_" href="https://github.com/Moody0101-X">
			<Fa icon={faGithub} size="2x" color="white"/>
		</a>

		<a class="jump mx-3" target="blank_" href="mailto:azmoudhossin0101@gmail.com">
			<Fa icon={faEnvelope} size="2x" color="white"/>
		</a>

		<a class="jump mx-3" target="blank_" href="https://twitter.com/Moody010111">
			<Fa icon={faTwitter} size="2x" color="white"/>
		</a>

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
			<li on:click={Navigate_} on:keydown={Navigate_} group={LinkButtons} class="mx-2 my-4 flex justify-center items-center flex-col" class:active={$page.url.pathname === '/'}>
				<a class="LINK BTT hover:text-blue-400" href="/">Home</a>
			</li>
			<li on:click={Navigate_} on:keydown={Navigate_} group={LinkButtons} class="mx-2 my-4 flex justify-center items-center flex-col" class:active={$page.url.pathname === '/about'}>
				<a class="LINK BTT hover:text-blue-400" href="/about">About</a>

			</li>
			<li on:click={Navigate_} on:keydown={Navigate_} group={LinkButtons} class="mx-2 my-4 flex justify-center items-center flex-col" class:active={$page.url.pathname === '/contact'}>
				<a class="LINK BTT hover:text-blue-400" href="/contact">contact</a>
			</li>
		</ul>

		<div class="flex justify-center items-center flex-col my-6">
			<nav class="flex items-center justify-center">
	 
				<a class="mx-3 jump" target="blank_" href="https://github.com/Moody0101-X">
					<!-- <img src={github} width="30" > -->
					<Fa icon={faGithub} size="2x" color="black"/>
				</a>

				<a class="mx-3 jump" target="blank_" href="mailto:azmoudhossin0101@gmail.com">
					<Fa icon={faEnvelope} size="2x" color="black"/>
				</a>

				<a class="mx-3 jump" target="blank_" href="https://twitter.com/Moody010111">
					<Fa icon={faTwitter} size="2x" color="black"/>
				</a>

			</nav>	

			<h1 class="mt-6 flex items-center justify-center"> Contact me!!! <Fa icon={faFaceSmileWink} class="mx-4" color="yellow"/> </h1>
		</div>
	</nav>


</header>

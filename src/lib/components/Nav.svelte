<script>
	import { Link } from "svelte-navigator";
	import logo from '../icons/brands/Logo.svg';
	import Fa from 'svelte-fa';
	import { faGithub, faTwitter } from '@fortawesome/free-brands-svg-icons';
	import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
	import { EffectNavButtons } from "./FuncLib.js";
	import MobileNav from './Mobile/MobileNav.svelte'
	
</script>

<header class="text-white flex items-center justify-between px-4 py-4 w-full bg-slate-800 rounded-md my-4 shadow">
	<div class="corner">
		<Link to="/">
			<img src={ logo } alt="Logo!" width="36"/>
		</Link>
	</div>
	<!-- for desktop -->
	<nav class="hidden sm:flex items-center justify-center gap-8">
		<ul class="flex items-center justify-center">
			<li class="text-sm mx-2 flex justify-center items-center flex-col">
				<Link on:click={(z) => EffectNavButtons(z)} on:keydown={(z) => EffectNavButtons(z)}  class="LINK BTT hover:text-blue-400" to="/" >
					Home
				</Link>
			</li>
			<li class="mx-2 flex justify-center items-center flex-col">
				<Link on:click={(z) => EffectNavButtons(z)} on:keydown={(z) => EffectNavButtons(z)}  class="LINK BTT hover:text-blue-400" to="/about" >
					About
				</Link>
			</li>
			<li class="mx-2 flex justify-center items-center flex-col">
				<Link on:click={(z) => EffectNavButtons(z)} on:keydown={(z) => EffectNavButtons(z)}  class="LINK BTT hover:text-blue-400" to="/contact" >
					contact
				</Link>
			</li>
		</ul>

		<!-- for desktop -->
		<nav class="hidden sm:flex gap-4 items-center justify-center">	 
			<a class="jump" target="blank_" href="https://github.com/Hossin-Azmoud">
				<Fa icon={faGithub} size="1x" color="white"/>
			</a>
			<a class="jump" target="blank_" href="mailto:azmoudhossin0101@gmail.com">
				<Fa icon={faEnvelope} size="1x" color="white"/>
			</a>
			<a class="jump" target="blank_" href="https://twitter.com/Moody010111">
				<Fa icon={faTwitter} size="1x" color="white"/>
			</a>
		</nav>
	</nav>
	<!-- if(MOBILE) -->

	<MobileNav />
</header>

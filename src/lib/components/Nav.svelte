<script>
	import { link as Link} from 'svelte-spa-router'
	import logo from '../icons/brands/Logo.svg';
	import Fa from 'svelte-fa';
	import { faGithub, faTwitter } from '@fortawesome/free-brands-svg-icons';
	import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
	import { EffectNavButtons } from "./FuncLib.js";
	import MobileNav from './Mobile/MobileNav.svelte'
</script>

<header class="text-white flex items-center justify-between px-4 py-4 w-full bg-slate-800 rounded-md my-4 shadow">
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
		<nav class="hidden sm:flex gap-4 items-center justify-center">	 
			<a class="jump" target="blank_" href="https://github.com/Moody0101-X">
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

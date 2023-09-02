<svelte:head>
	<title>About</title>
	<meta name="description" content="About this app" />
</svelte:head>

<script lang="javascript">
	import SectionContainer from "../../lib/components/MicroComps/SectionContainer.svelte";
	import { faBolt } from '@fortawesome/free-solid-svg-icons';
</script>

<SectionContainer title="About me" icon={faBolt}>
	
	<p class="text-white w-full m-4"> 
		Hi, I am Hossin or known as @Moody010111 online, I am a 23yo  Full-stack developer based in Morocco and my mission is to create interesting, good looking and fully functional web pages.
		As well as delivering clean, optimized and fully readable code, my methodology consists of creating components then distributing every component as needed. 
	</p>
	
	<p class="text-white w-full m-4"> 
		I pretty much can work with any programming language, framework, or design tool but I prefer working with programming languages such as golang, C++, python and javascript.
 	</p>
 	
 	<p class="text-white w-full m-4">
 		I also have a great eye for design, color and structure. Which gives my work more elegance and fancy feel.
	</p>

	<p class="text-white w-full m-4">	
		Have a nice day :).
	</p>

</SectionContainer>

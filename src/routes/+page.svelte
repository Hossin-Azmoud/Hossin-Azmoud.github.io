<script>
	import ArtSection from '$lib/components/ArtSection.svelte';
	import ExpSection from '$lib/components/ExpSection.svelte';
	import HeroSection from '$lib/components/Hero.svelte'; 
	import IconLib from '$lib/components/UtilComps/IconLib.svelte'; 
	import Form from '$lib/components/Form.svelte'; 
	import Sectioncon from '$lib/components/MicroComps/SectionContainer.svelte';
	import { faComment } from "@fortawesome/free-solid-svg-icons";


	var Show = false;
 	const ShowIcons = () => {
 		Show = !Show;

 		console.log(Show);
 	}


</script>

<svelte:head>
	<title>Home</title>
	<meta name="description" content="Svelte demo app" />
</svelte:head>

<button class="z-50 p-4 text-white bg-green-400 fixed bottom-0 left-2" on:click={ShowIcons}>
	open icons
</button>

{#if Show}
	<IconLib />
{:else}
	<HeroSection />
	<ExpSection />
	<ArtSection />

	<Sectioncon title="Reach out!!" icon={faComment}>
		<Form />	
	</Sectioncon>

{/if}


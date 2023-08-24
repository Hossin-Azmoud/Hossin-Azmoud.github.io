<script>
	import ArtSection from '$lib/components/ArtSection.svelte';
	import ExpSection from '$lib/components/ExpSection.svelte';
	import HeroSection from '$lib/components/Hero.svelte'; 
	import Form from '$lib/components/Form.svelte'; 
	import Sectioncon from '$lib/components/MicroComps/SectionContainer.svelte';
	import { faComment } from "@fortawesome/free-solid-svg-icons";
</script>

<svelte:head>
	<title>Home</title>
	<meta name="description" content="Hossin Azmoud" />
</svelte:head>

<HeroSection />
<ExpSection />
<ArtSection />

<!-- <Sectioncon title="Reach out!!" icon={faComment}>
	<Form />	
</Sectioncon> -->
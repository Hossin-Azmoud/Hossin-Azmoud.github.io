<script lang="javascript">
	import ArtSquareImage from '$lib/images/Illustrations/art/importer_.svelte';
	import SectionContainer from './MicroComps/SectionContainer.svelte';
	import Form from './Form.svelte'

</script>

<SectionContainer title="My Art">
	<section class="flex flex-row flex-wrap justify-center items-center gap-2 w-full">
		<ArtSquareImage index="ALL"  class="rounded w-[80%] sm:w-[250px] p-2" style="border-radius: 20px;"/>
	</section>
</SectionContainer>


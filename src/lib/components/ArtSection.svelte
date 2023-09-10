<script>
	import ImageViewer from './ImageViewer.svelte';
	import SectionContainer from './MicroComps/SectionContainer.svelte';
</script>


<SectionContainer title="My Art">
	<section class="flex flex-row flex-wrap justify-center items-center gap-2 w-full">
		<ImageViewer
			index="ALL"			
			class="
			transition ease-in-out duration-500
			cursor-pointer 
			relative
			hover:shadow-2xl 
			hover:shadow-black
			hover:scale-110
			hover:z-10
			rounded 
			w-[80%] sm:w-[250px] 
			m-2" 
			style="border-radius: 20px;"
		/>
	</section>
</SectionContainer>


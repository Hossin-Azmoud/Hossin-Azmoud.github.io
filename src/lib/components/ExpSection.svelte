<script lang="js">
	import SectionContainer from './MicroComps/SectionContainer.svelte';
	import { Experience } from './Data/var';
	import Fa from 'svelte-fa';

</script>


<SectionContainer title="Experience">
	<div class="flex flex-row flex-wrap items-start w-full justify-center">
		{#each Experience as exp}
		
			<div class="w-11/12 sm:w-[250px] bg-slate-800 rounded m-1 p-2">
				<h1 class="flex items-center justify-start text-white text-xl"> {exp.header.h}<span class="ml-6">
					<Fa icon={exp.header.icon}/>
				</span></h1>

				<p class="text-white font-thin my-4">
					 {exp.p}
				</p>
				<div class="flex justify-between items-center p-2 text-white">
					{#each exp.icons as i}
						<Fa icon={i}
						size="1x"
						class="m-2"
						/>
					{/each}	
				</div>
				

			</div>

		{/each}	
	</div>
	
</SectionContainer>
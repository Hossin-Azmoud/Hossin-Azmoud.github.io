<script>
	import SectionContainer from './MicroComps/SectionContainer.svelte';
	import { Experience } from './Data/constants';
	import Fa from 'svelte-fa';
</script>
<SectionContainer title="Experience">
	<div class="flex flex-wrap gap-2 items-start w-full justify-center">
		{#each Experience as exp}
			<div class="w-full bg-slate-800 sm:w-[270px] rounded m-1 p-2">
				<h1 class="flex items-center justify-start text-white text-xl"> {exp.header.h}<span class="ml-6">
					<Fa icon={exp.header.icon}/>
				</span></h1>

				<p class="text-white font-thin my-4">
					 { exp.p }
				</p>
				<div class="flex justify-between text-white items-center flex-wrap">
					{#each exp.icons as i}
						<Fa 
							icon={i}
							size="2x"
							class="m-1 bg-slate-700 shadow rounded p-2"
						/>
					{/each}
				</div>
			</div>
		{/each}	
	</div>
	
</SectionContainer>

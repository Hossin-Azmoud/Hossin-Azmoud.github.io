<script>
	import Fa from "svelte-fa";
	export let title;
	export let icon = "";
</script>

<div class="min-h-[90vh] flex flex-col flex-wrap justify-center items-center p-4 w-full gap-2">
	<div class="flex flex-col justify-center items-center my-6 p-1">
		<h1 class="text-white flex justify-between items-center text-2xl font-semibold"> 
			{title} 
			{#if icon}
				<Fa icon={icon} size="md" class="mx-3"/>
			{/if}
		</h1>
		<div class="bg-green-300  w-1/2 h-[3px] Expand origin-left"></div>
	</div>
	<slot />
</div>

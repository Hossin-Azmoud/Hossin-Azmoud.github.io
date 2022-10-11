<script lang="js">
	export let title;
</script>

<div class="p-0 flex flex-col flex-wrap justify-center items-center">
	<div class="flex flex-col justify-center items-center my-3 p-1">
		<h1 class="text-white text-2xl font-semibold"> {title} </h1>
		<div class="bg-green-300  w-1/2 h-[3px] Expand origin-left"></div>	
	</div>
	<slot />
</div>

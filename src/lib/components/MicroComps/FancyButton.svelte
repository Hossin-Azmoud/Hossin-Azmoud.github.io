<script lang="js">
	
	export let Class = "";
	export let Title = "";

</script>

<button class="py-2 px-6 rounded {Class}" {...$$restProps}>
	{#if Title}
		{ Title }
	{/if}
	<slot />
</button>

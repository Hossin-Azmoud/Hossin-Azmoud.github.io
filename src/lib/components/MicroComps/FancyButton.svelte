<script>
	export let Class = "";
	export let Title = "";
	export let onclick = () => {};
</script>

<button on:click={onclick} class="py-2 rounded hover:shadow-lg hover:shadow-blue-600/50 {Class} transition duration-200 " {...$$restProps}>
	{#if Title}
		{ Title }
	{/if}
	<slot />
</button>

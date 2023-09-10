<script>
	export let Class = "";
	export let Title = "";
	export let onclick = () => {};
</script>

<button on:k={onclick} class="py-2 rounded {Class} transition duration-200 " {...$$restProps}>
	{#if Title}
		{ Title }
	{/if}
	<slot />
</button>

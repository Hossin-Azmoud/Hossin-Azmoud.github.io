<script lang="js">
	export let Class = "";
	export let onclick = null;
</script>

<button 
	class="rounded bg-blue-500 rounded flex items-center justify-center p-2.5 {Class}"
	on:click={onclick}
	{...$$restProps}
>
	<slot />
</button>

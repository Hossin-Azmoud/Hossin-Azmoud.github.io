<script lang="javascript">
	import * as solidIcons from '@fortawesome/free-solid-svg-icons';
	import * as brandsIcons from '@fortawesome/free-brands-svg-icons';
	import Fa from 'svelte-fa';
	import { onMount } from "svelte";
	
	const cp = (T) => {
 		if ('clipboard' in navigator) {
			return navigator.clipboard.writeText(T);
		} else {
			return document.execCommand('copy', true, T);
		}
 	}
</script>

<div class="flex flex-col rounded shadow-2xl items-center justify-center my-4 p-4 transition-all w-full bg-white">
	
	<h1 class="my-6"> Brand icons </h1>

	<div class="flex items-center justify-center flex-row flex-wrap">
		
		{#each [...Object.keys(brandsIcons)] as key}
			<button class="m-2" title={key} on:click={() => {cp(key)}}>
				<Fa icon={brandsIcons[key]} size="2x" color="black" />				
			</button>
		{/each}

	</div>

	<h1 class="my-6"> Solid icons </h1>

	<div class="flex items-center justify-center flex-row flex-wrap">
		
		{#each [...Object.keys(solidIcons)] as key_}
			<button class="m-2" title={key_} on:click={() => {cp(key_)}}>
				<Fa icon={solidIcons[key_]} size="2x" color="black" />				
			</button>
		{/each}

	</div>

</div>

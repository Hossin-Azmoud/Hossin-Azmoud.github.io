

<script lang="javascript" context="module">
	
	var SVGs = [];

	import img1 from './ART1.svg';
	import img2 from './ART2.svg';
	import img3 from './ART3.svg';
	import img4 from './ART4.svg';
	import img5 from './ART5.svg';
	
	
	
	SVGs.push(img1);
	SVGs.push(img2);
	SVGs.push(img3);
	SVGs.push(img4);
	SVGs.push(img5);
	

	const GetImage = (i) => {
		if(SVGs[i]) return SVGs[i];
		else return SVGs[0];
	}

</script>

<script>
	export let index = 0;
</script>

{#if index != "ALL"}
	<img src={GetImage(index)} alt="art" {...$$restProps}/>
{:else}
	{#each SVGs as IMG}
		<img src={IMG} alt="art" {...$$restProps}/>
	{/each}
{/if}

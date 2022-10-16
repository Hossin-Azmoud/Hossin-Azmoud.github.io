

<script lang="javascript" context="module">
	
	var SVGs = [];
	import img0 from './ART0_1.svg';
	import img1 from './ART1_1.svg';
	import img2 from './ART2.svg';
	import img3 from './ART3_1.svg';
	import img5 from './ART5_1.svg';
	import img6 from './ART6_1.svg';
	import img7 from './ART7_1.svg';
	import img8 from './ART8_1.svg';
	import img9 from './ART9_1.svg';
	import img10 from './ART10_1.svg';
	import img11 from './ART11_1.svg';
	import img12 from './ART12_1.svg';
	import img13 from './ART13_1.svg';
	import img14 from './ART14_1.svg';
	import img15 from './ART15_1.svg';
	import img16 from './ART16_1.svg';
	import img19 from './ART19_1.svg';
	import img20 from './ART20_1.svg';
	
	SVGs.push(img0);
	SVGs.push(img1);
	SVGs.push(img2);
	SVGs.push(img3);
	SVGs.push(img5);
	SVGs.push(img6);
	SVGs.push(img7);
	SVGs.push(img8);
	SVGs.push(img9);
	SVGs.push(img10);
	SVGs.push(img11);
	SVGs.push(img12);
	SVGs.push(img13);
	SVGs.push(img14);
	SVGs.push(img15);
	SVGs.push(img16);
	SVGs.push(img19);
	SVGs.push(img20);

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

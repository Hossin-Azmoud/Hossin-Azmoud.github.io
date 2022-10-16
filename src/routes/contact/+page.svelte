<svelte:head>
	<title>contact</title>
	<meta name="description" content="contact" />
</svelte:head>

<script lang="javascript">
	import SectionContainer from "$lib/components/MicroComps/SectionContainer.svelte";
	import Form from "$lib/components/Form.svelte";
	import {faSmileBeam} from '@fortawesome/free-solid-svg-icons';
	import { Notify, cp } from '$lib/components/FuncLib.js';
	
 	const CopyInfo = (e) =>{
 		cp(e.target.textContent);
 		Notify("Coppied!", e.clientX, e.clientY);
 	}

</script>

<style lang="css">
	
	h1:hover > div {
		width: 150px;
	}

	
</style>

<SectionContainer title="contact me" icon={faSmileBeam}>

	<p class="text-white w-full my-4 font-thin text-sm"> Click to copy! </p>

	<h1 on:keydown={CopyInfo} on:click={CopyInfo} class="cursor-pointer text-white p-2 my-4 font-bold text-lg  w-full"> 
		+212 637-703384
		<div class="h-[4px] w-[50px] bg-green-400 rounded-md"></div>
	</h1>
	<h1 on:keydown={CopyInfo} on:click={CopyInfo} class="cursor-pointer text-white p-2 my-4 font-bold text-lg  w-full"> 
		azmoudhossin0101@gmail.com 
		<div class="h-[4px] w-[50px] bg-green-400 rounded-md"></div>
	</h1>

	<h1 on:keydown={CopyInfo} on:click={CopyInfo} class="cursor-pointer text-white p-2 my-4 font-bold text-lg  w-full"> 		
		https://twitter.com/Moody010111 
		<div class="h-[4px] w-[50px] bg-green-400 rounded-md"></div>
	</h1>

	<p class="text-white p-2 my-4 text-lg  w-full">
		Have an exciting project you need help with?
		Send me an email or contact me via Twitter.! or you can just use the form bellow :).
	</p>

	<p class="text-white p-2 my-4 text-lg  w-full">
		I provide Good designed web pages. fully documented process and methodology.
	</p>
	<p class="text-white p-2 my-4 text-lg  w-full">
	so don't hesitate and reach out for more information.
	</p>

	<Form />

</SectionContainer>
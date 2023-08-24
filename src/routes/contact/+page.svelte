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
	
	<p class="text-white text-normal  w-full">
		Have an exciting project you need help with?
		Send me an email or contact me via Twitter.! or you can just use the form bellow :).
	</p>
	<p class="text-white text-normal  w-full">
		I provide Good designed web pages. fully documented process and methodology.
	</p>
	<p class="text-white text-normal  w-full">
	so don't hesitate and reach out for more information.
	</p>

	<div class="p-2 w-full">
		<div on:keydown={ CopyInfo } on:click={ CopyInfo } class="cursor-pointer text-white p-2 font-normal text-normal  w-full">
			+212 637-703384
			<div class="h-[4px] w-[50px] bg-green-400 rounded-md"></div>
		</div>

		<div on:keydown={ CopyInfo } on:click={ CopyInfo } class="cursor-pointer text-white p-2 font-normal text-normal  w-full"> 
			azmoudhossin0101@gmail.com 
			<div class="h-[4px] w-[50px] bg-green-400 rounded-md"></div>
		</div>

		<div on:keydown={ CopyInfo } on:click={ CopyInfo } class="cursor-pointer text-white p-2 font-normal text-normal  w-full">
			https://twitter.com/Moody010111 
			<div class="h-[4px] w-[50px] bg-green-400 rounded-md"></div>
		</div>
		<p class="text-white w-full p-2 font-thin text-sm"> 
			Click to copy! 
		</p>

	</div>

	<Form />
</SectionContainer>
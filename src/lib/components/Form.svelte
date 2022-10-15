<script lang="javascript">
	import FancyIn from './MicroComps/FancyInput.svelte';
	import FancyButton from './MicroComps/FancyButton.svelte';
	import SectionContainer from './MicroComps/SectionContainer.svelte';
	import Art from "$lib/images/Illustrations/more/importer_.svelte";
	import { onMount } from 'svelte';

	let Index = 2;
	let Email;
	let fullName;
	let Message;

	const ChangeIndex = () => {
		if(Index + 1 < 4) Index++;
		else Index = 0;
	}

	const checkVal = (v) => {
		console.log(v);
	}

	onMount(() => {
		setInterval(ChangeIndex, 5000);
	});


	const submit = (e) => {
		e.preventDefault()
		
		alert(JSON.stringify({
					Email: Email.value,
					fullName: fullName.value,
					Msg: Message.value
				}))

		return;
	}

</script>




<div class="w-full flex justify-between items-center p-6">
	<form class="flex w-full sm:w-[300px] justify-between items-center flex-col p-5" on:submit={submit}>
	
		<FancyIn Class="my-5" label="Email" T="Email" name="Email" bind:value={Email} onInput={() => {checkVal(Email)}}/>
		<FancyIn Class="my-5" label="Full Name" T="text" name="FullName" bind:value={fullName} onInput={() => {checkVal(fullName)}}/>
		<FancyIn Class="my-5" label="Message" T="text" name="Msg" bind:value={Message} onInput={() => {checkVal(Message)}}/>

		<FancyButton 
			Title="submit" 
			Class="bg-blue-400 hover:bg-blue-300 hover:shadow-md text-white" 
		/>

	</form>

	<Art index={JSON.stringify(Index)} class="hidden sm:block transition" width="200"/>

</div>











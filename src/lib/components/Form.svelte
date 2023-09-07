<!--
from requests import post, get

data: dict = {
    "FullName": "Hossin",
    "Email":    "Hello@gmail.com",
    "Message":  "Hello world!"
}

hook: str = "https://hook.eu2.make.com/1sz7foqcua5vtgq4wtkoicgohvu5wzsp"

print(post(hook, data=data).content)
-->
<script>
	import FancyIn from './MicroComps/FancyInput.svelte';
	import FancyButton from './MicroComps/FancyButton.svelte';
	import SectionContainer from './MicroComps/SectionContainer.svelte';
	import Art from "../images/Illustrations/more/importer_.svelte";
	import { onMount } from 'svelte';
	import { isAnyEmpty, PostToApi } from './FuncLib.js';

	const ERR   = 0;
	const SUCC  = 1;
	let webhook = "https://hook.eu2.make.com/1sz7foqcua5vtgq4wtkoicgohvu5wzsp";
	let result = {
		msg: "",
		style: ""
	}
	let Email;
	let FullName;
	let Message;
	let ValidationFields;
	const getValidationField = () => [...document.getElementsByClassName("validator")];
	const reportError = (i, FieldsArray) => {
		FieldsArray[i].textContent = "Seems like you left an empty or a wrong length field (requires more than 4 characters).";
		setTimeout(() => {
			FieldsArray[i].textContent = "";
		}, 7000);
	}

	const CheckValidationArray = (Array_) => {
		
		if(Array_.length > 0) {
			const VFields = getValidationField();
			let i = 0;
			let validationLength = Array_.length
			
			for(i;
			i < validationLength;
			i++
			) {
				reportError(Array_[i].index, VFields);
			}

			return false;
		}

		return true;
	}
	
	const mutateResult = (msg, type = 1) => {
		result.msg = msg;
		if (!type) {
			msg.style = "text-rose-400";
			return;
		}
		result.style = "text-green-400";
	}

	const submit = (e) => {
		e.preventDefault()
		var OK = true;
	
		const state = {
			Email: Email.value,
			FullName: FullName.value,
			Message: Message.value
		}

		var ValidationArray = isAnyEmpty(state);
		OK = CheckValidationArray(ValidationArray);

		if(OK) {
			PostToApi(webhook , state)
			.then((res) => res.status_code)
			.finally((code) => {
				if (code) {
					mutateResult("Could not send data. try again.", ERR);
					return;
				}
				mutateResult("data was sent with success!");
			});
		}

		return null;
	}

</script>

<SectionContainer title="contact">
	<div class="flex flex-col md:flex-row items-center justify-between w-full">
		<form 
			class="flex w-full sm:w-[700px] justify-between items-start flex-col p-5" 
			on:submit={submit}
		>
		
			<FancyIn Class="my-5" label="Email" T="Email" name="Email" bind:value={Email}/>
			<span class="validator w-full text-rose-400 text-xs my-2"></span>

			<FancyIn Class="my-5" label="Full Name" T="text" name="FullName" bind:value={FullName}/>
			<span class="validator w-full text-rose-400 text-xs my-2"></span>

			<FancyIn Class="my-5" label="Message" T="text" name="Msg" bind:value={Message}/>
			<span class="validator w-full text-rose-400 text-xs my-2"></span>
			
			<div class="flex flex-row gap-2 items-center justify-between">
				<FancyButton 
					Title="submit" 
					Class="bg-blue-400 hover:bg-blue-300 hover:shadow-md text-white p-2" 
				/>
				{#if result.msg.length > 0}
					<span class={`${ result.style }`}> { result.msg } </span>
				{/if}
			</div>

		</form>

		<Art 
			index="0" 
			class="hidden sm:block transition" 
			width="200"
		/>

	</div>
</SectionContainer>

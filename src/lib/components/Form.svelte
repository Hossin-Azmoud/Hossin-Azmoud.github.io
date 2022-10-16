<script lang="javascript">
	import FancyIn from './MicroComps/FancyInput.svelte';
	import FancyButton from './MicroComps/FancyButton.svelte';
	import SectionContainer from './MicroComps/SectionContainer.svelte';
	import Art from "$lib/images/Illustrations/more/importer_.svelte";
	import { onMount } from 'svelte';
	import { isAnyEmpty, PostToApi } from './FuncLib.js';

	let Email;
	let fullName;
	let Message;
	let ValidationFields;



	const checkVal = (v) => {
		console.log(v.value);
	}

	const getValidationField = () => [...document.getElementsByClassName("validator")];

	const reportError = (i, FieldsArray) => {
		FieldsArray[i].textContent = "Seems like you left an empty or a wrong length field (requires more than 4 characters).";

		setTimeout(() => {
			FieldsArray[i].textContent = "";
		}, 7000);
	}

	const CheckValidationArray = (Array_) => {
		
		if(Array_.length > 0) {
			const VFields = getValidationField()
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

	const submit = (e) => {
		e.preventDefault()
		var OK = true;
		// const FormElements = [
		// 	Email,
		// 	fullName,
		// 	Message
		// ]

		const ValOBJ = {
			Email: Email.value,
			FullName: fullName.value,
			Message: Message.value
		}


		var ValidationArray = isAnyEmpty(ValOBJ);		
		
		OK = CheckValidationArray(ValidationArray);

		if(OK) {
			// Submit the data.
			// {"Email": "Example@gmail.com", "FullName": "Joe doe", "Message": "Hi, I would like to meet you in person!"}

			PostToApi("http://127.0.0.1:7979/store", ValOBJ)
			.then((res) => {
				return res.json();
			})
			.then((Data) => {
				console.log(Data);
			});

		} else {
			return null;
		}

	}

</script>




<div class="w-full flex justify-between items-center p-6">
	<form class="flex w-full sm:w-[300px] justify-between items-start flex-col p-5" on:submit={submit}>
	
		<FancyIn Class="my-5" label="Email" T="Email" name="Email" bind:value={Email} onInput={() => {checkVal(Email)}}/>
		<span class="validator w-full text-rose-400 text-xs my-2"></span>

		<FancyIn Class="my-5" label="Full Name" T="text" name="FullName" bind:value={fullName} onInput={() => {checkVal(fullName)}}/>
		<span class="validator w-full text-rose-400 text-xs my-2"></span>

		<FancyIn Class="my-5" label="Message" T="text" name="Msg" bind:value={Message} onInput={() => {checkVal(Message)}}/>
		<span class="validator w-full text-rose-400 text-xs my-2"></span>
		
		<FancyButton 
			Title="submit" 
			Class="bg-blue-400 hover:bg-blue-300 hover:shadow-md text-white" 
		/>

	</form>

	<Art index="0" class="hidden sm:block transition" width="200"/>

</div>











<script lang="js">
	
	export let T;
	export let value;
	export let name;
	export let label;
	export let onInput;
	export let Class;

</script>


<div class="relative sm:w-[350px] w-11/12 flex justify-start items-center {Class}" {...$$restProps}>
	
	<input type={T} id={`${name}${T}`} name={name} bind:this={value} on:input={onInput} class="block py-2.5 px-2 w-full text-sm text-white bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white focus:outline-none peer outline-none ring-none" placeholder=" ">
	
	<label for={`${name}${T}`} class="absolute text-md text-gray-400 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6 outline-none ring-none border-0">
		{label}
	</label>

</div>
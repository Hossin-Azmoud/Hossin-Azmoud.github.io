<script>
    import FancyButton from '../MicroComps/FancyButton.svelte';
    import FloatingShell from './FloatingShell.svelte';
    import Fa from 'svelte-fa';
    import { faTerminal } from '@fortawesome/free-solid-svg-icons'

	let isOpen = false;
    const toggleTermState = (e) => {
		if (e != undefined && e != null)
			e.preventDefault();
		isOpen = !isOpen;
	}

</script>

<div>
	<FancyButton onclick={ toggleTermState } Class="py-4 px-6 
		flex items-center justify-between 
		flex-row text-white 
		bg-slate-800
		hover:bg-slate-700
	">
		<Fa icon={ faTerminal } size="md" color="white"/>
	</FancyButton>
    {#if (isOpen)}
        <FloatingShell close={ toggleTermState } />
    {/if}
</div>

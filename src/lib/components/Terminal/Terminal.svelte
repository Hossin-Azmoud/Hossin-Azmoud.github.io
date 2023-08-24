<script>
    import GlowButton from '../MicroComps/GlowButton.svelte';
    import FloatingShell from './FloatingShell.svelte';
    import Fa from 'svelte-fa';
    import { faTerminal } from '@fortawesome/free-solid-svg-icons'
    let isOpen = false;

    const toggleTermState = (e) => {
		if (e != undefined && e != null)
			e.preventDefault();
        console.log("Hello word!");
		isOpen = !isOpen;
	}

</script>

<div>
    <GlowButton onclick={ toggleTermState } title="open a web command line"> 
        <Fa icon={ faTerminal } color="white"/>
    </GlowButton>

    {#if (isOpen)}
        <FloatingShell close={ toggleTermState } />
    {/if}
</div>

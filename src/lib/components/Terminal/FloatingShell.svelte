<script>
    import TerminalData from './TerminalData'

	export let close = null;
    let wellcome = TerminalData.startupScreenData;
    let inputRef;
    let HistoryLen = 0;
    let history = [];
    let input   = "";
    let state   = {
		command: "",
		output:  [],
		input:   ""
    };

    const clearState = () => {
        state   = {
            command: "",
            output:  [],
            input:   ""
        };
	}

    const cleanup = () => {
        history = [];
        input   = "";
        wellcome = [];
        clearState();
    }

    const commandMap = {
		exit: (_) => {
			close();
			cleanup();
		},
		help: (_) => {
			return (TerminalData.startupScreenData);
		},
		clear: (_) => { 
			history = []
			Wellcome = [];
		},
		echo: (args) => {
			var out = [];
			
			if (args.length > 0) {
				if (args[0][0] != '\"' && args[0][0] != '\'' ) {
					out.push(args[0]);
					return out;
				}
				out.push("String literals are not supported for now! please just echo something simpler?!");
				return out;
			}
			// case of a string literal.
			out.push("[ERROR] Command was used in an incorrect manner.");
			out.push("proper Usage: ");
			out.push("    echo string");
			return out;
		}
	}

    const commandStation = (Command, commandMap) => {
        var [cmd, ...args] = Command.trim().split(' ');

        if (cmd.length == 0)
        {
            return null;
        }

        var ob = {
            command: cmd.toLowerCase(), // command after clean up and tokenization.
            output:  [],    // output that will be generated later for the command.
            argv:   args, // args of the commannd
            input:  Command //
        }

        if (ob.command in commandMap)
        {
            var output = commandMap[ob.command](args);
            if (output != null)
                ob.output = output;

            return (ob);
        }

        ob.output.push(`${ ob.command } commad not found`);
        return (ob);
    }
    const executeCommand = () => {
		var tmp = state;
		var cmdResult = commandStation(input, commandMap);

		if (cmdResult != null) {
			tmp.command = cmdResult.command;
			tmp.output  = cmdResult.output;
			tmp.input   = cmdResult.input;
			state = tmp;
		}
	}
    const handleShellCommand = (e) => {

		e.preventDefault();
		executeCommand();
		if (state.command != "clear") {
			var tmp = history;
			tmp.push(state);
			history = tmp;
		}

		clearState();
		input = ""
	};
    
    const captueCommand = (e) => {
		e.preventDefault();
		input = (e.target.value);
	}

    $: HistoryLen = (() => {
        return (history.length);
    })()

    $: history = (() => {
        if (history.length)
            inputRef.scrollIntoView({ block: "end", behavior: "smooth" });

        return (history);
    })();

</script>
<div>
    <!-- svelte-ignore a11y-click-events-have-key-events -->
    <div on:click={() => commandMap.exit([])} class="bg-black opacity-50 fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-25 w-full h-full blur-lg"> </div>
		<div class="bg-neutral-900 fixed top-1/2 left-1/2 z-30 -translate-x-1/2 -translate-y-1/2 p-4 sm:h-[400px] sm:w-[700px] w-[90%] h-[90%] rounded-md overflow-y-scroll">
			<div class="flex flex flex-col justify-start my-2">	
                {#if (wellcome.length)}
                    {#each wellcome as w}
                        <p class={w.styles}> {w.text} </p>
                    {/each}
                {/if}
			</div>
			{#if (history.length)}
                {#each history as command}
                    <div>
                        <div class="flex flex-row justify-start gap-2">
                            <span class="text-xs md:text-sm font-medium text-white"> $ </span>
                            <p class="bg-transparent w-full outline-none text-xs md:text-sm font-normal text-white"
> 
                                { command.input }
                            </p>
                        </div>
                        {#if (command.output.length)}
                           {#each command.output as o}
                                <p class={(o.styles) ? o.styles : "bg-transparent w-full outline-none text-xs md:text-sm font-normal text-white"}>
                                    { (o.text != undefined) ? (o.text) : o }
                                </p>
                           {/each}
                        {/if}
                    </div>	                   
                {/each} 
            {/if}
			<form on:submit={ handleShellCommand } class="flex flex-row justify-start gap-2">
				<span class="text-xs md:text-sm font-medium text-white"> $ </span>
				<input
					on:change={ captueCommand }
					class="bg-transparent w-full outline-none text-xs md:text-sm font-normal text-white"
					spellCheck={ false }
                    bind:this={ inputRef }
					value={ input }
				/>
			</form>
		</div>
</div>

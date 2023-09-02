<script>
    import Fa from "svelte-fa";
    export let name = "";
    export let description = [];
    export let screen_shots = [];
    export let techs = [];
</script>

<div class="bg-slate-800 rounded p-2 text-white flex flex-col justify-start items-start">
    <h1 class="font-semibold text-lg"> { name } </h1>
    <!-- Project desc paragraphs. -->
    {#each description as para}
            <p class="font-thin text-normal"> { para } </p>
    {/each}

    <!-- Screen shots! -->
    {#each screen_shots as shot}
        <img src={ shot } alt="screen_shot." class="w-[80%]"/>
    {/each}

    <!-- TODO: Links -->
    <!-- What I used! -->
    <div class="flex flex-row gap-2 justify-center iterms-center">
        {#each techs as technology}
            <Fa 
                icon={technology} 
                size="2x" 
                color="white"
            />
        {/each}
    </div>
</div>

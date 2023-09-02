<script lang="js">
	import SectionContainer from './MicroComps/SectionContainer.svelte';
    import Project from './MicroComps/Project.svelte';
    import { faPython } from '@fortawesome/free-brands-svg-icons';
    import HED1 from '../images/Screenshots/HEDShell/HED1.png';

    let Projects_Array = [
        {
            desc: ["Test test!"],
            techs: [faPython],
            name: "HEDShell",
            screens: [HED1]
        }
    ]
</script>

<SectionContainer title="Projects">
    {#each Projects_Array as project_}
        <Project 
            description={project_.desc}
            name={project_.name}
            techs={project_.techs}
            screen_shots={project_.screens}
        />
    {/each}
</SectionContainer>

<script>
	import { GetImage, SVGs } from '../images/Illustrations/art/Loader.js';
	import { faAngleDoubleLeft, faAngleDoubleRight, faTimes } from '@fortawesome/free-solid-svg-icons';
	import Fa from 'svelte-fa';

	export let index = 0;
	let ImageIndex = undefined;

	const setImage = (i) => {
		return () => {
			ImageIndex = i;
		}
	}

	const unsetImage = () => {
		ImageIndex = undefined;
	}

	const nextImage = () => {
		if (ImageIndex + 1 < SVGs.length) {
			ImageIndex++;
		}

	}

	const prevImage = () => {
		if (ImageIndex > 0) {
			ImageIndex--;
		}
	}

</script>

{#if index != "ALL"}
	<img on:click={ setImage(index) } src={GetImage(index)} alt="art" {...$$restProps}/>
{:else}
	{#each SVGs as img, idx}
		<img on:click={ setImage(idx) } src={ img } alt="art" {...$$restProps}/>
	{/each}
{/if}

{#if ImageIndex != undefined}
	<div on:click={ unsetImage } class="fixed w-screen h-screen top-0 left-0 bg-black opacity-50">
	</div>
	<div class="flex flex-col items-center w-screen justify-content fixed z-50 opacity-100 left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 gap-4 opacity-100">
		<img
			src={ GetImage(ImageIndex) }
			alt="art"
			class="rounded-md md:w-[500px] w-full p-6 transition duration-200 ease-in-out"
		/>
		<div class="flex flex-row items-center justify-content gap-8">
			<button on:click={ prevImage } class="bg-white cursor-pointer p-2 rounded-md">
				<Fa icon={ faAngleDoubleLeft } size="1x" color="#000000" />
			</button>
			<button on:click={ nextImage } class="bg-white cursor-pointer p-2 rounded-md">
				<Fa icon={ faAngleDoubleRight } size="1x" color="#000000"/>
			</button>

			<button on:click={ unsetImage } class="bg-slate-800 cursor-pointer p-2 rounded-md">
				<Fa icon={ faTimes } size="1x" color="#FFFFFF"/>
			</button>

		</div>
	</div>
{/if}

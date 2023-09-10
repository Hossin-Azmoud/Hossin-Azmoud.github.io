<script>
	import { Router, Route } from "svelte-navigator";
	import Home      from "./home.svelte"
	import About     from "./about/about.svelte"
	import Contact   from "./contact/contact.svelte"
	import Icons     from "../lib/components/UtilComps/IconLib.svelte"
	import Nav       from '../lib/components/Nav.svelte';
	import Footer    from '../lib/components/Footer.svelte';
</script>

<Router>
	<main class="w-11/12  lg:w-[1000px] flex flex-col items-center justify-center p-0 m-0 poppins">
		<Nav />
		<Route path="/">
			<Home />
		</Route>
		
		<Route path="/about">
			<About />
		</Route>
		<Route path="/contact">
			<Contact />
		</Route>
		<Route path="/i">
			<Icons />
		</Route>
	</main>

	<Footer />
</Router>




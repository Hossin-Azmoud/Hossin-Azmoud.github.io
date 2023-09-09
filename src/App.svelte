<script>
	import Layout    from "./routes/Layout.svelte"
	import Home      from "./routes/home.svelte"
	import About     from "./routes/about/about.svelte"
	import Contact   from "./routes/contact/contact.svelte"
	import Icons     from "./lib/components/UtilComps/IconLib.svelte"
	const routes = {
		"/": Home,
		"/about": About,
		"/contact": Contact,
		"/i": Icons
	}

</script>
<Layout 
	{routes}
/>

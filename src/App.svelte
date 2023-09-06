<script>
	import Layout    from "./routes/Layout.svelte"
	import Home from "./routes/home.svelte"
	import About from "./routes/about/about.svelte"
	import Contact from "./routes/contact/contact.svelte"

	const routes = {
		"/": Home,
		"/about": About,
		"/contact": Contact,
	}

</script>
<Layout {routes}/>

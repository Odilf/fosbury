<script lang="ts">
	import { onMount } from 'svelte';
	import type { PageServerData } from './$types';
	import Tabs from './Tabs.svelte';

	export let data: PageServerData;

	onMount(() => {
		// God awful hack to get around dark reader changing styles at the start. 
		document.styleSheets[0].insertRule(`body { transition: all 1s ease; }`, 0)
	})

	
</script>

<main class="main-column">
	<h1> Fosbury </h1>
	<p class='tag'> Minimal CSS scaffolding with overridable, sensible defaults </p>
	<a href="/about" style="margin-bottom: 2rem;"> Wait, what? </a>

	<h2> Quickstart </h2>

	<p> Install the library with your favorite package manager: </p>
	{@html data.code.install}

	<p> And then use it with either javascript or CSS </p>
	<div class='two-cols'>
		{@html data.code.jsSimplest}
		{@html data.code.cssSimplest}
	</div>

	<h2> Usage </h2>
	<p style='margin-bottom: 0.5rem;'> The main way to use this library is by using the CSS variables for color. The main available variables are: </p>
	<ul style='margin-top: 0;'>
		<li> <code>--base</code> </li>
		<li> <code>--primary</code> </li>
		<li> <code>--secondary</code> </li>
		<li> <code>--accent</code> </li>
	</ul>

	<p> They all have focus and content variants (e.g.: <code>--base-content</code>, <code>--primary-focus</code>). </p>
	<p> For more info check <a href="/docs">the docs</a></p>

	<h2> Themes </h2>
	<p> Fosbury comes with a few themes out of the box. You can also <a href="/custom-themes">make your own theme</a> </p>

	<p> Here you can test some of the builtin themes. In fact, a theme is so minimal that I can just show you the entire file lol </p>

	<Tabs values={data.themeSources} selected='default'/>

</main>

<style>
	h1 {
		font-size: 4em;
		font-weight: 800;

		margin-bottom: 0.5rem;
	}

	.tag {
		font-size: 1.5em;
		font-weight: 100;
	}

	a {
		width: fit-content;
	}

	.two-cols {
		display: grid;
		grid-template-columns: 1fr 1fr;
		grid-gap: 1rem;
	}
</style>

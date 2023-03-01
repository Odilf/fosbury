<script lang="ts">
    import { quintOut } from "svelte/easing";
    import { slide } from "svelte/transition";
    import Tab from "./Tab.svelte";

	export let values: Record<string, { code: string, highlighted: string }>;
	export let selected: string;

	function select(option: string) {
		selected = option;
		value = values[selected];
	}

	let value = values[selected];
	
	function handleKeydown(e: KeyboardEvent) {
		console.log(e.key);
		
		if (e.key === 'ArrowLeft') {
			select(Object.keys(values)[Math.max(0, Object.keys(values).indexOf(selected) - 1)]);
		} else if (e.key === 'ArrowRight') {
			select(Object.keys(values)[Math.min(Object.keys(values).length - 1, Object.keys(values).indexOf(selected) + 1)]);
		}
	}
</script>

<svelte:window on:keydown={handleKeydown}/>

<ul>
	{#each Object.keys(values) as option}
	<li>
		<Tab on:click={() => select(option)} name={option} selected={selected === option}/>
	</li>
	{/each}
</ul>

{#key selected}
	<div transition:slide|local={{ duration: 500, easing: quintOut }}>
		{@html value.highlighted}
	</div>
{/key}

<!-- Safe because it's basically equivalent to inspector editing, all in the client -->
{@html `<style id='user-input'>
	${value.code}
</style>`}

<style>
	ul {
		padding: 0;
		display: flex;
		list-style: none;
	}
</style>
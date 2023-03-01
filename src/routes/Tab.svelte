<script lang="ts">
	export let name: string;
	export let selected = false;
</script>

<button on:click class:selected>
	{name}
</button>

<style>
	
	
	button {
		border: 0px solid var(--primary);
		border-bottom-width: 2px;
		width: 100%;

		font-weight: 300;
		/* font-size: 1.5em; */

		cursor: pointer;

		margin-inline: 0.5rem;
		display: grid;
		place-items: center;

		transition: all 200ms ease;
		border-top-right-radius: var(--border-radius);
		border-top-left-radius: var(--border-radius);
	}

	button:hover:not(.selected)  {
		opacity: 0.8;
	}

	:not(.selected) {
		opacity: 0.3;
	}

	.selected {
		background-color: var(--primary);
		color: var(--primary-content);
		opacity: 1;
		cursor: default;
	}
</style>
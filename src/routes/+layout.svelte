<script lang="ts">
	import '$lib/fosbury.css';
</script>

<slot />

<style>
	:global(.shiki) {
		background-color: var(--base-focus) !important;
		/* background-color: red !important; */
		color: var(--base-content);
		padding: 1rem;
		margin: 0;
		border-radius: var(--border-radius);
		margin-bottom: 1em;
		overflow-x: scroll;

		transition: all 1s ease;
	}
</style>
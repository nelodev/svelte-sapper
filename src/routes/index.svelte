<script context="module">
	export function preload() {
		return this.fetch(`blog.json`).then(r => r.json()).then(posts => {
			return { posts };
		});
	}
</script>

<script>
	import Post from '../components/Post.svelte';
	export let posts;
</script>

<style>
	.posts {
		display: grid;
		justify-content: space-between;
		gap: 15px;
		grid-template-columns: 1fr;
	}
</style>

<svelte:head>
	<title>Nelo Puchades Bresó</title>
</svelte:head>

<div class="home">
	<div class="posts">
		{#each posts as post}
			<Post {post} />
		{/each}
	</div>
</div>

<script>
  import { applyAction, enhance } from '$app/forms'
  import { currentUser, pb } from '$lib/pocketbase'
</script>

<div class="text-xl">
  {#if $currentUser}
    <div class="mb-10">Logged in as: <strong>{$currentUser.email}</strong></div>

    <h1>Welcome to SvelteKit</h1>
    <p>
      Visit <a href="https://kit.svelte.dev">kit.svelte.dev</a> to read the documentation
    </p>
  {:else}
    <p>Not logged in...</p>
  {/if}
</div>

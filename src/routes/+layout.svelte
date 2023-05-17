<script lang="ts">
  import { applyAction, enhance } from '$app/forms'
  import Navbar from '$lib/components/navbar/Navbar.svelte'
  import { currentUser, pb } from '$lib/pocketbase'
  import '../app.postcss'
</script>

<div>
  <Navbar />

  <div class="max-w-5xl mx-auto py-8 px-4">
    <slot />
  </div>
</div>

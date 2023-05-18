<script lang="ts">
  import { applyAction, enhance } from '$app/forms'
  import Navbar from '$lib/component/Navbar.svelte'
  import Footer from '$lib/component/Footer.svelte'
  import { currentUser, pb } from '$lib/pocketbase'
  import '../app.postcss'
  import Nav from '$lib/component/Nav.svelte'
</script>

<div>
  <Navbar />
  <!-- <Nav /> -->

  <div class="max-w-5xl mx-auto py-8 px-4">
    <slot />
  </div>

  <Footer />
</div>

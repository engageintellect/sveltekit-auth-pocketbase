<script lang="ts">
  import { applyAction, enhance } from '$app/forms'
  import { pb } from '$lib/pocketbase'
</script>

<form
  method="POST"
  class="card max-w-xl mx-auto"
  use:enhance={() => {
    return async ({ result }) => {
      pb.authStore.loadFromCookie(document.cookie)
      // pb.get
      await applyAction(result)
    }
  }}
>
  <h1 class="text-2xl mb-8">Add Record</h1>
  <div class="form-control gap-2 mb-4">
    <input
      type="name"
      name="name"
      placeholder="Title"
      class="input input-bordered"
    />
    <input
      type="name"
      name="artist"
      placeholder="Artist"
      class="input input-bordered"
    />
    <input
      type="name"
      name="genre"
      placeholder="Genre"
      class="input input-bordered"
    />
    <input
      type="name"
      name="year"
      placeholder="Year"
      class="input input-bordered"
    />
    <button class="btn btn-primary">Add</button>
  </div>
</form>

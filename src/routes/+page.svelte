<script lang="ts">
  let res: any
  import { currentUser, pb } from '$lib/pocketbase'
  import RecordCard from '$lib/component/RecordCard.svelte'

  async function records() {
    const response = await fetch('/records')
    res = await response.json()
    return res
  }

  if ($currentUser) {
    records()
  }
</script>

<div>
  {#if $currentUser}
    <div>Hello <strong>{$currentUser.name}!</strong></div>

    {#if res !== undefined}
      <div class="mt-5 grid grid-cols-1 md:grid-cols-2 gap-5">
        {#each res as item}
          <div class="">
            <RecordCard
              id={item.id}
              name={item.name}
              artist={item.artist}
              genre={item.genre}
              year={item.year}
            />
          </div>
        {/each}
      </div>
    {/if}
  {:else}
    <div>not logged in</div>
    <button class="btn btn-primary">
      <a href="/login">Login</a>
    </button>
  {/if}
</div>

<script lang="ts">
  import { currentUser, pb } from '$lib/pocketbase'
  // import { applyAction, enhance } from '$app/forms'
  // import PocketBase from 'pocketbase'
  import RecordCard from '$lib/component/RecordCard.svelte'
  import type { PageData } from './$types'

  export let data: PageData
</script>

<div class="text-xl">
  {#if $currentUser}
    <div class="mb-10">Logged in as: <strong>{$currentUser.email}</strong></div>

    <button class="btn btn-primary">
      <a href="/addItem">Add Record</a>
    </button>

    <div class="">
      <div class="">
        <div class="mt-5 grid grid-cols-1 md:grid-cols-2 gap-5">
          {#each data.records as item}
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
      </div>
    </div>
  {:else}
    <p>Not logged in...</p>
    <button class="btn">
      <a href="/login">Login</a>
    </button>
  {/if}
</div>

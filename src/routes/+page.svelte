<script lang="ts">
  let res: any
  import { currentUser, pb } from '$lib/pocketbase'
  import RecordCard from '$lib/component/RecordCard.svelte'

  async function records() {
    const response = await fetch('/getRecords')
    res = await response.json()
    return res
  }

  if ($currentUser) {
    records()
  }
</script>

<div>
  {#if $currentUser}
    <div class="hero p-10 bg-base-200">
      <div class="hero-content text-center">
        <div class="max-w-md">
          <h1 class="text-5xl font-bold">
            Hello, <strong class="capitalize">{$currentUser.name}!</strong>
          </h1>
          <p class="py-6">Add your favorite records to your collection.</p>
          <button class="btn btn-primary">
            <a href="/addRecord">Add Record</a>
          </button>
        </div>
      </div>
    </div>

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
    <div class="text-3xl my-10">Hey, stranger. You're not logged in.</div>
    <button class="btn btn-primary">
      <a href="/login">Login</a>
    </button>
  {/if}
</div>

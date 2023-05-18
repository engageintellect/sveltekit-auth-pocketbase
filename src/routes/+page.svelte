<script lang="ts">
  import { applyAction, enhance } from '$app/forms'
  import { currentUser, pb } from '$lib/pocketbase'

  import PocketBase from 'pocketbase'
  import Card from '$lib/component/Card.svelte'
  import RecordCard from '$lib/component/RecordCard.svelte'
  import type { PageData } from './$types'

  export let data: PageData

  let title: string
  let artist: string
  let genre: string
  let year: string

  const handleCreate = async () => {
    const pb = new PocketBase(process.env.POCKETBASE_URL)
    const albumData = {
      name: title,
      artist: artist,
      genre: genre,
      year: year,
    }

    if (!title || !artist || !genre || !year) {
      alert('Please fill out all fields')
      return
    } else {
      const record = await pb.collection('albums').create(albumData)

      // console.log('Data:', albumData);
      // console.log('Record:', record);
      // console.log('Record Added!');
      location.reload()
    }
  }
</script>

<div class="text-xl">
  {#if $currentUser}
    <div class="mb-10">Logged in as: <strong>{$currentUser.email}</strong></div>

    <h1>Welcome to SvelteKit</h1>
    <p>
      Visit <a href="https://kit.svelte.dev">kit.svelte.dev</a> to read the documentation
    </p>

    <button class="btn btn-primary">
      <a href="/addItem">Add Record</a>
    </button>

    <div class="">
      <div class="">
        <!-- <div class="mt-5 bg-base-200 p-2 lg:p-5 sticky top-0">
          <div class="text-4xl drop-shadow-lg font-semibold py-5">Records</div>
          <div class="flex flex-col w-full justify-center items-center">
            <div class="flex flex-col md:flex-row gap-5 w-full">
              <div>
                <label for="hello world" class="">Title:</label>
                <input class="p-2 w-full" type="text" bind:value={title} />
              </div>
              <div>
                <label for="hello world" class="">Artist:</label>
                <input class="p-2 w-full" type="text" bind:value={artist} />
              </div>
              <div>
                <label for="hello world" class="">Genre:</label>
                <input class="p-2 w-full" type="text" bind:value={genre} />
              </div>
              <div>
                <label for="hello world" class="">Year:</label>
                <input class="p-2 w-full" type="text" bind:value={year} />
              </div>
            </div>
            <button
              on:click={() => handleCreate()}
              class="w-full flex justify-center btn mt-5">Add Record</button
            >
          </div>
        </div> -->

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

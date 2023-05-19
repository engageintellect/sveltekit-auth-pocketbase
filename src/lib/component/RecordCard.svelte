<script lang="ts">
  import { pb } from '$lib/pocketbase'

  import { writable } from 'svelte/store'

  export let name: string
  export let artist: string
  export let genre: string
  export let year: string
  export let id: string

  export const record = writable('')

  const handleDelete = async (item_id: string) => {
    $record = id
    console.log('record', $record)

    // console.log('res', res)

    const res = await pb.collection('albums').delete($record)
    console.log('res', res)
    location.reload()

    // await pb.collection('albums').delete(item_id)
  }
</script>

<div class="card card-side bg-base-100 shadow-xl">
  <!-- <figure>
    <img
      src="https://t4.ftcdn.net/jpg/00/97/58/97/360_F_97589769_t45CqXyzjz0KXwoBZT9PRaWGHRk5hQqQ.jpg"
      alt="Movie"
    />
  </figure> -->
  <div class="card-body">
    <div>{id}</div>
    <h2 class="card-title text-3xl">{name}</h2>

    <div><strong>Artist:</strong> {artist}</div>
    <div><strong>Genre:</strong> {genre}</div>
    <div><strong>Year:</strong> {year}</div>

    <div class="card-actions justify-end">
      <button
        on:click={() => {
          handleDelete(id)
        }}
        class="p-3 btn btn-error">delete</button
      >
    </div>
  </div>
</div>

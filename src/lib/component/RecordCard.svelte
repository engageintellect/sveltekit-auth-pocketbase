<script lang="ts">
  import { pb } from '$lib/pocketbase'
  import PocketBase from 'pocketbase'

  export let name: string
  export let artist: string
  export let genre: string
  export let year: string
  export let id: string

  const handleDelete = async (item_id: string) => {
    await pb.collection('albums').delete(item_id)
    location.reload()
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

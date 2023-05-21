<script lang="ts">
  import { pb } from '$lib/pocketbase'

  export let name: string
  export let artist: string
  export let genre: string
  export let year: string
  export let id: string

  let delRes: any

  const handleDelete = async (item_id: string) => {
    await pb.collection('albums').delete(item_id)
    location.reload()
  }

  async function delRecord(item_id: string) {
    const response = await fetch('../api/deleteRecord', {
      method: 'POST',
      body: JSON.stringify({ item_id }),
      headers: {
        'content-type': 'application/json',
      },
    })

    delRes = await response.json()
    location.reload()
  }
</script>

<div class="card card-side bg-base-100 shadow-xl">
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

    <div>
      <button
        on:click={() => {
          delRecord(id)
        }}
        class="btn btn-error">delRecord</button
      >
    </div>
  </div>
</div>

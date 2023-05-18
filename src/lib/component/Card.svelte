<script lang="ts">
  import PocketBase from 'pocketbase'

  export let name: string
  export let artist: string
  export let genre: string
  export let year: string
  export let id: string

  const pb = new PocketBase('http://45.56.88.245:8090')

  const handleDelete = async (item_id: string) => {
    await pb.collection('albums').delete(item_id)
    location.reload()
  }
</script>

<div class="p-2 shadow-md bg-base-200">
  <div class="flex justify-between">
    <div>
      <div class="text-3xl">{name}</div>
      <div><strong>Artist:</strong> {artist}</div>
      <div><strong>Genre:</strong> {genre}</div>
      <div><strong>Year:</strong> {year}</div>
    </div>
    <div>
      <button
        on:click={() => {
          handleDelete(id)
        }}
        class="p-3 btn btn-error">delete</button
      >
    </div>
  </div>
</div>

<script>
  /**
   * @type {any}
   */
  let res
  import { currentUser, pb } from '$lib/pocketbase'

  async function records() {
    const response = await fetch('/records')
    res = await response.json()

    return res
  }

  if ($currentUser) {
    records()
  }
</script>

<div>hello world</div>

{#if $currentUser}
  hello {$currentUser.email}
{/if}

{#if res !== undefined}
  {#each res as item}
    <div>{item.name}</div>
  {/each}
{/if}

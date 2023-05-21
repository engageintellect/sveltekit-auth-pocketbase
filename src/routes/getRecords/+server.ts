import { json } from '@sveltejs/kit'
import { pb } from '$lib/pocketbase'

export async function GET() {
  const records = await pb
    .collection('albums')
    .getFullList(200 /* batch size */, { sort: '-created' })
  console.log({ records })

  return json(records)
}

import { json } from '@sveltejs/kit'
import type { RequestHandler } from './$types'
import { pb } from '$lib/pocketbase'

export const POST = (async ({ request }) => {
  const { item_id } = await request.json()
  const res = await pb.collection('albums').delete(item_id)
  return json(res)
}) satisfies RequestHandler

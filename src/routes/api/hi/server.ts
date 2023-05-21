import { json } from '@sveltejs/kit'
import type { RequestHandler } from './$types'

export const POST = (async ({ request }) => {
  const { a, b } = await request.json()
  return json(a + b)
}) satisfies RequestHandler

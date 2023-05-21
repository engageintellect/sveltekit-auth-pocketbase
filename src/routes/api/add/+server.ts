import { json } from '@sveltejs/kit'
import type { RequestHandler } from './$types'

export const POST = (async ({ request }) => {
  const { a, b } = await request.json()
  console.log(a)
  return json(a + b)
}) satisfies RequestHandler

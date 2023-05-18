import type { PageLoad } from './$types'

import { pb } from '$lib/pocketbase'

export const load = (async () => {
  const records = await pb
    .collection('albums')
    .getFullList(200 /* batch size */, {
      sort: '-created',
    })

  console.log({ records })
  return { records }
}) satisfies PageLoad

import { pb } from '$lib/pocketbase'

export default async function POST() {
  const res = await pb.collection('albums').delete('td8inkoerkho0vl')
  console.log(res)
}

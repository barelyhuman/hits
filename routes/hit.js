import { writeHitFor } from '../lib/hits'

export default defineEventHandler(async ev => {
  const spBaseSplits = ev.path.split('?')
  if (!spBaseSplits.length == 2) {
    // error
    return `failed`
  }
  const sp = new URLSearchParams(spBaseSplits[1])
  const url = sp.get('url')
  if (!url) {
    setResponseStatus(400)
    return 'Invalid request, `url` search parameter is required'
  }
  const count = await writeHitFor(url)
  return `Updated: ${count}`
})

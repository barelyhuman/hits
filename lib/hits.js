import { getSafeLink } from './link'

const storageKey = 'counts'

export async function getCurrentHits(link) {
  const safeLink = getSafeLink(link)
  const result = {
    link: safeLink,
    count: 0,
  }
  const item = await useStorage('db').getItem(storageKey)

  if (item[safeLink]) {
    result.count = item[safeLink]?.count || 0
  }

  return result
}

export async function writeHitFor(link) {
  const safeLink = getSafeLink(link)
  let count = 0

  const linkCounts = (await useStorage('db').getItem(storageKey)) || {}
  if (linkCounts[safeLink]) {
    count = linkCounts[safeLink]?.count || 0
  }

  await useStorage('db').setItem(storageKey, {
    ...linkCounts,
    [safeLink]: {
      count: (count += 1),
    },
  })

  return count
}

export function getSafeLink(link) {
  const url = new URL(link)
  return [url.host, url.pathname].join('')
}

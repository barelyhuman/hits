// @island
import Header from '../components/header'
import { signal } from '@preact/signals'

const count = signal(0)

async function fetchCount() {
  // TODO: REPLACE URL WITH YOUR SELF HOST COUNT
  const response = await fetch(
    `https://hits.goblin.run/hits?url=${window.location.href}`
  ).then(d => d.json())
  count.value = response.count
}

if (typeof window !== 'undefined') {
  setInterval(() => {
    fetchCount()
  }, 10000)
  fetchCount()
}

export default function LandingPage({ content }) {
  return (
    <>
      <Header />
      <section dangerouslySetInnerHTML={{ __html: content }} />
      <div>
        <h3>Counter</h3>
        <p>{count}</p>
      </div>
    </>
  )
}

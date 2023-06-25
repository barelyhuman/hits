// @island
import Header from '../components/header'
import { signal } from '@preact/signals'

const count = signal(0)

if (typeof window !== 'undefined') {
  setInterval(() => {
    fetchCount()
  }, 10000)
  fetchCount()
}

const fetchCount = () => {
  // TODO: REPLACE URL WITH YOUR SELF HOST COUNT
  fetch(`https://hits.goblin.run/hits?url=${window.location.href}`)
    .then(d => d.json())
    .then(d => {
      count.value = d.count
    })
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

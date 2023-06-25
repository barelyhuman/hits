import BaseLayout from '../layouts/base-layout'
import LandingPage from '../pages/landing.page'
import { marked } from 'marked'
import { gfmHeadingId } from 'marked-gfm-heading-id'
import shiki from 'shiki'

export default defineEventHandler(async ev => {
  const md = await useStorage('assets:server').getItem('home.md')
  const highlighter = await shiki.getHighlighter({
    theme: 'min-light',
  })

  const renderer = {
    code(code, infostring, escaped) {
      return highlighter.codeToHtml(code, { lang: infostring })
    },
  }

  marked.use(gfmHeadingId())
  marked.use({
    mangle: false,
  })
  marked.use({
    renderer,
  })

  const html = marked(md)
  return renderComponent(
    <BaseLayout>
      <LandingPage content={html} />
    </BaseLayout>
  )
})

export default function BaseLayout({ children }) {
  return (
    <html>
      <head>
        <link rel="stylesheet" href="/public/style.css" />
      </head>
      <body>{children}</body>
      <script>
        {
          'fetch(`https://hits.goblin.run/hit?url=${window.location.href}`).then(r => r.text())'
        }
      </script>
    </html>
  )
}

export default function BaseLayout({ children }) {
  return (
    <html>
      <head>
        <link rel="stylesheet" href="/public/style.css" />
      </head>
      <body>{children}</body>
    </html>
  )
}

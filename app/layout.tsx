import "./globals.css"

export const metadata = {
  title: "NYC Food Ratings",
  description: "Home Page of NYC Food Ratings",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}

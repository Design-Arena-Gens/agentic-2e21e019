export const metadata = {
  title: 'Loyalty Ki Kahani - वफ़ादारी की कहानी',
  description: 'एक दिल को छू लेने वाली कहानी वफ़ादारी के बारे में',
}

export default function RootLayout({ children }) {
  return (
    <html lang="hi">
      <body style={{ margin: 0, padding: 0, fontFamily: 'system-ui, -apple-system, sans-serif' }}>
        {children}
      </body>
    </html>
  )
}

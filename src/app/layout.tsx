import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { ThemeProvider } from './components/Theme/ThemeProvider'
import './globals.css'
const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Algorithms Project',
  description: 'WebSite of algorithms',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="dark antialiased">
      <body className={inter.className}>
      <ThemeProvider attribute="class">{children}</ThemeProvider>
      </body>
    </html>
  )
}

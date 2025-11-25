import type { Metadata } from 'next'
import { GeistSans } from 'geist/font/sans'
import { GeistMono } from 'geist/font/mono'
import { Analytics } from '@vercel/analytics/next'
import { Favicon } from '@/components/favicon'
import './globals.css'

export const metadata: Metadata = {
  title: 'Damir',
  description: 'Created with love',
  generator: 'dmr',
  icons: {
    icon: '/icons8-фиолетовое-сердце-48.png',
    shortcut: '/icons8-фиолетовое-сердце-48.png',
    apple: '/icons8-фиолетовое-сердце-48.png',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`font-sans ${GeistSans.variable} ${GeistMono.variable}`}>
        <Favicon />
        {children}
        <Analytics />
      </body>
    </html>
  )
}

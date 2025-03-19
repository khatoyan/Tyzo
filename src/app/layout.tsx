import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Header from '@/components/Header'

const inter = Inter({ subsets: ['latin', 'cyrillic'] })

export const metadata: Metadata = {
  title: 'Tyzo — Современные веб-сайты для бизнеса',
  description: 'Разработка лендингов, корпоративных сайтов и интернет-магазинов. Привлекательный дизайн, удобный интерфейс, быстрая загрузка.',
  icons: {
    icon: '/favicon.ico',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ru" className="h-full scroll-smooth">
      <head>
        <link rel="icon" href="/favicon.ico" type="image/x-icon" />
        <link rel="shortcut icon" href="/favicon.ico" type="image/x-icon" />
      </head>
      <body className={`${inter.className} h-full antialiased`}>
        <Header />
        <main className="pt-16">
          {children}
        </main>
      </body>
    </html>
  )
} 
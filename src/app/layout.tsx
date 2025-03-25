import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Header from '@/components/Header'

const inter = Inter({ subsets: ['latin', 'cyrillic'] })

export const metadata: Metadata = {
  title: 'Tyzo — Бесплатное создание сайтов | Оплата только за подписку',
  description: 'Разработка лендингов, корпоративных сайтов и интернет-магазинов бесплатно. Оплата только за подписку, которая включает хостинг и техническое обслуживание. Создайте сайт без вложений или выберите подходящий тариф.',
  keywords: 'создать сайт, сайт бесплатно, сайт по подписке, цена сайта, бесплатные сайты, купить сайт, где купить сайт, купить официальный сайт, создание сайтов, разработка сайтов, веб-дизайн, лендинг, корпоративный сайт, интернет-магазин',
  authors: [{ name: 'Tyzo' }],
  applicationName: 'Tyzo',
  metadataBase: new URL('https://tyzo.ru'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: 'Tyzo — Бесплатное создание сайтов | Оплата только за подписку',
    description: 'Разработка лендингов, корпоративных сайтов и интернет-магазинов бесплатно. Оплата только за подписку, включающую хостинг и техническое обслуживание.',
    url: 'https://tyzo.ru',
    siteName: 'Tyzo',
    locale: 'ru_RU',
    type: 'website',
  },
  robots: {
    index: true,
    follow: true,
  },
  icons: {
    icon: [
      { url: '/favicon.ico' },
      { url: '/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
    ],
    apple: '/apple-touch-icon.png',
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
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="icon" href="/favicon-32x32.png" type="image/png" sizes="32x32" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <link rel="manifest" href="/site.webmanifest" />
        <meta name="theme-color" content="#0284c7" />
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
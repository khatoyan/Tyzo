import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import Script from 'next/script'

const inter = Inter({ subsets: ['latin', 'cyrillic'] })

export const metadata: Metadata = {
  title: 'Tyzo — Бесплатное создание сайтов | Оплата только за подписку',
  description: 'Профессиональная разработка лендингов, корпоративных сайтов и интернет-магазинов абсолютно бесплатно. Оплата только за подписку, которая включает хостинг, техническую поддержку и обслуживание. Начните развивать свой бизнес в интернете без вложений в разработку.',
  keywords: 'создать сайт, сайт бесплатно, сайт по подписке, цена сайта, бесплатные сайты, купить сайт, где купить сайт, купить официальный сайт, создание сайтов, разработка сайтов, веб-дизайн, лендинг, корпоративный сайт, интернет-магазин, SEO продвижение, веб разработка Москва, создание сайта для бизнеса',
  authors: [{ name: 'Tyzo', url: 'https://tyzo.site' }],
  publisher: 'Tyzo',
  applicationName: 'Tyzo - Бесплатное создание сайтов',
  creator: 'Команда Tyzo',
  metadataBase: new URL('https://tyzo.site'),
  alternates: {
    canonical: '/',
    languages: {
      'ru-RU': '/',
    },
  },
  openGraph: {
    title: 'Tyzo — Бесплатное создание сайтов | Оплата только за подписку',
    description: 'Профессиональная разработка лендингов, корпоративных сайтов и интернет-магазинов абсолютно бесплатно. Оплата только за подписку, включающую хостинг и техническое обслуживание.',
    url: 'https://tyzo.site',
    siteName: 'Tyzo',
    locale: 'ru_RU',
    type: 'website',
    images: [
      {
        url: 'https://tyzo.site/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Tyzo - Бесплатное создание сайтов',
      }
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Tyzo — Бесплатное создание сайтов',
    description: 'Профессиональная разработка сайтов бесплатно. Оплата только за подписку.',
    images: ['https://tyzo.site/twitter-image.jpg'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'F_BBUwLgzpsOT41mTJKT3_1F4v2suRw3OxQEX7pfePk',
    yandex: '3163d949610c2e94',
  },
  icons: {
    icon: [
      { url: '/favicon.ico' },
      { url: '/favicons/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
      { url: '/favicons/favicon-16x16.png', sizes: '16x16', type: 'image/png' },
    ],
    apple: '/favicons/apple-touch-icon.png',
    shortcut: '/favicon.ico',
  },
  category: 'technology',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ru" className="h-full scroll-smooth">
      <head>
        <link rel="manifest" href="/site.webmanifest" />
        <meta name="theme-color" content="#0284c7" />
        <meta name="format-detection" content="telephone=no" />
      </head>
      <body className={`${inter.className} h-full antialiased`}>
        {/* JSON-LD structured data for Organization */}
        <Script
          id="organization-schema"
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              "name": "Tyzo",
              "url": "https://tyzo.site",
              "logo": "https://tyzo.site/logo.png",
              "description": "Компания, специализирующаяся на бесплатном создании сайтов с оплатой только за подписку.",
              "address": {
                "@type": "PostalAddress",
                "addressLocality": "Вся Россия",
                "addressCountry": "RU"
              },
              "contactPoint": {
                "@type": "ContactPoint",
                "telephone": "89232223773",
                "contactType": "customer service",
                "availableLanguage": "Russian"
              },
              "sameAs": [
                "https://t.me/tyzosite"
              ]
            })
          }}
        />
        
        <Header />
        <main className="pt-16">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  )
} 
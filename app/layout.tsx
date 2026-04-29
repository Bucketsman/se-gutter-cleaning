import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import Script from 'next/script'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: {
    template: '%s | SE Gutter Cleaning',
    default: 'SE Gutter Cleaning | South East Melbourne',
  },
  description: 'Professional gutter cleaning across South East Melbourne.',
  metadataBase: new URL('https://seguttercleaning.com.au'),
  verification: {
    google: 'sHFnSJwsguF23RzttdKdr_YymXfS8LOIkK38niEmYnM',
  },
  openGraph: {
    type: 'website',
    siteName: 'SE Gutter Cleaning',
    locale: 'en_AU',
    images: [{ url: '/images/hero.jpg', width: 1200, height: 800, alt: 'SE Gutter Cleaning — South East Melbourne' }],
  },
  twitter: {
    card: 'summary_large_image',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const ga4Id = process.env.NEXT_PUBLIC_GA4_ID

  return (
    <html lang="en">
      <head>
        {ga4Id && (
          <>
            <Script
              src={`https://www.googletagmanager.com/gtag/js?id=${ga4Id}`}
              strategy="afterInteractive"
            />
            <Script id="ga4-init" strategy="afterInteractive">
              {`
                window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);}
                gtag('js', new Date());
                gtag('config', '${ga4Id}');
              `}
            </Script>
          </>
        )}
      </head>
      <body className={`${inter.className} antialiased text-[#1A1A1A] bg-white`}>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  )
}

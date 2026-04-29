import type { Metadata } from 'next'
import Link from 'next/link'
import Breadcrumb from '@/components/Breadcrumb'
import SchemaMarkup from '@/components/SchemaMarkup'

export const metadata: Metadata = {
  title: 'About SE Gutter Cleaning | South East Melbourne',
  description:
    'SE Gutter Cleaning is a local gutter cleaning service covering South East Melbourne: Berwick, Officer, Clyde North, Cranbourne and surrounding suburbs.',
  alternates: {
    canonical: 'https://seguttercleaning.com.au/about/',
  },
}

const localBusinessSchema = {
  '@context': 'https://schema.org',
  '@type': 'LocalBusiness',
  name: 'SE Gutter Cleaning',
  url: 'https://seguttercleaning.com.au',
  description:
    'Professional gutter cleaning across South East Melbourne. Serving the Casey and Cardinia LGAs.',
  areaServed: [
    'Berwick',
    'Narre Warren South',
    'Cranbourne',
    'Officer',
    'Clyde North',
    'Pakenham',
    'Berwick Waters',
    'Hampton Park',
  ],
  serviceType: 'Gutter Cleaning',
  priceRange: '$150 - $320',
}

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://seguttercleaning.com.au/' },
    { '@type': 'ListItem', position: 2, name: 'About', item: 'https://seguttercleaning.com.au/about/' },
  ],
}

export default function AboutPage() {
  return (
    <>
      <SchemaMarkup schema={[localBusinessSchema, breadcrumbSchema]} />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <Breadcrumb
          items={[
            { label: 'Home', href: '/' },
            { label: 'About' },
          ]}
        />

        <h1 className="text-3xl sm:text-4xl font-bold text-[#1A3D2B] mb-4">
          About SE Gutter Cleaning
        </h1>
        <p className="text-gray-700 leading-relaxed mb-10">
          SE Gutter Cleaning is a local gutter cleaning service operating across the Casey and Cardinia LGAs in South East Melbourne. We focus on one service — gutters — and we do it properly. Full clearance, downpipe flush, roofline inspection and a written report on completion. No upsells, no lock-in contracts.
        </p>

        <section className="mb-10">
          <h2 className="text-2xl font-bold text-[#1A3D2B] mb-4">What We Do</h2>
          <p className="text-gray-700 leading-relaxed">
            We clean gutters on single and double storey residential homes across SE Melbourne&apos;s established and growth suburbs. Every job covers the same scope: debris clearance, downpipe flushing, roofline inspection and a written job report when complete.
          </p>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl font-bold text-[#1A3D2B] mb-4">Our Service Area</h2>
          <p className="text-gray-700 leading-relaxed mb-6">
            We service Berwick, Narre Warren South, Cranbourne, Officer, Clyde North, Pakenham, Berwick Waters, Hampton Park and surrounding suburbs within the Casey and Cardinia corridors. If you&apos;re unsure whether we cover your area, submit a quote request and we&apos;ll confirm.
          </p>
          <div className="flex flex-wrap gap-2">
            {[
              { href: '/gutter-cleaning/berwick/', label: 'Berwick' },
              { href: '/gutter-cleaning/narre-warren-south/', label: 'Narre Warren South' },
              { href: '/gutter-cleaning/cranbourne/', label: 'Cranbourne' },
              { href: '/gutter-cleaning/officer/', label: 'Officer' },
              { href: '/gutter-cleaning/clyde-north/', label: 'Clyde North' },
              { href: '/gutter-cleaning/pakenham/', label: 'Pakenham' },
              { href: '/gutter-cleaning/berwick-waters/', label: 'Berwick Waters' },
              { href: '/gutter-cleaning/hampton-park/', label: 'Hampton Park' },
            ].map((s) => (
              <Link key={s.href} href={s.href} className="bg-[#1A3D2B] hover:bg-[#0D2B1C] text-white px-4 py-2 rounded text-sm font-medium transition-colors">
                {s.label}
              </Link>
            ))}
          </div>
        </section>

        <div className="bg-[#1A3D2B] rounded-xl p-8 text-center">
          <h2 className="text-xl font-bold text-white mb-3">Ready to Book?</h2>
          <p className="text-gray-300 mb-6 text-sm">Get a firm quote within 24 hours. No obligation.</p>
          <Link href="/get-a-quote/" className="inline-block bg-[#2ECC71] hover:bg-green-500 text-white font-semibold px-6 py-3 rounded-lg transition-colors">
            Get a Free Quote
          </Link>
        </div>
      </div>
    </>
  )
}

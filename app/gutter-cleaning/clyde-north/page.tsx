import type { Metadata } from 'next'
import Link from 'next/link'
import FAQAccordion, { FAQItem } from '@/components/FAQAccordion'
import Breadcrumb from '@/components/Breadcrumb'
import SchemaMarkup from '@/components/SchemaMarkup'

export const metadata: Metadata = {
  title: 'Gutter Cleaning Clyde North | Local & Professional | SE Gutter Cleaning',
  description:
    'Gutter cleaning in Clyde North. Serving Meridian, Googong, Eliston and surrounding estates. Local team, same-week availability. Get a free quote.',
  alternates: {
    canonical: 'https://seguttercleaning.com.au/gutter-cleaning/clyde-north/',
  },
}

const faqs: FAQItem[] = [
  {
    question: 'How much does gutter cleaning cost in Clyde North?',
    answer:
      'Single storey homes in Clyde North typically range from $150 to $220. Double storey from $220 to $320.',
  },
  {
    question: 'When should a new Clyde North home have its first gutter clean?',
    answer:
      'Twelve months from handover is a reasonable starting point. By this point, wind-blown debris has accumulated and any drainage issues become apparent.',
  },
  {
    question: 'What are box gutters and do new Clyde North homes have them?',
    answer:
      'Box gutters are internal gutters built into the roof structure. They\'re common in contemporary estate builds in Clyde North and require more specific attention than standard eave gutters. If your home has a flat or low-pitch roof section, it likely has box gutters.',
  },
]

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://seguttercleaning.com.au/' },
    { '@type': 'ListItem', position: 2, name: 'Gutter Cleaning', item: 'https://seguttercleaning.com.au/gutter-cleaning/' },
    { '@type': 'ListItem', position: 3, name: 'Clyde North', item: 'https://seguttercleaning.com.au/gutter-cleaning/clyde-north/' },
  ],
}

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: faqs.map((faq) => ({
    '@type': 'Question',
    name: faq.question,
    acceptedAnswer: { '@type': 'Answer', text: faq.answer },
  })),
}

export default function ClydeNorthPage() {
  return (
    <>
      <SchemaMarkup schema={[breadcrumbSchema, faqSchema]} />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <Breadcrumb
          items={[
            { label: 'Home', href: '/' },
            { label: 'Gutter Cleaning', href: '/gutter-cleaning/' },
            { label: 'Clyde North' },
          ]}
        />

        <h1 className="text-3xl sm:text-4xl font-bold text-[#1B2A4A] mb-4">
          Gutter Cleaning in Clyde North
        </h1>
        <p className="text-gray-700 leading-relaxed mb-10">
          Clyde North is one of Melbourne&apos;s fastest-growing suburbs. Meridian, Googong, Eliston, Calderwood and a string of newer estates have brought a large population of new homeowners to the area, most of whom are navigating property maintenance for the first time.
        </p>

        <section className="mb-10">
          <h2 className="text-2xl font-bold text-[#1B2A4A] mb-4">Why Clyde North Gutters Need Regular Attention</h2>
          <p className="text-gray-700 leading-relaxed">
            Tree coverage in Clyde North is still developing. Most estates have young street trees and limited canopy, which gives a false sense of security about gutters. The open paddock land bordering the estates and the consistent south-westerly winds across the corridor push grass seeds, dust and dry debris into gutters throughout the year. Contemporary home designs in Clyde North often include flat or low-pitch roof sections and box gutters, guttering profiles that require more attention than a standard pitched roof with standard eave gutters. Box gutters in particular can hold water and debris in ways that aren&apos;t visible from the ground. Twelve months from handover is a reasonable starting point for a first clean. We provide a firm quote before any work starts.
          </p>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl font-bold text-[#1B2A4A] mb-4">What&apos;s Included</h2>
          <ul className="space-y-3">
            {[
              'Full clearance of all gutters and valleys.',
              'Downpipe flushing.',
              'Roofline inspection.',
              'Written job report on completion.',
            ].map((item) => (
              <li key={item} className="flex items-start gap-3">
                <span className="text-[#2ECC71] font-bold flex-shrink-0">&#10003;</span>
                <span className="text-gray-700">{item}</span>
              </li>
            ))}
          </ul>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl font-bold text-[#1B2A4A] mb-4">Pricing</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
            <div className="border border-gray-200 rounded-lg p-5 text-center">
              <p className="text-gray-500 text-sm mb-1">Single storey</p>
              <p className="text-2xl font-bold text-[#1B2A4A]">$150 – $220</p>
            </div>
            <div className="border border-gray-200 rounded-lg p-5 text-center">
              <p className="text-gray-500 text-sm mb-1">Double storey</p>
              <p className="text-2xl font-bold text-[#1B2A4A]">$220 – $320</p>
            </div>
          </div>
          <p className="text-gray-600 text-sm">
            We service all Clyde North estates including Meridian, Googong, Eliston, Calderwood and surrounding residential developments.
          </p>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl font-bold text-[#1B2A4A] mb-4">Nearby Areas</h2>
          <div className="flex flex-wrap gap-2">
            {[
              { href: '/gutter-cleaning/officer/', label: 'Officer' },
              { href: '/gutter-cleaning/berwick/', label: 'Berwick' },
              { href: '/gutter-cleaning/cranbourne/', label: 'Cranbourne' },
              { href: '/gutter-cleaning/pakenham/', label: 'Pakenham' },
            ].map((s) => (
              <Link key={s.href} href={s.href} className="bg-gray-100 hover:bg-gray-200 text-[#1B2A4A] px-4 py-2 rounded text-sm font-medium transition-colors">
                {s.label}
              </Link>
            ))}
          </div>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl font-bold text-[#1B2A4A] mb-6">FAQ</h2>
          <FAQAccordion items={faqs} />
        </section>

        <div className="bg-[#1B2A4A] rounded-xl p-8 text-center">
          <h2 className="text-xl font-bold text-white mb-3">Get a Quote for Clyde North</h2>
          <p className="text-gray-300 mb-6 text-sm">Same-week availability. Firm quote within 24 hours.</p>
          <Link href="/get-a-quote/" className="inline-block bg-[#2ECC71] hover:bg-green-500 text-white font-semibold px-6 py-3 rounded-lg transition-colors">
            Get a Free Quote
          </Link>
        </div>
      </div>
    </>
  )
}

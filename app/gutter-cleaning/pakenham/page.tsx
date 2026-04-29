import type { Metadata } from 'next'
import Link from 'next/link'
import FAQAccordion, { FAQItem } from '@/components/FAQAccordion'
import Breadcrumb from '@/components/Breadcrumb'
import SchemaMarkup from '@/components/SchemaMarkup'

export const metadata: Metadata = {
  title: 'Gutter Cleaning Pakenham | Local & Professional | SE Gutter Cleaning',
  description:
    'Gutter cleaning in Pakenham. Serving Lakeside, Cardinia Views and surrounding estates. Local team, same-week availability. Get a free quote.',
  alternates: {
    canonical: 'https://seguttercleaning.com.au/gutter-cleaning/pakenham/',
  },
}

const faqs: FAQItem[] = [
  {
    question: 'How much does gutter cleaning cost in Pakenham?',
    answer:
      'Single storey homes in Pakenham typically range from $150 to $220. Double storey from $220 to $320. Rural residential properties with secondary buildings or acreage access are confirmed at quote stage.',
  },
  {
    question: 'Do you service rural blocks and properties with outbuildings in Pakenham?',
    answer:
      'Yes. We service rural residential properties on the Pakenham fringe. Properties with multiple outbuildings, stables or significant acreage access may vary from standard pricing, which we confirm at quote stage.',
  },
  {
    question: 'How often should Pakenham gutters be cleaned?',
    answer:
      "Established town-centre properties benefit from twice-yearly cleaning. Newer estate homes generally need once a year, though Pakenham's exposure to westerlies and storm cells makes spring cleaning particularly worthwhile.",
  },
]

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://seguttercleaning.com.au/' },
    { '@type': 'ListItem', position: 2, name: 'Gutter Cleaning', item: 'https://seguttercleaning.com.au/gutter-cleaning/' },
    { '@type': 'ListItem', position: 3, name: 'Pakenham', item: 'https://seguttercleaning.com.au/gutter-cleaning/pakenham/' },
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

export default function PakenhamPage() {
  return (
    <>
      <SchemaMarkup schema={[breadcrumbSchema, faqSchema]} />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <Breadcrumb
          items={[
            { label: 'Home', href: '/' },
            { label: 'Gutter Cleaning', href: '/gutter-cleaning/' },
            { label: 'Pakenham' },
          ]}
        />

        <h1 className="text-3xl sm:text-4xl font-bold text-[#1A3D2B] mb-4">
          Gutter Cleaning in Pakenham
        </h1>
        <p className="text-gray-700 leading-relaxed mb-10">
          Pakenham sits at the outer edge of the SE corridor: a mix of established town-centre housing, large rural residential blocks and newer estates like Lakeside and Cardinia Views. Each brings different gutter cleaning demands.
        </p>

        <section className="mb-10">
          <h2 className="text-2xl font-bold text-[#1A3D2B] mb-4">Why Pakenham Gutters Need Regular Attention</h2>
          <p className="text-gray-700 leading-relaxed">
            The older parts of Pakenham around the town centre and Main Street corridor have established trees and housing going back decades. These properties often haven&apos;t had regular professional gutter maintenance and tend to present with significant debris build-up on first cleans. The Lakeside estate and newer developments off Racecourse Road have younger trees but sit adjacent to open land. Large blocks on the Pakenham fringe frequently have sheds, stables and outbuildings with neglected secondary guttering. Pakenham also catches strong westerlies and occasional severe storm cells that can block gutters in a single event. Properties with secondary buildings or acreage access may vary. Confirmed at quote stage.
          </p>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl font-bold text-[#1A3D2B] mb-4">What&apos;s Included</h2>
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
          <h2 className="text-2xl font-bold text-[#1A3D2B] mb-4">Pricing</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
            <div className="border border-gray-200 rounded-lg p-5 text-center">
              <p className="text-gray-500 text-sm mb-1">Single storey</p>
              <p className="text-2xl font-bold text-[#1A3D2B]">$150 – $220</p>
            </div>
            <div className="border border-gray-200 rounded-lg p-5 text-center">
              <p className="text-gray-500 text-sm mb-1">Double storey</p>
              <p className="text-2xl font-bold text-[#1A3D2B]">$220 – $320</p>
            </div>
          </div>
          <p className="text-gray-600 text-sm">
            We service all Pakenham areas including Lakeside estate, Cardinia Views, the town centre surrounds and rural residential properties on the Pakenham fringe.
          </p>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl font-bold text-[#1A3D2B] mb-4">Nearby Areas</h2>
          <div className="flex flex-wrap gap-2">
            {[
              { href: '/gutter-cleaning/officer/', label: 'Officer' },
              { href: '/gutter-cleaning/clyde-north/', label: 'Clyde North' },
              { href: '/gutter-cleaning/berwick/', label: 'Berwick' },
              { href: '/gutter-cleaning/cranbourne/', label: 'Cranbourne' },
            ].map((s) => (
              <Link key={s.href} href={s.href} className="bg-gray-100 hover:bg-gray-200 text-[#1A3D2B] px-4 py-2 rounded text-sm font-medium transition-colors">
                {s.label}
              </Link>
            ))}
          </div>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl font-bold text-[#1A3D2B] mb-6">FAQ</h2>
          <FAQAccordion items={faqs} />
        </section>

        <div className="bg-[#1A3D2B] rounded-xl p-8 text-center">
          <h2 className="text-xl font-bold text-white mb-3">Get a Quote for Pakenham</h2>
          <p className="text-gray-300 mb-6 text-sm">Same-week availability. Firm quote within 24 hours.</p>
          <Link href="/get-a-quote/" className="inline-block bg-[#2ECC71] hover:bg-green-500 text-white font-semibold px-6 py-3 rounded-lg transition-colors">
            Get a Free Quote
          </Link>
        </div>
      </div>
    </>
  )
}

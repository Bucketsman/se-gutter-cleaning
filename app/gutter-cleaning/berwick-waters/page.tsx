import type { Metadata } from 'next'
import Link from 'next/link'
import FAQAccordion, { FAQItem } from '@/components/FAQAccordion'
import Breadcrumb from '@/components/Breadcrumb'
import SchemaMarkup from '@/components/SchemaMarkup'

export const metadata: Metadata = {
  title: 'Gutter Cleaning Berwick Waters | Local & Professional | SE Gutter Cleaning',
  description:
    'Gutter cleaning in Berwick Waters. Local team serving this newer Clyde Road estate. Same-week availability. Get a free quote.',
  alternates: {
    canonical: 'https://seguttercleaning.com.au/gutter-cleaning/berwick-waters/',
  },
}

const faqs: FAQItem[] = [
  {
    question: 'How much does gutter cleaning cost in Berwick Waters?',
    answer:
      'Single storey homes typically range from $150 to $220. Double storey from $220 to $320.',
  },
  {
    question: 'Do new Berwick Waters homes need gutter cleaning?',
    answer:
      'Yes. Wind exposure along the Clyde Road corridor and proximity to open land means debris accumulates in new gutters regardless of tree coverage. A first clean at 12 to 18 months is the recommended starting point.',
  },
  {
    question: 'Does my Berwick Waters home have box gutters?',
    answer:
      'Some contemporary Berwick Waters builds include flat roof sections with internal box gutters. If your home has a parapet wall or flat roof area, it likely has box gutters. A roofline inspection during a clean will confirm what\'s there.',
  },
]

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://seguttercleaning.com.au/' },
    { '@type': 'ListItem', position: 2, name: 'Gutter Cleaning', item: 'https://seguttercleaning.com.au/gutter-cleaning/' },
    { '@type': 'ListItem', position: 3, name: 'Berwick Waters', item: 'https://seguttercleaning.com.au/gutter-cleaning/berwick-waters/' },
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

export default function BerwickWatersPage() {
  return (
    <>
      <SchemaMarkup schema={[breadcrumbSchema, faqSchema]} />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <Breadcrumb
          items={[
            { label: 'Home', href: '/' },
            { label: 'Gutter Cleaning', href: '/gutter-cleaning/' },
            { label: 'Berwick Waters' },
          ]}
        />

        <h1 className="text-3xl sm:text-4xl font-bold text-[#1A3D2B] mb-4">
          Gutter Cleaning in Berwick Waters
        </h1>
        <p className="text-gray-700 leading-relaxed mb-10">
          Berwick Waters is a newer estate along the Clyde Road corridor, predominantly younger families in contemporary homes, many within their first few years of ownership. It&apos;s a suburb where most residents haven&apos;t yet established a maintenance routine for their property.
        </p>

        <section className="mb-10">
          <h2 className="text-2xl font-bold text-[#1A3D2B] mb-4">Why Berwick Waters Gutters Need Regular Attention</h2>
          <p className="text-gray-700 leading-relaxed">
            Berwick Waters homes are relatively new, which means trees are young and canopy is limited. Most residents assume this means gutters aren&apos;t a priority. In practice, the estate&apos;s position near open land and the consistent wind exposure along the Clyde Road corridor means debris — grass seeds, dust, bark fragments from maturing street trees — builds up steadily. Contemporary home designs in Berwick Waters include flat roof sections and internal box gutters in some builds. These require specific attention and don&apos;t self-clear the way traditional pitched gutters do. A first professional clean at the 12 to 18 month mark is the right starting point for most Berwick Waters homes. We provide a firm quote before any work starts.
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
            We service all streets within the Berwick Waters estate and surrounding Clyde Road residential developments.
          </p>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl font-bold text-[#1A3D2B] mb-4">Nearby Areas</h2>
          <div className="flex flex-wrap gap-2">
            {[
              { href: '/gutter-cleaning/berwick/', label: 'Berwick' },
              { href: '/gutter-cleaning/clyde-north/', label: 'Clyde North' },
              { href: '/gutter-cleaning/officer/', label: 'Officer' },
              { href: '/gutter-cleaning/narre-warren-south/', label: 'Narre Warren South' },
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
          <h2 className="text-xl font-bold text-white mb-3">Get a Quote for Berwick Waters</h2>
          <p className="text-gray-300 mb-6 text-sm">Same-week availability. Firm quote within 24 hours.</p>
          <Link href="/get-a-quote/" className="inline-block bg-[#2ECC71] hover:bg-green-500 text-white font-semibold px-6 py-3 rounded-lg transition-colors">
            Get a Free Quote
          </Link>
        </div>
      </div>
    </>
  )
}

import type { Metadata } from 'next'
import Link from 'next/link'
import FAQAccordion, { FAQItem } from '@/components/FAQAccordion'
import Breadcrumb from '@/components/Breadcrumb'
import SchemaMarkup from '@/components/SchemaMarkup'

export const metadata: Metadata = {
  title: 'Gutter Cleaning Officer | Local & Professional | SE Gutter Cleaning',
  description:
    'Gutter cleaning in Officer. Serving Timbertop, Minta and surrounding estates. Local team, same-week availability. Get a free quote.',
  alternates: {
    canonical: 'https://seguttercleaning.com.au/gutter-cleaning/officer/',
  },
}

const faqs: FAQItem[] = [
  {
    question: 'How much does gutter cleaning cost in Officer?',
    answer:
      'Single storey homes in Officer typically range from $150 to $220. Double storey from $220 to $320.',
  },
  {
    question: 'Do new homes in Officer need gutter cleaning?',
    answer:
      'Yes. Even without trees overhead, wind-blown debris from the surrounding paddock and bushland edges accumulates in gutters on Officer properties. Most homes benefit from a first professional clean at 12 to 18 months.',
  },
  {
    question: 'What are flat roof and skillion gutters?',
    answer:
      "Many newer Officer homes have low-pitch or skillion roof sections that don't shed debris the way traditional pitched roofs do. These sections require attention to prevent debris compacting over drainage points.",
  },
]

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://seguttercleaning.com.au/' },
    { '@type': 'ListItem', position: 2, name: 'Gutter Cleaning', item: 'https://seguttercleaning.com.au/gutter-cleaning/' },
    { '@type': 'ListItem', position: 3, name: 'Officer', item: 'https://seguttercleaning.com.au/gutter-cleaning/officer/' },
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

export default function OfficerPage() {
  return (
    <>
      <SchemaMarkup schema={[breadcrumbSchema, faqSchema]} />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <Breadcrumb
          items={[
            { label: 'Home', href: '/' },
            { label: 'Gutter Cleaning', href: '/gutter-cleaning/' },
            { label: 'Officer' },
          ]}
        />

        <h1 className="text-3xl sm:text-4xl font-bold text-[#1A3D2B] mb-4">
          Gutter Cleaning in Officer
        </h1>
        <p className="text-gray-700 leading-relaxed mb-10">
          Officer has grown fast. The Timbertop, Minta Farm and Circa estates have brought thousands of new homes to the suburb over the past decade, and most of those homeowners are booking their first or second professional gutter clean.
        </p>

        <section className="mb-10">
          <h2 className="text-2xl font-bold text-[#1A3D2B] mb-4">Why Officer Gutters Need Regular Attention</h2>
          <p className="text-gray-700 leading-relaxed">
            New homes in Officer have minimal established tree coverage, so many owners assume their gutters are fine for the first few years. The reality is different. The paddock and bushland edges surrounding Officer&apos;s estates are significant sources of wind-blown debris, dry grass seeds, bark fragments and dust accumulate in gutters even on properties with no trees directly overhead. Roof design also plays a role. Many Officer homes have low-pitch skillion or near-flat roof sections, common in contemporary estate builds, which don&apos;t shed debris naturally the way steeper pitched roofs do. Most Officer homes need cleaning every 12 to 18 months. Properties on the estate edges near open land tend toward the shorter end of that range. We provide a firm quote before any work starts.
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
            We service all Officer estates including Timbertop, Minta Farm, Circa and surrounding residential streets.
          </p>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl font-bold text-[#1A3D2B] mb-4">Nearby Areas</h2>
          <div className="flex flex-wrap gap-2">
            {[
              { href: '/gutter-cleaning/berwick/', label: 'Berwick' },
              { href: '/gutter-cleaning/clyde-north/', label: 'Clyde North' },
              { href: '/gutter-cleaning/pakenham/', label: 'Pakenham' },
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
          <h2 className="text-xl font-bold text-white mb-3">Get a Quote for Officer</h2>
          <p className="text-gray-300 mb-6 text-sm">Same-week availability. Firm quote within 24 hours.</p>
          <Link href="/get-a-quote/" className="inline-block bg-[#2ECC71] hover:bg-green-500 text-white font-semibold px-6 py-3 rounded-lg transition-colors">
            Get a Free Quote
          </Link>
        </div>
      </div>
    </>
  )
}

import type { Metadata } from 'next'
import Link from 'next/link'
import FAQAccordion, { FAQItem } from '@/components/FAQAccordion'
import Breadcrumb from '@/components/Breadcrumb'
import SchemaMarkup from '@/components/SchemaMarkup'

export const metadata: Metadata = {
  title: 'Gutter Cleaning Hampton Park | Local & Professional | SE Gutter Cleaning',
  description:
    'Gutter cleaning in Hampton Park. Dense established suburb with significant leaf fall. Local team, same-week availability. Get a free quote.',
  alternates: {
    canonical: 'https://seguttercleaning.com.au/gutter-cleaning/hampton-park/',
  },
}

const faqs: FAQItem[] = [
  {
    question: 'How much does gutter cleaning cost in Hampton Park?',
    answer:
      'Single storey homes in Hampton Park typically range from $150 to $220. Double storey from $220 to $320.',
  },
  {
    question: 'How often should Hampton Park gutters be cleaned?',
    answer:
      'Twice a year is recommended for most Hampton Park properties given the established tree coverage. Late autumn and early spring are the key windows.',
  },
  {
    question: 'Do you work on older Hampton Park homes with original guttering?',
    answer:
      "Yes. We're experienced with older guttering profiles common in Hampton Park's 1970s and 1980s housing stock. The roofline inspection during a clean flags any sections showing rust, sagging or failed joins.",
  },
]

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://seguttercleaning.com.au/' },
    { '@type': 'ListItem', position: 2, name: 'Gutter Cleaning', item: 'https://seguttercleaning.com.au/gutter-cleaning/' },
    { '@type': 'ListItem', position: 3, name: 'Hampton Park', item: 'https://seguttercleaning.com.au/gutter-cleaning/hampton-park/' },
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

export default function HamptonParkPage() {
  return (
    <>
      <SchemaMarkup schema={[breadcrumbSchema, faqSchema]} />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <Breadcrumb
          items={[
            { label: 'Home', href: '/' },
            { label: 'Gutter Cleaning', href: '/gutter-cleaning/' },
            { label: 'Hampton Park' },
          ]}
        />

        <h1 className="text-3xl sm:text-4xl font-bold text-[#1B2A4A] mb-4">
          Gutter Cleaning in Hampton Park
        </h1>
        <p className="text-gray-700 leading-relaxed mb-10">
          Hampton Park is a dense, established suburb with older housing stock and significant tree coverage. Streets throughout the suburb, particularly around Somerville Road and the residential pockets between Hallam Road and the Princes Highway, have mature trees that drop consistently through autumn and winter.
        </p>

        <section className="mb-10">
          <h2 className="text-2xl font-bold text-[#1B2A4A] mb-4">Why Hampton Park Gutters Need Regular Attention</h2>
          <p className="text-gray-700 leading-relaxed">
            Hampton Park&apos;s housing density means properties sit close together with limited roof drainage options. Gutters that overflow don&apos;t just damage the property they&apos;re on, they affect fencing, shared boundaries and neighbouring yards. Older homes throughout Hampton Park frequently have original guttering that hasn&apos;t been upgraded. Gutters from the 1970s and 1980s are more prone to rust, sagging joins and overflow than newer profiles. Regular cleaning reduces the stress on ageing guttering and extends its life. We provide a firm quote before any work starts.
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
            We service all streets across Hampton Park including the Somerville Road corridor, Hallam Road surrounds and established residential pockets throughout the suburb.
          </p>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl font-bold text-[#1B2A4A] mb-4">Nearby Areas</h2>
          <div className="flex flex-wrap gap-2">
            {[
              { href: '/gutter-cleaning/narre-warren-south/', label: 'Narre Warren South' },
              { href: '/gutter-cleaning/berwick/', label: 'Berwick' },
              { href: '/gutter-cleaning/cranbourne/', label: 'Cranbourne' },
              { href: '/gutter-cleaning/officer/', label: 'Officer' },
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
          <h2 className="text-xl font-bold text-white mb-3">Get a Quote for Hampton Park</h2>
          <p className="text-gray-300 mb-6 text-sm">Same-week availability. Firm quote within 24 hours.</p>
          <Link href="/get-a-quote/" className="inline-block bg-[#2ECC71] hover:bg-green-500 text-white font-semibold px-6 py-3 rounded-lg transition-colors">
            Get a Free Quote
          </Link>
        </div>
      </div>
    </>
  )
}

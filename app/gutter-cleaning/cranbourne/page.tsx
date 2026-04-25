import type { Metadata } from 'next'
import Link from 'next/link'
import FAQAccordion, { FAQItem } from '@/components/FAQAccordion'
import Breadcrumb from '@/components/Breadcrumb'
import SchemaMarkup from '@/components/SchemaMarkup'

export const metadata: Metadata = {
  title: 'Gutter Cleaning Cranbourne | Local & Professional | SE Gutter Cleaning',
  description:
    'Gutter cleaning in Cranbourne. Local SE Melbourne team serving all Cranbourne estates. Full clearance, downpipe flush, roofline check. Get a free quote.',
  alternates: {
    canonical: 'https://seguttercleaning.com.au/gutter-cleaning/cranbourne/',
  },
}

const faqs: FAQItem[] = [
  {
    question: 'How much does gutter cleaning cost in Cranbourne?',
    answer:
      'Single storey homes typically range from $150 to $220. Double storey from $220 to $320. Properties with secondary buildings or difficult access may vary.',
  },
  {
    question: 'Do you service the newer Cranbourne estates?',
    answer:
      'Yes. We service all parts of Cranbourne including Cranbourne East, Cranbourne North and Cranbourne West, as well as the established town centre surrounds.',
  },
  {
    question: 'How often should Cranbourne gutters be cleaned?',
    answer:
      "The older parts of Cranbourne with established trees benefit from twice-yearly cleaning. Newer estates are generally fine with once a year, though spring storm risk makes it worth keeping on top of.",
  },
]

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://seguttercleaning.com.au/' },
    { '@type': 'ListItem', position: 2, name: 'Gutter Cleaning', item: 'https://seguttercleaning.com.au/gutter-cleaning/' },
    { '@type': 'ListItem', position: 3, name: 'Cranbourne', item: 'https://seguttercleaning.com.au/gutter-cleaning/cranbourne/' },
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

export default function CranbournePage() {
  return (
    <>
      <SchemaMarkup schema={[breadcrumbSchema, faqSchema]} />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <Breadcrumb
          items={[
            { label: 'Home', href: '/' },
            { label: 'Gutter Cleaning', href: '/gutter-cleaning/' },
            { label: 'Cranbourne' },
          ]}
        />

        <h1 className="text-3xl sm:text-4xl font-bold text-[#1B2A4A] mb-4">
          Gutter Cleaning in Cranbourne
        </h1>
        <p className="text-gray-700 leading-relaxed mb-10">
          Cranbourne covers a wide area, from the older town centre and its established housing stock through to newer estates like Cranbourne East and Cranbourne North. Gutter cleaning needs vary across the suburb, but blocked downpipes and debris build-up are consistent problems regardless of which part you&apos;re in.
        </p>

        <section className="mb-10">
          <h2 className="text-2xl font-bold text-[#1B2A4A] mb-4">Why Cranbourne Gutters Need Regular Attention</h2>
          <p className="text-gray-700 leading-relaxed">
            The older parts of Cranbourne have mature native trees producing significant leaf fall through autumn and winter. Further out in the newer estates, the trees are younger but the surrounding bushland and paddock edges mean wind-blown debris accumulates in gutters that most owners assume are still clean from the builder. Cranbourne also sits in an area that catches some of Melbourne&apos;s heavier spring storm activity. A single significant storm can push enough debris into downpipes to cause overflow on properties that were clear the month before. Large blocks on the Cranbourne fringe frequently have sheds, garages and carports with guttering that rarely gets included in a clean unless specifically requested. Properties with secondary buildings or difficult access may vary. Confirmed at quote stage.
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
            We service all parts of Cranbourne including Cranbourne East, Cranbourne North, Cranbourne West and the established town centre surrounds.
          </p>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl font-bold text-[#1B2A4A] mb-4">Nearby Areas</h2>
          <div className="flex flex-wrap gap-2">
            {[
              { href: '/gutter-cleaning/narre-warren-south/', label: 'Narre Warren South' },
              { href: '/gutter-cleaning/berwick/', label: 'Berwick' },
              { href: '/gutter-cleaning/clyde-north/', label: 'Clyde North' },
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
          <h2 className="text-xl font-bold text-white mb-3">Get a Quote for Cranbourne</h2>
          <p className="text-gray-300 mb-6 text-sm">Same-week availability. Firm quote within 24 hours.</p>
          <Link href="/get-a-quote/" className="inline-block bg-[#2ECC71] hover:bg-green-500 text-white font-semibold px-6 py-3 rounded-lg transition-colors">
            Get a Free Quote
          </Link>
        </div>
      </div>
    </>
  )
}

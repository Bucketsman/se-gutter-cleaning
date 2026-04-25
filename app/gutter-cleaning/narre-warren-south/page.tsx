import type { Metadata } from 'next'
import Link from 'next/link'
import FAQAccordion, { FAQItem } from '@/components/FAQAccordion'
import Breadcrumb from '@/components/Breadcrumb'
import SchemaMarkup from '@/components/SchemaMarkup'

export const metadata: Metadata = {
  title: 'Gutter Cleaning Narre Warren South | Local & Professional | SE Gutter Cleaning',
  description:
    'Gutter cleaning in Narre Warren South. Local team, same-week availability. Full clearance, downpipe flush and roofline check. Get a free quote.',
  alternates: {
    canonical: 'https://seguttercleaning.com.au/gutter-cleaning/narre-warren-south/',
  },
}

const faqs: FAQItem[] = [
  {
    question: 'How much does gutter cleaning cost in Narre Warren South?',
    answer:
      'Single storey homes typically range from $150 to $220. Double storey from $220 to $320. Exact pricing depends on property size and access.',
  },
  {
    question: 'How often should gutters be cleaned in Narre Warren South?',
    answer:
      'Once a year is the minimum. Homes with established tree coverage or older guttering benefit from twice-yearly cleaning.',
  },
  {
    question: 'Do you service pergolas and carports in Narre Warren South?',
    answer:
      'Yes. We include all guttering on the property in the scope of a clean, including rear pergolas, carports and secondary structures.',
  },
]

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://seguttercleaning.com.au/' },
    { '@type': 'ListItem', position: 2, name: 'Gutter Cleaning', item: 'https://seguttercleaning.com.au/gutter-cleaning/' },
    { '@type': 'ListItem', position: 3, name: 'Narre Warren South', item: 'https://seguttercleaning.com.au/gutter-cleaning/narre-warren-south/' },
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

export default function NarreWarrenSouthPage() {
  return (
    <>
      <SchemaMarkup schema={[breadcrumbSchema, faqSchema]} />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <Breadcrumb
          items={[
            { label: 'Home', href: '/' },
            { label: 'Gutter Cleaning', href: '/gutter-cleaning/' },
            { label: 'Narre Warren South' },
          ]}
        />

        <h1 className="text-3xl sm:text-4xl font-bold text-[#1B2A4A] mb-4">
          Gutter Cleaning in Narre Warren South
        </h1>
        <p className="text-gray-700 leading-relaxed mb-10">
          Narre Warren South is a well-established family suburb with a mix of 1990s and early 2000s housing, mature street trees and large residential blocks. It&apos;s the kind of suburb where gutters get forgotten until they overflow, and by then the fascia boards are already showing the damage.
        </p>

        <section className="mb-10">
          <h2 className="text-2xl font-bold text-[#1B2A4A] mb-4">Why Narre Warren South Gutters Need Regular Attention</h2>
          <p className="text-gray-700 leading-relaxed">
            The streets around Haileybury College, Amberly Park and the residential pockets off Narre Warren-Cranbourne Road are lined with established native trees. Leaf fall is consistent through autumn and the larger blocks mean longer roof runs with more valley points where debris collects. Many homes in Narre Warren South also have rear pergolas and carports with separate gutter systems that get overlooked. These are often the first to block and the last to be noticed, until water backs up during a heavy downpour. Once a year is the minimum. Homes with significant tree coverage or older guttering benefit from twice yearly. We provide a firm quote before any work starts.
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
            We service all streets across Narre Warren South including Amberly Park estate, the Haileybury College surrounds and residential streets off Narre Warren-Cranbourne Road.
          </p>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl font-bold text-[#1B2A4A] mb-4">Nearby Areas</h2>
          <div className="flex flex-wrap gap-2">
            {[
              { href: '/gutter-cleaning/berwick/', label: 'Berwick' },
              { href: '/gutter-cleaning/cranbourne/', label: 'Cranbourne' },
              { href: '/gutter-cleaning/hampton-park/', label: 'Hampton Park' },
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
          <h2 className="text-xl font-bold text-white mb-3">Get a Quote for Narre Warren South</h2>
          <p className="text-gray-300 mb-6 text-sm">Same-week availability. Firm quote within 24 hours.</p>
          <Link href="/get-a-quote/" className="inline-block bg-[#2ECC71] hover:bg-green-500 text-white font-semibold px-6 py-3 rounded-lg transition-colors">
            Get a Free Quote
          </Link>
        </div>
      </div>
    </>
  )
}

import type { Metadata } from 'next'
import Link from 'next/link'
import FAQAccordion, { FAQItem } from '@/components/FAQAccordion'
import Breadcrumb from '@/components/Breadcrumb'
import SchemaMarkup from '@/components/SchemaMarkup'

export const metadata: Metadata = {
  title: 'Professional Gutter Cleaning Melbourne | SE Gutter Cleaning',
  description:
    'Expert gutter cleaning across South East Melbourne. Leaves removed, downpipes flushed, roofline checked. Same-week availability. Get a free quote.',
  alternates: {
    canonical: 'https://seguttercleaning.com.au/gutter-cleaning/',
  },
}

const faqs: FAQItem[] = [
  {
    question: 'How long does a gutter clean take?',
    answer:
      'Most single storey homes take 45 minutes to an hour. Double storey homes or properties with heavy debris build-up typically take 1.5 to 2 hours. We\'ll give you a time estimate when we confirm your booking.',
  },
  {
    question: 'Do I need to be home?',
    answer:
      'No. We need access to the exterior of the property, with side gates unlatched if applicable. We send the job report once we\'re done.',
  },
  {
    question: 'How much does gutter cleaning cost in Melbourne?',
    answer:
      'Single storey homes generally range from $150 to $220. Double storey from $220 to $320. Exact pricing depends on property size and access. We quote before any work begins.',
  },
  {
    question: 'How often should gutters be cleaned?',
    answer:
      'Once a year is the minimum for most homes. Homes under heavy tree canopy (common in Berwick, Narre Warren and Cranbourne) benefit from twice-yearly cleaning. If you\'ve never had your gutters cleaned or haven\'t in several years, expect the first clean to take longer.',
  },
  {
    question: 'Do you service two-storey homes?',
    answer:
      'Yes. All standard two-storey residential properties are within scope. We\'ll note if anything makes a property non-standard during the quoting process.',
  },
  {
    question: 'What areas do you cover?',
    answer:
      'Casey and Cardinia LGAs: Berwick, Narre Warren South, Cranbourne, Officer, Clyde North, Pakenham, Berwick Waters, Hampton Park and surrounding suburbs.',
  },
]

const serviceSchema = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: 'Gutter Cleaning',
  serviceType: 'Gutter Cleaning',
  provider: {
    '@type': 'LocalBusiness',
    name: 'SE Gutter Cleaning',
    url: 'https://seguttercleaning.com.au',
  },
  areaServed: [
    'Berwick', 'Narre Warren South', 'Cranbourne', 'Officer',
    'Clyde North', 'Pakenham', 'Berwick Waters', 'Hampton Park',
  ],
  description:
    'Professional gutter cleaning including full debris clearance from all gutters and valleys, downpipe flushing and roofline inspection. Written job report on completion.',
  offers: {
    '@type': 'Offer',
    priceRange: '\$150 - \$320',
    priceCurrency: 'AUD',
    eligibleRegion: 'South East Melbourne',
  },
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

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://seguttercleaning.com.au/' },
    { '@type': 'ListItem', position: 2, name: 'Gutter Cleaning', item: 'https://seguttercleaning.com.au/gutter-cleaning/' },
  ],
}

const suburbs = [
  { href: '/gutter-cleaning/berwick/', label: 'Berwick' },
  { href: '/gutter-cleaning/narre-warren-south/', label: 'Narre Warren South' },
  { href: '/gutter-cleaning/cranbourne/', label: 'Cranbourne' },
  { href: '/gutter-cleaning/officer/', label: 'Officer' },
  { href: '/gutter-cleaning/clyde-north/', label: 'Clyde North' },
  { href: '/gutter-cleaning/pakenham/', label: 'Pakenham' },
  { href: '/gutter-cleaning/berwick-waters/', label: 'Berwick Waters' },
  { href: '/gutter-cleaning/hampton-park/', label: 'Hampton Park' },
]

export default function GutterCleaningPage() {
  return (
    <>
      <SchemaMarkup schema={[serviceSchema, faqSchema, breadcrumbSchema]} />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <Breadcrumb
          items={[
            { label: 'Home', href: '/' },
            { label: 'Gutter Cleaning' },
          ]}
        />

        <h1 className="text-3xl sm:text-4xl font-bold text-[#1A3D2B] mb-4">
          Professional Gutter Cleaning in South East Melbourne
        </h1>
        <p className="text-gray-700 leading-relaxed text-base mb-10">
          We clean gutters across the Casey and Cardinia corridors. Single and double storey homes, established suburbs and new estates. No lock-in contracts, no call-out fees. Just a straightforward service at a fair price.
        </p>

        {/* What's Included */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-[#1A3D2B] mb-6">What&apos;s Included</h2>
          <div className="space-y-4">
            {[
              {
                title: 'Full debris clearance',
                body: 'Leaves, twigs, seed pods and built-up sediment from all gutters and valleys — all removed.',
              },
              {
                title: 'Downpipe flushing',
                body: 'Every downpipe is checked and flushed to confirm water is draining freely. Partial blockages get cleared before they become full ones.',
              },
              {
                title: 'Roofline inspection',
                body: 'We check for sagging gutters, rusted sections, cracked joins and overflow patterns. Anything worth knowing about gets noted in your job report.',
              },
              {
                title: 'Written job report',
                body: 'Sent to you on completion. Covers what was cleaned, what was found and anything that needs follow-up attention.',
              },
            ].map((item) => (
              <div key={item.title} className="flex items-start gap-3 p-4 bg-[#F8F9FA] rounded-lg">
                <span className="text-[#2ECC71] font-bold text-lg flex-shrink-0">&#10003;</span>
                <div>
                  <p className="font-semibold text-[#1A3D2B]">{item.title}</p>
                  <p className="text-gray-600 text-sm mt-1">{item.body}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Why Regular Cleaning Matters */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-[#1A3D2B] mb-4">Why Regular Cleaning Matters</h2>
          <p className="text-gray-700 leading-relaxed">
            Melbourne&apos;s weather does a good job of filling gutters. Autumn brings the bulk of leaf fall from the gum trees that line most established SE Melbourne streets. Spring storms push debris into downpipes and valleys. Let that build up for a season or two and you end up with water overflowing into fascia boards, eaves and, in worse cases, ceiling cavities. The repair bill for water-damaged eaves runs well above what a regular gutter clean costs. Most Melbourne homes need cleaning at minimum once a year. Leafy suburbs like Berwick and Narre Warren typically need it twice.
          </p>
        </section>

        {/* Pricing */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-[#1A3D2B] mb-6">Pricing</h2>
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
          <p className="text-gray-600 text-sm leading-relaxed">
            Pricing varies based on property size, roof pitch and access. Properties on steep blocks or with restricted access may be outside standard pricing. We&apos;ll let you know upfront. We provide a firm quote before any work starts. No surprises on the day.
          </p>
        </section>

        {/* Our Process */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-[#1A3D2B] mb-6">Our Process</h2>
          <div className="space-y-5">
            {[
              'Submit a quote request. We confirm availability and send pricing within 24 hours.',
              "On the day, we carry out a full clearance, flush all downpipes and inspect the roofline. Access to the property exterior is all that's needed. You don't have to be home.",
              'Once complete, we send a written job report covering what was done and anything we noted during the inspection.',
            ].map((step, i) => (
              <div key={i} className="flex items-start gap-4">
                <span className="flex-shrink-0 w-8 h-8 rounded-full bg-[#1A3D2B] text-white flex items-center justify-center font-bold text-sm">
                  {i + 1}
                </span>
                <p className="text-gray-700 pt-1">{step}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Areas We Service */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-[#1A3D2B] mb-6">Areas We Service</h2>
          <div className="flex flex-wrap gap-2">
            {suburbs.map((s) => (
              <Link
                key={s.href}
                href={s.href}
                className="bg-[#1A3D2B] hover:bg-[#0D2B1C] text-white px-4 py-2 rounded text-sm font-medium transition-colors"
              >
                {s.label}
              </Link>
            ))}
          </div>
        </section>

        {/* FAQ */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-[#1A3D2B] mb-6">FAQ</h2>
          <FAQAccordion items={faqs} />
        </section>

        {/* CTA */}
        <div className="bg-[#1A3D2B] rounded-xl p-8 text-center">
          <h2 className="text-xl font-bold text-white mb-3">Ready to Book?</h2>
          <p className="text-gray-300 mb-6 text-sm">Get a firm quote within 24 hours. No obligation.</p>
          <Link
            href="/get-a-quote/"
            className="inline-block bg-[#2ECC71] hover:bg-green-500 text-white font-semibold px-6 py-3 rounded-lg transition-colors"
          >
            Get a Free Quote
          </Link>
        </div>
      </div>
    </>
  )
}

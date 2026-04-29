import type { Metadata } from 'next'
import Link from 'next/link'
import FAQAccordion, { FAQItem } from '@/components/FAQAccordion'
import Breadcrumb from '@/components/Breadcrumb'
import SchemaMarkup from '@/components/SchemaMarkup'

export const metadata: Metadata = {
  title: 'Gutter Cleaning Berwick | Local & Professional | SE Gutter Cleaning',
  description:
    'Professional gutter cleaning in Berwick. Leaves, debris and blockages cleared by a local SE Melbourne team. Same-week bookings. Get a free quote.',
  alternates: {
    canonical: 'https://seguttercleaning.com.au/gutter-cleaning/berwick/',
  },
}

const faqs: FAQItem[] = [
  {
    question: 'How much does gutter cleaning cost in Berwick?',
    answer:
      'Most single storey homes in Berwick range from $150 to $220. Double storey homes typically come in at $220 to $320. Exact pricing depends on property size and access.',
  },
  {
    question: 'How often should Berwick homeowners clean their gutters?',
    answer:
      'Twice a year for most properties: late autumn and early spring. Homes directly under mature gum trees may need cleaning every four to five months given the volume of leaf fall in established Berwick streets.',
  },
  {
    question: 'Do you service the Eden Rise and Outlook estates in Berwick?',
    answer:
      'Yes. We service all residential streets and estates across Berwick including Eden Rise, Outlook, Berwick Village surrounds and the older residential pockets throughout the suburb.',
  },
  {
    question: "What's the best time of year to book a gutter clean in Berwick?",
    answer:
      'Late April to May catches the bulk of autumn leaf fall before winter rain arrives. Early September is the other key window, clearing any debris before spring storm season.',
  },
]

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://seguttercleaning.com.au/' },
    { '@type': 'ListItem', position: 2, name: 'Gutter Cleaning', item: 'https://seguttercleaning.com.au/gutter-cleaning/' },
    { '@type': 'ListItem', position: 3, name: 'Berwick', item: 'https://seguttercleaning.com.au/gutter-cleaning/berwick/' },
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

export default function BerwickPage() {
  return (
    <>
      <SchemaMarkup schema={[breadcrumbSchema, faqSchema]} />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <Breadcrumb
          items={[
            { label: 'Home', href: '/' },
            { label: 'Gutter Cleaning', href: '/gutter-cleaning/' },
            { label: 'Berwick' },
          ]}
        />

        <h1 className="text-3xl sm:text-4xl font-bold text-[#1A3D2B] mb-4">
          Gutter Cleaning in Berwick
        </h1>
        <p className="text-gray-700 leading-relaxed mb-10">
          Berwick is one of the leafiest suburbs in the Casey corridor. The established streets around Berwick Village, High Street Road and the older residential pockets off Clyde Road sit under mature eucalypt and native tree coverage that drops leaves year-round, and fills gutters fast.
        </p>

        <section className="mb-10">
          <h2 className="text-2xl font-bold text-[#1A3D2B] mb-4">Why Berwick Gutters Need Regular Attention</h2>
          <p className="text-gray-700 leading-relaxed">
            Most Berwick homes were built in the 1980s and 1990s, which means the street trees are mature and the leaf fall is heavy. Autumn is the critical period. Gum leaves, seed pods and bark strip off in volume and accumulate quickly in gutters and valleys. Spring storms compound the problem, pushing debris into downpipes that may already be partially blocked from the season before. Homes on Berwick&apos;s sloping blocks, particularly around the Outlook Estate and along Wilson Road, often have restricted gutter access and longer roof runs, which means debris concentrates in valleys. These sections are the first to overflow if not cleared regularly. Twice-yearly cleaning is the norm for most Berwick properties. Properties directly under large gum trees often need attention every four to five months.
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
          <h2 className="text-2xl font-bold text-[#1A3D2B] mb-4">Pricing in Berwick</h2>
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
            We provide a firm quote before any work starts. We service all streets in Berwick including Berwick Village, the Outlook Estate, Eden Rise, Alvie Road corridor and surrounding residential areas.
          </p>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl font-bold text-[#1A3D2B] mb-4">Nearby Areas</h2>
          <div className="flex flex-wrap gap-2">
            {[
              { href: '/gutter-cleaning/narre-warren-south/', label: 'Narre Warren South' },
              { href: '/gutter-cleaning/clyde-north/', label: 'Clyde North' },
              { href: '/gutter-cleaning/cranbourne/', label: 'Cranbourne' },
              { href: '/gutter-cleaning/officer/', label: 'Officer' },
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
          <h2 className="text-xl font-bold text-white mb-3">Get a Quote for Berwick</h2>
          <p className="text-gray-300 mb-6 text-sm">Same-week availability. Firm quote within 24 hours.</p>
          <Link href="/get-a-quote/" className="inline-block bg-[#2ECC71] hover:bg-green-500 text-white font-semibold px-6 py-3 rounded-lg transition-colors">
            Get a Free Quote
          </Link>
        </div>
      </div>
    </>
  )
}

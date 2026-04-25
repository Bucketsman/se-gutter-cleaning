import type { Metadata } from 'next'
import Link from 'next/link'
import VideoBanner from '@/components/VideoBanner'
import FAQAccordion, { FAQItem } from '@/components/FAQAccordion'
import SuburbGrid from '@/components/SuburbGrid'
import SchemaMarkup from '@/components/SchemaMarkup'

export const metadata: Metadata = {
  title: 'Gutter Cleaning South East Melbourne | SE Gutter Cleaning',
  description:
    'Professional gutter cleaning across South East Melbourne. Serving Berwick, Clyde North, Officer, Cranbourne and surrounding suburbs. Get a free quote today.',
  alternates: {
    canonical: 'https://seguttercleaning.com.au/',
  },
}

const faqs: FAQItem[] = [
  {
    question: 'How much does gutter cleaning cost in South East Melbourne?',
    answer:
      'Most single storey homes in SE Melbourne come in between $150 and $220. Double storey homes typically range from $220 to $320. Final pricing depends on property size, roof pitch and access. We provide a firm quote before any work starts.',
  },
  {
    question: 'How often should I clean my gutters in Melbourne?',
    answer:
      "Twice a year is the standard for most SE Melbourne homes: once in late autumn after the bulk of leaf fall, and again in spring before storm season. Homes with heavy gum tree coverage, particularly in Berwick and Narre Warren, often need cleaning more frequently.",
  },
  {
    question: 'What suburbs do you service?',
    answer:
      "We service Berwick, Narre Warren South, Cranbourne, Officer, Clyde North, Pakenham, Berwick Waters, Hampton Park and surrounding suburbs in the Casey and Cardinia LGAs. If you're unsure whether we cover your area, submit a quote request and we'll confirm.",
  },
  {
    question: 'What happens if my gutters are damaged?',
    answer:
      "We flag any damage (cracked sections, sagging gutters, failed joins) in the job report. We don't carry out structural repairs, but we'll tell you exactly what needs attention so you can arrange it separately.",
  },
  {
    question: 'Do I need to be home during the clean?',
    answer:
      "No. As long as we have access to the gutters, you don't need to be present. We'll send your job report once the work is complete.",
  },
]

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

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: faqs.map((faq) => ({
    '@type': 'Question',
    name: faq.question,
    acceptedAnswer: {
      '@type': 'Answer',
      text: faq.answer,
    },
  })),
}

const trustItems = [
  'Local SE Melbourne',
  'Same-Week Availability',
  'Job Report Included',
  'Local Knowledge',
]

export default function HomePage() {
  return (
    <>
      <SchemaMarkup schema={[localBusinessSchema, faqSchema]} />

      {/* Hero Video Banner */}
      <VideoBanner />

      {/* Trust Bar */}
      <section className="bg-[#1B2A4A] py-4">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-center gap-x-8 gap-y-2">
            {trustItems.map((item) => (
              <div key={item} className="flex items-center gap-2 text-white text-sm font-medium">
                <span className="text-[#2ECC71] font-bold">&#10003;</span>
                {item}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Intro */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl sm:text-3xl font-bold text-[#1B2A4A] mb-6">What We Do</h2>
          <p className="text-gray-700 leading-relaxed text-base">
            Gutters in South East Melbourne take a beating. The established suburbs around Berwick and Narre Warren sit under dense eucalypt canopy. Gutters fill fast, especially heading into autumn and after spring storms. Further out in Officer and Clyde North, newer homes have less tree coverage now, but the surrounding bushland means debris still builds up faster than most homeowners expect. A blocked gutter isn&apos;t just an inconvenience. Water backing up into eaves and fascia boards causes damage that costs far more to fix than a regular clean. We keep that from happening. Every job includes a full clearance of leaves and debris, downpipe flushing, and a roofline check. You get a written job report when we&apos;re done.
          </p>
        </div>
      </section>

      {/* Areas We Service */}
      <section className="py-16 bg-[#F8F9FA] px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl sm:text-3xl font-bold text-[#1B2A4A] mb-8">Areas We Service</h2>
          <SuburbGrid />
        </div>
      </section>

      {/* How It Works */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl sm:text-3xl font-bold text-[#1B2A4A] mb-8">How It Works</h2>
          <div className="space-y-6">
            {[
              'Submit a quote request with your suburb and property details.',
              'We confirm availability and pricing within 24 hours.',
              'We clean, inspect and send you a job report when complete.',
            ].map((step, i) => (
              <div key={i} className="flex items-start gap-4">
                <span className="flex-shrink-0 w-8 h-8 rounded-full bg-[#1B2A4A] text-white flex items-center justify-center font-bold text-sm">
                  {i + 1}
                </span>
                <p className="text-gray-700 pt-1">{step}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 bg-[#F8F9FA] px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl sm:text-3xl font-bold text-[#1B2A4A] mb-8">FAQ</h2>
          <FAQAccordion items={faqs} />
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-[#1B2A4A] text-center px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-2xl sm:text-3xl font-bold text-white mb-4">
            Get a Free Quote for Your SE Melbourne Home
          </h2>
          <p className="text-gray-300 mb-8">
            Same-week availability. No call-out fees. We&apos;ll confirm pricing within 24 hours.
          </p>
          <Link
            href="/get-a-quote/"
            className="inline-block bg-[#2ECC71] hover:bg-green-500 text-white font-semibold text-lg px-8 py-4 rounded-lg transition-colors"
          >
            Get a Free Quote
          </Link>
        </div>
      </section>
    </>
  )
}

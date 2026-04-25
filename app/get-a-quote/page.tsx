import type { Metadata } from 'next'
import QuoteForm from '@/components/QuoteForm'
import Breadcrumb from '@/components/Breadcrumb'
import SchemaMarkup from '@/components/SchemaMarkup'

export const metadata: Metadata = {
  title: 'Get a Free Gutter Cleaning Quote | South East Melbourne',
  description:
    'Request a free gutter cleaning quote for your SE Melbourne home. Fast response, local team, no obligation.',
  alternates: {
    canonical: 'https://seguttercleaning.com.au/get-a-quote/',
  },
}

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://seguttercleaning.com.au/' },
    { '@type': 'ListItem', position: 2, name: 'Get a Quote', item: 'https://seguttercleaning.com.au/get-a-quote/' },
  ],
}

export default function GetAQuotePage() {
  return (
    <>
      <SchemaMarkup schema={breadcrumbSchema} />

      <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <Breadcrumb
          items={[
            { label: 'Home', href: '/' },
            { label: 'Get a Quote' },
          ]}
        />

        <h1 className="text-3xl sm:text-4xl font-bold text-[#1B2A4A] mb-4">
          Get Your Free Gutter Cleaning Quote
        </h1>
        <p className="text-gray-700 leading-relaxed mb-8">
          We service Berwick, Narre Warren South, Cranbourne, Officer, Clyde North, Pakenham, Berwick Waters, Hampton Park and surrounding SE Melbourne suburbs. Submit your details and we&apos;ll get back to you within 24 hours.
        </p>

        {/* Trust indicators */}
        <div className="flex flex-wrap gap-4 mb-8">
          {['Local SE Melbourne team', 'Same-week availability', 'No obligation'].map((item) => (
            <div key={item} className="flex items-center gap-2 text-sm text-gray-600">
              <span className="text-[#2ECC71] font-bold">&#10003;</span>
              {item}
            </div>
          ))}
        </div>

        {/* Form */}
        <div className="bg-white border border-gray-200 rounded-xl p-6 sm:p-8 shadow-sm">
          <QuoteForm />
        </div>

        {/* What happens next */}
        <div className="mt-8 bg-[#F8F9FA] rounded-xl p-6">
          <h2 className="font-semibold text-[#1B2A4A] mb-3">What Happens Next</h2>
          <ul className="space-y-2">
            {[
              'We receive your request and check availability in your suburb.',
              "We'll contact you within 24 hours with pricing and to confirm a time that works.",
            ].map((step, i) => (
              <li key={i} className="flex items-start gap-3 text-sm text-gray-700">
                <span className="flex-shrink-0 w-5 h-5 rounded-full bg-[#1B2A4A] text-white flex items-center justify-center text-xs font-bold mt-0.5">
                  {i + 1}
                </span>
                {step}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </>
  )
}

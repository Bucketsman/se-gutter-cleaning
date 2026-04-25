import type { Metadata } from 'next'
import Link from 'next/link'
import Breadcrumb from '@/components/Breadcrumb'
import SchemaMarkup from '@/components/SchemaMarkup'

export const metadata: Metadata = {
  title: 'Gutter Cleaning Blog | SE Gutter Cleaning',
  description: 'Gutter cleaning tips, cost guides and local advice for SE Melbourne homeowners.',
  alternates: {
    canonical: 'https://seguttercleaning.com.au/blog/',
  },
}

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://seguttercleaning.com.au/' },
    { '@type': 'ListItem', position: 2, name: 'Blog', item: 'https://seguttercleaning.com.au/blog/' },
  ],
}

const posts = [
  {
    slug: 'gutter-cleaning-cost-melbourne',
    title: 'Gutter Cleaning Cost in Melbourne: 2025 Price Guide',
    excerpt:
      'Single storey homes generally run between $150 and $220, double storey between $220 and $320. What moves the price up or down is worth understanding before you book.',
  },
  {
    slug: 'when-to-clean-gutters-melbourne',
    title: 'When to Clean Your Gutters in Melbourne: A Seasonal Guide',
    excerpt:
      "Melbourne's seasons create two distinct windows for gutter cleaning. Getting the timing right makes a meaningful difference to how well your gutters perform through the rest of the year.",
  },
  {
    slug: 'blocked-gutters-damage-melbourne',
    title: 'What Happens If You Don\'t Clean Your Gutters in Melbourne',
    excerpt:
      'Most gutter damage doesn\'t happen in a single event. It accumulates quietly — one blocked downpipe, one season of overflow, one stretch of wet fascia that never quite dries out.',
  },
  {
    slug: 'gutter-cleaning-berwick',
    title: 'Gutter Cleaning in Berwick: What Local Homeowners Need to Know',
    excerpt:
      "Berwick sits in one of the leafier parts of SE Melbourne. The streets around Berwick Village, the Outlook Estate and the established residential pockets off Clyde Road have mature eucalypt and native tree coverage.",
  },
  {
    slug: 'gutter-cleaning-clyde-north-officer-new-home',
    title: "New Home in Clyde North or Officer? Here's What You Need to Know About Your Gutters",
    excerpt:
      "One of the most common assumptions among new homeowners in Clyde North and Officer is that new gutters don't need cleaning. More than most people expect.",
  },
]

export default function BlogIndexPage() {
  return (
    <>
      <SchemaMarkup schema={breadcrumbSchema} />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <Breadcrumb
          items={[
            { label: 'Home', href: '/' },
            { label: 'Blog' },
          ]}
        />

        <h1 className="text-3xl sm:text-4xl font-bold text-[#1B2A4A] mb-4">
          Gutter Cleaning Guides for SE Melbourne
        </h1>
        <p className="text-gray-600 mb-10">Practical advice for homeowners across the Casey and Cardinia corridors.</p>

        <div className="space-y-6">
          {posts.map((post) => (
            <article key={post.slug} className="border border-gray-200 rounded-xl p-6 hover:border-[#1B2A4A] transition-colors">
              <Link href={`/blog/${post.slug}/`}>
                <h2 className="text-xl font-bold text-[#1B2A4A] hover:underline mb-2">{post.title}</h2>
              </Link>
              <p className="text-gray-600 text-sm leading-relaxed">{post.excerpt}</p>
              <Link href={`/blog/${post.slug}/`} className="inline-block mt-4 text-sm font-medium text-[#1B2A4A] hover:underline">
                Read more &rarr;
              </Link>
            </article>
          ))}
        </div>
      </div>
    </>
  )
}

import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import { MDXRemote } from 'next-mdx-remote/rsc'
import Breadcrumb from '@/components/Breadcrumb'
import FAQAccordion, { FAQItem } from '@/components/FAQAccordion'
import SchemaMarkup from '@/components/SchemaMarkup'
import Link from 'next/link'

const contentDir = path.join(process.cwd(), 'content', 'blog')

function getPost(slug: string) {
  const filePath = path.join(contentDir, `${slug}.mdx`)
  if (!fs.existsSync(filePath)) return null
  const raw = fs.readFileSync(filePath, 'utf-8')
  const { data, content } = matter(raw)
  return { frontmatter: data, content }
}

export async function generateStaticParams() {
  const files = fs.readdirSync(contentDir)
  return files
    .filter((f) => f.endsWith('.mdx'))
    .map((f) => ({ slug: f.replace('.mdx', '') }))
}

export async function generateMetadata({
  params,
}: {
  params: { slug: string }
}): Promise<Metadata> {
  const post = getPost(params.slug)
  if (!post) return {}
  return {
    title: post.frontmatter.title,
    description: post.frontmatter.description,
    alternates: {
      canonical: `https://seguttercleaning.com.au/blog/${params.slug}/`,
    },
  }
}

export default function BlogPostPage({ params }: { params: { slug: string } }) {
  const post = getPost(params.slug)
  if (!post) notFound()

  const { frontmatter, content } = post

  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://seguttercleaning.com.au/' },
      { '@type': 'ListItem', position: 2, name: 'Gutter Cleaning Advice', item: 'https://seguttercleaning.com.au/blog/' },
      { '@type': 'ListItem', position: 3, name: frontmatter.title, item: `https://seguttercleaning.com.au/blog/${params.slug}/` },
    ],
  }

  const faqItems: FAQItem[] = frontmatter.faqs || []

  const faqSchema = faqItems.length > 0
    ? {
        '@context': 'https://schema.org',
        '@type': 'FAQPage',
        mainEntity: faqItems.map((faq: FAQItem) => ({
          '@type': 'Question',
          name: faq.question,
          acceptedAnswer: { '@type': 'Answer', text: faq.answer },
        })),
      }
    : null

  const schemas = faqSchema ? [breadcrumbSchema, faqSchema] : breadcrumbSchema

  return (
    <>
      <SchemaMarkup schema={schemas} />

      {/* Article header */}
      <div className="bg-[#1A3D2B] py-12">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <Breadcrumb
            items={[
              { label: 'Home', href: '/' },
              { label: 'Gutter Cleaning Advice', href: '/blog/' },
              { label: frontmatter.title },
            ]}
            light
          />
          <h1 className="text-3xl sm:text-4xl font-bold text-white mt-4 leading-tight">
            {frontmatter.title}
          </h1>
          {frontmatter.description && (
            <p className="mt-4 text-lg text-gray-300 leading-relaxed">
              {frontmatter.description}
            </p>
          )}
        </div>
      </div>

      {/* Article body */}
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <article className="prose prose-lg prose-slate max-w-none
          prose-headings:text-[#1A3D2B] prose-headings:font-bold
          prose-h2:text-2xl prose-h2:mt-12 prose-h2:mb-4 prose-h2:pb-2 prose-h2:border-b prose-h2:border-gray-200
          prose-h3:text-xl prose-h3:mt-8 prose-h3:mb-3
          prose-p:text-gray-700 prose-p:leading-relaxed prose-p:mb-5
          prose-li:text-gray-700 prose-li:leading-relaxed
          prose-ul:my-4 prose-ul:space-y-2
          prose-ol:my-4 prose-ol:space-y-2
          prose-strong:text-[#1A3D2B] prose-strong:font-semibold
          prose-a:text-[#1A3D2B] prose-a:underline hover:prose-a:text-[#2ECC71]
        ">
          <MDXRemote source={content} />
        </article>

        {/* FAQ section */}
        {faqItems.length > 0 && (
          <section className="mt-14 pt-10 border-t border-gray-200">
            <h2 className="text-2xl font-bold text-[#1A3D2B] mb-6">Frequently Asked Questions</h2>
            <FAQAccordion items={faqItems} />
          </section>
        )}

        {/* CTA */}
        <div className="mt-14 bg-[#1A3D2B] rounded-xl p-8 text-center">
          <h2 className="text-xl font-bold text-white mb-2">Ready to Book a Clean?</h2>
          <p className="text-gray-300 mb-6">Get a firm quote within 24 hours. No obligation.</p>
          <Link href="/get-a-quote/" className="inline-block bg-[#2ECC71] hover:bg-green-500 text-white font-semibold px-8 py-3 rounded-lg transition-colors">
            Get a Free Quote
          </Link>
        </div>

        {/* Back to guides */}
        <div className="mt-8 text-center">
          <Link href="/blog/" className="text-[#1A3D2B] text-sm font-medium hover:underline">
            ← Back to Gutter Cleaning Advice
          </Link>
        </div>
      </div>
    </>
  )
}

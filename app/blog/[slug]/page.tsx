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
      { '@type': 'ListItem', position: 2, name: 'Blog', item: 'https://seguttercleaning.com.au/blog/' },
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

      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <Breadcrumb
          items={[
            { label: 'Home', href: '/' },
            { label: 'Blog', href: '/blog/' },
            { label: frontmatter.title },
          ]}
        />

        <h1 className="text-3xl sm:text-4xl font-bold text-[#1B2A4A] mb-8">
          {frontmatter.title}
        </h1>

        <div className="prose prose-gray max-w-none prose-headings:text-[#1B2A4A] prose-h2:text-2xl prose-h2:font-bold prose-h2:mt-10 prose-h2:mb-4 prose-p:leading-relaxed prose-p:text-gray-700">
          <MDXRemote source={content} />
        </div>

        {faqItems.length > 0 && (
          <section className="mt-12">
            <h2 className="text-2xl font-bold text-[#1B2A4A] mb-6">FAQ</h2>
            <FAQAccordion items={faqItems} />
          </section>
        )}

        <div className="mt-12 bg-[#1B2A4A] rounded-xl p-8 text-center">
          <h2 className="text-xl font-bold text-white mb-3">Ready to Book a Clean?</h2>
          <p className="text-gray-300 mb-6 text-sm">Get a firm quote within 24 hours. No obligation.</p>
          <Link href="/get-a-quote/" className="inline-block bg-[#2ECC71] hover:bg-green-500 text-white font-semibold px-6 py-3 rounded-lg transition-colors">
            Get a Free Quote
          </Link>
        </div>
      </div>
    </>
  )
}

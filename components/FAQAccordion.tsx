'use client'

import { useState } from 'react'

export interface FAQItem {
  question: string
  answer: string
}

interface FAQAccordionProps {
  items: FAQItem[]
}

export default function FAQAccordion({ items }: FAQAccordionProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  const toggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  return (
    <div className="space-y-3">
      {items.map((item, index) => (
        <div key={index} className="border border-gray-200 rounded-lg overflow-hidden">
          <button
            className="w-full flex items-center justify-between px-5 py-4 text-left bg-white hover:bg-gray-50 transition-colors"
            onClick={() => toggle(index)}
            aria-expanded={openIndex === index}
          >
            <span className="font-semibold text-[#1A1A1A] text-sm md:text-base pr-4">{item.question}</span>
            <span className="text-[#1B2A4A] flex-shrink-0 text-xl font-light">
              {openIndex === index ? '−' : '+'}
            </span>
          </button>
          <div
            className={`overflow-hidden transition-all duration-200 ${
              openIndex === index ? 'max-h-96' : 'max-h-0'
            }`}
          >
            <p className="px-5 py-4 text-gray-600 text-sm leading-relaxed bg-gray-50 border-t border-gray-100">
              {item.answer}
            </p>
          </div>
        </div>
      ))}
    </div>
  )
}

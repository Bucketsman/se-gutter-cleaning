'use client'

import { useState, FormEvent } from 'react'

export default function QuoteForm() {
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle')

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setStatus('submitting')
    const form = e.currentTarget
    const data = new FormData(form)

    try {
      const response = await fetch('https://formspree.io/f/xyklrbdd', {
        method: 'POST',
        body: data,
        headers: { Accept: 'application/json' },
      })
      if (response.ok) {
        setStatus('success')
        form.reset()
      } else {
        setStatus('error')
      }
    } catch {
      setStatus('error')
    }
  }

  if (status === 'success') {
    return (
      <div className="bg-green-50 border border-green-200 rounded-lg p-8 text-center">
        <div className="text-4xl mb-3">✓</div>
        <h3 className="text-xl font-semibold text-green-800 mb-2">Quote Request Received</h3>
        <p className="text-green-700">We&apos;ll get back to you within 24 hours with pricing and availability.</p>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      {/* First name */}
      <div>
        <label htmlFor="firstName" className="block text-sm font-medium text-gray-700 mb-1">
          First Name <span className="text-red-500">*</span>
        </label>
        <input
          id="firstName"
          name="firstName"
          type="text"
          required
          className="w-full border border-gray-300 rounded-lg px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-[#1B2A4A] focus:border-transparent"
          placeholder="Your first name"
        />
      </div>

      {/* Email */}
      <div>
        <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
          Email Address <span className="text-red-500">*</span>
        </label>
        <input
          id="email"
          name="email"
          type="email"
          required
          className="w-full border border-gray-300 rounded-lg px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-[#1B2A4A] focus:border-transparent"
          placeholder="you@example.com"
        />
      </div>

      {/* Suburb */}
      <div>
        <label htmlFor="suburb" className="block text-sm font-medium text-gray-700 mb-1">
          Suburb <span className="text-red-500">*</span>
        </label>
        <select
          id="suburb"
          name="suburb"
          required
          className="w-full border border-gray-300 rounded-lg px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-[#1B2A4A] focus:border-transparent bg-white"
        >
          <option value="">Select your suburb</option>
          <option value="Berwick">Berwick</option>
          <option value="Narre Warren South">Narre Warren South</option>
          <option value="Cranbourne">Cranbourne</option>
          <option value="Officer">Officer</option>
          <option value="Clyde North">Clyde North</option>
          <option value="Pakenham">Pakenham</option>
          <option value="Berwick Waters">Berwick Waters</option>
          <option value="Hampton Park">Hampton Park</option>
          <option value="Other SE Melbourne">Other SE Melbourne</option>
        </select>
      </div>

      {/* Property type */}
      <div>
        <label htmlFor="propertyType" className="block text-sm font-medium text-gray-700 mb-1">
          Property Type
        </label>
        <select
          id="propertyType"
          name="propertyType"
          className="w-full border border-gray-300 rounded-lg px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-[#1B2A4A] focus:border-transparent bg-white"
        >
          <option value="">Select property type</option>
          <option value="Single storey">Single storey</option>
          <option value="Double storey">Double storey</option>
          <option value="Townhouse">Townhouse</option>
          <option value="Other">Other</option>
        </select>
      </div>

      {/* Additional notes */}
      <div>
        <label htmlFor="notes" className="block text-sm font-medium text-gray-700 mb-1">
          Additional Notes <span className="text-gray-400 font-normal">(optional)</span>
        </label>
        <textarea
          id="notes"
          name="notes"
          rows={4}
          className="w-full border border-gray-300 rounded-lg px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-[#1B2A4A] focus:border-transparent resize-none"
          placeholder="Access details, when gutters were last cleaned, any known issues..."
        />
      </div>

      {status === 'error' && (
        <p className="text-red-600 text-sm">Something went wrong. Please try again or contact us directly.</p>
      )}

      <button
        type="submit"
        disabled={status === 'submitting'}
        className="w-full bg-[#1B2A4A] hover:bg-[#0F1A30] text-white font-semibold py-3 px-6 rounded-lg transition-colors disabled:opacity-60 disabled:cursor-not-allowed"
      >
        {status === 'submitting' ? 'Sending...' : 'Send My Quote Request'}
      </button>
    </form>
  )
}

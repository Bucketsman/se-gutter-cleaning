import Image from 'next/image'
import Link from 'next/link'

export default function VideoBanner() {
  return (
    <section className="relative w-full min-h-screen flex items-center justify-center overflow-hidden">
      {/* Hero image background */}
      <Image
        src="/images/hero.jpg"
        alt="Professional gutter cleaning in South East Melbourne"
        fill
        priority
        className="object-cover object-center"
        sizes="100vw"
      />

      {/* Dark navy gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#0D2B1C]/80 via-[#1A3D2B]/70 to-[#0D2B1C]/85" />

      {/* Content */}
      <div className="relative z-10 text-center text-white px-4 sm:px-6 max-w-4xl mx-auto">
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight mb-4">
          Gutter Cleaning South East Melbourne
        </h1>
        <p className="text-lg sm:text-xl text-gray-200 mb-8">
          Berwick · Cranbourne · Officer · Clyde North · Pakenham and surrounds
        </p>
        <Link
          href="/get-a-quote/"
          className="inline-block bg-[#2ECC71] hover:bg-green-500 text-white font-semibold text-lg px-8 py-4 rounded-lg transition-colors"
        >
          Get a Free Quote
        </Link>
      </div>
    </section>
  )
}

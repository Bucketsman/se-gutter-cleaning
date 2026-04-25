import Link from 'next/link'

const suburbLinks = [
  { href: '/gutter-cleaning/berwick/', label: 'Berwick' },
  { href: '/gutter-cleaning/narre-warren-south/', label: 'Narre Warren South' },
  { href: '/gutter-cleaning/cranbourne/', label: 'Cranbourne' },
  { href: '/gutter-cleaning/officer/', label: 'Officer' },
  { href: '/gutter-cleaning/clyde-north/', label: 'Clyde North' },
  { href: '/gutter-cleaning/pakenham/', label: 'Pakenham' },
  { href: '/gutter-cleaning/berwick-waters/', label: 'Berwick Waters' },
  { href: '/gutter-cleaning/hampton-park/', label: 'Hampton Park' },
]

const blogLinks = [
  { href: '/blog/gutter-cleaning-cost-melbourne/', label: 'Gutter Cleaning Cost Melbourne' },
  { href: '/blog/when-to-clean-gutters-melbourne/', label: 'When to Clean Gutters' },
  { href: '/blog/blocked-gutters-damage-melbourne/', label: 'What Blocked Gutters Cause' },
  { href: '/blog/gutter-cleaning-berwick/', label: 'Gutter Cleaning in Berwick' },
  { href: '/blog/gutter-cleaning-clyde-north-officer-new-home/', label: 'New Home Gutters: Clyde North & Officer' },
]

export default function Footer() {
  return (
    <footer className="bg-[#0F1A30] text-gray-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Brand */}
          <div>
            <p className="text-white font-bold text-lg mb-3">SE Gutter Cleaning</p>
            <p className="text-sm text-gray-400 leading-relaxed">
              Professional gutter cleaning across South East Melbourne. Serving the Casey and Cardinia LGAs.
            </p>
          </div>

          {/* Suburb links */}
          <div>
            <p className="text-white font-semibold mb-3 text-sm uppercase tracking-wider">Service Areas</p>
            <ul className="space-y-1">
              {suburbLinks.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-gray-400 hover:text-white text-sm transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Blog links */}
          <div>
            <p className="text-white font-semibold mb-3 text-sm uppercase tracking-wider">Guides</p>
            <ul className="space-y-1">
              {blogLinks.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-gray-400 hover:text-white text-sm transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-10 pt-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-gray-500 text-sm">© 2025 SE Gutter Cleaning. All rights reserved.</p>
          <Link href="/privacy-policy/" className="text-gray-500 hover:text-gray-300 text-sm transition-colors">
            Privacy Policy
          </Link>
        </div>
      </div>
    </footer>
  )
}

import Link from 'next/link'

const suburbs = [
  { href: '/gutter-cleaning/berwick/', label: 'Berwick' },
  { href: '/gutter-cleaning/narre-warren-south/', label: 'Narre Warren South' },
  { href: '/gutter-cleaning/cranbourne/', label: 'Cranbourne' },
  { href: '/gutter-cleaning/officer/', label: 'Officer' },
  { href: '/gutter-cleaning/clyde-north/', label: 'Clyde North' },
  { href: '/gutter-cleaning/pakenham/', label: 'Pakenham' },
  { href: '/gutter-cleaning/berwick-waters/', label: 'Berwick Waters' },
  { href: '/gutter-cleaning/hampton-park/', label: 'Hampton Park' },
]

export default function SuburbGrid() {
  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3">
      {suburbs.map((suburb) => (
        <Link
          key={suburb.href}
          href={suburb.href}
          className="bg-[#1B2A4A] hover:bg-[#0F1A30] text-white text-center py-4 px-3 rounded-lg font-medium text-sm transition-colors"
        >
          {suburb.label}
        </Link>
      ))}
    </div>
  )
}

import Link from 'next/link'

export interface BreadcrumbItem {
  label: string
  href?: string
}

interface BreadcrumbProps {
  items: BreadcrumbItem[]
  light?: boolean
}

export default function Breadcrumb({ items, light = false }: BreadcrumbProps) {
  return (
    <nav aria-label="Breadcrumb" className={`text-sm mb-4 ${light ? 'text-gray-400' : 'text-gray-500'}`}>
      <ol className="flex flex-wrap items-center gap-1">
        {items.map((item, index) => (
          <li key={index} className="flex items-center gap-1">
            {index > 0 && <span className={light ? 'text-gray-500' : 'text-gray-400'}>›</span>}
            {item.href ? (
              <Link href={item.href} className={`transition-colors ${light ? 'text-gray-400 hover:text-white' : 'hover:text-[#1A3D2B]'}`}>
                {item.label}
              </Link>
            ) : (
              <span className={light ? 'text-gray-200 font-medium' : 'text-gray-700 font-medium'}>{item.label}</span>
            )}
          </li>
        ))}
      </ol>
    </nav>
  )
}

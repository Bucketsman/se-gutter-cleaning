import Link from 'next/link'

export default function Logo() {
  return (
    <Link href="/" className="flex items-center gap-2.5 group">
      {/* Icon */}
      <svg
        width="38"
        height="34"
        viewBox="0 0 38 34"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="shrink-0"
        aria-hidden="true"
      >
        {/* Roof left slope */}
        <path
          d="M2 19 L19 3 L36 19"
          stroke="white"
          strokeWidth="2.5"
          strokeLinecap="round"
          strokeLinejoin="round"
          fill="none"
        />
        {/* Gutter channel along eave */}
        <rect
          x="1"
          y="19.5"
          width="36"
          height="4"
          rx="1.5"
          fill="white"
          fillOpacity="0.95"
        />
        {/* Downpipe on right */}
        <rect
          x="30"
          y="23.5"
          width="3"
          height="7"
          rx="1"
          fill="white"
          fillOpacity="0.8"
        />
        {/* Water drop / leaf at bottom of downpipe */}
        <path
          d="M31.5 31.5 C31.5 31.5 29.2 33.2 31.5 34.8 C33.8 33.2 31.5 31.5 31.5 31.5Z"
          fill="#2ECC71"
        />
        {/* Small leaf on roof — subtle nature reference */}
        <path
          d="M14 13 C14 13 16 10 19 11.5 C16.5 12 15.5 14.5 14 13Z"
          fill="#2ECC71"
          fillOpacity="0.85"
        />
      </svg>

      {/* Text */}
      <div className="flex flex-col leading-none">
        <span className="text-white font-bold text-base tracking-tight group-hover:text-gray-100 transition-colors">
          SE Gutter
        </span>
        <span className="text-[#7ecb9e] font-medium text-[11px] tracking-widest uppercase">
          Cleaning
        </span>
      </div>
    </Link>
  )
}

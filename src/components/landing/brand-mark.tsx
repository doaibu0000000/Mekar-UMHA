type BrandMarkProps = {
  className?: string;
  /** ID unik untuk gradient SVG — wajib berbeda tiap instance di halaman yang sama */
  gradientId?: string;
};

/** Logo mark Mekar UMHA — batang singkong goreng dengan serpihan keju. */
export function BrandMark({ className = "h-10 w-10", gradientId = "brand-bg-1" }: BrandMarkProps) {
  return (
    <svg
      viewBox="0 0 64 64"
      className={className}
      role="img"
      aria-label="Logo Mekar UMHA Surantaka"
    >
      <defs>
        <linearGradient id={gradientId} x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stopColor="#F59E0B" />
          <stop offset="1" stopColor="#EA580C" />
        </linearGradient>
      </defs>
      <rect width="64" height="64" rx="15" fill={`url(#${gradientId})`} />
      <g stroke="#FFF7ED" strokeWidth="7" strokeLinecap="round">
        <line x1="21.5" y1="20" x2="20" y2="46" />
        <line x1="32" y1="16" x2="32" y2="49" />
        <line x1="42.5" y1="20" x2="44" y2="46" />
      </g>
      <g fill="#FDE68A">
        <rect
          x="14"
          y="15"
          width="7"
          height="3.4"
          rx="1.7"
          transform="rotate(-18 14 15)"
        />
        <rect
          x="43"
          y="12"
          width="7"
          height="3.4"
          rx="1.7"
          transform="rotate(14 43 12)"
        />
        <rect
          x="27"
          y="50"
          width="7"
          height="3.4"
          rx="1.7"
          transform="rotate(-8 27 50)"
        />
      </g>
    </svg>
  );
}

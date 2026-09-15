const ITEMS = [
  "Singkong Mekar Renyah",
  "Keju Cheddar Parut",
  "Combro Isi Oncom",
  "Aneka Toping",
  "Harga Bersahabat",
  "Goreng Segar Tiap Pesanan",
];

function MarqueeContent({ ariaHidden = false }: { ariaHidden?: boolean }) {
  return (
    <div
      aria-hidden={ariaHidden}
      className="flex shrink-0 items-center gap-10 pr-10"
    >
      {ITEMS.map((item) => (
        <span
          key={item}
          className="flex items-center gap-10 whitespace-nowrap text-sm font-extrabold tracking-[0.2em] text-amber-100/90 sm:text-base"
        >
          {item.toUpperCase()}
          <svg
            viewBox="0 0 10 10"
            className="h-2.5 w-2.5 shrink-0 rotate-45 fill-orange-500"
            aria-hidden="true"
          >
            <rect width="10" height="10" rx="1.5" />
          </svg>
        </span>
      ))}
    </div>
  );
}

/** Pita berjalan khas gerai jajanan — memisahkan hero dari konten.
 *  Animasi dikendalikan via CSS class .marquee-track agar tidak dibekukan
 *  oleh Tailwind arbitrary variant. Berhenti saat hover/sentuh via CSS murni.
 */
export function Marquee() {
  return (
    <div className="marquee-container overflow-hidden border-y border-stone-800 bg-stone-900 py-4">
      <div className="marquee-track flex w-max">
        <MarqueeContent />
        <MarqueeContent ariaHidden />
      </div>
    </div>
  );
}

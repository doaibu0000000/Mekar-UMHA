import { Clock, MapPin, MessageCircle } from "lucide-react";
import { BrandMark } from "@/components/landing/brand-mark";
import { navLinks, site, waLink } from "@/lib/site";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-white/5 bg-stone-950 pb-28 text-stone-400 md:pb-0">
      <div className="mx-auto w-full max-w-6xl px-4 py-14 sm:px-6 lg:px-8">
        <div className="grid gap-10 md:grid-cols-[1.4fr_0.8fr_1fr]">
          {/* Identitas */}
          <div>
            <div className="flex items-center gap-3">
              <BrandMark className="h-11 w-11" gradientId="brand-bg-footer" />
              <div className="leading-none">
                <p className="text-lg font-extrabold text-white">
                  Mekar UMHA
                </p>
                <p className="mt-1 text-[10px] font-bold tracking-[0.28em] text-orange-500 uppercase">
                  Surantaka
                </p>
              </div>
            </div>
            <p className="mt-5 max-w-sm text-sm leading-relaxed">
              {site.tagline} — digoreng segar setiap pesanan di pinggir Jalur
              Raya Kalijati. Melayani dengan sepenuh hati sejak hari pertama.
            </p>
            <a
              href={waLink()}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-6 inline-flex h-11 items-center justify-center gap-2 rounded-full border border-green-700/40 bg-green-700/10 px-5 text-sm font-bold text-green-400 transition hover:bg-green-700/20 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-green-500"
            >
              <MessageCircle className="h-4 w-4" aria-hidden="true" />
              {site.whatsappDisplay}
            </a>
          </div>

          {/* Navigasi */}
          <nav aria-label="Navigasi footer">
            <h3 className="text-sm font-extrabold tracking-wider text-white uppercase">
              Jelajahi
            </h3>
            <ul className="mt-4 space-y-2.5">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-sm transition-colors hover:text-amber-300"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          {/* Kontak */}
          <div>
            <h3 className="text-sm font-extrabold tracking-wider text-white uppercase">
              Kunjungi Kami
            </h3>
            <address className="mt-4 flex items-start gap-2.5 text-sm leading-relaxed not-italic">
              <MapPin
                className="mt-0.5 h-4 w-4 shrink-0 text-orange-500"
                aria-hidden="true"
              />
              {site.address}
            </address>
            <p className="mt-3.5 flex items-center gap-2.5 text-sm">
              <Clock
                className="h-4 w-4 shrink-0 text-orange-500"
                aria-hidden="true"
              />
              Setiap hari, 10.00–20.00 WIB
            </p>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-3 border-t border-white/5 pt-7 text-xs sm:flex-row">
          <p>
            &copy; {year} {site.legalName}. Seluruh hak cipta dilindungi.
          </p>
          <p className="text-stone-500">
            Kalijati, Kabupaten Subang, Jawa Barat
          </p>
        </div>
      </div>
    </footer>
  );
}

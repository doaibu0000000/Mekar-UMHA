import { Clock, MapPin, MessageCircle } from "lucide-react";
import { Reveal } from "@/components/landing/reveal";
import { site, waLink } from "@/lib/site";

export function CtaFinal() {
  return (
    <section
      aria-label="Ajakan memesan"
      className="relative overflow-hidden bg-stone-900 py-16 md:py-24"
    >
      {/* pendar oranye hangat */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0"
      >
        <div className="absolute top-0 left-1/2 h-64 w-[40rem] -translate-x-1/2 -translate-y-1/2 rounded-full bg-orange-600/25 blur-3xl" />
        <div className="absolute -bottom-24 -left-16 h-56 w-56 rounded-full bg-amber-500/15 blur-3xl" />
      </div>

      <div className="relative mx-auto w-full max-w-3xl px-4 text-center sm:px-6">
        <Reveal>
          <p className="text-xs font-extrabold tracking-[0.3em] text-amber-400 uppercase">
            Pesan Sekarang
          </p>
          <h2 className="mt-4 text-3xl font-extrabold tracking-tight text-white sm:text-4xl md:text-5xl">
            Perut Kosong?
            <br />
            Sini, Kami Gorengkan.
          </h2>
          <p className="mx-auto mt-5 max-w-xl text-base leading-relaxed text-stone-300 sm:text-lg">
            Kirim pesan sekarang — singkongmu langsung kami timbang, goreng,
            dan taburi toping favoritmu. Panas-panasnya sampai ke tanganmu.
          </p>
        </Reveal>

        <Reveal delay={120}>
          <div className="mt-9 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <a
              href={waLink(
                "Halo Mekar UMHA Surantaka! Saya mau pesan singkong goreng keju.",
              )}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex h-14 w-full items-center justify-center gap-2.5 rounded-full bg-green-700 px-9 text-base font-bold text-white shadow-xl shadow-green-900/40 transition-all hover:-translate-y-0.5 hover:bg-green-800 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-green-500 sm:w-auto"
            >
              <MessageCircle className="h-5 w-5" aria-hidden="true" />
              Pesan via WhatsApp
            </a>
            <a
              href={site.mapsDirectionsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex h-14 w-full items-center justify-center gap-2 rounded-full border-2 border-white/15 px-9 text-base font-bold text-white transition-all hover:-translate-y-0.5 hover:border-white/40 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white sm:w-auto"
            >
              <MapPin className="h-5 w-5" aria-hidden="true" />
              Petunjuk Arah
            </a>
          </div>

          <p className="mt-7 flex flex-wrap items-center justify-center gap-x-5 gap-y-2 text-sm font-medium text-stone-400">
            <span className="inline-flex items-center gap-1.5">
              <Clock className="h-4 w-4 text-amber-400" aria-hidden="true" />
              Setiap hari, 10.00–20.00 WIB
            </span>
            <span className="inline-flex items-center gap-1.5">
              <MapPin className="h-4 w-4 text-amber-400" aria-hidden="true" />
              {site.addressShort}
            </span>
          </p>
        </Reveal>
      </div>
    </section>
  );
}

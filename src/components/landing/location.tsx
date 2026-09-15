import { Clock, MapPin, MessageCircle, Navigation } from "lucide-react";
import { Reveal } from "@/components/landing/reveal";
import { SectionHeader } from "@/components/landing/section-header";
import { site, waLink } from "@/lib/site";

export function LocationSection() {
  return (
    <section
      id="lokasi"
      aria-label="Lokasi dan jam buka"
      className="scroll-mt-20 border-t border-orange-100/70 bg-[#fff4e4]/60 py-16 md:scroll-mt-24 md:py-24"
    >
      <div className="mx-auto w-full max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="grid items-stretch gap-10 lg:grid-cols-2 lg:gap-14">
          {/* Info lokasi */}
          <div className="flex flex-col justify-center">
            <Reveal>
              <SectionHeader
                align="left"
                eyebrow="Lokasi & Jam Buka"
                title="Mampir, Kami Tunggu"
                sub="Tepat di pinggir Jalur Raya Kalijati — gampang ditemukan, gampang diparkir."
              />
            </Reveal>

            <Reveal delay={100}>
              <div className="mt-8 rounded-3xl border border-orange-100 bg-[#fffaf3] p-6 shadow-sm sm:p-7">
                <div className="flex items-start gap-4">
                  <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-orange-50 text-orange-600 ring-1 ring-orange-100">
                    <MapPin className="h-5 w-5" aria-hidden="true" />
                  </span>
                  <div>
                    <h3 className="font-extrabold text-stone-900">
                      Alamat Lapak
                    </h3>
                    <address className="mt-1.5 text-sm leading-relaxed text-stone-600 not-italic">
                      {site.address}
                    </address>
                    <p className="mt-2.5 inline-flex items-center rounded-lg bg-stone-100 px-2.5 py-1 font-mono text-xs font-semibold text-stone-600">
                      {site.plusCode}
                    </p>
                  </div>
                </div>

                <div className="mt-6 flex items-start gap-4 border-t border-dashed border-orange-200/70 pt-6">
                  <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-orange-50 text-orange-600 ring-1 ring-orange-100">
                    <Clock className="h-5 w-5" aria-hidden="true" />
                  </span>
                  <div className="flex-1">
                    <h3 className="font-extrabold text-stone-900">
                      Jam Operasional
                    </h3>
                    <dl className="mt-1.5 space-y-1.5">
                      {site.hours.map((row) => (
                        <div
                          key={row.day}
                          className="flex items-center justify-between gap-4 text-sm"
                        >
                          <dt className="text-stone-600">{row.day}</dt>
                          <dd className="font-bold text-stone-900">
                            {row.time}
                          </dd>
                        </div>
                      ))}
                    </dl>
                    <p className="mt-3 text-xs leading-relaxed text-stone-500">
                      {site.hoursNote}
                    </p>
                  </div>
                </div>

                <div className="mt-7 flex flex-col gap-3 sm:flex-row">
                  <a
                    href={site.mapsDirectionsUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex h-12 flex-1 items-center justify-center gap-2 rounded-full bg-orange-600 px-6 text-sm font-bold text-white shadow-lg shadow-orange-600/25 transition-all hover:-translate-y-0.5 hover:bg-orange-700 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-orange-600"
                  >
                    <Navigation className="h-4 w-4" aria-hidden="true" />
                    Buka Rute ke Lokasi
                  </a>
                  <a
                    href={waLink()}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex h-12 flex-1 items-center justify-center gap-2 rounded-full border-2 border-green-700/20 bg-[#fffaf3] px-6 text-sm font-bold text-green-800 transition-all hover:-translate-y-0.5 hover:border-green-700/50 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-green-700"
                  >
                    <MessageCircle className="h-4 w-4" aria-hidden="true" />
                    Tanya Stok Dulu
                  </a>
                </div>
              </div>
            </Reveal>
          </div>

          {/* Peta */}
          <Reveal delay={150} className="h-full">
            <div className="relative h-full min-h-[340px] overflow-hidden rounded-3xl border border-orange-100 shadow-lg shadow-orange-900/10 ring-1 ring-stone-900/5">
              <iframe
                src={site.mapsEmbedUrl}
                title={`Peta lokasi ${site.name} di Jl. Raya Kalijati, Subang`}
                className="absolute inset-0 h-full w-full border-0"
                loading="lazy"
                allowFullScreen
                referrerPolicy="no-referrer-when-downgrade"
              />
              <div className="pointer-events-none absolute inset-x-0 bottom-0 flex justify-center bg-gradient-to-t from-stone-900/25 to-transparent pb-3 pt-10">
                <span className="pointer-events-auto rounded-full bg-[#fffaf3]/95 px-4 py-2 text-xs font-bold text-stone-700 shadow-lg backdrop-blur">
                  {site.addressShort}
                </span>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

import { Star } from "lucide-react";
import { Reveal } from "@/components/landing/reveal";
import { SectionHeader } from "@/components/landing/section-header";
import { site, testimonials } from "@/lib/site";

function Stars() {
  return (
    <div
      className="flex gap-0.5"
      role="img"
      aria-label="Rating 5 dari 5 bintang"
    >
      {Array.from({ length: 5 }).map((_, i) => (
        <Star
          key={i}
          className="h-4 w-4 fill-amber-400 text-amber-400"
          aria-hidden="true"
        />
      ))}
    </div>
  );
}

export function Testimonials() {
  return (
    <section
      id="testimoni"
      aria-label="Testimoni pelanggan"
      className="scroll-mt-20 py-16 md:scroll-mt-24 md:py-24"
    >
      <div className="mx-auto w-full max-w-6xl px-4 sm:px-6 lg:px-8">
        <Reveal>
          <SectionHeader
            eyebrow="Testimoni"
            title="Kata Mereka yang Sudah Nagih"
            sub="Kesan jujur dari pelanggan yang mampir ke lapak kami di Jl. Raya Kalijati."
          />
        </Reveal>

        <div className="mt-12 grid gap-5 md:grid-cols-2">
          {testimonials.map((t, i) => (
            <Reveal key={t.name} delay={(i % 2) * 100}>
              <figure className="flex h-full flex-col rounded-3xl border border-orange-100 bg-[#fffaf3] p-6 shadow-sm sm:p-7">
                <Stars />
                <blockquote className="mt-4 flex-1">
                  <p className="text-[15px] leading-relaxed text-stone-700">
                    &ldquo;{t.text}&rdquo;
                  </p>
                </blockquote>
                <figcaption className="mt-6 flex items-center gap-3.5">
                  <span
                    aria-hidden="true"
                    className={`flex h-11 w-11 shrink-0 items-center justify-center rounded-full text-sm font-extrabold text-white ${t.color}`}
                  >
                    {t.initial}
                  </span>
                  <div>
                    <p className="text-sm font-extrabold text-stone-900">
                      {t.name}
                    </p>
                    <p className="text-xs font-medium text-stone-500">
                      {t.origin}
                    </p>
                  </div>
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </div>

        <Reveal delay={120}>
          <div className="mt-10 text-center">
            <a
              href={site.mapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex h-12 items-center justify-center gap-2 rounded-full border-2 border-orange-600/25 bg-[#fffaf3] px-7 text-sm font-bold text-orange-800 transition-all hover:-translate-y-0.5 hover:border-orange-600/60 hover:shadow-lg hover:shadow-orange-900/10 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-orange-600"
            >
              <Star className="h-4 w-4 fill-amber-400 text-amber-400" aria-hidden="true" />
              Baca Semua Ulasan di Google Maps
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

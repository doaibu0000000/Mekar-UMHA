import { Sparkles } from "lucide-react";
import { Reveal } from "@/components/landing/reveal";
import { SectionHeader } from "@/components/landing/section-header";
import { toppings } from "@/lib/site";

export function Toppings() {
  return (
    <section
      id="toping"
      aria-label="Aneka toping"
      className="relative scroll-mt-20 overflow-hidden bg-stone-900 py-16 md:scroll-mt-24 md:py-24"
    >
      {/* pendaran hangat di latar */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0"
      >
        <div className="absolute -top-32 left-1/2 h-72 w-[36rem] -translate-x-1/2 rounded-full bg-orange-600/20 blur-3xl" />
        <div className="bg-dots absolute right-8 bottom-8 h-32 w-48 opacity-40 invert" />
      </div>

      <div className="relative mx-auto w-full max-w-6xl px-4 sm:px-6 lg:px-8">
        <Reveal>
          <SectionHeader
            tone="dark"
            eyebrow="Aneka Toping"
            title="Racik Sesukamu"
            sub="Pilih satu, atau gabungkan dua — tinggal bilang saat memesan, kami taburkan sesuai keinginanmu."
          />
        </Reveal>

        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {toppings.map((topping, i) => (
            <Reveal key={topping.name} delay={(i % 3) * 80}>
              <article className="flex h-full items-start gap-4 rounded-2xl border border-white/10 bg-white/5 p-5 backdrop-blur-sm transition-colors hover:border-amber-400/30 hover:bg-white/10">
                <span
                  aria-hidden="true"
                  className={`mt-1.5 h-3 w-3 shrink-0 rounded-full ${topping.color} shadow-lg shadow-black/40 ring-2 ring-white/20`}
                />
                <div>
                  <h3 className="font-extrabold text-white">{topping.name}</h3>
                  <p className="mt-1.5 text-sm leading-relaxed text-stone-300">
                    {topping.desc}
                  </p>
                </div>
              </article>
            </Reveal>
          ))}
        </div>

        <Reveal delay={140}>
          <p className="mx-auto mt-10 flex max-w-xl flex-wrap items-center justify-center gap-2 rounded-full border border-amber-400/25 bg-amber-400/10 px-6 py-4 text-center text-sm font-semibold text-amber-100">
            <Sparkles className="h-4 w-4 text-amber-400" aria-hidden="true" />
            Keju + Coklat? Susu + Matcha? Bebas — biar lidahmu yang menentukan.
          </p>
        </Reveal>
      </div>
    </section>
  );
}

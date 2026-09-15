import { MessageCircle } from "lucide-react";
import { Img } from "@/components/landing/img";
import { Reveal } from "@/components/landing/reveal";
import { SectionHeader } from "@/components/landing/section-header";
import { menu, orderMessage } from "@/lib/site";

export function MenuSection() {
  return (
    <section
      id="menu"
      aria-label="Menu andalan"
      className="scroll-mt-20 border-y border-orange-100/70 bg-[#fff4e4]/60 py-16 md:scroll-mt-24 md:py-24"
    >
      <div className="mx-auto w-full max-w-6xl px-4 sm:px-6 lg:px-8">
        <Reveal>
          <SectionHeader
            eyebrow="Menu Andalan"
            title="Pilih Senjatamu Hari Ini"
            sub="Semua singkong digoreng fresh setelah pesanan masuk. Harga sudah termasuk senyum."
          />
        </Reveal>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {menu.map((item, i) => (
            <Reveal key={item.name} delay={(i % 3) * 90}>
              <article className="group flex h-full flex-col overflow-hidden rounded-3xl border border-orange-100 bg-[#fffaf3] shadow-sm transition-all duration-300 hover:-translate-y-1.5 hover:shadow-2xl hover:shadow-orange-900/15">
                <div className="relative aspect-[4/3] overflow-hidden">
                  <Img
                    src={item.image}
                    alt={item.imageAlt}
                    width={1200}
                    height={800}
                    className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-[1.06]"
                  />
                  {item.tag ? (
                    <p className="absolute top-3 left-3 rounded-full bg-stone-900/85 px-3.5 py-1.5 text-[11px] font-extrabold tracking-wide text-amber-100 uppercase backdrop-blur-sm">
                      {item.tag}
                    </p>
                  ) : null}
                </div>

                <div className="flex flex-1 flex-col p-5">
                  <h3 className="text-lg font-extrabold text-stone-900">
                    {item.name}
                  </h3>
                  <p className="mt-2 flex-1 text-sm leading-relaxed text-stone-600">
                    {item.desc}
                  </p>

                  <div className="mt-5 flex items-end justify-between gap-3">
                    <p className="leading-none">
                      <span className="text-xl font-extrabold text-orange-700">
                        {item.price}
                      </span>
                      {item.priceNote ? (
                        <span className="mt-1 block text-xs font-medium text-stone-400">
                          {item.priceNote}
                        </span>
                      ) : null}
                    </p>
                    <a
                      href={orderMessage(item.name, item.price)}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`Pesan ${item.name} lewat WhatsApp`}
                      className="inline-flex h-10 items-center justify-center gap-1.5 rounded-full border border-orange-200 bg-orange-50 px-4 text-sm font-bold text-orange-800 transition-all hover:border-orange-600 hover:bg-orange-600 hover:text-white focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-orange-600"
                    >
                      <MessageCircle
                        className="h-4 w-4"
                        aria-hidden="true"
                      />
                      Pesan
                    </a>
                  </div>
                </div>
              </article>
            </Reveal>
          ))}
        </div>

        <Reveal delay={120}>
          <p className="mx-auto mt-10 max-w-xl text-center text-sm leading-relaxed text-stone-500">
            Harga dapat berubah sewaktu-waktu — tanyakan stok dan harga
            terbaru lewat WhatsApp. Mau toping yang lain?{" "}
            <a
              href="#toping"
              className="font-bold text-orange-700 underline decoration-orange-300 underline-offset-4 hover:text-orange-800"
            >
              Lihat daftar toping di bawah
            </a>
            .
          </p>
        </Reveal>
      </div>
    </section>
  );
}

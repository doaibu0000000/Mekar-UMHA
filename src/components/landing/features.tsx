import { Flame, Sparkles, Wallet, Wheat } from "lucide-react";
import { Reveal } from "@/components/landing/reveal";
import { SectionHeader } from "@/components/landing/section-header";

const FEATURES = [
  {
    icon: Flame,
    title: "Digoreng Saat Dipesan",
    desc: "Tidak ada singkong menginap di etalase. Pesanan masuk, wajan menyala — kamu menerima hasil yang panas, renyah, dan wangi langsung dari penggorengan.",
  },
  {
    icon: Wheat,
    title: "Teknik Mekar Dua Tahap",
    desc: "Direbus sampai lembut, direndam air es, lalu digoreng dengan minyak benar-benar panas. Hasilnya singkong yang mekar seperti bunga dan renyahnya awet lama.",
  },
  {
    icon: Sparkles,
    title: "Keju & Toping Premium",
    desc: "Keju cheddar diparut halus saat penyajian sehingga tetap aromatik dan lembut — ditabur melimpah hingga merata, bukan taburan simbolis.",
  },
  {
    icon: Wallet,
    title: "Harga Anak Muda",
    desc: "Mulai dari Rp 3.000 sudah dapat camilan yang bikin mood naik. Kenyang dan senang tanpa perlu mikir dua kali soal dompet.",
  },
];

export function Features() {
  return (
    <section
      aria-label="Keunggulan Mekar UMHA Surantaka"
      className="scroll-mt-20 py-16 md:scroll-mt-24 md:py-24"
    >
      <div className="mx-auto w-full max-w-6xl px-4 sm:px-6 lg:px-8">
        <Reveal>
          <SectionHeader
            eyebrow="Kenapa Mekar UMHA"
            title="Bukan Gorengan Biasa"
            sub="Empat alasan sederhana kenapa warga Subang balik lagi hampir tiap sore."
          />
        </Reveal>

        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {FEATURES.map((feature, i) => (
            <Reveal key={feature.title} delay={i * 90}>
              <article className="card-shine group h-full rounded-3xl border border-orange-100 bg-[#fffaf3] p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-orange-900/10">
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-orange-50 text-orange-600 ring-1 ring-orange-100 transition-colors group-hover:bg-orange-600 group-hover:text-white">
                  <feature.icon className="h-6 w-6" aria-hidden="true" />
                </div>
                <h3 className="mt-5 text-lg font-extrabold text-stone-900">
                  {feature.title}
                </h3>
                <p className="mt-2.5 text-sm leading-relaxed text-stone-600">
                  {feature.desc}
                </p>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

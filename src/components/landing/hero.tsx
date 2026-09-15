import { Clock, Flame, MapPin, MessageCircle, Star } from "lucide-react";
import { Img } from "@/components/landing/img";
import { site, waLink } from "@/lib/site";

export function Hero() {
  return (
    <section
      id="beranda"
      aria-labelledby="hero-heading"
      className="relative overflow-hidden pt-28 pb-14 sm:pt-32 md:pt-40 md:pb-20"
    >
      {/* Dekorasi latar */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-10"
      >
        <div className="absolute -top-24 -right-24 h-96 w-96 rounded-full bg-amber-200/50 blur-3xl" />
        <div className="absolute top-1/2 -left-32 h-80 w-80 rounded-full bg-orange-200/40 blur-3xl" />
        <div className="bg-dots absolute top-24 right-8 hidden h-40 w-56 opacity-70 sm:block" />
      </div>

      <div className="mx-auto grid w-full max-w-6xl items-center gap-12 px-4 sm:px-6 lg:grid-cols-[1.05fr_0.95fr] lg:gap-16 lg:px-8">
        {/* Kolom teks */}
        <div className="max-w-xl">
          <p
            className="hero-anim inline-flex items-center gap-2 rounded-full border border-amber-300/70 bg-[#fff9f0]/80 px-4 py-2 text-xs font-bold text-stone-700 shadow-sm backdrop-blur"
            style={{ animationDelay: "0.05s" }}
          >
            <Star
              className="h-3.5 w-3.5 fill-amber-400 text-amber-400"
              aria-hidden="true"
            />
            Rating {site.rating.value}/5 — camilan favorit warga Subang
          </p>

          <h1
            id="hero-heading"
            className="hero-anim mt-6 text-4xl font-extrabold leading-[1.06] tracking-tight text-stone-900 sm:text-5xl lg:text-[3.4rem]"
            style={{ animationDelay: "0.15s" }}
          >
            Singkong Goreng Keju yang{" "}
            <span className="animate-shimmer-text relative inline-block">
              Selalu Mekar
              {/* Garis bawah beranimasi: stroke-dashoffset dari kanan ke kiri */}
              <svg
                aria-hidden="true"
                viewBox="0 0 220 12"
                className="absolute -bottom-1 left-0 w-full"
                preserveAspectRatio="none"
                style={{ overflow: "visible" }}
              >
                <path
                  d="M3 9c40-6 120-8 214-4"
                  fill="none"
                  stroke="url(#underline-gradient)"
                  strokeWidth="5"
                  strokeLinecap="round"
                  strokeDasharray="220"
                  strokeDashoffset="220"
                  style={{
                    animation: "underline-draw 0.8s 0.6s cubic-bezier(0.16,1,0.3,1) forwards",
                  }}
                />
                <defs>
                  <linearGradient id="underline-gradient" x1="0" y1="0" x2="1" y2="0">
                    <stop offset="0" stopColor="#f59e0b" />
                    <stop offset="1" stopColor="#ea580c" />
                  </linearGradient>
                </defs>
              </svg>
            </span>{" "}
            &amp; Renyah.
          </h1>

          <p
            className="hero-anim mt-6 text-base leading-relaxed text-stone-600 sm:text-lg"
            style={{ animationDelay: "0.25s" }}
          >
            Digoreng langsung saat pesananmu masuk — bukan gorengan yang
            menginap berjam-jam. Singkong pilihan, keju cheddar parut
            melimpah, aneka toping manis-gurih, plus combro isi oncom yang
            bikin kangen kampung.
          </p>

          {/* CTA utama */}
          <div
            id="hero-cta-buttons"
            className="hero-anim mt-8 flex flex-col gap-3 sm:flex-row"
            style={{ animationDelay: "0.35s" }}
          >
            <a
              href={waLink(
                "Halo Mekar UMHA Surantaka! Saya mau pesan singkong goreng keju.",
              )}
              target="_blank"
              rel="noopener noreferrer"
              className="animate-pulse-ring inline-flex h-13 min-h-12 items-center justify-center gap-2.5 rounded-full bg-green-700 px-8 text-base font-bold text-white shadow-xl shadow-green-700/25 transition-all hover:-translate-y-0.5 hover:bg-green-800 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-green-700"
            >
              <MessageCircle className="h-5 w-5" aria-hidden="true" />
              Pesan via WhatsApp
            </a>
            <a
              href="#menu"
              className="inline-flex h-13 min-h-12 items-center justify-center gap-2 rounded-full border-2 border-orange-600/25 bg-[#fff9f0]/70 px-8 text-base font-bold text-orange-800 backdrop-blur transition-all hover:-translate-y-0.5 hover:border-orange-600/50 hover:bg-[#fff9f0] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-orange-600"
            >
              Lihat Menu Dulu
            </a>
          </div>

          {/* Info kepercayaan */}
          <ul
            className="hero-anim mt-8 flex flex-wrap items-center gap-x-5 gap-y-2 text-sm font-medium text-stone-600"
            style={{ animationDelay: "0.45s" }}
          >
            <li className="flex items-center gap-1.5">
              <Star
                className="h-4 w-4 fill-amber-400 text-amber-400"
                aria-hidden="true"
              />
              {site.rating.value}/5 · {site.rating.count} ulasan
            </li>
            <li className="flex items-center gap-1.5">
              <Clock className="h-4 w-4 text-orange-600" aria-hidden="true" />
              Buka tiap hari 10.00–20.00
            </li>
            <li className="flex items-center gap-1.5">
              <MapPin className="h-4 w-4 text-orange-600" aria-hidden="true" />
              Jl. Raya Kalijati, Subang
            </li>
          </ul>
        </div>

        {/* Komposisi foto */}
        <div className="hero-anim relative mx-auto w-full max-w-lg lg:max-w-none">
          <div className="relative">
            {/* bingkai miring di belakang */}
            <div
              aria-hidden="true"
              className="absolute inset-0 rotate-3 rounded-[2.2rem] bg-gradient-to-br from-amber-300/70 to-orange-200/50"
            />
            {/* foto utama */}
            <div className="relative aspect-[4/3] overflow-hidden rounded-[2.2rem] shadow-2xl shadow-orange-900/20 ring-1 ring-stone-900/10">
              <Img
                src="/images/hero-singkong-keju.jpg"
                alt="Singkong goreng keju mekar-renyah dengan taburan keju cheddar parut melimpah"
                width={1200}
                height={800}
                priority
                className="absolute inset-0 h-full w-full object-cover"
              />
            </div>

            {/* kartu foto asli lapak */}
            <div className="animate-float-diagonal card-shine absolute -bottom-6 -left-2 flex max-w-[260px] items-center gap-3 rounded-2xl border border-orange-100 bg-[#fff9f0]/95 p-3 shadow-xl shadow-orange-900/15 backdrop-blur sm:-left-6">
              <Img
                src="/images/singkong-asli-lapak.jpg"
                alt="Foto asli singkong goreng mekar dari lapak Mekar UMHA Surantaka"
                width={1200}
                height={800}
                className="h-16 w-16 shrink-0 rounded-xl object-cover ring-1 ring-stone-900/10"
              />
              <div className="min-w-0">
                <p className="text-sm font-extrabold text-stone-900">
                  Foto asli lapak kami
                </p>
                <p className="mt-0.5 text-xs leading-snug text-stone-500">
                  Singkong mekar, fresh dari wajan
                </p>
              </div>
            </div>

            {/* lencana goreng saat dipesan */}
            <div className="animate-float-diagonal-delayed absolute -top-5 -right-2 flex items-center gap-2 rounded-full border border-orange-100 bg-[#fff9f0]/95 px-4 py-2.5 shadow-lg shadow-orange-900/10 backdrop-blur sm:-right-4">
              <Flame
                className="animate-sparkle h-4 w-4 text-orange-600"
                aria-hidden="true"
              />
              <span className="text-xs font-extrabold text-stone-800">
                Digoreng saat dipesan
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

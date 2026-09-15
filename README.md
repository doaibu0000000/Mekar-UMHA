# Landing Page — Singkong Goreng Keju Mekar UMHA Surantaka

Landing page profesional untuk gerai **Singkong Goreng Keju Mekar UMHA, Combro dan aneka Toping Surantaka** — camilan legendaris di Jl. Raya Kalijati, Kabupaten Subang, Jawa Barat.

Halaman ini dirancang *mobile-first*, berorientasi konversi (tombol WhatsApp sekali sentuh, rute Google Maps langsung), dan siap deploy ke **Vercel** maupun **GitHub Pages** tanpa konfigurasi tambahan.

---

## Daftar Isi

- [Fitur Utama](#fitur-utama)
- [Teknologi](#teknologi)
- [Struktur Proyek](#struktur-proyek)
- [Cara Install](#cara-install)
- [Menjalankan Development](#menjalankan-development)
- [Build Produksi](#build-produksi)
- [Environment Variable](#environment-variable)
- [Deployment](#deployment)
- [Kustomisasi Konten](#kustomisasi-konten)

---

## Fitur Utama

| Area | Detail |
| --- | --- |
| Hero | Judul penawaran utama, CTA WhatsApp & menu, rating, jam buka, foto asli lapak dari Google Maps |
| Menu | 6 kartu produk (singkong goreng keju, mekar original, susu, coklat, pedas, combro) dengan harga & tombol pesan per item |
| Aneka Toping | 6 varian topping yang bisa dikombinasikan |
| Testimoni | Ulasan pelanggan bergaya Google Maps + tombol menuju listing asli |
| Lokasi | Peta Google Maps ter-embed, alamat lengkap + plus code, jam operasional, tombol rute |
| Konversi | Sticky CTA di bagian bawah layar mobile (WhatsApp + rute), CTA ganda di navbar, hero, dan penutup |
| SEO | Metadata lengkap (Open Graph, Twitter Card), structured data JSON-LD `FoodEstablishment`, robots.txt |
| Performa | Gambar teroptimasi (progressive JPEG, lazy loading), tanpa pustaka animasi berat — CSS murni |
| Aksesibilitas | Semantic HTML, ARIA label, skip link, fokus keyboard terlihat, dukungan `prefers-reduced-motion` |
| Responsif | Breakpoint mobile → tablet → laptop → desktop lebar, target sentuh ≥ 44px, aman untuk safe-area iPhone |

## Teknologi

- **[Next.js 16](https://nextjs.org/)** (App Router) dengan **static export** — output berupa situs statis murni
- **[TypeScript 5](https://www.typescriptlang.org/)**
- **[Tailwind CSS 4](https://tailwindcss.com/)**
- **[Lucide React](https://lucide.dev/)** untuk ikon
- **Plus Jakarta Sans** via `next/font` (self-hosted, tanpa permintaan eksternal saat runtime)
- **Bun** sebagai runtime & package manager (opsional — npm juga bisa)

## Struktur Proyek

```
├── .github/workflows/
│   └── deploy-pages.yml      # CI/CD otomatis ke GitHub Pages
├── public/
│   ├── favicon.svg           # Logo situs
│   ├── robots.txt            # Aturan crawler
│   └── images/               # Foto produk & OG image (teroptimasi)
├── src/
│   ├── app/
│   │   ├── globals.css       # Design system (palet hangat, animasi, utilitas)
│   │   ├── layout.tsx        # Font, metadata SEO, struktur halaman
│   │   └── page.tsx          # Komposisi section + structured data JSON-LD
│   ├── components/landing/
│   │   ├── navbar.tsx        # Navigasi sticky + menu mobile
│   │   ├── hero.tsx          # Bagian pembuka + komposisi foto
│   │   ├── marquee.tsx       # Pita berjalan
│   │   ├── features.tsx      # 4 keunggulan usaha
│   │   ├── menu-section.tsx  # Grid kartu menu & harga
│   │   ├── toppings.tsx      # Aneka toping (section gelap)
│   │   ├── testimonials.tsx  # Ulasan pelanggan
│   │   ├── location.tsx      # Peta + jam buka + alamat
│   │   ├── cta-final.tsx     # Ajakan memesan (section gelap)
│   │   ├── footer.tsx        # Footer lengkap
│   │   ├── sticky-cta.tsx    # Bilah aksi melekat (mobile)
│   │   ├── reveal.tsx        # Animasi muncul saat scroll
│   │   ├── img.tsx           # Komponen gambar sadar base path
│   │   ├── brand-mark.tsx    # Logo SVG
│   │   └── section-header.tsx
│   └── lib/
│       ├── site.ts           # ★ SEMUA data bisnis (menu, harga, jam, kontak)
│       └── base-path.ts      # Helper base path GitHub Pages
├── next.config.ts            # Static export + base path opsional
└── package.json
```

## Cara Install

Prasyarat: [Node.js 20+](https://nodejs.org/) (atau [Bun 1.1+](https://bun.sh/)).

```bash
# kloning repositori
git clone <url-repositori-anda>
cd <nama-repositori>

# install dependensi — pilih salah satu
npm install       # menggunakan npm
bun install       # menggunakan bun (lebih cepat)
```

## Menjalankan Development

```bash
npm run dev       # atau: bun run dev
```

Buka `http://localhost:3000`. Perubahan kode akan ter-hot-reload otomatis.

## Build Produksi

```bash
npm run build     # atau: bun run build
```

Hasil build statis ada di folder **`out/`** — berisi HTML, CSS, JS, dan aset siap upload ke hosting mana pun.

Pratinjau hasil build secara lokal:

```bash
npm run preview   # menjalankan server statis untuk folder out/
```

## Environment Variable

Proyek ini **tidak membutuhkan environment variable apa pun** untuk berjalan normal di Vercel. Dua variabel berikut bersifat opsional:

| Variabel | Default | Kegunaan |
| --- | --- | --- |
| `NEXT_PUBLIC_BASE_PATH` | *(kosong)* | Hanya untuk GitHub Pages project site. Diisi `/nama-repo`, mis. `/landing-page-mekar-umha`. Lihat [Deployment → GitHub Pages](#github-pages-otomatis--disarankan). |
| `NEXT_PUBLIC_SITE_URL` | `https://mekar-umha-surantaka.vercel.app` | URL produksi untuk metadata Open Graph / canonical. Isi dengan domain asli setelah deploy. |

Tidak ada `.env` yang di-commit ke repositori — aman untuk GitHub publik.

## Deployment

### Vercel (produksi — disarankan)

1. Push repositori ke GitHub/GitLab/Bitbucket.
2. Buka [vercel.com/new](https://vercel.com/new), import repositori.
3. Klik **Deploy** — Vercel mendeteksi Next.js secara otomatis. Tidak perlu mengubah setting apa pun.
4. (Opsional) Setelah punya domain custom, tambahkan Environment Variable `NEXT_PUBLIC_SITE_URL=https://domain-anda` lalu redeploy agar metadata Open Graph mengarah ke domain final.

> Static export sudah aktif (`output: "export"` di `next.config.ts`), sehingga build Vercel menghasilkan situs statis yang cepat dan hemat.

### GitHub Pages (untuk testing)

**Otomatis — disarankan:**

1. Push repositori ke GitHub.
2. Di halaman repo, buka **Settings → Pages → Build and deployment**, ubah **Source** menjadi **GitHub Actions**.
3. Workflow `deploy-pages.yml` akan build & publish otomatis pada setiap push ke `main`/`master`. Base path dihitung otomatis — kamu tidak perlu mengatur apa pun.

**Manual (jika ingin build sendiri):**

```bash
NEXT_PUBLIC_BASE_PATH=/<nama-repo-anda> npm run build
# lalu upload seluruh isi folder out/ ke branch gh-pages
```

> Catatan: jika repositorimu bernama `<username>.github.io`, biarkan `NEXT_PUBLIC_BASE_PATH` kosong (sajikan dari root).

## Kustomisasi Konten

Hampir seluruh isi website dikendalikan dari **satu file**: [`src/lib/site.ts`](src/lib/site.ts).

Yang perlu disesuaikan sebelum dipresentasikan / dipublikasikan:

1. **Nomor WhatsApp** — ganti `whatsappNumber` & `whatsappDisplay` dengan nomor asli pemilik usaha (format internasional tanpa `+`, mis. `6281234567890`). Seluruh tombol pesan di halaman otomatis mengikuti.
2. **Jam operasional** — sesuaikan `hours` dengan jam buka sebenarnya.
3. **Menu & harga** — edit array `menu` di file yang sama.
4. **Ulasan** — ganti `testimonials` dan `rating` dengan ulasan asli dari listing Google Maps bisnis.
5. **Foto** — timpa file di `public/images/` dengan foto produk asli lapak (rekomendasi rasio 4:3, maksimal lebar 1200px). Foto saat ini merupakan foto asli lapak dari Google Maps + foto ilustrasi produk yang siap diganti.

---

Dibuat untuk kebutuhan demo presentasi kepada pemilik usaha. Semua data kontak bersifat placeholder hingga diganti dengan data resmi.

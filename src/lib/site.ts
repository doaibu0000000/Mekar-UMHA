/**
 * Konfigurasi bisnis — SUMBER TUNGGAL data landing page.
 * Ubah nilai di file ini untuk memperbarui seluruh isi website.
 */

export const site = {
  // Identitas
  name: "Mekar UMHA Surantaka",
  legalName: "Singkong Goreng Keju Mekar UMHA, Combro dan aneka Toping Surantaka",
  tagline: "Singkong Goreng Keju, Combro & Aneka Toping",
  shortArea: "Kalijati, Subang",

  // Kontak — GANTI nomor WhatsApp di bawah ini dengan nomor asli pemilik usaha
  whatsappNumber: "6281252857317",
  whatsappDisplay: "+62 812-5285-7317",

  // Lokasi (data dari listing Google Maps)
  address:
    "Jl. Raya Kalijati, Kalijati Bar., Kec. Kalijati, Kabupaten Subang, Jawa Barat 41271",
  addressShort: "Jl. Raya Kalijati, Kalijati Barat, Subang",
  plusCode: "FMJF+8PJ Kalijati, Kabupaten Subang",
  lat: -6.5190058,
  lng: 107.6742851,
  mapsEmbedUrl:
    "https://maps.google.com/maps?q=-6.5190058,107.6742851&hl=id&z=17&output=embed",
  mapsUrl:
    "https://www.google.com/maps/search/?api=1&query=-6.5190058,107.6742851",
  mapsDirectionsUrl:
    "https://www.google.com/maps/dir/?api=1&destination=-6.5190058,107.6742851",

  // Jam operasional (sesuaikan bila berubah)
  hours: [
    { day: "Senin – Jumat", time: "10.00 – 20.00 WIB" },
    { day: "Sabtu – Minggu", time: "10.00 – 20.00 WIB" },
  ],
  hoursNote:
    "Jam operasional dapat berubah — pastikan dulu lewat WhatsApp sebelum mampir jauh.",

  // Sosial proof (ganti dengan data ulasan Google Maps terbaru)
  rating: { value: "4.9", count: "120+" },
} as const;

/** Membuat tautan WhatsApp dengan pesan yang sudah terisi otomatis. */
export function waLink(message?: string): string {
  const text =
    message ??
    "Halo Mekar UMHA Surantaka! Saya mau tanya-tanya dulu tentang menunya.";
  return `https://wa.me/${site.whatsappNumber}?text=${encodeURIComponent(text)}`;
}

/** Pesan bantuan pesanan per item menu. */
export function orderMessage(itemName: string, price: string): string {
  return `Halo Mekar UMHA Surantaka! Saya mau pesan *${itemName}* (${price}). Masih tersedia?`;
}

// ---------------------------------------------------------------------------
// DATA KONTEN HALAMAN
// ---------------------------------------------------------------------------

export type MenuItem = {
  name: string;
  price: string;
  priceNote?: string;
  desc: string;
  tag?: string;
  image: string;
  imageAlt: string;
};

export const menu: MenuItem[] = [
  {
    name: "Singkong Goreng Keju",
    price: "Rp 15.000",
    desc: "Singkong mekar renyah ditaburi keju cheddar parut sampai merata. Kombo klasik yang tidak pernah gagal.",
    tag: "Best Seller",
    image: "/images/hero-singkong-keju.jpg",
    imageAlt: "Singkong goreng keju mekar dengan taburan keju cheddar parut",
  },
  {
    name: "Singkong Goreng Mekar",
    price: "Rp 10.000",
    desc: "Versi orisinal tanpa topping. Gurih, renyah, dan jujur bikin nagih sendiri. Ini foto asli dari lapak kami.",
    tag: "Paling Irit",
    image: "/images/singkong-asli-lapak.jpg",
    imageAlt: "Singkong goreng mekar renyah, foto asli lapak Mekar UMHA Surantaka",
  },
  {
    name: "Singkong Keju Susu",
    price: "Rp 16.000",
    desc: "Siraman susu kental manis di atas singkong yang masih panas, lalu ditutup keju parut. Manisnya nyaman, gurihnya nempel.",
    image: "/images/singkong-susu.jpg",
    imageAlt: "Singkong goreng dengan topping susu kental manis dan keju",
  },
  {
    name: "Singkong Keju Coklat",
    price: "Rp 17.000",
    desc: "Coklat lumer menyusup ke sela-sela singkong renyah. Duo manis-gurih yang aneh-rasa-pasaran tapi selalu habis duluan.",
    tag: "Favorit Anak",
    image: "/images/singkong-coklat.jpg",
    imageAlt: "Singkong goreng keju dengan topping coklat lumer",
  },
  {
    name: "Singkong Sambal Bawang",
    price: "Rp 16.000",
    desc: "Khusus pencinta pedas: toping sambal bawang dengan level yang bisa diatur. Renyah bertemu pedas, susah berhenti.",
    image: "/images/singkong-pedas.jpg",
    imageAlt: "Singkong goreng keju dengan topping sambal bawang pedas",
  },
  {
    name: "Combro Isi Oncom",
    price: "Rp 3.000",
    priceNote: "per biji",
    desc: "Kulit singkong kriuk dengan isi oncom pedas gurih. Camilan legendaris Sunda yang bikin kangen kampung.",
    tag: "Sunda Klasik",
    image: "/images/combro-oncom.jpg",
    imageAlt: "Combro isi oncom, camilan tradisional Sunda dari singkong",
  },
];

export type Topping = {
  name: string;
  desc: string;
  color: string; // kelas warna ekor
};

export const toppings: Topping[] = [
  {
    name: "Keju Cheddar",
    desc: "Parutan halus yang melimpah, gurihnya tidak setengah-setengah.",
    color: "bg-amber-400",
  },
  {
    name: "Coklat Lumer",
    desc: "Manisnya pekat, ngambang pasangan sempurna singkong panas.",
    color: "bg-amber-800",
  },
  {
    name: "Susu Kental Manis",
    desc: "Siraman klasik yang tidak pernah salah di segala cuaca.",
    color: "bg-stone-200",
  },
  {
    name: "Matcha",
    desc: "Aroma earthy dengan manis lembut — favorit yang suka halus.",
    color: "bg-emerald-500",
  },
  {
    name: "Stroberi",
    desc: "Manis menyegarkan, warnanya cantik di feed-mu.",
    color: "bg-rose-400",
  },
  {
    name: "Kopi Susu",
    desc: "Pahit-manis yang bold, wajib dicoba penikmat kopi.",
    color: "bg-orange-900",
  },
];

export type Testimonial = {
  name: string;
  origin: string;
  text: string;
  initial: string;
  color: string;
};

export const testimonials: Testimonial[] = [
  {
    name: "Rani Andini",
    origin: "Kalijati Barat",
    text: "Singkongnya beneran mekar! Renyahnya masih terjaga sampai berjam-jam, dan kejunya tidak pelit. Sekali coba langsung jadi langganan.",
    initial: "RA",
    color: "bg-orange-600",
  },
  {
    name: "Ibu Dewi",
    origin: "Kalijati Timur",
    text: "Yang paling saya suka, digorengnya pas dipesan. Jadi masih panas dan wangi waktu sampai rumah. Anak-anak rebutan yang topping susu.",
    initial: "D",
    color: "bg-amber-700",
  },
  {
    name: "Kang Yusuf",
    origin: "Warga Sagalaherang",
    text: "Sengaja mampir pas lewat Jalur Raya Kalijati. Combro-nya juara — isian oncomnya bumbunya nendang, kriuknya bikin nagih.",
    initial: "Y",
    color: "bg-stone-700",
  },
  {
    name: "Dedi Setiawan",
    origin: "Cisalak",
    text: "Jadi titipan kantor tiap Jumat. Porsinya pas, toping-nya banyak pilihan, dan yang sambal bawang itu level kecanduannya berbahaya.",
    initial: "DS",
    color: "bg-red-700",
  },
];

export const navLinks = [
  { href: "#menu", label: "Menu" },
  { href: "#toping", label: "Toping" },
  { href: "#testimoni", label: "Testimoni" },
  { href: "#lokasi", label: "Lokasi" },
];

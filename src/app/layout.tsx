import type { Metadata, Viewport } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import { site } from "@/lib/site";
import { withBasePath } from "@/lib/base-path";

const jakarta = Plus_Jakarta_Sans({
  variable: "--font-jakarta",
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "500", "600", "700", "800"],
});

const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL || "https://mekar-umha-surantaka.vercel.app";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: `${site.name} — ${site.tagline} | ${site.shortArea}`,
    template: `%s | ${site.name}`,
  },
  description:
    "Singkong goreng keju mekar-renyah yang digoreng langsung saat dipesan. Tersedia combro isi oncom dan aneka toping keju, coklat, susu, matcha. Mampir ke Jl. Raya Kalijati, Subang — buka setiap hari 10.00–20.00 WIB.",
  keywords: [
    "singkong goreng keju",
    "singkong mekar",
    "combro",
    "aneka toping",
    "jajanan Kalijati",
    "camilan Subang",
    "Mekar UMHA",
    "Surantaka",
    "singkong goreng Subang",
    "combro Kalijati",
  ],
  authors: [{ name: site.legalName }],
  creator: site.legalName,
  publisher: site.legalName,
  icons: {
    icon: withBasePath("/favicon.svg"),
    apple: withBasePath("/favicon.svg"),
  },
  openGraph: {
    type: "website",
    locale: "id_ID",
    url: "/",
    siteName: site.name,
    title: `${site.name} — ${site.tagline}`,
    description:
      "Singkong goreng keju mekar-renyah, combro isi oncom, dan aneka toping. Digoreng saat dipesan di Jl. Raya Kalijati, Subang.",
    images: [
      {
        url: "/images/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Singkong goreng keju mekar Mekar UMHA Surantaka",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: `${site.name} — ${site.tagline}`,
    description:
      "Singkong goreng keju mekar-renyah, combro isi oncom, dan aneka toping favorit warga Subang.",
    images: ["/images/og-image.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
    },
  },
  category: "food",
  // Halaman ini dirancang dengan tema terang (krem hangat) secara sengaja.
  // Dark Reader / ekstensi auto-dark meng-inversi halaman secara bertahap
  // sehingga muncul "kedipan putih" saat load, scroll, dan interaksi.
  // Meta ini meminta ekstensi tersebut untuk tidak menyentuh halaman ini.
  other: {
    "darkreader-lock": "true",
    "color-scheme": "light",
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#ea580c",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id" suppressHydrationWarning>
      <body
        className={`${jakarta.variable} font-sans antialiased bg-background text-foreground`}
      >
        {children}
      </body>
    </html>
  );
}

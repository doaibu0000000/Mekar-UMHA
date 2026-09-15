import { Navbar } from "@/components/landing/navbar";
import { Hero } from "@/components/landing/hero";
import { Marquee } from "@/components/landing/marquee";
import { Features } from "@/components/landing/features";
import { MenuSection } from "@/components/landing/menu-section";
import { Toppings } from "@/components/landing/toppings";
import { Testimonials } from "@/components/landing/testimonials";
import { LocationSection } from "@/components/landing/location";
import { CtaFinal } from "@/components/landing/cta-final";
import { Footer } from "@/components/landing/footer";
import { StickyCta } from "@/components/landing/sticky-cta";
import { site } from "@/lib/site";
import { withBasePath } from "@/lib/base-path";

/** Structured data FoodEstablishment untuk mesin pencari. */
const jsonLd = {
  "@context": "https://schema.org",
  "@type": "FoodEstablishment",
  name: site.legalName,
  alternateName: site.name,
  description:
    "Gerai singkong goreng keju, combro isi oncom, dan aneka toping di Jl. Raya Kalijati, Subang. Digoreng segar setiap pesanan.",
  servesCuisine: ["Indonesia", "Jajanan", "Camilan"],
  priceRange: "Rp 3.000 - Rp 20.000",
  currenciesAccepted: "IDR",
  address: {
    "@type": "PostalAddress",
    streetAddress: "Jl. Raya Kalijati, Kalijati Bar.",
    addressLocality: "Kec. Kalijati, Kabupaten Subang",
    addressRegion: "Jawa Barat",
    postalCode: "41271",
    addressCountry: "ID",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: site.lat,
    longitude: site.lng,
  },
  hasMap: site.mapsUrl,
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
        "Sunday",
      ],
      opens: "10:00",
      closes: "20:00",
    },
  ],
  image: withBasePath("/images/og-image.jpg"),
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: site.rating.value,
    reviewCount: site.rating.count.replace("+", ""),
    bestRating: "5",
  },
};

export default function Home() {
  return (
    <>
      <a
        href="#konten-utama"
        className="sr-only focus:not-sr-only focus:absolute focus:top-3 focus:left-3 focus:z-[60] focus:rounded-full focus:bg-white focus:px-5 focus:py-2.5 focus:text-sm focus:font-bold focus:text-stone-900 focus:shadow-xl"
      >
        Langsung ke konten utama
      </a>

      <Navbar />

      <main id="konten-utama" className="flex min-h-screen flex-col">
        <Hero />
        <Marquee />
        <Features />
        <MenuSection />
        <Toppings />
        <Testimonials />
        <LocationSection />
        <CtaFinal />
      </main>

      <Footer />
      <StickyCta />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
    </>
  );
}

"use client";

import { useEffect, useRef } from "react";
import { MessageCircle } from "lucide-react";
import { site, waLink } from "@/lib/site";

/**
 * Ikon resmi Google Maps Pin (Multi-color: Biru, Merah, Kuning, Hijau)
 */
function GoogleMapsPinIcon({ className = "h-6 w-auto" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 92.3 132.3"
      className={className}
      aria-hidden="true"
      fill="none"
    >
      <path
        fill="#1a73e8"
        d="M60.2 2.2C55.8.8 51 0 46.1 0 32 0 19.3 6.4 10.8 16.5l21.8 18.3L60.2 2.2z"
      />
      <path
        fill="#ea4335"
        d="M10.8 16.5C4.1 24.5 0 34.9 0 46.1c0 8.7 1.7 15.7 4.6 22l28-33.3-21.8-18.3z"
      />
      <path
        fill="#4285f4"
        d="M46.2 28.5c9.8 0 17.7 7.9 17.7 17.7 0 4.3-1.6 8.3-4.2 11.4 0 0 13.9-16.6 27.5-32.7-5.6-10.8-15.3-19-27-22.7L32.6 34.8c3.3-3.8 8.1-6.3 13.6-6.3"
      />
      <path
        fill="#fbbc04"
        d="M46.2 63.8c-9.8 0-17.7-7.9-17.7-17.7 0-4.3 1.5-8.3 4.1-11.3l-28 33.3c4.8 10.6 12.8 19.2 21 29.9l34.1-40.5c-3.3 3.9-8.1 6.3-13.5 6.3"
      />
      <path
        fill="#34a853"
        d="M59.1 109.2c15.4-24.1 33.3-35 33.3-63 0-7.7-1.9-14.9-5.2-21.3L25.6 98c2.6 3.4 5.3 7.3 7.9 11.3 9.4 14.5 6.8 23.1 12.8 23.1s3.4-8.7 12.8-23.2"
      />
    </svg>
  );
}

/**
 * Bilah aksi melekat di bagian bawah layar (khusus mobile).
 * Otomatis TERSEMBUNYI saat tombol "Pesan via WhatsApp" di hero masih terlihat
 * (scroll posisi atas), dan MUNCUL ketika tombol hero sudah tidak terlihat.
 * Menghormati safe-area iPhone (home indicator) lewat env(safe-area-inset-bottom).
 */
export function StickyCta() {
  const barRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const bar = barRef.current;
    if (!bar) return;

    // Observasi tombol hero — jika terlihat, sembunyikan sticky bar
    const heroCta = document.getElementById("hero-cta-buttons");
    if (!heroCta) {
      // Jika elemen tidak ada (misal sudah scroll jauh), langsung tampilkan
      bar.style.opacity = "1";
      bar.style.transform = "translateY(0)";
      bar.style.pointerEvents = "auto";
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          // Hero CTA masih terlihat → sembunyikan sticky bar
          bar.style.opacity = "0";
          bar.style.transform = "translateY(100%)";
          bar.style.pointerEvents = "none";
        } else {
          // Hero CTA tidak terlihat → tampilkan sticky bar
          bar.style.opacity = "1";
          bar.style.transform = "translateY(0)";
          bar.style.pointerEvents = "auto";
        }
      },
      {
        // Trigger segera saat elemen keluar/masuk viewport
        threshold: 0,
        rootMargin: "0px",
      },
    );

    observer.observe(heroCta);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={barRef}
      className="fixed inset-x-0 bottom-0 z-40 md:hidden"
      role="complementary"
      aria-label="Aksi cepat"
      style={{
        isolation: "isolate",
        /* State awal: tersembunyi (karena user mulai di atas) */
        opacity: 0,
        transform: "translateY(100%)",
        pointerEvents: "none",
        transition: "opacity 0.3s ease, transform 0.35s cubic-bezier(0.4, 0, 0.2, 1)",
      }}
    >
      {/* Gradient fade ke atas */}
      <div
        style={{
          background:
            "linear-gradient(to top, #fff9f0 55%, rgba(255,249,240,0.9) 80%, transparent 100%)",
          padding: "24px 12px 12px",
        }}
      >
        {/* Pill container */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "10px",
            backgroundColor: "#fff9f0",
            borderRadius: "9999px",
            border: "1px solid #fed7aa",
            padding: "6px",
            boxShadow: "0 8px 28px -6px rgba(120,53,15,0.28)",
            paddingBottom:
              "calc(6px + max(env(safe-area-inset-bottom) * 0.35, 0px))",
          }}
        >
          {/* Tombol pesan WhatsApp */}
          <a
            href={waLink(
              "Halo Mekar UMHA Surantaka! Saya mau pesan singkong goreng keju.",
            )}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex min-h-12 flex-1 items-center justify-center gap-2 rounded-full px-4 text-sm font-bold text-white transition active:scale-[0.98] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-green-700"
            style={{
              height: "48px",
              backgroundColor: "#15803d",
              borderRadius: "9999px",
            }}
          >
            <MessageCircle className="h-5 w-5" aria-hidden="true" />
            Pesan Sekarang
          </a>

          {/* Tombol rute Google Maps */}
          <a
            href={site.mapsDirectionsUrl}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Buka rute ke lokasi di Google Maps"
            className="flex shrink-0 items-center justify-center transition active:scale-95 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-orange-600"
            style={{
              height: "48px",
              width: "48px",
              backgroundColor: "#ffffff",
              border: "1px solid #fed7aa",
              borderRadius: "9999px",
              boxShadow: "0 2px 6px -1px rgba(120,53,15,0.12)",
            }}
          >
            <GoogleMapsPinIcon className="h-6 w-auto" />
          </a>
        </div>
      </div>
    </div>
  );
}

"use client";

import { useEffect, useRef, useState } from "react";
import { Menu, MessageCircle, X } from "lucide-react";
import { BrandMark } from "@/components/landing/brand-mark";
import { navLinks, site, waLink } from "@/lib/site";

export function Navbar() {
  const [open, setOpen] = useState(false);
  const headerRef = useRef<HTMLElement>(null);

  // Gunakan ref DOM langsung untuk efek scroll — TIDAK pakai setState
  // sehingga tidak ada re-render dan tidak ada flash saat hydration
  useEffect(() => {
    const header = headerRef.current;
    if (!header) return;

    const onScroll = () => {
      if (window.scrollY > 12) {
        header.setAttribute("data-scrolled", "true");
      } else {
        header.removeAttribute("data-scrolled");
      }
    };

    // Jalankan sekali saat mount untuk kondisi awal yang benar
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Tutup menu mobile bila ukuran layar berubah ke desktop
  useEffect(() => {
    const mq = window.matchMedia("(min-width: 768px)");
    const onChange = () => mq.matches && setOpen(false);
    mq.addEventListener("change", onChange);
    return () => mq.removeEventListener("change", onChange);
  }, []);

  // Kunci scroll body saat menu mobile terbuka
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header
      ref={headerRef}
      className="navbar-header fixed inset-x-0 top-0 z-50"
      data-open={open ? "true" : undefined}
    >
      <nav
        aria-label="Navigasi utama"
        className="mx-auto flex h-16 w-full max-w-6xl items-center justify-between px-4 sm:px-6 md:h-20 lg:px-8"
      >
        {/* Logo */}
        <a
          href="#beranda"
          className="flex items-center gap-3 rounded-xl focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-orange-600"
          aria-label={`${site.name} — kembali ke beranda`}
        >
          <BrandMark className="h-10 w-10 shrink-0 drop-shadow-sm" gradientId="brand-bg-nav" />
          <span className="flex flex-col leading-none">
            <span className="text-lg font-extrabold tracking-tight text-stone-900">
              Mekar UMHA
            </span>
            <span className="mt-1 text-[10px] font-bold uppercase tracking-[0.28em] text-orange-700">
              Surantaka
            </span>
          </span>
        </a>

        {/* Navigasi desktop */}
        <ul className="hidden items-center gap-8 md:flex">
          {navLinks.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="group relative py-2 text-sm font-semibold text-stone-700 transition-colors hover:text-orange-700"
              >
                {link.label}
                <span className="absolute inset-x-0 -bottom-0.5 h-0.5 origin-left scale-x-0 rounded-full bg-orange-600 transition-transform duration-300 group-hover:scale-x-100" />
              </a>
            </li>
          ))}
        </ul>

        {/* CTA desktop */}
        <div className="hidden md:block">
          <a
            href={waLink(
              "Halo Mekar UMHA Surantaka! Saya mau pesan singkong goreng keju.",
            )}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex h-11 items-center justify-center gap-2 rounded-full bg-green-700 px-6 text-sm font-bold text-white shadow-lg shadow-green-700/25 transition-all hover:-translate-y-0.5 hover:bg-green-800 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-green-700"
          >
            <MessageCircle className="h-4 w-4" aria-hidden="true" />
            Pesan Sekarang
          </a>
        </div>

        {/* Tombol menu mobile */}
        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          aria-expanded={open}
          aria-controls="menu-mobile"
          aria-label={open ? "Tutup menu navigasi" : "Buka menu navigasi"}
          className="flex h-11 w-11 items-center justify-center rounded-full border border-orange-200 bg-[#fff9f0] text-stone-800 shadow-sm transition-colors hover:bg-orange-50 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-orange-600 md:hidden"
        >
          {open ? (
            <X className="h-5 w-5" aria-hidden="true" />
          ) : (
            <Menu className="h-5 w-5" aria-hidden="true" />
          )}
        </button>
      </nav>

      {/* Panel menu mobile — animasi via transform (GPU, tanpa flash) */}
      <div
        id="menu-mobile"
        aria-hidden={!open}
        className={`mobile-panel md:hidden ${open ? "open" : ""}`}
      >
        <div className="mx-4 mb-4 rounded-3xl border border-orange-100 bg-[#fff9f0] p-4 shadow-xl shadow-orange-900/10">
          <ul className="flex flex-col">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="block rounded-2xl px-4 py-3 text-base font-semibold text-stone-800 transition hover:bg-orange-50 hover:text-orange-800"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
          <a
            href={waLink(
              "Halo Mekar UMHA Surantaka! Saya mau pesan singkong goreng keju.",
            )}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-3 flex h-12 items-center justify-center gap-2 rounded-2xl bg-green-700 text-sm font-bold text-white shadow-lg shadow-green-700/25 transition hover:bg-green-800"
          >
            <MessageCircle className="h-4 w-4" aria-hidden="true" />
            Pesan via WhatsApp
          </a>
          <p className="mt-3 text-center text-xs font-medium text-stone-500">
            Buka setiap hari, 10.00–20.00 WIB
          </p>
        </div>
      </div>
    </header>
  );
}

import type { NextConfig } from "next";

/**
 * Situs ini adalah landing page statis murni (tanpa server/API), sehingga
 * menggunakan static export (`output: "export"`) yang menghasilkan folder
 * `out/` saat `npm run build`.
 *
 * Cocok untuk:
 * - Vercel       : langsung deploy, tanpa konfigurasi tambahan.
 * - GitHub Pages : build dengan base path, contoh:
 *                  NEXT_PUBLIC_BASE_PATH=/nama-repo npm run build
 *                  lalu publish folder `out/`.
 *
 * NEXT_PUBLIC_BASE_PATH kosong secara default sehingga deployment ke
 * Vercel / domain kustom tidak terpengaruh.
 */
const basePath = process.env.NEXT_PUBLIC_BASE_PATH || "";

const nextConfig: NextConfig = {
  output: "export",
  // Static export membutuhkan gambar tanpa optimasi API;
  // semua gambar sudah dioptimalkan secara manual (progressive JPEG).
  images: { unoptimized: true },
  ...(basePath ? { basePath } : {}),
  reactStrictMode: false,
  typescript: {
    ignoreBuildErrors: true,
  },
  // Sembunyikan indikator dev Next.js (tombol bulat hitam di pojok kiri bawah)
  // agar tidak tumpang tindih dengan sticky CTA bar saat development.
  // Di production indikator ini tidak pernah muncul.
  devIndicators: false,
};

export default nextConfig;

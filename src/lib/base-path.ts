/**
 * Base path untuk deployment GitHub Pages.
 *
 * - Vercel / lokal / domain kustom : kosong (default)
 * - GitHub Pages project site       : NEXT_PUBLIC_BASE_PATH=/nama-repo
 *
 * Contoh build untuk GitHub Pages:
 *   NEXT_PUBLIC_BASE_PATH=/landing-page-mekar-umha npm run build
 *
 * Nilai ini di-inline saat build, sehingga semua aset lokal (gambar,
 * favicon, og-image) otomatis mendapat prefix yang benar.
 */
export const basePath = process.env.NEXT_PUBLIC_BASE_PATH || "";

/** Menambahkan basePath ke path aset lokal yang diawali "/". */
export function withBasePath(src: string): string {
  if (!basePath || !src.startsWith("/") || src.startsWith("//")) return src;
  return `${basePath}${src}`;
}

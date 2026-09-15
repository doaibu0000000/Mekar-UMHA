import { withBasePath } from "@/lib/base-path";

type ImgProps = {
  src: string;
  alt: string;
  width: number;
  height: number;
  className?: string;
  /** Gambar utama di atas lipatan sebaiknya dimuat langsung. */
  priority?: boolean;
  sizes?: string;
  style?: React.CSSProperties;
};

/**
 * Pengganti <img> yang sadar basePath — menjamin gambar tetap termuat di
 * Vercel, GitHub Pages (dengan base path), maupun lokal.
 * Width/height eksplisit mencegah layout shift (CLS).
 */
export function Img({
  src,
  alt,
  width,
  height,
  className,
  priority = false,
  style,
}: ImgProps) {
  return (
    <img
      src={withBasePath(src)}
      alt={alt}
      width={width}
      height={height}
      loading={priority ? "eager" : "lazy"}
      fetchPriority={priority ? "high" : "auto"}
      decoding={priority ? "sync" : "async"}
      className={className}
      style={style}
    />
  );
}

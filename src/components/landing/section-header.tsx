type SectionHeaderProps = {
  eyebrow: string;
  title: string;
  sub?: string;
  /** "light" untuk latar terang, "dark" untuk latar gelap. */
  tone?: "light" | "dark";
  align?: "center" | "left";
};

export function SectionHeader({
  eyebrow,
  title,
  sub,
  tone = "light",
  align = "center",
}: SectionHeaderProps) {
  const isDark = tone === "dark";
  return (
    <div
      className={`max-w-2xl ${align === "center" ? "mx-auto text-center" : "text-left"}`}
    >
      <p
        className={`flex items-center gap-3 text-xs font-extrabold uppercase tracking-[0.3em] ${
          isDark ? "text-amber-400" : "text-orange-700"
        } ${align === "center" ? "justify-center" : ""}`}
      >
        <span
          className={`h-px w-8 ${isDark ? "bg-amber-400/60" : "bg-orange-600/40"}`}
          aria-hidden="true"
        />
        {eyebrow}
        <span
          className={`h-px w-8 ${isDark ? "bg-amber-400/60" : "bg-orange-600/40"}`}
          aria-hidden="true"
        />
      </p>
      <h2
        className={`mt-4 text-3xl font-extrabold tracking-tight sm:text-4xl ${
          isDark ? "text-white" : "text-stone-900"
        }`}
      >
        {title}
      </h2>
      {sub ? (
        <p
          className={`mt-4 text-base leading-relaxed sm:text-lg ${
            isDark ? "text-stone-400" : "text-stone-600"
          }`}
        >
          {sub}
        </p>
      ) : null}
    </div>
  );
}

import Link from "next/link";
import type { CSSProperties, ReactNode } from "react";

/*
 * Building blocks shared by the site's pages. Pages are laid out with inline
 * styles taken straight from the design; these cover the pieces that repeat.
 */

export const INK = "#0f0e0c";
export const MUTED = "#66625b";
export const BODY = "#3f3c37";
export const CREAM = "#fdfcf8";
export const YELLOW = "#ffe680";
export const RULE = "1px solid rgba(15,14,12,0.14)";
export const PAD_X = "clamp(16px, 4vw, 32px)";

/** The painted grounds behind product screenshots, with the colour shown while each loads. */
export const PAINT = {
  teal: { src: "/images/site/paint-teal.webp", bg: "#1d3431" },
  plum: { src: "/images/site/paint-plum.webp", bg: "#2c1f33" },
  navy: { src: "/images/site/paint-navy.webp", bg: "#1a2438" },
  charcoal: { src: "/images/site/paint-charcoal.webp", bg: "#1c1d1c" },
  olive: { src: "/images/site/paint-olive.webp", bg: "#222b1e" },
  slate: { src: "/images/site/paint-slate.webp", bg: "#17303a" },
} as const;
export type PaintName = keyof typeof PAINT;

const PAINT_BY_NAME = new Map(Object.entries(PAINT) as [PaintName, (typeof PAINT)[PaintName]][]);
/** Looks a painted ground up by name. */
export const paintOf = (name: PaintName) => PAINT_BY_NAME.get(name) ?? PAINT.teal;

/** A centred column, 1200px wide, with the site's side gutter. */
export function Container({
  as: Tag = "section",
  top = 0,
  bottom = 0,
  id,
  style,
  children,
}: {
  as?: "section" | "div" | "header";
  top?: number | string;
  bottom?: number | string;
  id?: string;
  style?: CSSProperties;
  children: ReactNode;
}) {
  const px = (v: number | string) => (typeof v === "number" ? `${v}px` : v);
  return (
    <Tag id={id} style={{ maxWidth: "1200px", margin: "0 auto", padding: `${px(top)} ${PAD_X} ${px(bottom)}`, ...style }}>
      {children}
    </Tag>
  );
}

/** Internal paths go through next/link; the app and other sites are plain links. */
export function SmartLink({ href, style, className, children, ...rest }: { href: string; style?: CSSProperties; className?: string; children: ReactNode; "aria-label"?: string }) {
  return href.startsWith("/") || href.startsWith("#") ? (
    <Link href={href} style={style} className={className} {...rest}>{children}</Link>
  ) : (
    <a href={href} style={style} className={className} {...rest}>{children}</a>
  );
}

const buttonBase: CSSProperties = { padding: "13px 22px", borderRadius: "4px", fontSize: "15px", fontWeight: 500 };

/** Solid dark button. */
export function PrimaryButton({ href, children }: { href: string; children: ReactNode }) {
  return <SmartLink href={href} style={{ ...buttonBase, background: INK, color: CREAM }}>{children}</SmartLink>;
}
/** Outlined button. */
export function SecondaryButton({ href, children }: { href: string; children: ReactNode }) {
  return <SmartLink href={href} style={{ ...buttonBase, padding: "12px 22px", border: "1px solid rgba(15,14,12,0.5)" }}>{children}</SmartLink>;
}

/** The yellow marker behind a few words of a headline. */
export function Highlight({ children, color = YELLOW }: { children: ReactNode; color?: string }) {
  return (
    <span style={{ background: color, padding: "0 0.1em", WebkitBoxDecorationBreak: "clone", boxDecorationBreak: "clone" }}>
      {children}
    </span>
  );
}

/** Small grey label above a heading. */
export function Eyebrow({ children, style }: { children: ReactNode; style?: CSSProperties }) {
  return <div style={{ fontSize: "14px", color: MUTED, marginBottom: "14px", ...style }}>{children}</div>;
}

/** Section heading row: a rule, a label and a large serif title, with a short note on the right. */
export function SectionHead({
  label,
  title,
  aside,
  marginBottom = 36,
  as: H = "h2",
}: {
  label: ReactNode;
  title: ReactNode;
  aside?: ReactNode;
  marginBottom?: number;
  as?: "h1" | "h2";
}) {
  return (
    <div style={{ borderTop: RULE, paddingTop: "28px", marginBottom: `${marginBottom}px`, display: "flex", justifyContent: "space-between", alignItems: "flex-end", gap: "16px 48px", flexWrap: "wrap" }}>
      <div>
        <Eyebrow>{label}</Eyebrow>
        <H className="serif" style={{ margin: 0, maxWidth: "720px", fontSize: "clamp(34px, 4.2vw, 60px)", lineHeight: 1.04, letterSpacing: "-0.022em", textWrap: "balance" }}>
          {title}
        </H>
      </div>
      {aside && <p style={{ margin: 0, maxWidth: "330px", fontSize: "14.5px", lineHeight: 1.6, color: MUTED }}>{aside}</p>}
    </div>
  );
}

/** The yellow numbered square used in step lists. */
export function StepNumber({ n, active = true }: { n: number | string; active?: boolean }) {
  return active ? (
    <span style={{ width: "22px", height: "22px", borderRadius: "4px", background: YELLOW, color: INK, fontSize: "12px", fontWeight: 600, display: "flex", alignItems: "center", justifyContent: "center" }}>{n}</span>
  ) : (
    <span style={{ width: "22px", height: "22px", borderRadius: "4px", boxSizing: "border-box", border: "1px solid rgba(15,14,12,0.3)", fontSize: "12px", fontWeight: 600, display: "flex", alignItems: "center", justifyContent: "center" }}>{n}</span>
  );
}

/** A numbered point that isn't selectable: number, title and a line of detail. */
export function NumberedPoint({ n, title, children }: { n: number; title: ReactNode; children: ReactNode }) {
  return (
    <div style={{ borderTop: RULE, padding: "16px 0 18px", display: "grid", gridTemplateColumns: "36px 1fr" }}>
      <StepNumber n={n} />
      <span>
        <span style={{ display: "block", fontSize: "15.5px", fontWeight: 500 }}>{title}</span>
        <span style={{ display: "block", marginTop: "6px", fontSize: "14.5px", lineHeight: 1.55, color: MUTED }}>{children}</span>
      </span>
    </div>
  );
}

/** A decorative painted ground filling its (position: relative) parent. */
export function PaintImage({ paint, style }: { paint: PaintName; style?: CSSProperties }) {
  return (
    <img src={paintOf(paint).src} alt="" aria-hidden="true" style={{ position: "absolute", inset: 0, width: "100%", height: "100%", objectFit: "cover", ...style }} />
  );
}

/** A screenshot laid on a painted ground, as the design places them. */
export const SHOT_STYLES = {
  /** Transparent screenshot, scaled to fit, with a soft shadow. */
  contain: { position: "absolute", left: "6%", top: "7%", width: "88%", height: "86%", objectFit: "contain", filter: "drop-shadow(0 18px 28px rgba(15,14,12,0.22))" },
  /** Screenshot on a white card, centred. */
  card: { position: "absolute", inset: 0, margin: "auto", maxWidth: "88%", maxHeight: "86%", background: "#ffffff", borderRadius: "8px", boxShadow: "0 22px 40px -22px rgba(15,14,12,0.45), 0 0 0 1px rgba(15,14,12,0.08)" },
} satisfies Record<string, CSSProperties>;

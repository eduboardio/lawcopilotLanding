import Link from "next/link";
import { CREAM, INK, MUTED, PAD_X } from "@/components/site/primitives";

const DOCS = [
  { key: "terms", label: "Terms of Service", href: "/terms" },
  { key: "privacy", label: "Privacy Policy", href: "/privacy-policy" },
] as const;

/** Header of the legal pages: a switch between the two documents, the title and the byline. */
export function LegalHeader({ current, title }: { current: (typeof DOCS)[number]["key"]; title: string }) {
  return (
    <header style={{ maxWidth: "1200px", margin: "0 auto", padding: `60px ${PAD_X} 44px` }}>
      <div style={{ display: "flex", gap: "8px", flexWrap: "wrap", marginBottom: "30px" }}>
        {DOCS.map((d) =>
          d.key === current ? (
            <Link key={d.key} href={d.href} aria-current="page" style={{ padding: "9px 16px", borderRadius: "999px", background: INK, color: CREAM, fontSize: "14px", fontWeight: 500 }}>
              {d.label}
            </Link>
          ) : (
            <Link key={d.key} href={d.href} style={{ padding: "8px 16px", borderRadius: "999px", border: "1px solid rgba(15,14,12,0.22)", fontSize: "14px", fontWeight: 500 }}>
              {d.label}
            </Link>
          ),
        )}
      </div>
      <h1 className="serif" style={{ margin: 0, fontSize: "clamp(44px, 5.6vw, 76px)", lineHeight: 1.02, letterSpacing: "-0.03em" }}>
        {title}
      </h1>
      <p style={{ margin: "18px 0 0", fontSize: "14.5px", color: MUTED }}>Lawinit Private Limited · Visakhapatnam, Andhra Pradesh</p>
    </header>
  );
}

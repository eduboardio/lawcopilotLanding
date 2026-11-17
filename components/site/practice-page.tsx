import Link from "next/link";
import { Eyebrow, MUTED, PAD_X, PAINT, PaintImage, PrimaryButton, SecondaryButton, type PaintName } from "./primitives";
import { DEFAULT_CTA, SiteFooter } from "./site-footer";
import { SIGNUP_URL, PRACTICE_AREAS } from "./site-links";

/*
 * The practice-area pages share one layout: a hero with a screenshot on a
 * painted ground, what you hand over and what comes back, the other practice
 * areas, and the standard closing statement. Each route supplies its copy.
 */

export type PracticeHref = (typeof PRACTICE_AREAS)[number]["href"];

export interface PracticePageData {
  /** This page's route; picks its name for the breadcrumb and drops it from "Other practice areas". */
  href: PracticeHref;
  headline: string;
  intro: string;
  /** Painted ground behind the hero screenshot. */
  paint: PaintName;
  shot: { src: string; alt: string };
  /** The line under the screenshot, e.g. "Built on Document Briefs and Research." */
  builtOn: string;
  /** The solution page linked under "What you hand over". */
  solution: { label: string; href: string };
  handOver: string[];
  getBack: string[];
}

const ITEM_RULE = "1px solid rgba(15,14,12,0.1)";

function ArrowIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M5 12h14M13 6l6 6-6 6" />
    </svg>
  );
}

export function PracticePage({ data }: { data: PracticePageData }) {
  const current = PRACTICE_AREAS.find((p) => p.href === data.href)!;
  const others = PRACTICE_AREAS.filter((p) => p.href !== data.href);

  return (
    <>
      {/* Hero */}
      <header style={{ maxWidth: "1200px", margin: "0 auto", padding: `64px ${PAD_X} 52px`, display: "flex", flexDirection: "column", alignItems: "center", textAlign: "center" }}>
        <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "center", gap: "8px", fontSize: "13.5px", color: MUTED, marginBottom: "24px" }}>
          <Link href="/#solutions">Solutions</Link>
          <span aria-hidden="true">/</span>
          <span>Practice areas</span>
          <span aria-hidden="true">/</span>
          <span style={{ color: "#0f0e0c" }}>{current.title}</span>
        </div>
        <h1 className="serif" style={{ margin: 0, maxWidth: "900px", fontSize: "clamp(44px, 5.8vw, 82px)", lineHeight: 1.02, letterSpacing: "-0.03em", textWrap: "balance" }}>
          {data.headline}
        </h1>
        <p style={{ margin: "24px 0 0", maxWidth: "680px", fontSize: "17px", lineHeight: 1.6, color: "#3f3c37", textWrap: "pretty" }}>{data.intro}</p>
        <div style={{ marginTop: "32px", display: "flex", gap: "12px", flexWrap: "wrap", justifyContent: "center" }}>
          <PrimaryButton href="/contact">Book a demo</PrimaryButton>
          <SecondaryButton href={SIGNUP_URL}>Get started free</SecondaryButton>
        </div>
      </header>
      <div style={{ maxWidth: "1264px", margin: "0 auto", padding: "0 clamp(12px, 2vw, 32px)" }}>
        <div style={{ position: "relative", aspectRatio: "2.1 / 1", borderRadius: "6px", overflow: "hidden", background: PAINT[data.paint].bg }}>
          <PaintImage paint={data.paint} />
          <img
            src={data.shot.src}
            alt={data.shot.alt}
            style={{ position: "absolute", left: "5%", top: "7%", width: "90%", height: "86%", objectFit: "contain", filter: "drop-shadow(0 18px 28px rgba(15,14,12,0.22))" }}
          />
        </div>
      </div>
      <div style={{ maxWidth: "1200px", margin: "0 auto", padding: `16px ${PAD_X} 0`, fontSize: "13.5px", color: MUTED }}>{data.builtOn}</div>

      {/* What you hand over, what comes back */}
      <section style={{ maxWidth: "1200px", margin: "0 auto", padding: `84px ${PAD_X} 88px` }}>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(min(300px, 100%), 1fr))", gap: "36px 56px", alignItems: "start" }}>
          <div>
            <Eyebrow>How it works</Eyebrow>
            <h2 className="serif" style={{ margin: "0 0 22px", fontSize: "clamp(30px, 3.4vw, 46px)", lineHeight: 1.06, letterSpacing: "-0.022em" }}>
              What you hand over, and what comes back
            </h2>
            <Link href={data.solution.href} style={{ display: "inline-block", fontSize: "14.5px", fontWeight: 500, borderBottom: "1px solid #0f0e0c", padding: "6px 0 3px" }}>
              {data.solution.label}
            </Link>
          </div>
          <div>
            <div style={{ fontSize: "13.5px", color: MUTED, paddingBottom: "10px", borderBottom: "1px solid rgba(15,14,12,0.18)" }}>You hand over</div>
            {data.handOver.map((item) => (
              <div key={item} style={{ padding: "11px 0", borderBottom: ITEM_RULE, fontSize: "15px", lineHeight: 1.45 }}>{item}</div>
            ))}
          </div>
          <div>
            <div style={{ fontSize: "13.5px", color: MUTED, paddingBottom: "10px", borderBottom: "1px solid #0f0e0c" }}>You get back</div>
            {data.getBack.map((item) => (
              <div key={item} style={{ padding: "11px 0", borderBottom: ITEM_RULE, fontSize: "15px", lineHeight: 1.45, fontWeight: 500 }}>{item}</div>
            ))}
          </div>
        </div>
      </section>

      {/* Other practice areas */}
      <section style={{ background: "#f0eadb", padding: "76px 0 84px" }}>
        <div style={{ maxWidth: "1200px", margin: "0 auto", padding: `0 ${PAD_X}` }}>
          <Eyebrow style={{ color: "#5c5850" }}>Practice areas</Eyebrow>
          <h2 className="serif" style={{ margin: "0 0 40px", maxWidth: "760px", fontSize: "clamp(32px, 3.8vw, 52px)", lineHeight: 1.06, letterSpacing: "-0.022em" }}>
            Every practice. Its own way of working.
          </h2>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(min(240px, 100%), 1fr))", gap: "28px 32px" }}>
            {others.map((p) => (
              <Link key={p.href} href={p.href} style={{ borderTop: "1px solid #0f0e0c", padding: "18px 0 6px", display: "flex", flexDirection: "column", gap: "10px" }}>
                <span className="serif" style={{ display: "flex", justifyContent: "space-between", alignItems: "center", gap: "12px", fontSize: "25px", lineHeight: 1.15 }}>
                  {p.title}
                  <ArrowIcon />
                </span>
                <span style={{ fontSize: "14.5px", lineHeight: 1.55, color: "#5c5850" }}>{p.detail}</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Closing statement + footer */}
      <SiteFooter cta={{ ...DEFAULT_CTA, maxSize: 88 }} />
    </>
  );
}

import type { CSSProperties } from "react";
import Link from "next/link";
import {
  BODY,
  Container,
  Eyebrow,
  INK,
  MUTED,
  PAINT,
  PaintImage,
  PrimaryButton,
  RULE,
  SecondaryButton,
  YELLOW,
  type PaintName,
} from "./primitives";
import { Showcase, type ShowcaseStep } from "./showcase";
import { DEFAULT_CTA, SiteFooter, type ClosingCta } from "./site-footer";
import { SIGNUP_URL } from "./site-links";

/*
 * The "Solutions" pages (law firms, in-house teams, litigation) share one
 * layout: hero with a painted screenshot, what changes, use cases, work you can
 * hand over, security, then the closing statement. Each page passes its copy.
 */

export interface SolutionPageData {
  /** Last step of the breadcrumb, e.g. "Law firms". */
  crumb: string;
  title: string;
  intro: string;
  /** Max width of the intro paragraph in px. */
  introMaxWidth: number;
  hero: {
    paint: PaintName;
    aspectRatio: string;
    image: { src: string; alt: string };
    /** Where the screenshot sits on the painted ground. */
    shot: { left: string; top: string; width: string; borderRadius: string };
  };
  changesTitle: string;
  changes: ReadonlyArray<{ title: string; detail: string }>;
  usesTitle: string;
  usesPaint: PaintName;
  uses: ShowcaseStep[];
  handOverTitle: string;
  tasks: ReadonlyArray<{ label: string; prompt: string; result: string }>;
  securityNote: string;
  /** Closing statement; the standard one when left out. */
  cta?: ClosingCta;
}

const H2: CSSProperties = { margin: 0, maxWidth: "760px", fontSize: "clamp(32px, 3.8vw, 52px)", lineHeight: 1.06, letterSpacing: "-0.022em" };

const SECURITY = [
  { title: "Stored in India", detail: "Data stays on servers in India" },
  { title: "Encrypted", detail: "AES-256 at rest, TLS 1.3 in transit" },
  { title: "Never used for training", detail: "Not shared with other customers" },
  { title: "Access by role", detail: "Owner, admin, member or viewer" },
];

export function SolutionPage({ data }: { data: SolutionPageData }) {
  const { hero } = data;
  return (
    <>
      {/* Hero */}
      <Container as="header" top={64} bottom={52} style={{ display: "flex", flexDirection: "column", alignItems: "center", textAlign: "center" }}>
        <div style={{ display: "flex", gap: "8px", fontSize: "13.5px", color: MUTED, marginBottom: "24px" }}>
          <Link href="/#solutions">Solutions</Link>
          <span aria-hidden="true">/</span>
          <span style={{ color: INK }}>{data.crumb}</span>
        </div>
        <h1 className="serif" style={{ margin: 0, maxWidth: "900px", fontSize: "clamp(44px, 5.8vw, 82px)", lineHeight: 1.02, letterSpacing: "-0.03em", textWrap: "balance" }}>
          {data.title}
        </h1>
        <p style={{ margin: "24px 0 0", maxWidth: `${data.introMaxWidth}px`, fontSize: "17px", lineHeight: 1.6, color: BODY, textWrap: "pretty" }}>{data.intro}</p>
        <div style={{ marginTop: "32px", display: "flex", gap: "12px", flexWrap: "wrap", justifyContent: "center" }}>
          <PrimaryButton href="/contact">Book a demo</PrimaryButton>
          <SecondaryButton href={SIGNUP_URL}>Get started free</SecondaryButton>
        </div>
      </Container>
      <div style={{ maxWidth: "1264px", margin: "0 auto", padding: "0 clamp(12px, 2vw, 32px)" }}>
        <div style={{ position: "relative", aspectRatio: hero.aspectRatio, borderRadius: "6px", overflow: "hidden", background: PAINT[hero.paint].bg }}>
          <PaintImage paint={hero.paint} />
          <img
            src={hero.image.src}
            alt={hero.image.alt}
            style={{ position: "absolute", ...hero.shot, height: "auto", boxShadow: "0 34px 60px -26px rgba(15,14,12,0.5), 0 0 0 1px rgba(15,14,12,0.08)" }}
          />
        </div>
      </div>

      {/* What changes */}
      <Container top={84} bottom={76}>
        <h2 className="serif" style={{ ...H2, marginBottom: "44px" }}>{data.changesTitle}</h2>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(min(280px, 100%), 1fr))", gap: "32px 40px" }}>
          {data.changes.map((c, i) => (
            <div key={c.title} style={{ borderTop: `1px solid ${INK}`, paddingTop: "18px" }}>
              <div style={{ fontSize: "13.5px", color: MUTED, marginBottom: "10px" }}>{String(i + 1).padStart(2, "0")}</div>
              <div className="serif" style={{ fontSize: "26px", lineHeight: 1.15, marginBottom: "10px" }}>{c.title}</div>
              <p style={{ margin: 0, fontSize: "15px", lineHeight: 1.6, color: MUTED }}>{c.detail}</p>
            </div>
          ))}
        </div>
      </Container>

      {/* Use cases */}
      <Container bottom={92}>
        <div style={{ borderTop: RULE, paddingTop: "28px", marginBottom: "40px" }}>
          <Eyebrow>Use cases</Eyebrow>
          <h2 className="serif" style={H2}>{data.usesTitle}</h2>
        </div>
        <Showcase steps={data.uses} paint={data.usesPaint} titleSize="16px" detailLineHeight={1.6} />
      </Container>

      {/* Hand it over */}
      <section style={{ background: "linear-gradient(180deg, #2c2b28 0%, #171614 100%)", padding: "84px 0" }}>
        <Container as="div">
          <Eyebrow style={{ color: "#b7b2a8" }}>Hand it over</Eyebrow>
          <h2 className="serif" style={{ ...H2, marginBottom: "40px", color: "#f6f3ec" }}>{data.handOverTitle}</h2>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(min(320px, 100%), 1fr))", gap: "16px" }}>
            {data.tasks.map((t) => (
              <div
                key={t.label}
                style={{ background: "#ffffff", border: "1px solid rgba(15,14,12,0.1)", borderRadius: "8px", padding: "28px", display: "flex", flexDirection: "column", gap: "16px", boxShadow: "0 16px 30px -24px rgba(15,14,12,0.4)" }}
              >
                <div style={{ alignSelf: "flex-start", padding: "3px 9px", borderRadius: "4px", background: YELLOW, color: INK, fontSize: "12.5px", fontWeight: 600 }}>{t.label}</div>
                <div className="serif" style={{ fontSize: "23px", lineHeight: 1.25 }}>{t.prompt}</div>
                <div style={{ marginTop: "auto", display: "flex", gap: "10px", fontSize: "14.5px", lineHeight: 1.5, color: BODY }}>
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#0f0e0c" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" style={{ flexShrink: 0, marginTop: "3px" }}>
                    <path d="M20 6L9 17l-5-5"></path>
                  </svg>
                  <span>{t.result}</span>
                </div>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* Security */}
      <Container top={84} bottom={84}>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(min(380px, 100%), 1fr))", gap: "36px 72px", alignItems: "start" }}>
          <div>
            <Eyebrow>Security</Eyebrow>
            <h2 className="serif" style={{ margin: "0 0 18px", fontSize: "clamp(30px, 3.4vw, 48px)", lineHeight: 1.06, letterSpacing: "-0.022em" }}>Confidential by design</h2>
            <p style={{ margin: "0 0 22px", maxWidth: "420px", fontSize: "15.5px", lineHeight: 1.65, color: MUTED }}>{data.securityNote}</p>
            <Link href="/privacy-policy" style={{ display: "inline-block", fontSize: "14.5px", fontWeight: 500, borderBottom: `1px solid ${INK}`, paddingBottom: "3px" }}>
              Read the Privacy Policy
            </Link>
          </div>
          <div>
            {SECURITY.map((s, i) => (
              <div
                key={s.title}
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "baseline",
                  gap: "16px 32px",
                  flexWrap: "wrap",
                  padding: "20px 0",
                  borderTop: i === 0 ? `1px solid ${INK}` : RULE,
                  borderBottom: i === SECURITY.length - 1 ? RULE : undefined,
                }}
              >
                <span className="serif" style={{ fontSize: "25px" }}>{s.title}</span>
                <span style={{ fontSize: "14px", color: MUTED }}>{s.detail}</span>
              </div>
            ))}
          </div>
        </div>
      </Container>

      <SiteFooter cta={data.cta ?? DEFAULT_CTA} />
    </>
  );
}

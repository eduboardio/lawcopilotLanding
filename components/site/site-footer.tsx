import Link from "next/link";
import type { ReactNode } from "react";
import { BUSINESS, SOCIAL } from "@/constants";
import { PLATFORM, SIGN_IN_URL, SIGNUP_URL, SOLUTIONS } from "./site-links";

const PAD_X = "clamp(16px, 4vw, 32px)";
const RULE = "1px solid rgba(246,243,236,0.18)";

type Action = { label: string; href: string };

/** Internal paths go through next/link; the app and other sites are plain links. */
function SmartLink({ href, style, children }: { href: string; style?: React.CSSProperties; children: ReactNode }) {
  return href.startsWith("/") ? (
    <Link href={href} style={style}>{children}</Link>
  ) : (
    <a href={href} style={style}>{children}</a>
  );
}

/** Wraps a few words of a closing headline in the yellow highlight. */
export function CtaHighlight({ children }: { children: ReactNode }) {
  return <span style={{ background: "#ffe680", color: "#0f0e0c", padding: "0 0.12em" }}>{children}</span>;
}

export interface ClosingCta {
  title: ReactNode;
  body: string;
  primary: Action;
  secondary: Action;
  /** Largest headline size in px. The home page runs a little larger. */
  maxSize?: number;
  /** Headline tracking. Most pages set -0.028em; the home and WhatsApp pages -0.025em. */
  letterSpacing?: string;
}

/** The dark band that ends every page: an optional closing statement, then the footer. */
export function SiteFooter({ cta }: { cta?: ClosingCta }) {
  const linkColumn = (label: string, links: ReadonlyArray<{ href: string; title: string }>, extra?: ReactNode) => (
    <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
      <span style={{ fontSize: "13.5px", color: "#b7b2a8", marginBottom: "4px" }}>{label}</span>
      {links.map((l) => (
        <SmartLink key={l.href} href={l.href}>{l.title}</SmartLink>
      ))}
      {extra}
    </div>
  );

  return (
    <section style={{ background: "#0f0e0c", color: "#f6f3ec", paddingTop: cta ? undefined : "4px" }}>
      {cta && (
        <div style={{ maxWidth: "1200px", margin: "0 auto", padding: `96px ${PAD_X} 88px`, display: "flex", flexDirection: "column", alignItems: "center", textAlign: "center" }}>
          <h2 className="serif" style={{ margin: 0, maxWidth: "980px", fontSize: `clamp(40px, 6vw, ${cta.maxSize ?? 84}px)`, lineHeight: 1.02, letterSpacing: cta.letterSpacing ?? "-0.028em", textWrap: "balance" }}>
            {cta.title}
          </h2>
          <p style={{ margin: "26px 0 0", maxWidth: "520px", fontSize: "17px", lineHeight: 1.6, color: "#cfcabf" }}>{cta.body}</p>
          <div style={{ marginTop: "34px", display: "flex", gap: "12px", flexWrap: "wrap", justifyContent: "center" }}>
            <SmartLink href={cta.primary.href} style={{ background: "#f6f3ec", color: "#0f0e0c", padding: "14px 24px", borderRadius: "4px", fontSize: "15px", fontWeight: 500 }}>
              {cta.primary.label}
            </SmartLink>
            <SmartLink href={cta.secondary.href} style={{ border: "1px solid rgba(246,243,236,0.5)", padding: "13px 24px", borderRadius: "4px", fontSize: "15px", fontWeight: 500 }}>
              {cta.secondary.label}
            </SmartLink>
          </div>
        </div>
      )}
      <footer style={{ maxWidth: "1200px", margin: "0 auto", padding: `0 ${PAD_X}` }}>
        <div
          style={{ borderTop: cta ? RULE : undefined, paddingTop: cta ? "52px" : "60px", display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(min(140px, 100%), 1fr))", gap: "36px 32px", fontSize: "14.5px", color: "#cfcabf" }}
        >
          <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
            <img src="/images/site/logo-light.svg" alt="LawCopilot" style={{ display: "block", height: "44px", width: "auto", alignSelf: "flex-start", clipPath: "inset(0 0 0 20.1%)", marginLeft: "-40px" }} />
            <span style={{ fontSize: "13.5px", lineHeight: 1.6, color: "#b7b2a8" }}>
              Made in India, for Indian legal professionals. Hyderabad and Visakhapatnam.
            </span>
          </div>
          {linkColumn("Platform", PLATFORM)}
          {linkColumn("Solutions", SOLUTIONS)}
          {linkColumn(
            "Company",
            [
              { href: "/about", title: "About" },
              { href: "/security", title: "Security" },
              { href: "/contact", title: "Contact" },
              { href: "/#faq", title: "FAQ" },
            ],
            <a href={SIGN_IN_URL}>Sign In</a>
          )}
          {linkColumn("Legal", [
            { href: "/privacy-policy", title: "Privacy Policy" },
            { href: "/terms", title: "Terms of Service" },
          ])}
        </div>
        <div style={{ marginTop: "52px", padding: "22px 0 28px", borderTop: RULE, display: "flex", justifyContent: "space-between", gap: "12px 24px", flexWrap: "wrap", fontSize: "13px", color: "#b7b2a8" }}>
          <span>© {new Date().getFullYear()} {BUSINESS.legalName} · Hyderabad · Visakhapatnam</span>
          <span style={{ display: "flex", gap: "22px" }}>
            <a href={SOCIAL.linkedin} target="_blank" rel="noopener noreferrer">LinkedIn</a>
            <a href={SOCIAL.instagram} target="_blank" rel="noopener noreferrer">Instagram</a>
          </span>
        </div>
      </footer>
    </section>
  );
}

/** The closing statement most pages use. */
export const DEFAULT_CTA: ClosingCta = {
  title: (
    <>
      Bring LawCopilot onto your <CtaHighlight>next matter</CtaHighlight>
    </>
  ),
  body: "Start with one file. See what comes back.",
  primary: { label: "Book a demo", href: "/contact" },
  secondary: { label: "Get started free", href: SIGNUP_URL },
};

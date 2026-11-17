import type { Metadata } from "next";
import Link from "next/link";
import type { CSSProperties, ReactNode } from "react";
import { PaintImage, PAINT, PrimaryButton, SecondaryButton } from "@/components/site/primitives";
import { SecurityFaq } from "@/components/site/security-faq";
import { CtaHighlight, SiteFooter } from "@/components/site/site-footer";

export const metadata: Metadata = {
  title: "Security",
  description:
    "How LawCopilot stores a client’s file, who can see it, and how it is deleted: stored in India, ISO 27001, SOC 2, DPDP Act compliant, encrypted in transit and at rest, and never used for training.",
  alternates: { canonical: "/security" },
};

const icon = (children: ReactNode) => (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#0f0e0c" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    {children}
  </svg>
);

const STANDARDS = [
  {
    icon: icon(<><path d="M12 21s7-6.2 7-11.5A7 7 0 005 9.5C5 14.8 12 21 12 21z" /><circle cx="12" cy="9.5" r="2.5" /></>),
    title: "Stored in India",
    body: "Your files are stored in India, with Indian data residency.",
  },
  {
    icon: icon(<><rect x="5" y="11" width="14" height="9" rx="2" /><path d="M8 11V8a4 4 0 018 0v3" /></>),
    title: "ISO 27001",
    body: "Certified to the international standard for information security management.",
  },
  {
    icon: icon(<><path d="M12 3l7 3v5.5c0 4.3-2.9 7.7-7 9.5-4.1-1.8-7-5.2-7-9.5V6z" /><path d="M9 12l2.2 2.2L15 10.4" /></>),
    title: "SOC 2",
    body: "We meet SOC 2 requirements for secure handling of data across our systems.",
  },
  {
    icon: icon(<><path d="M7 3h7l4 4v14H7zM14 3v4h4" /><path d="M9.5 14l2 2 3.5-4" /></>),
    title: "DPDP Act, 2023",
    body: "Compliant with India’s Digital Personal Data Protection Act.",
  },
];

const LIFE_OF_A_FILE = [
  { label: "01 On the way in", title: "Encrypted in transit", body: "Every upload, question and answer travels over TLS 1.3." },
  { label: "02 While it is stored", title: "Encrypted at rest, in India", body: "Files are encrypted with AES-256 and held on servers in India." },
  { label: "03 While you work", title: "Seen only by your team", body: "Only the people you invite can open a case, and only the cases you share with them." },
  {
    label: "04 When you are done",
    marked: true,
    title: "Deleted on your word",
    body: "Delete a case, or your whole account, at any time. Data we no longer need is deleted or anonymised.",
  },
];

const PEOPLE = [
  { initials: "MP", role: "Managing partner", access: "Owner", lead: true },
  { initials: "SA", role: "Senior associate", access: "Admin" },
  { initials: "AS", role: "Associate", access: "Member" },
  { initials: "CL", role: "Client’s counsel", access: "Viewer" },
];

const YOURS = [
  { title: "Never used for training", detail: "Your documents and conversations never train AI models" },
  { title: "Never shared", detail: "Nothing is shared with other customers" },
  { title: "Kept separate", detail: "Each organisation’s data is held apart from every other" },
];

const cardHeading: CSSProperties = { margin: 0, fontSize: "clamp(30px, 3vw, 40px)", lineHeight: 1.06, letterSpacing: "-0.02em", color: "#f6f3ec" };
const cardBody: CSSProperties = { margin: 0, maxWidth: "440px", fontSize: "15.5px", lineHeight: 1.6, color: "#ebe7de" };
const cardShot: CSSProperties = {
  position: "relative",
  margin: "34px 40px 0",
  background: "#ffffff",
  borderRadius: "10px 10px 0 0",
  boxShadow: "0 24px 50px -24px rgba(15,14,12,0.45), 0 0 0 1px rgba(15,14,12,0.07)",
};
const inlineLink: CSSProperties = { borderBottom: "1px solid #0f0e0c", color: "#0f0e0c" };

export default function SecurityPage() {
  return (
    <>
      {/* Hero */}
      <header style={{ maxWidth: "1200px", margin: "0 auto", padding: "68px clamp(16px, 4vw, 32px) 52px", display: "flex", flexWrap: "wrap", alignItems: "flex-end", justifyContent: "space-between", gap: "32px 64px" }}>
        <div style={{ flex: "1 1 560px", maxWidth: "800px" }}>
          <div style={{ fontSize: "14px", color: "#66625b", marginBottom: "22px" }}>Security</div>
          <h1 className="serif" style={{ margin: 0, fontSize: "clamp(44px, 5.8vw, 82px)", lineHeight: 1.02, letterSpacing: "-0.03em", textWrap: "balance" }}>
            As confidential as your{" "}
            <span style={{ background: "#ffe680", padding: "0 0.1em", WebkitBoxDecorationBreak: "clone", boxDecorationBreak: "clone" }}>own chambers</span>
          </h1>
        </div>
        <div style={{ flex: "0 1 390px", display: "flex", flexDirection: "column", gap: "22px", paddingBottom: "10px" }}>
          <p style={{ margin: 0, fontSize: "16.5px", lineHeight: 1.6, color: "#3f3c37", textWrap: "pretty" }}>
            A client’s file is the most sensitive thing a lawyer holds. This page sets out how LawCopilot stores it, who can see it, and how it is deleted.
          </p>
          <div style={{ display: "flex", gap: "12px", flexWrap: "wrap" }}>
            <PrimaryButton href="/contact">Talk to us about security</PrimaryButton>
            <SecondaryButton href="/privacy-policy">Privacy Policy</SecondaryButton>
          </div>
        </div>
      </header>

      {/* Standards on a painted ground */}
      <div style={{ maxWidth: "1264px", margin: "0 auto", padding: "0 clamp(12px, 2vw, 32px)" }}>
        <div style={{ position: "relative", borderRadius: "6px", overflow: "hidden", background: PAINT.charcoal.bg, padding: "clamp(24px, 5vw, 64px) clamp(16px, 4vw, 56px)" }}>
          <PaintImage paint="charcoal" />
          <div style={{ position: "relative", display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(min(230px, 100%), 1fr))", gap: "14px" }}>
            {STANDARDS.map((s) => (
              <div
                key={s.title}
                style={{ background: "#ffffff", borderRadius: "10px", padding: "26px 24px 28px", boxShadow: "0 22px 40px -26px rgba(15,14,12,0.45), 0 0 0 1px rgba(15,14,12,0.06)", display: "flex", flexDirection: "column", gap: "10px" }}
              >
                {s.icon}
                <div className="serif" style={{ marginTop: "14px", fontSize: "26px", lineHeight: 1.1 }}>{s.title}</div>
                <p style={{ margin: 0, fontSize: "14.5px", lineHeight: 1.55, color: "#66625b" }}>{s.body}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Life of a file */}
      <section style={{ maxWidth: "1200px", margin: "0 auto", padding: "84px clamp(16px, 4vw, 32px) 80px" }}>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end", gap: "16px 48px", flexWrap: "wrap", marginBottom: "48px" }}>
          <div>
            <div style={{ fontSize: "14px", color: "#66625b", marginBottom: "14px" }}>The life of a file</div>
            <h2 className="serif" style={{ margin: 0, maxWidth: "720px", fontSize: "clamp(34px, 4.2vw, 60px)", lineHeight: 1.04, letterSpacing: "-0.025em" }}>
              Protected from upload to deletion
            </h2>
          </div>
          <p style={{ margin: 0, maxWidth: "330px", fontSize: "14.5px", lineHeight: 1.6, color: "#66625b" }}>
            Follow one document through LawCopilot, from the moment it leaves your computer to the day you remove it.
          </p>
        </div>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(min(230px, 100%), 1fr))", gap: "32px 40px" }}>
          {LIFE_OF_A_FILE.map((s) => (
            <div key={s.title} style={{ borderTop: "1px solid #0f0e0c", paddingTop: "18px" }}>
              <div style={{ fontSize: "13.5px", color: "#66625b", marginBottom: "10px" }}>
                {s.marked ? <span style={{ background: "#ffe680", color: "#0f0e0c", padding: "1px 5px", borderRadius: "3px" }}>{s.label}</span> : s.label}
              </div>
              <div className="serif" style={{ fontSize: "24px", lineHeight: 1.15, marginBottom: "10px" }}>{s.title}</div>
              <p style={{ margin: 0, fontSize: "14.5px", lineHeight: 1.6, color: "#66625b" }}>{s.body}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Access and private chats */}
      <section style={{ maxWidth: "1200px", margin: "0 auto", padding: "0 clamp(16px, 4vw, 32px) 88px" }}>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(min(440px, 100%), 1fr))", gap: "16px" }}>
          <article style={{ position: "relative", overflow: "hidden", borderRadius: "8px", display: "flex", flexDirection: "column", background: PAINT.navy.bg }}>
            <PaintImage paint="navy" />
            <div className="card-pad" style={{ position: "relative", padding: "40px 40px 0", display: "flex", flexDirection: "column", gap: "14px" }}>
              <h3 className="serif" style={cardHeading}>You decide who sees what</h3>
              <p style={cardBody}>
                Invite colleagues into your organisation and give each one a role: owner, admin, member or viewer. Then share each case with the people working on it.
              </p>
            </div>
            <div
              className="card-shot"
              role="img"
              aria-label="An example list of people on a case, each with a role: owner, admin, member and viewer"
              style={{ ...cardShot, padding: "8px 0 14px" }}
            >
              <div style={{ padding: "12px 20px", fontSize: "12.5px", color: "#66625b", borderBottom: "1px solid rgba(15,14,12,0.1)" }}>People on this case</div>
              {PEOPLE.map((p, i) => (
                <div
                  key={p.initials}
                  style={{ display: "flex", alignItems: "center", gap: "12px", padding: "12px 20px", borderBottom: i < PEOPLE.length - 1 ? "1px solid rgba(15,14,12,0.07)" : undefined }}
                >
                  <span
                    style={{ width: "28px", height: "28px", borderRadius: "50%", background: p.lead ? "#0f0e0c" : "#e9e5db", color: p.lead ? "#fdfcf8" : undefined, fontSize: "11px", fontWeight: 600, display: "flex", alignItems: "center", justifyContent: "center", flex: "none" }}
                  >
                    {p.initials}
                  </span>
                  <span style={{ flex: 1, minWidth: 0, fontSize: "14px" }}>{p.role}</span>
                  <span style={{ padding: "3px 9px", borderRadius: "4px", background: p.lead ? "#ffe680" : "#f3f1ec", fontSize: "12px", fontWeight: 500 }}>{p.access}</span>
                </div>
              ))}
            </div>
          </article>
          <article style={{ position: "relative", overflow: "hidden", borderRadius: "8px", display: "flex", flexDirection: "column", background: PAINT.plum.bg }}>
            <PaintImage paint="plum" />
            <div className="card-pad" style={{ position: "relative", padding: "40px 40px 0", display: "flex", flexDirection: "column", gap: "14px" }}>
              <h3 className="serif" style={cardHeading}>Off the record when you need it</h3>
              <p style={cardBody}>Need a conversation kept off the record? Private chats are deleted automatically after 7 days without activity.</p>
            </div>
            <div
              className="card-shot"
              role="img"
              aria-label="An example private chat, marked to be deleted after 7 days without activity"
              style={{ ...cardShot, flex: 1, padding: "8px 0 22px" }}
            >
              <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", gap: "12px", flexWrap: "wrap", padding: "12px 20px", borderBottom: "1px solid rgba(15,14,12,0.1)" }}>
                <span style={{ display: "inline-flex", alignItems: "center", gap: "8px", fontSize: "13.5px", fontWeight: 500 }}>
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#0f0e0c" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                    <rect x="5" y="11" width="14" height="9" rx="2" />
                    <path d="M8 11V8a4 4 0 018 0v3" />
                  </svg>
                  Private chat
                </span>
                <span style={{ padding: "3px 9px", borderRadius: "4px", background: "#f3f1ec", fontSize: "12px", color: "#3f3c37" }}>Deletes after 7 days without activity</span>
              </div>
              <div style={{ padding: "20px 20px 0", display: "flex", flexDirection: "column", gap: "12px" }}>
                <div style={{ alignSelf: "flex-end", maxWidth: "78%", background: "#f3f1ec", borderRadius: "12px", padding: "10px 14px", fontSize: "14px", lineHeight: 1.5 }}>
                  A quick question before I open a matter for this client.
                </div>
                <div style={{ maxWidth: "84%", fontSize: "14px", lineHeight: 1.55, color: "#3f3c37" }}>Go ahead. This chat is private and is not saved to any case.</div>
                <div style={{ marginTop: "6px", display: "flex", alignItems: "center", gap: "10px", padding: "11px 14px", border: "1px solid rgba(15,14,12,0.14)", borderRadius: "10px", fontSize: "13.5px", color: "#66625b" }}>
                  Ask anything…
                </div>
              </div>
            </div>
          </article>
        </div>
      </section>

      {/* Yours alone */}
      <section style={{ background: "#f0eadb", padding: "84px 0" }}>
        <div style={{ maxWidth: "1200px", margin: "0 auto", padding: "0 clamp(16px, 4vw, 32px)" }}>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(min(380px, 100%), 1fr))", gap: "36px 72px", alignItems: "start" }}>
            <div>
              <div style={{ fontSize: "14px", color: "#66625b", marginBottom: "14px" }}>Your data</div>
              <h2 className="serif" style={{ margin: "0 0 18px", fontSize: "clamp(32px, 3.8vw, 52px)", lineHeight: 1.06, letterSpacing: "-0.022em" }}>Your work stays yours</h2>
              <p style={{ margin: 0, maxWidth: "420px", fontSize: "15.5px", lineHeight: 1.65, color: "#3f3c37" }}>What you upload is used to do your work, and for nothing else.</p>
            </div>
            <div>
              {YOURS.map((y, i) => (
                <div
                  key={y.title}
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "baseline",
                    gap: "10px 32px",
                    flexWrap: "wrap",
                    padding: "20px 0",
                    borderTop: i === 0 ? "1px solid #0f0e0c" : "1px solid rgba(15,14,12,0.18)",
                    borderBottom: i === YOURS.length - 1 ? "1px solid rgba(15,14,12,0.18)" : undefined,
                  }}
                >
                  <span className="serif" style={{ fontSize: "25px" }}>{y.title}</span>
                  <span style={{ fontSize: "14px", color: "#3f3c37" }}>{y.detail}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section style={{ maxWidth: "1200px", margin: "0 auto", padding: "80px clamp(16px, 4vw, 32px)" }}>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(min(380px, 100%), 1fr))", gap: "36px 72px", alignItems: "start" }}>
          <div>
            <div style={{ fontSize: "14px", color: "#66625b", marginBottom: "14px" }}>Questions</div>
            <h2 className="serif" style={{ margin: "0 0 18px", fontSize: "clamp(30px, 3.4vw, 48px)", lineHeight: 1.06, letterSpacing: "-0.022em" }}>What security reviewers ask us</h2>
            <p style={{ margin: 0, maxWidth: "380px", fontSize: "15px", lineHeight: 1.6, color: "#66625b" }}>
              The full detail is in our{" "}
              <Link href="/privacy-policy" style={inlineLink}>Privacy Policy</Link> and{" "}
              <Link href="/terms" style={inlineLink}>Terms of Service</Link>. For anything else,{" "}
              <Link href="/contact" style={inlineLink}>write to us</Link>.
            </p>
          </div>
          <SecurityFaq />
        </div>
      </section>

      <SiteFooter
        cta={{
          title: (
            <>
              Put your security questions to us <CtaHighlight>directly</CtaHighlight>
            </>
          ),
          body: "Running a vendor review? Tell us what your firm needs to see.",
          primary: { label: "Contact us", href: "/contact" },
          secondary: { label: "Book a demo", href: "/contact" },
        }}
      />
    </>
  );
}

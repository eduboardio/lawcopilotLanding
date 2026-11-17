import { BUSINESS } from "@/constants";
import { ContactForm } from "@/components/site/contact-form";
import { SiteFooter } from "@/components/site/site-footer";
import { SIGN_IN_URL } from "@/components/site/site-links";
import { BODY, Container, Highlight, INK, MUTED, PAINT, PaintImage } from "@/components/site/primitives";

const NEXT_STEPS = [
  { title: "Tell us about your team", detail: "Who you are and the work you’d like to hand over." },
  { title: "We reply within 1–2 business days", detail: "A person on our team reads every message." },
  { title: "See it on work like yours", detail: "If it’s a fit, we walk you through LawCopilot on a matter like yours." },
];

const WALKTHROUGH = [
  { label: "Case tracking", title: "Your case on one page", detail: "Its hearings and deadlines, the work done on it, its standing tasks and its documents, shared with your team." },
  { label: "Standing tasks", title: "A watch that runs itself", detail: "Have the cause list checked every morning and reported back. Anything it would send waits for your approval." },
  { label: "The work itself", title: "A brief, a table or a draft", detail: "Returned the way good work is: cited to the page, in your format, and waiting for your review." },
];

const factLabel = { display: "block", fontSize: "12.5px", color: MUTED, marginBottom: "4px" } as const;
const grid3 = { display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(min(260px, 100%), 1fr))", gap: "32px 40px" } as const;
const stepTitle = { fontSize: "24px", lineHeight: 1.15, marginBottom: "10px" } as const;
const stepBody = { margin: 0, fontSize: "14.5px", lineHeight: 1.6, color: MUTED } as const;

export default function ContactPage() {
  return (
    <>
      {/* Copy on the left, the form on a square painted panel on the right */}
      <section style={{ display: "flex", flexWrap: "wrap", alignItems: "stretch" }}>
        <div style={{ flex: "1 1 480px", minWidth: 0, boxSizing: "border-box", padding: "clamp(40px, 5vw, 72px) clamp(20px, 5vw, 80px) clamp(40px, 5vw, 64px) clamp(16px, 5vw, 136px)", display: "flex", flexDirection: "column", justifyContent: "center", gap: "48px" }}>
          <header>
            <div style={{ fontSize: "14px", color: MUTED, marginBottom: "22px" }}>Book a demo</div>
            <h1 className="serif" style={{ margin: 0, fontSize: "clamp(44px, 5.2vw, 76px)", lineHeight: 1.02, letterSpacing: "-0.025em", textWrap: "balance" }}>
              Tell us what you’d <Highlight>hand over</Highlight>
            </h1>
            <p style={{ margin: "26px 0 0", maxWidth: "460px", fontSize: "17px", lineHeight: 1.6, color: BODY, textWrap: "pretty" }}>
              Whether you run chambers, a firm or an in-house legal team, we’ll show you LawCopilot on work like yours.
            </p>
          </header>

          <div style={{ maxWidth: "520px" }}>
            <div style={{ borderTop: `1px solid ${INK}`, paddingTop: "20px", display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(min(200px, 100%), 1fr))", gap: "22px 32px" }}>
              <div>
                <span style={factLabel}>Email</span>
                <a href={`mailto:${BUSINESS.email}`} style={{ fontSize: "15px", textDecoration: "underline", textUnderlineOffset: "3px" }}>{BUSINESS.email}</a>
              </div>
              <div>
                <span style={factLabel}>Phone</span>
                <a href={`tel:${BUSINESS.phoneTel}`} style={{ fontSize: "15px" }}>{BUSINESS.phone}</a>
              </div>
              <div>
                <span style={factLabel}>Offices</span>
                <span style={{ display: "block", fontSize: "15px", lineHeight: 1.5 }}>
                  {BUSINESS.offices.map((o, i) => (
                    <span key={o}>{i > 0 && <br />}{o}</span>
                  ))}
                </span>
              </div>
              <div>
                <span style={factLabel}>Hours</span>
                <span style={{ display: "block", fontSize: "15px", lineHeight: 1.5 }}>{BUSINESS.hours}</span>
              </div>
            </div>
            <p style={{ margin: "24px 0 0", fontSize: "14px", color: MUTED }}>
              Already using LawCopilot?{" "}
              <a href={SIGN_IN_URL} style={{ color: INK, textDecoration: "underline", textUnderlineOffset: "3px" }}>Sign in</a>
            </p>
          </div>
        </div>

        <div style={{ position: "relative", flex: "1 1 480px", alignSelf: "flex-start", minWidth: 0, aspectRatio: "1 / 1", boxSizing: "border-box", background: PAINT.teal.bg, padding: "clamp(20px, 3vw, 48px) clamp(20px, 4vw, 64px)", display: "flex", alignItems: "center", justifyContent: "center" }}>
          <PaintImage paint="teal" />
          <ContactForm />
        </div>
      </section>

      <Container top={84} bottom={76}>
        <div style={{ fontSize: "14px", color: MUTED, marginBottom: "22px" }}>What happens next</div>
        <div style={grid3}>
          {NEXT_STEPS.map((s, i) => (
            <div key={s.title} style={{ borderTop: `1px solid ${INK}`, paddingTop: "18px" }}>
              <div style={{ fontSize: "13.5px", color: MUTED, marginBottom: "10px" }}>0{i + 1}</div>
              <div className="serif" style={stepTitle}>{s.title}</div>
              <p style={stepBody}>{s.detail}</p>
            </div>
          ))}
        </div>
      </Container>

      <Container bottom={92}>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end", gap: "16px 48px", flexWrap: "wrap", marginBottom: "44px" }}>
          <div>
            <div style={{ fontSize: "14px", color: MUTED, marginBottom: "14px" }}>The walkthrough</div>
            <h2 className="serif" style={{ margin: 0, maxWidth: "720px", fontSize: "clamp(32px, 3.8vw, 52px)", lineHeight: 1.06, letterSpacing: "-0.022em" }}>What we’ll show you</h2>
          </div>
          <p style={{ margin: 0, maxWidth: "330px", fontSize: "14.5px", lineHeight: 1.6, color: MUTED }}>
            Bring a matter like the ones on your desk. We work through it with you.
          </p>
        </div>
        <div style={grid3}>
          {WALKTHROUGH.map((s, i) => (
            <div key={s.title} style={{ borderTop: `1px solid ${INK}`, paddingTop: "18px" }}>
              <div style={{ fontSize: "13.5px", color: MUTED, marginBottom: "10px" }}>0{i + 1} {s.label}</div>
              <div className="serif" style={stepTitle}>{s.title}</div>
              <p style={stepBody}>{s.detail}</p>
            </div>
          ))}
        </div>
      </Container>

      <SiteFooter />
    </>
  );
}

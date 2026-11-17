import Link from "next/link";
import { FaqList } from "../faq-list";
import { Container, Eyebrow, Highlight, INK, MUTED, NumberedPoint, PAINT, PaintImage } from "../primitives";
import { ComingSoon } from "./home-intro";
import { FAQ_ITEMS } from "./faq-data";
import { WhatsAppLoop } from "./whatsapp-loop";

/* The lower half of the home page: WhatsApp updates and the questions. */

const WHATSAPP_GREEN = "#43d453";

export function HomeWhatsApp() {
  return (
    <Container id="whatsapp" bottom={84}>
      <div style={{ background: "#d0e4cc", borderRadius: "8px", padding: "clamp(22px, 4vw, 48px)", display: "flex", flexWrap: "wrap", gap: "36px 64px", alignItems: "center" }}>
        <div style={{ flex: "1 1 360px", minWidth: 0 }}>
          <div style={{ fontSize: "14px", color: "#5c5850", marginBottom: "16px", display: "flex", alignItems: "center", gap: "10px" }}>
            <span aria-hidden="true" style={{ width: "26px", height: "26px", borderRadius: "6px", background: "#d9eadb", color: "#2c6e49", display: "flex", alignItems: "center", justifyContent: "center" }}>
              <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.9" strokeLinecap="round" strokeLinejoin="round">
                <path d="M4 19.5l1.3-4A7.5 7.5 0 1 1 8.6 18.8z" />
              </svg>
            </span>
            <span style={{ background: WHATSAPP_GREEN, color: INK, fontWeight: 500, padding: "1px 6px", borderRadius: "3px" }}>WhatsApp</span>
            <ComingSoon />
          </div>
          <h3 className="serif" style={{ margin: "0 0 16px", fontSize: "clamp(30px, 3vw, 42px)", lineHeight: 1.08, letterSpacing: "-0.018em", textWrap: "balance" }}>
            Every date and order, on <Highlight color={WHATSAPP_GREEN}>WhatsApp</Highlight>
          </h3>
          <p style={{ margin: "0 0 26px", fontSize: "15.5px", lineHeight: 1.65, color: MUTED }}>
            Track a case in LawCopilot and its updates follow you to WhatsApp, so you hear about a listing or an order without opening the app.{" "}
            <Link href="/whatsapp" style={{ color: INK, fontWeight: 500, borderBottom: `1px solid ${INK}`, whiteSpace: "nowrap" }}>See how it works</Link>
          </p>
          <NumberedPoint n={1} title="Case updates as they happen">
            When a matter is listed, an order is uploaded or the next date changes, the update reaches you on WhatsApp.
          </NumberedPoint>
          <NumberedPoint n={2} title="Reminders before every date">
            Hearings and deadlines on the case, sent to your phone ahead of time.
          </NumberedPoint>
        </div>
        <div style={{ flex: "1.3 1 440px", minWidth: 0 }}>
          <div style={{ position: "relative", borderRadius: "8px", overflow: "hidden", background: PAINT.slate.bg, boxSizing: "border-box", padding: "clamp(28px, 5vw, 48px) clamp(16px, 4vw, 40px) 0", display: "flex", alignItems: "flex-end", justifyContent: "center" }}>
            <PaintImage paint="slate" />
            <WhatsAppLoop />
          </div>
        </div>
      </div>
    </Container>
  );
}

export function HomeFaq() {
  return (
    <Container id="faq" bottom={80}>
      <div style={{ borderTop: "1px solid rgba(15,14,12,0.14)", paddingTop: "36px", display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(min(380px, 100%), 1fr))", gap: "36px 72px", alignItems: "start" }}>
        <div>
          <Eyebrow>Questions</Eyebrow>
          <h2 className="serif" style={{ margin: "0 0 18px", fontSize: "clamp(30px, 3.4vw, 48px)", lineHeight: 1.06, letterSpacing: "-0.02em", textWrap: "balance" }}>
            What legal teams ask first
          </h2>
          <p style={{ margin: 0, maxWidth: "380px", fontSize: "15px", lineHeight: 1.6, color: MUTED }}>
            The full detail is in our{" "}
            <Link href="/privacy-policy" style={{ borderBottom: `1px solid ${INK}`, color: INK }}>Privacy Policy</Link> and{" "}
            <Link href="/terms" style={{ borderBottom: `1px solid ${INK}`, color: INK }}>Terms of Service</Link>.
          </p>
        </div>
        <FaqList items={FAQ_ITEMS} />
      </div>
    </Container>
  );
}

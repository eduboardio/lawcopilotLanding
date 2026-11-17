import type { Metadata } from "next";
import Link from "next/link";
import type { CSSProperties } from "react";
import { PaintImage, PAINT, PrimaryButton, SecondaryButton } from "@/components/site/primitives";
import { Showcase, type ShowcaseStep } from "@/components/site/showcase";
import { CtaHighlight, SiteFooter } from "@/components/site/site-footer";
import { SIGNUP_URL } from "@/components/site/site-links";

export const metadata: Metadata = {
  title: "WhatsApp case updates",
  description:
    "LawCopilot sends case updates and reminders to WhatsApp: listings, orders, next dates and deadlines, for every case you track. Coming soon.",
  alternates: { canonical: "/whatsapp" },
};

type Tone = { bg: string; fg: string };
const GREEN: Tone = { bg: "#e3f3ea", fg: "#1c6b45" };
const AMBER: Tone = { bg: "#fdf1cf", fg: "#7a5200" };
const NEUTRAL: Tone = { bg: "#efeeeb", fg: "#3f3c37" };
const RED: Tone = { bg: "#fbe9e7", fg: "#a3261b" };

type Message = { day?: string; tag: string; tone: Tone; title: string; detail: string; time: string };

const MESSAGES: { title: string; detail: string; sub: string; alt: string; msgs: Message[] }[] = [
  {
    title: "When your matter is listed",
    detail: "When a case you track appears on the cause list, you get the date and the item number.",
    sub: "Case updates",
    alt: "A phone showing two messages from LawCopilot, each saying a tracked case is listed tomorrow with its item number",
    msgs: [
      { day: "13 Nov", tag: "Listed", tone: GREEN, title: "Arjun Reddy v. Kavitha Rao", detail: "O.S. No. 214 of 2024 is listed tomorrow, 14 Nov, as item 23. For arguments on the amendment petition.", time: "6:40 pm" },
      { tag: "Listed", tone: GREEN, title: "Meridian Infra v. Rao Constructions", detail: "C.S. No. 88 of 2025 is listed tomorrow, 14 Nov, as item 41. For framing of issues.", time: "6:41 pm" },
    ],
  },
  {
    title: "When an order is uploaded",
    detail: "The message tells you what happened and the next date, and the case in LawCopilot is updated to match.",
    sub: "Case updates",
    alt: "A phone showing messages from LawCopilot: an order is uploaded adjourning the matter, and the next date is now 28 November",
    msgs: [
      { day: "14 Nov", tag: "Order uploaded", tone: AMBER, title: "Arjun Reddy v. Kavitha Rao", detail: "Arguments heard in part. Adjourned to 28 Nov.", time: "4:15 pm" },
      { tag: "Next date", tone: NEUTRAL, title: "28 Nov", detail: "The next date is updated on the case.", time: "4:15 pm" },
    ],
  },
  {
    title: "Before every hearing",
    detail: "A reminder ahead of the hearing, with the case, the court’s business for the day and the item number.",
    sub: "Reminders",
    alt: "A phone showing two hearing reminders from LawCopilot, one the evening before and one on the morning of the hearing",
    msgs: [
      { day: "13 Nov", tag: "Hearing", tone: RED, title: "Hearing tomorrow, 14 Nov", detail: "Arjun Reddy v. Kavitha Rao, O.S. No. 214 of 2024. Arguments on the amendment petition.", time: "5:00 pm" },
      { day: "14 Nov", tag: "Hearing", tone: RED, title: "Hearing today", detail: "O.S. No. 214 of 2024 is item 23 on today’s list.", time: "8:00 am" },
    ],
  },
  {
    title: "Before every deadline",
    detail: "Filing deadlines on the case, sent ahead of time so the rejoinder is not remembered the night before.",
    sub: "Reminders",
    alt: "A phone showing two deadline reminders from LawCopilot: the rejoinder is due in two days, then due tomorrow",
    msgs: [
      { day: "16 Nov", tag: "Deadline", tone: RED, title: "Rejoinder due in 2 days", detail: "File the rejoinder in O.S. No. 214 of 2024 by 18 Nov.", time: "9:00 am" },
      { day: "17 Nov", tag: "Deadline", tone: RED, title: "Rejoinder due tomorrow", detail: "The last day to file is 18 Nov.", time: "9:00 am" },
    ],
  },
];

const WHY = [
  { title: "No more checking the cause list", body: "LawCopilot watches the cases you track, so the listing comes to you." },
  { title: "It reaches you in the corridor", body: "Updates arrive in the app you already check between hearings, with no need to open LawCopilot." },
  { title: "The case stays in step", body: "Every update you receive is also on the case in LawCopilot, where your team can see it." },
];

const SETUP = [
  { title: "Track the case", body: "Add the case to LawCopilot with its CNR number." },
  { title: "Add your WhatsApp number", body: "Tell LawCopilot where the updates should go." },
  { title: "Go to court", body: "Listings, orders and reminders arrive as they happen." },
];

const MOCK_FONT = "var(--font-open-sans), var(--font-host-grotesk), sans-serif";
const heroCard: CSSProperties = {
  position: "relative",
  width: "100%",
  boxSizing: "border-box",
  padding: "18px 20px 16px",
  boxShadow: "0 30px 50px -24px rgba(15,14,12,0.65), 0 0 0 1px rgba(15,14,12,0.06)",
};
const heroTag: CSSProperties = { padding: "3px 10px", borderRadius: "999px", fontSize: "12.5px", fontWeight: 600 };

/** The phone on the "What arrives" panel, showing one step's messages. */
function Phone({ sub, alt, msgs }: { sub: string; alt: string; msgs: Message[] }) {
  return (
    <div
      role="img"
      aria-label={alt}
      style={{ position: "relative", width: "100%", maxWidth: "344px", boxSizing: "border-box", background: "#0f0e0c", borderRadius: "46px 46px 0 0", padding: "11px 11px 0", boxShadow: "0 34px 64px -20px rgba(15,14,12,0.75), 0 0 0 1px rgba(255,255,255,0.14)", fontFamily: MOCK_FONT, fontWeight: 400, color: "#0f0e0c" }}
    >
      <div style={{ borderRadius: "36px 36px 0 0", overflow: "hidden", background: "#e9e4d8", height: "500px", display: "flex", flexDirection: "column" }}>
        <div style={{ flex: "none", background: "#f6f3ec", color: "#0f0e0c", padding: "22px 14px 14px 10px", borderBottom: "1px solid rgba(15,14,12,0.1)", display: "flex", alignItems: "center", gap: "9px" }}>
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" style={{ flex: "none" }}>
            <path d="M15 5l-7 7 7 7" />
          </svg>
          <span style={{ flex: "none", position: "relative", width: "42px", height: "42px", borderRadius: "50%", background: "#ffffff", boxShadow: "0 0 0 1px rgba(15,14,12,0.08)", overflow: "hidden" }}>
            <img src="/images/site/logo-dark.svg" alt="" style={{ position: "absolute", left: "8.5px", top: "3px", height: "36px", width: "auto", clipPath: "inset(0 82% 0 0)" }} />
          </span>
          <div style={{ flex: 1, minWidth: 0, marginLeft: "3px" }}>
            <div style={{ fontSize: "17px", fontWeight: 600, lineHeight: 1.2, letterSpacing: "-0.01em" }}>LawCopilot</div>
            <div style={{ marginTop: "2px", fontSize: "12px", color: "#66625b" }}>{sub}</div>
          </div>
          <svg width="21" height="21" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" style={{ flex: "none", marginRight: "3px" }}>
            <path d="M6.5 3.5h3l1.5 4-2 1.5a11 11 0 0 0 6 6l1.5-2 4 1.5v3a2 2 0 0 1-2.2 2A17 17 0 0 1 4.5 5.7A2 2 0 0 1 6.5 3.5z" />
          </svg>
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" style={{ flex: "none", marginRight: "2px" }}>
            <rect x="3" y="6.5" width="12.5" height="11" rx="2.5" />
            <path d="M15.5 10.5l5-3v9l-5-3" />
          </svg>
        </div>
        <div style={{ flex: 1, minHeight: 0, overflow: "hidden", padding: "14px 12px 0 16px", display: "flex", flexDirection: "column", gap: "9px" }}>
          {msgs.map((m) => (
            <div key={m.title + m.time} style={{ flex: "none", display: "flex", flexDirection: "column", alignItems: "flex-start", gap: "9px" }}>
              {m.day && (
                <span style={{ alignSelf: "center", padding: "3px 11px", borderRadius: "8px", background: "#fdfcf8", boxShadow: "0 1px 0 rgba(15,14,12,0.1)", fontSize: "11.5px", color: "#3f3c37" }}>{m.day}</span>
              )}
              <div style={{ position: "relative", maxWidth: "92%", boxSizing: "border-box", background: "#ffffff", borderRadius: "0 12px 12px 12px", padding: "10px 12px 7px", boxShadow: "0 1px 1px rgba(15,14,12,0.12)" }}>
                <span aria-hidden="true" style={{ position: "absolute", left: "-7px", top: 0, width: 0, height: 0, borderTop: "9px solid #ffffff", borderLeft: "7px solid transparent" }} />
                <span style={{ display: "inline-block", padding: "2px 8px", borderRadius: "999px", background: m.tone.bg, color: m.tone.fg, fontSize: "11.5px", fontWeight: 600 }}>{m.tag}</span>
                <div style={{ marginTop: "7px", fontSize: "14px", fontWeight: 600, lineHeight: 1.35 }}>{m.title}</div>
                <div style={{ marginTop: "3px", fontSize: "13.5px", lineHeight: 1.5, color: "#3f3c37" }}>{m.detail}</div>
                <div style={{ marginTop: "3px", textAlign: "right", fontSize: "11px", color: "#66625b" }}>{m.time}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

const STEPS: ShowcaseStep[] = MESSAGES.map((s) => ({
  title: s.title,
  detail: s.detail,
  visual: <Phone sub={s.sub} alt={s.alt} msgs={s.msgs} />,
}));

export default function WhatsAppPage() {
  return (
    <>
      {/* Hero: copy on the left, two messages on a painted ground on the right */}
      <header style={{ maxWidth: "1264px", margin: "0 auto", padding: "44px clamp(16px, 4vw, 32px) 0", display: "flex", flexWrap: "wrap", alignItems: "stretch", gap: "40px 56px" }}>
        <div style={{ flex: "1 1 400px", minWidth: 0, display: "flex", flexDirection: "column", justifyContent: "center", padding: "24px 0" }}>
          <div style={{ display: "flex", alignItems: "center", gap: "10px", flexWrap: "wrap", fontSize: "13.5px", color: "#66625b", marginBottom: "26px" }}>
            <Link href="/#platform">Platform</Link>
            <span aria-hidden="true">/</span>
            <span style={{ color: "#0f0e0c" }}>WhatsApp</span>
            <span style={{ marginLeft: "6px", padding: "2px 8px", borderRadius: "999px", border: "1px solid rgba(15,14,12,0.22)", fontSize: "11.5px", fontWeight: 500, color: "#3f3c37" }}>Coming soon</span>
          </div>
          <h1 className="serif" style={{ margin: 0, maxWidth: "620px", fontSize: "clamp(44px, 5.6vw, 80px)", lineHeight: 1.02, letterSpacing: "-0.025em", textWrap: "balance" }}>
            Your case diary,{" "}
            <span style={{ background: "#43d453", padding: "0 0.1em", WebkitBoxDecorationBreak: "clone", boxDecorationBreak: "clone" }}>on WhatsApp</span>
          </h1>
          <p style={{ margin: "24px 0 0", maxWidth: "500px", fontSize: "17px", lineHeight: 1.6, color: "#3f3c37", textWrap: "pretty" }}>
            LawCopilot sends case updates and reminders to the app you already check between hearings: listings, orders, next dates and deadlines, for every case you track.
          </p>
          <div style={{ marginTop: "32px", display: "flex", gap: "12px", flexWrap: "wrap" }}>
            <PrimaryButton href="/contact">Book a demo</PrimaryButton>
            <SecondaryButton href={SIGNUP_URL}>Get started free</SecondaryButton>
          </div>
        </div>
        <div style={{ flex: "1.15 1 460px", minWidth: 0 }}>
          <div
            role="img"
            aria-label="Two messages from LawCopilot: a notice that Arjun Reddy v. Kavitha Rao is listed tomorrow as item 23, and a reminder that the rejoinder is due in two days"
            style={{ position: "relative", height: "100%", minHeight: "500px", boxSizing: "border-box", borderRadius: "8px", overflow: "hidden", background: PAINT.slate.bg, padding: "clamp(28px, 5vw, 60px) clamp(18px, 4vw, 52px)", display: "flex", flexDirection: "column", justifyContent: "center", gap: "22px", fontFamily: MOCK_FONT, fontWeight: 400 }}
          >
            <PaintImage paint="slate" />
            <div style={{ ...heroCard, alignSelf: "flex-end", maxWidth: "380px", background: "#ffffff", borderRadius: "20px 20px 4px 20px" }}>
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", gap: "12px", marginBottom: "12px" }}>
                <span style={{ ...heroTag, background: GREEN.bg, color: GREEN.fg }}>Listed</span>
                <span style={{ fontSize: "12.5px", color: "#66625b" }}>6:40 pm</span>
              </div>
              <div style={{ fontSize: "17px", fontWeight: 600, lineHeight: 1.3 }}>Arjun Reddy v. Kavitha Rao</div>
              <div style={{ marginTop: "6px", fontSize: "15px", lineHeight: 1.55, color: "#3f3c37" }}>
                O.S. No. 214 of 2024 is listed tomorrow, 14 Nov, as item 23. For arguments on the amendment petition.
              </div>
            </div>
            <div style={{ ...heroCard, alignSelf: "flex-start", maxWidth: "340px", background: "#fdfcf8", borderRadius: "20px 20px 20px 4px" }}>
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", gap: "12px", marginBottom: "12px" }}>
                <span style={{ ...heroTag, background: RED.bg, color: RED.fg }}>Deadline</span>
                <span style={{ fontSize: "12.5px", color: "#66625b" }}>9:00 am</span>
              </div>
              <div style={{ fontSize: "17px", fontWeight: 600, lineHeight: 1.3 }}>Rejoinder due in 2 days</div>
              <div style={{ marginTop: "6px", fontSize: "15px", lineHeight: 1.55, color: "#3f3c37" }}>File the rejoinder in O.S. No. 214 of 2024 by 18 Nov.</div>
            </div>
          </div>
        </div>
      </header>

      {/* Why it matters */}
      <section style={{ maxWidth: "1200px", margin: "0 auto", padding: "88px clamp(16px, 4vw, 32px) 80px" }}>
        <h2 className="serif" style={{ margin: "0 0 44px", maxWidth: "760px", fontSize: "clamp(32px, 3.8vw, 52px)", lineHeight: 1.06, letterSpacing: "-0.022em", textWrap: "balance" }}>
          The registry moves. You hear about it.
        </h2>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(min(280px, 100%), 1fr))", gap: "32px 40px" }}>
          {WHY.map((w, i) => (
            <div key={w.title} style={{ borderTop: "1px solid #0f0e0c", paddingTop: "18px" }}>
              <div style={{ fontSize: "13.5px", color: "#66625b", marginBottom: "10px" }}>{String(i + 1).padStart(2, "0")}</div>
              <div className="serif" style={{ fontSize: "26px", lineHeight: 1.15, marginBottom: "10px" }}>{w.title}</div>
              <p style={{ margin: 0, fontSize: "15px", lineHeight: 1.6, color: "#66625b" }}>{w.body}</p>
            </div>
          ))}
        </div>
      </section>

      {/* What arrives: steps switch the phone */}
      <section style={{ maxWidth: "1200px", margin: "0 auto", padding: "0 clamp(16px, 4vw, 32px) 92px" }}>
        <div style={{ borderTop: "1px solid rgba(15,14,12,0.14)", paddingTop: "28px", marginBottom: "40px", display: "flex", justifyContent: "space-between", alignItems: "flex-end", gap: "16px 48px", flexWrap: "wrap" }}>
          <div>
            <div style={{ fontSize: "14px", color: "#66625b", marginBottom: "14px" }}>What arrives</div>
            <h2 className="serif" style={{ margin: 0, maxWidth: "720px", fontSize: "clamp(32px, 3.8vw, 52px)", lineHeight: 1.06, letterSpacing: "-0.022em", textWrap: "balance" }}>
              Four messages worth getting
            </h2>
          </div>
          <p style={{ margin: 0, maxWidth: "330px", fontSize: "14.5px", lineHeight: 1.6, color: "#66625b" }}>
            Short, specific and tied to a case. Select each one to see how it reads on your phone.
          </p>
        </div>
        <Showcase
          steps={STEPS}
          paint="teal"
          titleSize="16px"
          detailLineHeight={1.6}
          panelFlex="1.3 1 440px"
          aspectRatio="auto"
          panelStyle={{ boxSizing: "border-box", padding: "clamp(28px, 5vw, 48px) clamp(16px, 4vw, 40px) 0", display: "flex", alignItems: "flex-end", justifyContent: "center" }}
        />
      </section>

      {/* Getting started */}
      <section style={{ background: "linear-gradient(180deg, #2c2b28 0%, #171614 100%)", color: "#f6f3ec", padding: "84px 0 88px" }}>
        <div style={{ maxWidth: "1200px", margin: "0 auto", padding: "0 clamp(16px, 4vw, 32px)" }}>
          <div style={{ fontSize: "14px", color: "#b7b2a8", marginBottom: "14px" }}>Getting started</div>
          <h2 className="serif" style={{ margin: "0 0 44px", maxWidth: "760px", fontSize: "clamp(32px, 3.8vw, 52px)", lineHeight: 1.06, letterSpacing: "-0.022em", textWrap: "balance" }}>
            Set it up once. Then it runs on its own.
          </h2>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(min(260px, 100%), 1fr))", gap: "36px 48px" }}>
            {SETUP.map((s, i) => (
              <div key={s.title} style={{ borderTop: "1px solid rgba(246,243,236,0.22)", paddingTop: "18px" }}>
                <div className="serif" style={{ fontSize: "clamp(52px, 6vw, 80px)", lineHeight: 1, letterSpacing: "-0.03em" }}>{i + 1}</div>
                <div style={{ marginTop: "16px", fontSize: "17px", fontWeight: 500 }}>{s.title}</div>
                <div style={{ marginTop: "6px", maxWidth: "320px", fontSize: "15px", lineHeight: 1.6, color: "#b7b2a8" }}>{s.body}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <SiteFooter
        cta={{
          title: (
            <>
              Never hear about a listing <CtaHighlight>second-hand</CtaHighlight>
            </>
          ),
          body: "Start with one case. See what reaches your phone.",
          primary: { label: "Book a demo", href: "/contact" },
          secondary: { label: "Get started free", href: SIGNUP_URL },
          letterSpacing: "-0.025em",
        }}
      />
    </>
  );
}

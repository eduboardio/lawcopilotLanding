import type { Metadata } from "next";
import type { CSSProperties, ReactNode } from "react";
import { BUSINESS } from "@/constants";
import { PaintImage, PAINT, PrimaryButton, SecondaryButton, SmartLink } from "@/components/site/primitives";
import { DEFAULT_CTA, SiteFooter } from "@/components/site/site-footer";
import { SIGNUP_URL } from "@/components/site/site-links";

export const metadata: Metadata = {
  title: "About",
  description:
    "LawCopilot is legal AI for law firms and in-house legal teams in India, built by Lawinit Private Limited, with offices in Hyderabad and Visakhapatnam. What we hold to, and the team building it.",
  alternates: { canonical: "/about" },
};

/** "Hyderabad, Telangana" + "Visakhapatnam, Andhra Pradesh" → "Hyderabad and Visakhapatnam, India". */
const OFFICES = `${BUSINESS.offices.map((o) => o.split(",")[0]).join(" and ")}, India`;

const underlined: CSSProperties = { borderBottom: "1px solid #0f0e0c" };

const FACTS: { term: string; detail: ReactNode }[] = [
  { term: "Company", detail: BUSINESS.legalName },
  { term: "Offices", detail: OFFICES },
  { term: "Built for", detail: "Law firms and in-house legal teams" },
  { term: "Reach us", detail: <a href={`mailto:${BUSINESS.email}`} style={underlined}>{BUSINESS.email}</a> },
];

const VALUES: { title: string; body: string; link?: { label: string; href: string } }[] = [
  {
    title: "Made for Indian legal work",
    body: "Designed around Indian courts, procedure and documents: plaints, orders, paper books and cause lists. It works in English and major Indian languages.",
  },
  {
    title: "You make the calls",
    body: "It asks when something is unclear and cites every statement to its source. Nothing leaves without your sign-off.",
  },
  {
    title: "Your files stay yours",
    body: "Stored in India and never used to train AI models. Only the people you share them with can see them.",
    link: { label: "Read about security", href: "/security" },
  },
];

const TEAM = [
  { name: "Manikanta Nath G P", initials: "MN", image: "/images/site/team-1.webp", bg: "#e2e8ed", linkedin: "https://www.linkedin.com/in/manikantanath/" },
  { name: "Chaitra Ravada", initials: "CR", image: "/images/site/team-2.webp", bg: "#efe7d6", linkedin: "https://www.linkedin.com/in/chaitra-ravada-51733997/" },
  { name: "Kapil Trilok Chand", initials: "KT", image: "/images/site/team-3.webp", bg: "#dfe6de", linkedin: "https://www.linkedin.com/in/kapil-trilok-chand-586872165/" },
  { name: "Bharath Budda", initials: "BB", image: "/images/site/team-4.webp", bg: "#efe3dc", linkedin: "https://www.linkedin.com/in/bharath-budda-b02283137/" },
  { name: "Karthikeyan Polavarapu", initials: "KP", image: "/images/site/team-5.webp", bg: "#dde4ea", linkedin: "https://www.linkedin.com/in/karthikeyan-polavarapu-75bb34337/" },
];

const pill: CSSProperties = { padding: "2px 8px", borderRadius: "999px", fontSize: "11.5px", fontWeight: 500 };
const avatar: CSSProperties = { width: "30px", height: "30px", borderRadius: "50%", boxShadow: "0 0 0 2px #ffffff", fontSize: "10px", display: "flex", alignItems: "center", justifyContent: "center" };
const panel: CSSProperties = { background: "#ffffff", border: "1px solid rgba(15,14,12,0.1)", borderRadius: "10px", padding: "16px", display: "flex", flexDirection: "column", fontSize: "13.5px" };
const row: CSSProperties = { display: "flex", justifyContent: "space-between", alignItems: "center", gap: "8px" };
const count: CSSProperties = { color: "#66625b", fontWeight: 400 };

/** The case page mock-up shown on the painted ground under the hero. */
function SharedCase() {
  return (
    <div
      role="img"
      aria-label="A case page for Arjun Reddy v. Kavitha Rao, shared with the team, showing the upcoming hearing and deadline, three pieces of work, one standing task and twelve documents"
      style={{ position: "relative", background: "#ffffff", borderRadius: "12px", overflow: "hidden", boxShadow: "0 30px 56px -28px rgba(15,14,12,0.5), 0 0 0 1px rgba(15,14,12,0.07)" }}
    >
      <div style={{ display: "flex", flexWrap: "wrap", alignItems: "center", justifyContent: "space-between", gap: "14px 24px", padding: "22px 26px", borderBottom: "1px solid rgba(15,14,12,0.1)" }}>
        <div>
          <div style={{ fontSize: "11.5px", letterSpacing: "0.08em", color: "#66625b", marginBottom: "6px" }}>CASE</div>
          <div className="serif" style={{ fontSize: "24px", lineHeight: 1.15 }}>Arjun Reddy v. Kavitha Rao</div>
          <div style={{ fontSize: "13.5px", color: "#66625b", marginTop: "4px" }}>O.S. No. 214 of 2024 · III Additional Senior Civil Judge</div>
        </div>
        <div style={{ display: "flex", alignItems: "center", gap: "12px", flexWrap: "wrap" }}>
          <span style={{ display: "flex" }}>
            <span style={{ ...avatar, background: "#f3f1ec" }}>You</span>
            <span style={{ ...avatar, marginLeft: "-6px", background: "#dcd7cc", fontWeight: 600 }}>SA</span>
            <span style={{ ...avatar, marginLeft: "-6px", background: "#f3f1ec", fontWeight: 600 }}>JR</span>
          </span>
          <span style={{ fontSize: "13.5px", color: "#3f3c37" }}>Shared with your team</span>
          <span style={{ background: "#0f0e0c", color: "#fdfcf8", padding: "9px 15px", borderRadius: "8px", fontSize: "13.5px", fontWeight: 500 }}>Start work</span>
        </div>
      </div>
      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(min(210px, 100%), 1fr))", gap: "12px", padding: "20px", background: "#fbfaf7" }}>
        <div style={{ ...panel, gap: "10px" }}>
          <div style={{ fontWeight: 500 }}>Upcoming</div>
          <div>
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "5px" }}>
              <span style={{ ...pill, background: "#fbe9e7", color: "#a3261b" }}>Hearing</span>
              <span style={{ fontSize: "12px", fontWeight: 600, color: "#a3261b" }}>14 Nov</span>
            </div>
            <div style={{ lineHeight: 1.4 }}>Arguments on the amendment petition</div>
          </div>
          <div>
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "5px" }}>
              <span style={{ ...pill, background: "#fbe9e7", color: "#a3261b" }}>Deadline</span>
              <span style={{ fontSize: "12px", color: "#66625b" }}>18 Nov</span>
            </div>
            <div style={{ lineHeight: 1.4 }}>File the rejoinder</div>
          </div>
        </div>
        <div style={{ ...panel, gap: "11px" }}>
          <div style={{ fontWeight: 500 }}>
            Work <span style={count}>· 3</span>
          </div>
          <div style={row}>
            <span>Document brief</span>
            <span style={{ ...pill, background: "#e3f3ea", color: "#1c6b45", whiteSpace: "nowrap" }}>Full brief</span>
          </div>
          <div style={row}>
            <span>Tabular review · exhibits</span>
            <span style={{ ...pill, border: "1px solid rgba(15,14,12,0.18)", whiteSpace: "nowrap" }}>Running</span>
          </div>
          <div style={row}>
            <span>Amendment petition</span>
            <span style={{ ...pill, background: "#fdf1cf", color: "#7a5200", whiteSpace: "nowrap" }}>To review</span>
          </div>
        </div>
        <div style={{ ...panel, gap: "8px" }}>
          <div style={{ fontWeight: 500 }}>
            Tasks <span style={count}>· 1</span>
          </div>
          <div style={row}>
            <span>Check the cause list</span>
            <span style={{ ...pill, background: "#e3f3ea", color: "#1c6b45" }}>Active</span>
          </div>
          <div style={{ fontSize: "12px", color: "#66625b" }}>Daily, 8:00 · reports to this case</div>
        </div>
        <div style={{ ...panel, gap: "8px" }}>
          <div style={{ fontWeight: 500 }}>
            Documents <span style={count}>· 12</span>
          </div>
          <div>Plaint.pdf</div>
          <div>Written statement.pdf</div>
          <div>Deposition of DW1.pdf</div>
          <div style={{ fontSize: "12px", color: "#66625b" }}>and 9 more</div>
        </div>
      </div>
    </div>
  );
}

export default function AboutPage() {
  return (
    <>
      {/* Hero */}
      <header style={{ maxWidth: "1200px", margin: "0 auto", padding: "68px clamp(16px, 4vw, 32px) 48px", display: "flex", flexWrap: "wrap", alignItems: "flex-end", justifyContent: "space-between", gap: "32px 64px" }}>
        <div style={{ flex: "1 1 560px", maxWidth: "800px" }}>
          <div style={{ fontSize: "14px", color: "#66625b", marginBottom: "22px" }}>About</div>
          <h1 className="serif" style={{ margin: 0, fontSize: "clamp(44px, 5.8vw, 82px)", lineHeight: 1.02, letterSpacing: "-0.03em", textWrap: "balance" }}>
            Legal AI that works like{" "}
            <span style={{ background: "#ffe680", padding: "0 0.1em", WebkitBoxDecorationBreak: "clone", boxDecorationBreak: "clone" }}>part of your team</span>
          </h1>
        </div>
        <div style={{ flex: "0 1 390px", display: "flex", flexDirection: "column", gap: "22px", paddingBottom: "10px" }}>
          <p style={{ margin: 0, fontSize: "16.5px", lineHeight: 1.6, color: "#3f3c37", textWrap: "pretty" }}>
            LawCopilot reads the case record, researches and drafts, then checks with you before anything goes out. It is built for legal teams across India.
          </p>
          <div style={{ display: "flex", gap: "12px", flexWrap: "wrap" }}>
            <PrimaryButton href="/contact">Talk to us</PrimaryButton>
            <SecondaryButton href={SIGNUP_URL}>Get started free</SecondaryButton>
          </div>
        </div>
      </header>

      {/* The case, shared with the team */}
      <div style={{ maxWidth: "1264px", margin: "0 auto", padding: "0 clamp(12px, 2vw, 32px)" }}>
        <div style={{ position: "relative", borderRadius: "6px", overflow: "hidden", background: PAINT.teal.bg, padding: "clamp(20px, 5vw, 68px) clamp(14px, 6vw, 96px)" }}>
          <PaintImage paint="teal" />
          <SharedCase />
        </div>
      </div>
      <div style={{ maxWidth: "1200px", margin: "0 auto", padding: "16px clamp(16px, 4vw, 32px) 0", fontSize: "13.5px", color: "#66625b" }}>
        A case in LawCopilot: its dates, work, standing tasks and documents, shared with the team.
      </div>

      {/* Company facts */}
      <section style={{ maxWidth: "1200px", margin: "0 auto", padding: "72px clamp(16px, 4vw, 32px) 80px" }}>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(min(230px, 100%), 1fr))", gap: "28px 40px" }}>
          {FACTS.map((f) => (
            <div key={f.term} style={{ borderTop: "1px solid #0f0e0c", paddingTop: "16px" }}>
              <div style={{ fontSize: "13.5px", color: "#66625b", marginBottom: "8px" }}>{f.term}</div>
              <div className="serif" style={{ fontSize: "22px", lineHeight: 1.25 }}>{f.detail}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Values */}
      <section style={{ background: "#f0eadb", padding: "84px 0" }}>
        <div style={{ maxWidth: "1200px", margin: "0 auto", padding: "0 clamp(16px, 4vw, 32px)" }}>
          <div style={{ fontSize: "14px", color: "#66625b", marginBottom: "14px" }}>What we hold to</div>
          <h2 className="serif" style={{ margin: "0 0 44px", maxWidth: "760px", fontSize: "clamp(34px, 4.2vw, 60px)", lineHeight: 1.04, letterSpacing: "-0.025em" }}>How we build it</h2>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(min(280px, 100%), 1fr))", gap: "16px" }}>
            {VALUES.map((v, i) => (
              <div key={v.title} style={{ background: "#fdfcf8", border: "1px solid rgba(15,14,12,0.08)", borderRadius: "8px", padding: "30px", display: "flex", flexDirection: "column", gap: "14px" }}>
                <div style={{ fontSize: "13.5px", color: "#66625b" }}>{String(i + 1).padStart(2, "0")}</div>
                <div className="serif" style={{ fontSize: "28px", lineHeight: 1.12 }}>{v.title}</div>
                <p style={{ margin: 0, fontSize: "15px", lineHeight: 1.6, color: "#3f3c37" }}>{v.body}</p>
                {v.link && (
                  <SmartLink href={v.link.href} style={{ alignSelf: "flex-start", marginTop: "auto", padding: "6px 0 3px", fontSize: "14.5px", fontWeight: 500, ...underlined }}>
                    {v.link.label}
                  </SmartLink>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section style={{ maxWidth: "1200px", margin: "0 auto", padding: "84px clamp(16px, 4vw, 32px) 92px" }}>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end", gap: "16px 48px", flexWrap: "wrap", marginBottom: "40px" }}>
          <div>
            <div style={{ fontSize: "14px", color: "#66625b", marginBottom: "14px" }}>Team</div>
            <h2 className="serif" style={{ margin: 0, maxWidth: "720px", fontSize: "clamp(34px, 4.2vw, 60px)", lineHeight: 1.04, letterSpacing: "-0.025em" }}>The people building it</h2>
          </div>
          <p style={{ margin: 0, maxWidth: "330px", fontSize: "14.5px", lineHeight: 1.6, color: "#66625b" }}>
            A team with legal and engineering experience, working across Hyderabad and Visakhapatnam.
          </p>
        </div>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(min(150px, 100%), 1fr))", gap: "32px 16px" }}>
          {TEAM.map((m) => (
            <div key={m.name} style={{ display: "flex", flexDirection: "column", gap: "16px", minWidth: 0 }}>
              <div aria-hidden="true" style={{ position: "relative", aspectRatio: "4 / 5", borderRadius: "8px", overflow: "hidden", background: m.bg, display: "flex", alignItems: "flex-end", padding: "20px 22px" }}>
                <img src={m.image} alt="" style={{ position: "absolute", inset: 0, width: "100%", height: "100%", objectFit: "cover", objectPosition: "right bottom" }} />
                <span className="serif" style={{ position: "relative", fontSize: "clamp(60px, 6.2vw, 88px)", lineHeight: 0.82, letterSpacing: "-0.04em", color: "#0f0e0c" }}>
                  {m.initials}
                </span>
              </div>
              <div>
                <div className="serif" style={{ fontSize: "23px", lineHeight: 1.2 }}>{m.name}</div>
                <a
                  href={m.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`${m.name} on LinkedIn`}
                  style={{ display: "inline-block", marginTop: "8px", padding: "6px 0 3px", fontSize: "14px", fontWeight: 500, ...underlined }}
                >
                  LinkedIn
                </a>
              </div>
            </div>
          ))}
        </div>
      </section>

      <SiteFooter
        cta={{
          ...DEFAULT_CTA,
          primary: { label: "Assign your first matter", href: SIGNUP_URL },
          secondary: { label: "Talk to us", href: "/contact" },
        }}
      />
    </>
  );
}

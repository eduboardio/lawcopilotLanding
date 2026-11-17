import Link from "next/link";
import type { CSSProperties } from "react";
import { SIGNUP_URL } from "../site-links";
import { BODY, Container, MUTED, PAD_X, PAINT, PaintImage, PrimaryButton, SecondaryButton, SectionHead, Highlight, type PaintName } from "../primitives";

/* The top of the home page: hero, solutions, numbers, integrations. */

const footnote: CSSProperties = { display: "inline-flex", alignItems: "center", justifyContent: "center", minWidth: "22px", height: "22px", padding: "0 5px", boxSizing: "border-box", borderRadius: "6px", background: "#efeeeb", color: "#5f5e5a", fontSize: "12.5px", fontWeight: 500, verticalAlign: "1px" };

export function HomeHero() {
  return (
    <>
      <header id="top" style={{ maxWidth: "1200px", margin: "0 auto", padding: `68px ${PAD_X} 48px`, display: "flex", flexWrap: "wrap", alignItems: "flex-end", justifyContent: "space-between", gap: "32px 64px" }}>
        <h1 className="serif" style={{ margin: 0, flex: "1 1 560px", maxWidth: "780px", fontSize: "clamp(46px, 6.2vw, 88px)", lineHeight: 1.02, letterSpacing: "-0.025em", textWrap: "balance" }}>
          Legal practice, reimagined with AI <Highlight>for India</Highlight>
        </h1>
        <div style={{ flex: "0 1 390px", display: "flex", flexDirection: "column", gap: "22px", paddingBottom: "10px" }}>
          <p style={{ margin: 0, fontSize: "16.5px", lineHeight: 1.6, color: BODY, textWrap: "pretty" }}>
            LawCopilot researches, briefs, reviews and drafts the way Indian practice demands. Every answer is cited{" "}
            <Link href="#research" aria-label="See research" style={footnote}>1</Link>, every figure is traced to its sentence{" "}
            <Link href="#tabular" aria-label="See tabular review" style={footnote}>2</Link>, and every change is tracked{" "}
            <Link href="#drafting" aria-label="See drafting" style={footnote}>3</Link>.
          </p>
          <div style={{ display: "flex", gap: "12px", flexWrap: "wrap" }}>
            <PrimaryButton href="/contact">Book a demo</PrimaryButton>
            <SecondaryButton href={SIGNUP_URL}>Get started free</SecondaryButton>
          </div>
        </div>
      </header>

      {/* The product on a painted ground */}
      <div style={{ maxWidth: "1264px", margin: "0 auto", padding: "0 clamp(12px, 2vw, 32px)" }}>
        <div style={{ position: "relative", aspectRatio: "1.8 / 1", borderRadius: "6px", overflow: "hidden", background: PAINT.teal.bg }}>
          <PaintImage paint="teal" />
          <img
            src="/images/site/dashboard-real-estate.webp"
            alt="The LawCopilot dashboard, set up for a real-estate practice: suggested tasks such as checking an encumbrance certificate, this week's hearings and saved work"
            style={{ position: "absolute", left: "7%", top: "8%", width: "86%", height: "auto", borderRadius: "8px", boxShadow: "0 34px 60px -26px rgba(15,14,12,0.5), 0 0 0 1px rgba(15,14,12,0.08)" }}
          />
        </div>
      </div>
      <div style={{ maxWidth: "1200px", margin: "0 auto", padding: `16px ${PAD_X} 0`, display: "flex", justifyContent: "space-between", gap: "8px 40px", flexWrap: "wrap", fontSize: "13.5px", color: MUTED }}>
        <span>The dashboard, set up for a real-estate practice.</span>
        <span>Covers the Supreme Court, all High Courts, District Courts and major tribunals.</span>
      </div>
    </>
  );
}

interface SolutionCard {
  title: string;
  body: string;
  href: string;
  cta: string;
  paint: PaintName;
  shot: { src: string; alt: string; position: string };
}

const SOLUTION_CARDS: SolutionCard[] = [
  {
    title: "For law firms",
    body: "Run every matter on one platform, with your associates and LawCopilot working from the same file.",
    href: "/law-firms",
    cta: "Explore LawCopilot for law firms",
    paint: "plum",
    shot: { src: "/images/site/case-management.webp", alt: "Case and suit management: a searchable list of matters with status, priority, next date and counts of chats, documents and artifacts", position: "left top" },
  },
  {
    title: "For in-house teams",
    body: "Review contracts in batches, draft from approved templates, and keep track of every dispute outside counsel runs.",
    href: "/in-house-teams",
    cta: "Explore LawCopilot for in-house teams",
    paint: "navy",
    shot: { src: "/images/site/editor-tracked-changes.png", alt: "A draft open in the LawCopilot editor with tracked changes to review and the Changes panel beside it", position: "left bottom" },
  },
  {
    title: "For litigation",
    body: "From the paper book to the next date: briefs to the page, research with the judgment open, and the case record in step with the registry.",
    href: "/litigation",
    cta: "Explore LawCopilot for litigation",
    paint: "charcoal",
    shot: { src: "/images/site/brief-short-index.webp", alt: "A document brief of a civil SLP paper book: the short index beside a page of the judgment with a note in the margin", position: "left top" },
  },
];

const cardTitle: CSSProperties = { margin: 0, fontSize: "clamp(32px, 3.2vw, 44px)", lineHeight: 1.04, letterSpacing: "-0.018em", color: "#f6f3ec" };
const cardButton: CSSProperties = { marginTop: "6px", border: "1px solid #f6f3ec", background: "#f6f3ec", color: "#0f0e0c", padding: "10px 16px", borderRadius: "4px", fontSize: "14px", fontWeight: 500 };
const cardShot: CSSProperties = { position: "relative", overflow: "hidden", borderRadius: "8px 8px 0 0", boxShadow: "0 24px 50px -24px rgba(15,14,12,0.45), 0 0 0 1px rgba(15,14,12,0.07)" };

function CardCopy({ card, maxWidth }: { card: SolutionCard; maxWidth: string }) {
  return (
    <>
      <h3 className="serif" style={cardTitle}>{card.title}</h3>
      <p style={{ margin: 0, maxWidth, fontSize: "15.5px", lineHeight: 1.6, color: "#ebe7de" }}>{card.body}</p>
      <Link href={card.href} style={cardButton}>{card.cta}</Link>
    </>
  );
}

function CardShot({ shot }: { shot: SolutionCard["shot"] }) {
  return (
    <img src={shot.src} alt={shot.alt} style={{ position: "absolute", inset: 0, display: "block", width: "100%", height: "100%", objectFit: "cover", objectPosition: shot.position }} />
  );
}

export function HomeSolutions() {
  const [firms, inHouse, litigation] = SOLUTION_CARDS;
  return (
    <Container id="solutions" top={84} bottom={88}>
      <SectionHead
        label="Solutions"
        title="Built for the way you practise"
        aside="One platform, set up three ways: for the firm, for the company's legal team, and for the courtroom."
      />
      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(min(440px, 100%), 1fr))", gap: "16px" }}>
        {[firms, inHouse].map((card) => (
          <article key={card.href} style={{ position: "relative", overflow: "hidden", borderRadius: "8px", display: "flex", flexDirection: "column", background: PAINT[card.paint].bg }}>
            <PaintImage paint={card.paint} />
            <div className="card-pad" style={{ position: "relative", padding: "40px 40px 0", display: "flex", flexDirection: "column", alignItems: "flex-start", gap: "14px" }}>
              <CardCopy card={card} maxWidth="430px" />
            </div>
            <div className="card-shot" style={{ ...cardShot, height: "270px", margin: "36px 40px 0" }}>
              <CardShot shot={card.shot} />
            </div>
          </article>
        ))}
      </div>
      <article style={{ position: "relative", overflow: "hidden", borderRadius: "8px", marginTop: "16px", display: "flex", flexWrap: "wrap", background: PAINT[litigation.paint].bg }}>
        <PaintImage paint={litigation.paint} />
        <div className="card-pad" style={{ position: "relative", flex: "1 1 340px", padding: "40px", display: "flex", flexDirection: "column", alignItems: "flex-start", gap: "14px" }}>
          <CardCopy card={litigation} maxWidth="400px" />
        </div>
        <div className="card-shot" style={{ ...cardShot, flex: "1.5 1 480px", minWidth: 0, height: "380px", margin: "40px 40px 0" }}>
          <CardShot shot={litigation.shot} />
        </div>
      </article>
    </Container>
  );
}

const NUMBERS = [
  // Only facts the site already states (FAQ, translation and security copy).
  { figure: "All", label: "High Courts covered", detail: "Along with the Supreme Court, District Courts and major tribunals." },
  { figure: "15+", label: "Indian languages", detail: "Translate and work with documents in Hindi, Tamil, Telugu, Bengali, Marathi and more." },
  { figure: "India", label: "Where your data is stored", detail: "Encrypted at rest (AES-256) and in transit (TLS 1.3), and never used to train AI models." },
];

export function HomeNumbers() {
  return (
    <section id="numbers" style={{ background: "#0f0e0c", color: "#f6f3ec", marginBottom: "84px" }}>
      <div style={{ maxWidth: "1200px", margin: "0 auto", padding: `72px ${PAD_X} 68px` }}>
        <p className="serif" style={{ margin: "0 0 52px", maxWidth: "860px", fontSize: "clamp(26px, 3vw, 40px)", lineHeight: 1.14, letterSpacing: "-0.018em", textWrap: "balance" }}>
          LawCopilot is built for Indian practice, <span style={{ color: "#8f8a80" }}>with the courts, formats and workflows your work already runs on.</span>
        </p>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(min(240px, 100%), 1fr))", gap: "36px 48px" }}>
          {NUMBERS.map((n) => (
            <div key={n.label} style={{ borderTop: "1px solid rgba(246,243,236,0.22)", paddingTop: "18px" }}>
              <div className="serif" style={{ fontSize: "clamp(60px, 7vw, 96px)", lineHeight: 1, letterSpacing: "-0.03em" }}>{n.figure}</div>
              <div style={{ marginTop: "16px", fontSize: "16px", fontWeight: 500 }}>{n.label}</div>
              <div style={{ marginTop: "5px", maxWidth: "300px", fontSize: "14.5px", lineHeight: 1.55, color: "#b7b2a8" }}>{n.detail}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// The tools the site already lists, in its own words, plus WhatsApp (coming soon).
const INTEGRATIONS = [
  { name: "Microsoft Word", detail: "Send a .docx, get it back with tracked changes." },
  { name: "Gmail", detail: "Point it at a thread, get a reply to approve." },
  { name: "Google Drive™", detail: "Pick files from Drive, get a brief back." },
  { name: "Desktop app", detail: "Close the window, get a ping when it’s done." },
  { name: "WhatsApp", detail: "Connect your WhatsApp messaging workflows.", soon: true },
];

/** The small outlined "Coming soon" pill. */
export function ComingSoon() {
  return (
    <span style={{ padding: "2px 8px", borderRadius: "999px", border: "1px solid rgba(15,14,12,0.22)", fontSize: "11.5px", fontWeight: 500, color: BODY }}>Coming soon</span>
  );
}

export function HomeIntegrations() {
  const rule = "1px solid rgba(15,14,12,0.14)";
  return (
    <Container id="integrations" bottom={88}>
      <SectionHead label="Integrations" title="Works where you already work" aside="Your everyday tools, connected to LawCopilot." />
      <div style={{ position: "relative", aspectRatio: "1488 / 930", borderRadius: "8px", overflow: "hidden", background: "#1b1c1b" }}>
        <img
          src="/images/site/integrations-ring.webp"
          alt="LawCopilot at the centre of a ring of the tools it connects to: Microsoft Word, Gmail, Microsoft Outlook, the desktop app, Google Drive and WhatsApp"
          style={{ position: "absolute", inset: 0, width: "100%", height: "100%", objectFit: "cover" }}
        />
        <img src="/images/site/logo-light.svg" alt="LawCopilot" style={{ position: "absolute", left: "50%", top: "50.5%", width: "40%", height: "auto", clipPath: "inset(0 0 0 20.1%)", transform: "translate(-60.05%, -50%)" }} />
      </div>
      <div style={{ marginTop: "30px", display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(min(300px, 100%), 1fr))", gap: "0 32px" }}>
        {INTEGRATIONS.map((i) => (
          <div key={i.name} style={{ borderTop: rule, padding: "16px 0 20px" }}>
            <div style={{ display: "flex", alignItems: "center", gap: "10px", flexWrap: "wrap", fontSize: "15.5px", fontWeight: 500 }}>
              {i.name}
              {i.soon && <ComingSoon />}
            </div>
            <div style={{ marginTop: "6px", fontSize: "14.5px", lineHeight: 1.55, color: MUTED }}>{i.detail}</div>
          </div>
        ))}
      </div>
      <div style={{ borderTop: rule, paddingTop: "14px", fontSize: "11px", lineHeight: 1.55, color: MUTED }}>
        <p style={{ margin: 0, maxWidth: "760px", textWrap: "pretty" }}>
          Gmail, Google Drive and their logos are trademarks of Google LLC. Microsoft, Outlook and Word are trademarks of the Microsoft group of companies. WhatsApp is a trademark of WhatsApp LLC. Other marks belong to their respective owners. Integrations indicate compatibility only; no affiliation, sponsorship or endorsement by the respective providers is implied.
        </p>
      </div>
    </Container>
  );
}

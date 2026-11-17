import type { ReactNode } from "react";
import { Showcase, type ShowcaseStep } from "../showcase";
import { Container, INK, MUTED, SectionHead, type PaintName } from "../primitives";

/* "Brief it like you'd brief a junior": the four tools, each a set of steps beside a screenshot. */

function ChapterIntro({ n, label, title, children }: { n: string; label: string; title: string; children: ReactNode }) {
  return (
    <>
      <div style={{ fontSize: "14px", color: MUTED, marginBottom: "16px" }}>
        <span style={{ color: INK, fontWeight: 500, marginRight: "10px" }}>{n}</span>
        {label}
      </div>
      <h3 className="serif" style={{ margin: "0 0 16px", fontSize: "clamp(30px, 3vw, 42px)", lineHeight: 1.08, letterSpacing: "-0.018em", textWrap: "balance" }}>{title}</h3>
      <p style={{ margin: "0 0 26px", fontSize: "15.5px", lineHeight: 1.65, color: MUTED }}>{children}</p>
    </>
  );
}

const PLAN_STEPS = [
  "Verify Supreme Court law on part-payment, security cheques and the statutory demand.",
  "Verify how resignation and insolvency affect company and signatory liability, including later Supreme Court qualifications.",
  "Apply the authorities to the stated facts and identify decisive dates and remedies.",
];

/** The research plan, ticked off, laid over the findings it produced. */
function ResearchPlan() {
  return (
    <div style={{ position: "absolute", inset: 0, boxSizing: "border-box", overflow: "hidden", padding: "clamp(16px, 3.4vw, 40px) clamp(16px, 4vw, 48px) 0" }}>
      <div
        className="serif"
        role="img"
        aria-label="The plan for a cheque dishonour question, three steps, each ticked as done: verify the Supreme Court law, verify how resignation and insolvency affect liability, and apply the authorities to the facts"
        style={{ position: "relative", zIndex: 1, width: "86%", boxSizing: "border-box", background: "#fafafa", color: INK, borderRadius: "10px", padding: "14px 16px 16px", boxShadow: "0 22px 40px -18px rgba(0,0,0,0.7)" }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: "10px", fontSize: "15.5px", lineHeight: 1.2 }}>
          <span aria-hidden="true" style={{ flex: "none", width: "20px", height: "20px", boxSizing: "border-box", border: "1.5px solid #989898", borderRadius: "50%", display: "flex", alignItems: "center", justifyContent: "center" }}>
            <span style={{ width: "8px", height: "1.5px", background: "#6b6b6b" }} />
          </span>
          <span style={{ flex: 1 }}>Planned 3 steps</span>
        </div>
        <div style={{ margin: "10px 0 0 9px", paddingLeft: "20px", borderLeft: "1.5px solid #d9d9d9", display: "flex", flexDirection: "column", gap: "8px", fontSize: "13.5px", lineHeight: 1.4, color: MUTED }}>
          {PLAN_STEPS.map((step) => (
            <div key={step} style={{ display: "flex", gap: "10px", alignItems: "flex-start" }}>
              <span aria-hidden="true" style={{ flex: "none", width: "15px", height: "15px", marginTop: "2px", boxSizing: "border-box", border: "1.5px solid #1b9f76", borderRadius: "4px", background: "#d6ebe5", display: "flex", alignItems: "center", justifyContent: "center" }}>
                <svg width="9" height="9" viewBox="0 0 12 12" fill="none" stroke="#12805d" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M2.5 6.4l2.3 2.3 4.7-5.2" />
                </svg>
              </span>
              <span style={{ textDecoration: "line-through", textDecorationColor: "rgba(15,14,12,0.45)" }}>{step}</span>
            </div>
          ))}
        </div>
      </div>
      <img
        src="/images/site/research-findings.png"
        alt="Seven findings on a Section 138 cheque dishonour question, each marked with its number of sources"
        style={{ display: "block", width: "92%", height: "auto", margin: "-22px 0 0 8%", borderRadius: "10px 10px 0 0" }}
      />
    </div>
  );
}

interface Chapter {
  id: string;
  n: string;
  label: string;
  title: string;
  intro: string;
  paint: PaintName;
  reverse?: boolean;
  steps: ShowcaseStep[];
}

const CHAPTERS: Chapter[] = [
  {
    id: "research",
    n: "01",
    label: "Research",
    title: "Answers you can check in one click",
    intro: "Put the facts and the question the way you would brief a junior. LawCopilot answers issue by issue on Indian authority, and keeps every judgment it relies on one click away.",
    paint: "olive",
    steps: [
      { title: "The plan and the findings, shown", detail: "See the steps it worked through and each finding with its number of sources.", visual: <ResearchPlan /> },
      { title: "An answer organised by issue", detail: "Each point of law is taken in turn, with the authorities that help you and the ones that do not.", image: { src: "/images/site/research-answer.webp", alt: "A research answer dealing with insolvency and director liability under Section 138, with numbered citations after each proposition" } },
      { title: "The passage it relies on, highlighted", detail: "Click a citation and the judgment opens at the page, with the paragraph relied on marked.", image: { src: "/images/site/research-judgment.webp", alt: "A Supreme Court judgment open at paragraphs 85 and 86 with the relied-on passage highlighted in yellow" } },
      { title: "Answer and authority, side by side", detail: "Read the reasoning and the source together, then ask the follow-up without losing either.", image: { src: "/images/site/research-side-by-side.webp", alt: "The research answer on the left and the cited judgment on the right in one view" } },
    ],
  },
  {
    id: "drafting",
    n: "02",
    label: "Drafting",
    title: "A drafting desk with the word processor built in",
    intro: "Pleadings, notices and agreements start from templates in the formats Indian courts and counterparties expect, then open in a full editor. LawCopilot edits the document itself, so nothing is copied out of a chat window.",
    paint: "plum",
    reverse: true,
    steps: [
      { title: "Instruct in plain words", detail: "Expand, tighten or redraft. LawCopilot reports exactly what it changed and why.", image: { src: "/images/site/drafting-instruct.webp", alt: "A chat instruction to expand an agreement, followed by a summary of what was changed", fit: "card" } },
      { title: "Tracked changes, in a full editor", detail: "Edits land in the document as tracked changes and are saved as a new numbered version.", image: { src: "/images/site/editor-tracked-changes.png", alt: "A draft open in the LawCopilot editor with eleven tracked changes to review: struck-out and inserted figures in the clause, and the Changes panel with Accept and Reject for each", fit: "card" } },
      { title: "Point at a clause", detail: "Select a passage and send it with your message. The instruction applies exactly there.", image: { src: "/images/site/drafting-clause.webp", alt: "A selected termination clause attached to the next message with its location in the draft", fit: "card" } },
    ],
  },
  {
    id: "tabular",
    n: "03",
    label: "Tabular Review",
    title: "Read a whole bundle as one table",
    intro: "Choose what you need to know: parties, dates, amounts, deadlines, governing law. Each document is read against it. Add columns and documents as the matter grows, and export the table when you are done.",
    paint: "navy",
    steps: [
      { title: "One row per document, one column per question", detail: "Seven applications read into a single grid, so differences between them show at a glance.", image: { src: "/images/site/tabular-grid.webp", alt: "A tabular review of seven documents with columns for parties, date and subject", fit: "card" } },
      { title: "Every cell cited, every gap admitted", detail: "Open a cell to see its sources. Where a figure is blank or unconfirmed, the cell says so and is flagged.", image: { src: "/images/site/tabular-cell.webp", alt: "An amounts cell with numbered sources and a note that one amount is a placeholder requiring confirmation", fit: "card" } },
      { title: "The sentence behind the cell", detail: "The document opens beside the table with the exact sentence highlighted.", image: { src: "/images/site/tabular-source.webp", alt: "The source document's list of dates with the sentence about the equitable mortgage highlighted", fit: "card" } },
    ],
  },
  {
    id: "briefs",
    n: "04",
    label: "Document Briefs",
    title: "Hand over the paper book. Get back the brief.",
    intro: "Document Briefs reads the whole record and returns it in the form a senior expects, with notes in the margin, regional-language pages translated, and an annotated PDF to carry into court.",
    paint: "teal",
    reverse: true,
    steps: [
      { title: "A short index of every document", detail: "Pleadings, orders and exhibits listed with their page ranges, beside the page itself with notes in the margin.", image: { src: "/images/site/brief-short-index.webp", alt: "The short index of a civil SLP paper book beside a page of the High Court judgment with a margin note" } },
      { title: "An overview written from the record", detail: "How the matter travelled through the courts and what is now in issue. This paper book ran to 96 documents and 484 pages.", image: { src: "/images/site/brief-overview.webp", alt: "The brief overview paragraph, with chips reading 96 documents, 484 pages and 5 pages translated from Kannada and Telugu" } },
      { title: "A list of dates, with conflicts called out", detail: "Every date tied to its page. Where the synopsis and an exhibit disagree, the brief says so.", image: { src: "/images/site/brief-dates.webp", alt: "A list of dates entry with a page reference and a warning that the synopsis gives a different date" } },
    ],
  },
];

export function HomePlatform() {
  return (
    <>
      <Container id="platform" bottom={52}>
        <SectionHead
          label="The platform"
          title="Brief it like you’d brief a junior"
          aside="It comes back the way good work does: cited to the page, in your format, and waiting for your review. Select a step to see each tool."
          marginBottom={0}
        />
      </Container>
      {CHAPTERS.map((c) => (
        <Container key={c.id} id={c.id} bottom={68}>
          <Showcase
            paint={c.paint}
            reverse={c.reverse}
            steps={c.steps}
            intro={<ChapterIntro n={c.n} label={c.label} title={c.title}>{c.intro}</ChapterIntro>}
          />
        </Container>
      ))}
    </>
  );
}

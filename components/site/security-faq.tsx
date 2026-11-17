"use client";

import { useId, useState } from "react";

const FAQS: ReadonlyArray<{ q: string; a: string }> = [
  { q: "Is our data used to train AI models?", a: "No. Your documents and conversations are never used to train AI models or shared with other customers." },
  { q: "Where is our data stored?", a: "In India, with Indian data residency. It is handled under the Digital Personal Data Protection Act, 2023." },
  { q: "How is our data encrypted?", a: "At rest with AES-256, and in transit with TLS 1.3." },
  {
    q: "Which security standards do you meet?",
    a: "We are certified to ISO 27001, the international standard for information security management, and we meet SOC 2 requirements for secure handling of data across our systems.",
  },
  {
    q: "Who in our team can see our documents?",
    a: "Only the people you give access to. You invite colleagues into your organisation, give each a role (owner, admin, member or viewer) and share each case with the people working on it.",
  },
  { q: "Can other customers ever see our data?", a: "No. Each organisation’s data is kept separate, and nothing is shared between customers." },
  {
    q: "What happens to our data if we stop using LawCopilot?",
    a: "You can delete a case, or your whole account, at any time, and private chats are deleted automatically after 7 days without activity. Data we no longer need is deleted or anonymised, as our Privacy Policy sets out.",
  },
];

/** The security page's questions: one answer open at a time; choosing the open one closes it. */
export function SecurityFaq() {
  const [open, setOpen] = useState(0);
  const baseId = useId();

  return (
    <div>
      {FAQS.map((item, i) => {
        const on = i === open;
        const answerId = `${baseId}-a${i}`;
        return (
          <div key={item.q} style={{ borderTop: "1px solid rgba(15,14,12,0.16)" }}>
            <button
              type="button"
              onClick={() => setOpen(on ? -1 : i)}
              aria-expanded={on}
              aria-controls={answerId}
              style={{ width: "100%", minHeight: "60px", background: "none", border: "none", padding: 0, display: "flex", justifyContent: "space-between", alignItems: "center", gap: "20px", textAlign: "left", color: "#0f0e0c", fontSize: "16px", fontWeight: 500 }}
            >
              <span>{item.q}</span>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" style={{ flex: "none" }}>
                <path d={on ? "M6 15l6-6 6 6" : "M6 9l6 6 6-6"} />
              </svg>
            </button>
            <p id={answerId} hidden={!on} style={{ margin: 0, padding: "0 36px 22px 0", fontSize: "15px", lineHeight: 1.65, color: "#66625b" }}>
              {item.a}
            </p>
          </div>
        );
      })}
    </div>
  );
}

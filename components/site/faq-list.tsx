"use client";

import { useId, useState } from "react";
import { INK, MUTED } from "./primitives";

/** Questions that open one at a time. Choosing the open one closes it. */
export function FaqList({ items }: { items: ReadonlyArray<{ question: string; answer: string }> }) {
  const [open, setOpen] = useState(-1);
  const id = useId();

  return (
    <div>
      {items.map((item, i) => {
        const on = i === open;
        return (
          <div key={item.question} style={{ borderTop: "1px solid rgba(15,14,12,0.16)" }}>
            <button
              type="button"
              onClick={() => setOpen(on ? -1 : i)}
              aria-expanded={on}
              aria-controls={`${id}-${i}`}
              style={{ width: "100%", minHeight: "60px", background: "none", border: "none", padding: 0, display: "flex", justifyContent: "space-between", alignItems: "center", gap: "20px", textAlign: "left", color: INK, fontSize: "16px", fontWeight: 500 }}
            >
              <span>{item.question}</span>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" style={{ flex: "none" }}>
                <path d={on ? "M6 15l6-6 6 6" : "M6 9l6 6 6-6"} />
              </svg>
            </button>
            <p id={`${id}-${i}`} hidden={!on} style={{ margin: 0, padding: "0 36px 22px 0", fontSize: "15px", lineHeight: 1.65, color: MUTED }}>
              {item.answer}
            </p>
          </div>
        );
      })}
    </div>
  );
}

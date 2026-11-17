"use client";

import { useCallback, useEffect, useRef, useState, type MouseEvent, type ReactNode } from "react";
import { INK, MUTED, PAD_X, RULE } from "@/components/site/primitives";

export interface LegalSection {
  /** URL hash for the section, e.g. "section-3" → /terms#section-3. */
  id: string;
  /** The document's own section number ("1", "10"); unnumbered sections leave it out. */
  number?: string;
  title: string;
  content: ReactNode;
}

const tocLabel = (s: LegalSection) => (s.number ? `${s.number}. ${s.title}` : s.title);

/**
 * The legal pages' reader: a Contents list beside one section at a time, with previous/next
 * links underneath. The URL hash names the open section (#section-3), so sections can be
 * linked to directly; the hash follows the reader as it moves.
 */
export function LegalReader({ sections }: { sections: LegalSection[] }) {
  const [active, setActive] = useState(0);
  const articleRef = useRef<HTMLElement>(null);

  const bringIntoView = useCallback((id: string) => {
    // Wait for the newly shown section to render before moving focus and scrolling.
    requestAnimationFrame(() => {
      document.getElementById(`${id}-title`)?.focus({ preventScroll: true });
      const el = articleRef.current;
      if (el) window.scrollTo({ top: el.getBoundingClientRect().top + window.scrollY });
    });
  }, []);

  // Open the section the URL names, on load and when the hash changes (typed, linked, back/forward).
  useEffect(() => {
    const sync = () => {
      const id = window.location.hash.slice(1);
      const i = sections.findIndex((s) => s.id === id);
      if (i < 0) return;
      setActive(i);
      bringIntoView(id);
    };
    sync();
    window.addEventListener("hashchange", sync);
    return () => window.removeEventListener("hashchange", sync);
  }, [sections, bringIntoView]);

  const go = (i: number, id: string) => (e: MouseEvent<HTMLAnchorElement>) => {
    // Let modified clicks (new tab/window) follow the link's own deep link.
    if (e.metaKey || e.ctrlKey || e.shiftKey || e.altKey || e.button !== 0) return;
    e.preventDefault();
    setActive(i);
    window.history.replaceState(window.history.state, "", `#${id}`);
    bringIntoView(id);
  };

  const prev = active > 0 ? sections.at(active - 1) : undefined;
  const next = sections.at(active + 1);

  return (
    <section style={{ maxWidth: "1200px", margin: "0 auto", padding: `0 ${PAD_X} 96px`, display: "flex", flexWrap: "wrap", gap: "40px 72px", alignItems: "flex-start" }}>
      <nav aria-label="Contents" style={{ flex: "1 1 250px", maxWidth: "320px", minWidth: 0 }}>
        <div style={{ fontSize: "13.5px", color: MUTED, paddingBottom: "12px", borderBottom: `1px solid ${INK}`, marginBottom: "8px" }}>Contents</div>
        {sections.map((s, i) => {
          const on = i === active;
          return (
            <div key={s.id}>
              <a
                href={`#${s.id}`}
                onClick={go(i, s.id)}
                aria-current={on ? "true" : undefined}
                style={{
                  display: "block",
                  margin: "0 -12px",
                  padding: "9px 12px",
                  borderRadius: "6px",
                  fontSize: "14.5px",
                  lineHeight: 1.4,
                  ...(on ? { background: "#f0eadb", fontWeight: 500, color: INK } : { color: MUTED }),
                }}
              >
                {tocLabel(s)}
              </a>
            </div>
          );
        })}
      </nav>

      <article ref={articleRef} id="doc" style={{ flex: "999 1 560px", minWidth: 0, maxWidth: "760px", scrollMarginTop: "24px" }}>
        <div className="legal">
          {sections.map((s, i) => (
            <div key={s.id} id={s.id} hidden={i !== active} aria-labelledby={`${s.id}-title`}>
              {s.number && <div style={{ fontSize: "13.5px", color: MUTED, marginBottom: "10px" }}>Section {s.number}</div>}
              <h2
                id={`${s.id}-title`}
                tabIndex={-1}
                className="serif"
                style={{ margin: "0 0 24px", fontSize: "clamp(30px, 3vw, 40px)", lineHeight: 1.1, letterSpacing: "-0.02em", color: INK, outline: "none" }}
              >
                {s.title}
              </h2>
              {s.content}
            </div>
          ))}
        </div>

        <div style={{ marginTop: "48px", paddingTop: "20px", borderTop: RULE, display: "flex", justifyContent: "space-between", alignItems: "flex-start", gap: "16px" }}>
          {prev && (
            <a href={`#${prev.id}`} onClick={go(active - 1, prev.id)} style={{ display: "flex", flexDirection: "column", gap: "4px", maxWidth: "48%" }}>
              <span style={{ fontSize: "13px", color: MUTED }}>Previous</span>
              <span style={{ fontSize: "15px", fontWeight: 500, lineHeight: 1.4 }}>{tocLabel(prev)}</span>
            </a>
          )}
          {next && (
            <a href={`#${next.id}`} onClick={go(active + 1, next.id)} style={{ marginLeft: "auto", display: "flex", flexDirection: "column", gap: "4px", maxWidth: "48%", textAlign: "right" }}>
              <span style={{ fontSize: "13px", color: MUTED }}>Next</span>
              <span style={{ fontSize: "15px", fontWeight: 500, lineHeight: 1.4 }}>{tocLabel(next)}</span>
            </a>
          )}
        </div>
      </article>
    </section>
  );
}

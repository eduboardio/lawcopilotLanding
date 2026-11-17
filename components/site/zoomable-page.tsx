"use client";

import { useEffect, useState, type MouseEvent, type ReactNode } from "react";

/**
 * The page wrapper. On tablets and phones, tapping a product screenshot opens it
 * full width in an overlay so its small print can be read. Decorative images
 * (empty alt), the logo and images inside links are left alone.
 */
export function ZoomablePage({ children }: { children: ReactNode }) {
  const [zoom, setZoom] = useState<{ src: string; alt: string } | null>(null);

  useEffect(() => {
    if (!zoom) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setZoom(null);
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [zoom]);

  const onClick = (e: MouseEvent<HTMLDivElement>) => {
    const t = e.target as HTMLElement;
    if (!(t instanceof HTMLImageElement) || !t.alt || t.alt === "LawCopilot" || t.dataset.noZoom !== undefined) return;
    if (t.closest("a") || !window.matchMedia("(max-width: 1024px)").matches) return;
    setZoom({ src: t.currentSrc || t.src, alt: t.alt });
  };

  return (
    <div onClick={onClick} style={{ background: "#fdfcf8", color: "#0f0e0c", overflow: "clip" }}>
      {children}
      {zoom && (
        <div role="dialog" aria-modal="true" aria-label={zoom.alt} style={{ position: "fixed", inset: 0, zIndex: 100, background: "rgba(15,14,12,0.94)", display: "flex", flexDirection: "column" }}>
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", gap: "16px", padding: "8px 8px 8px 16px", color: "#f6f3ec", fontSize: "13.5px" }}>
            <span>Scroll to read</span>
            <button
              type="button"
              autoFocus
              onClick={() => setZoom(null)}
              aria-label="Close"
              style={{ width: "44px", height: "44px", padding: 0, background: "none", border: "none", color: "#f6f3ec", display: "flex", alignItems: "center", justifyContent: "center" }}
            >
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" aria-hidden="true">
                <path d="M6 6l12 12M18 6L6 18" />
              </svg>
            </button>
          </div>
          <div style={{ flex: 1, minHeight: 0, overflow: "auto", padding: "0 16px 24px" }}>
            <img src={zoom.src} alt={zoom.alt} style={{ display: "block", width: "1000px", maxWidth: "none", height: "auto", borderRadius: "8px", background: "#ffffff" }} />
          </div>
        </div>
      )}
    </div>
  );
}

"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState, type CSSProperties } from "react";
import { PRACTICE_AREAS, SIGN_IN_URL, SOLUTIONS } from "./site-links";

const INK = "#0f0e0c";
const MUTED = "#66625b";
const PAD_X = "clamp(16px, 5vw, 136px)";

const menuItem: CSSProperties = { padding: "12px 14px", borderRadius: "6px", display: "flex", flexDirection: "column", gap: "3px" };
const menuTitle: CSSProperties = { fontSize: "14.5px", fontWeight: 500, color: INK };
const menuDetail: CSSProperties = { fontSize: "13px", color: MUTED };
const menuLabel: CSSProperties = { fontSize: "13.5px", color: MUTED, padding: "0 14px 10px" };
const mobileGroup: CSSProperties = { padding: "14px 0 4px", fontSize: "13.5px", color: MUTED };
const mobileRule = "1px solid rgba(15,14,12,0.08)";

function Chevron() {
  return (
    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M6 9l6 6 6-6" />
    </svg>
  );
}

/** The site header. On the home page, the dark announcement bar sits above it. */
export function SiteNav() {
  const pathname = usePathname();
  const announcement = pathname === "/";
  const [menuOpen, setMenuOpen] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  // Close both menus on navigation and on Escape.
  useEffect(() => {
    setMenuOpen(false);
    setMobileOpen(false);
  }, [pathname]);
  useEffect(() => {
    if (!menuOpen && !mobileOpen) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setMenuOpen(false);
        setMobileOpen(false);
      }
    };
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [menuOpen, mobileOpen]);

  const inSolutions = [...SOLUTIONS, ...PRACTICE_AREAS].some((s) => s.href === pathname);
  const current = (href: string) => (href === pathname ? ("page" as const) : undefined);
  const topLink = (href: string): CSSProperties | undefined =>
    href === pathname ? { color: INK, fontWeight: 500 } : undefined;

  const dropdownLink = (item: { href: string; title: string; detail: string }) => (
    <Link
      key={item.href}
      href={item.href}
      aria-current={current(item.href)}
      style={item.href === pathname ? { ...menuItem, background: "#f3f1ec" } : menuItem}
    >
      <span style={menuTitle}>{item.title}</span>
      <span style={menuDetail}>{item.detail}</span>
    </Link>
  );

  return (
    <>
      {announcement && (
        <div
          id="announce"
          style={{ background: INK, color: "#f6f3ec", padding: "10px 16px", display: "flex", justifyContent: "center", alignItems: "center", gap: "8px 14px", flexWrap: "wrap", fontSize: "13.5px", textAlign: "center" }}
        >
          <span>
            Now live: Document Briefs<span className="hide-sm">, a full paper book read and briefed to the page.</span>
          </span>
          <Link href="/#briefs" style={{ textDecoration: "underline", textUnderlineOffset: "3px" }}>
            See how it works
          </Link>
        </div>
      )}

      <nav aria-label="Main" style={{ position: "relative", zIndex: 30, background: "#fdfcf8" }}>
        <div style={{ padding: `20px ${PAD_X}`, display: "flex", alignItems: "center", justifyContent: "space-between", gap: "24px" }}>
          <Link href="/" aria-label="LawCopilot home" style={{ flex: "1 1 0", display: "flex", alignItems: "center" }}>
            {/* The logo file carries an icon on the left; the clip shows only the wordmark. */}
            <img src="/images/site/logo-dark.svg" alt="LawCopilot" style={{ display: "block", height: "46px", width: "auto", clipPath: "inset(0 0 0 20.1%)", marginLeft: "-42px" }} />
          </Link>

          <div className="hide-sm" style={{ display: "flex", alignItems: "center", gap: "clamp(18px, 2.6vw, 38px)", fontSize: "16px", color: INK }}>
            <Link href="/#platform">Product</Link>
            <div>
              <button
                type="button"
                onClick={() => setMenuOpen((o) => !o)}
                aria-haspopup="true"
                aria-expanded={menuOpen}
                style={{ background: "none", border: "none", padding: 0, minHeight: "44px", display: "inline-flex", alignItems: "center", gap: "6px", fontSize: "16px", color: INK, fontWeight: inSolutions ? 500 : undefined }}
              >
                Solutions
                <Chevron />
              </button>
              {menuOpen && (
                <>
                  <button
                    type="button"
                    onClick={() => setMenuOpen(false)}
                    onMouseEnter={() => setMenuOpen(false)}
                    aria-label="Close the Solutions menu"
                    tabIndex={-1}
                    style={{ position: "fixed", inset: 0, zIndex: -1, width: "100%", height: "100%", margin: 0, padding: 0, border: "none", background: "transparent", cursor: "default" }}
                  />
                  <div
                    style={{ position: "absolute", top: "100%", left: 0, right: 0, background: "#fdfcf8", borderTop: "1px solid rgba(15,14,12,0.10)", borderBottom: "1px solid rgba(15,14,12,0.12)", boxShadow: "0 28px 48px -28px rgba(15,14,12,0.35)" }}
                  >
                    <div style={{ maxWidth: "1440px", margin: "0 auto", padding: "28px clamp(16px, 4vw, 56px) 34px", display: "grid", gridTemplateColumns: "minmax(0, 1fr) minmax(0, 2fr)", gap: "0 34px" }}>
                      <div style={{ display: "flex", flexDirection: "column" }}>
                        <div style={menuLabel}>Overview</div>
                        {SOLUTIONS.map(dropdownLink)}
                      </div>
                      <div style={{ borderLeft: "1px solid rgba(15,14,12,0.10)", paddingLeft: "20px" }}>
                        <div style={menuLabel}>Practice areas</div>
                        <div style={{ display: "grid", gridTemplateColumns: "repeat(2, minmax(0, 1fr))", gap: "0 16px" }}>
                          {PRACTICE_AREAS.map(dropdownLink)}
                        </div>
                      </div>
                    </div>
                  </div>
                </>
              )}
            </div>
            <Link href="/security" aria-current={current("/security")} style={topLink("/security")}>Security</Link>
            <Link href="/#faq">FAQ</Link>
            <Link href="/contact" aria-current={current("/contact")} style={topLink("/contact")}>Contact</Link>
          </div>

          <div style={{ flex: "1 1 0", display: "flex", alignItems: "center", justifyContent: "flex-end", gap: "10px", fontSize: "14px" }}>
            <a href={SIGN_IN_URL} style={{ background: INK, color: "#fdfcf8", padding: "10px 17px", borderRadius: "4px", fontWeight: 500, whiteSpace: "nowrap" }}>
              Sign In
            </a>
            <button
              type="button"
              className="show-sm"
              onClick={() => setMobileOpen((o) => !o)}
              aria-label="Menu"
              aria-expanded={mobileOpen}
              aria-controls="mobile-nav"
              style={{ width: "44px", height: "44px", marginRight: "-10px", padding: 0, background: "none", border: "none", alignItems: "center", justifyContent: "center", color: INK }}
            >
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" aria-hidden="true">
                <path d="M4 7h16M4 12h16M4 17h16" />
              </svg>
            </button>
          </div>
        </div>

        {mobileOpen && (
          <div
            id="mobile-nav"
            className="show-sm"
            onClick={() => setMobileOpen(false)}
            style={{ flexDirection: "column", padding: `6px ${PAD_X} 24px`, borderTop: "1px solid rgba(15,14,12,0.10)", borderBottom: "1px solid rgba(15,14,12,0.12)", fontSize: "17px", color: INK }}
          >
            <Link href="/#platform" style={{ padding: "13px 0", borderBottom: mobileRule }}>Product</Link>
            <span style={{ ...mobileGroup, padding: "18px 0 4px" }}>Solutions</span>
            {SOLUTIONS.map((s) => (
              <Link key={s.href} href={s.href} aria-current={current(s.href)} style={{ padding: "12px 0" }}>{s.title}</Link>
            ))}
            <span style={mobileGroup}>Practice areas</span>
            {PRACTICE_AREAS.map((s) => (
              <Link key={s.href} href={s.href} aria-current={current(s.href)} style={{ padding: "12px 0" }}>{s.title}</Link>
            ))}
            <Link href="/security" style={{ marginTop: "10px", padding: "13px 0", borderTop: mobileRule }}>Security</Link>
            <Link href="/#faq" style={{ padding: "13px 0", borderTop: mobileRule }}>FAQ</Link>
            <Link href="/contact" style={{ padding: "13px 0", borderTop: mobileRule }}>Contact</Link>
            <a href={SIGN_IN_URL} style={{ marginTop: "14px", padding: "13px 16px", border: "1px solid rgba(15,14,12,0.5)", borderRadius: "4px", textAlign: "center", fontSize: "15px", fontWeight: 500 }}>
              Sign In
            </a>
          </div>
        )}
      </nav>
    </>
  );
}

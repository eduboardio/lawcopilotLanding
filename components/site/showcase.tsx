"use client";

import { useState, type CSSProperties, type ReactNode } from "react";
import { INK, MUTED, PaintImage, paintOf, RULE, SHOT_STYLES, StepNumber, type PaintName } from "./primitives";

export interface ShowcaseStep {
  title: string;
  detail: ReactNode;
  /** A screenshot, placed the way the design places it ... */
  image?: { src: string; alt: string; fit?: keyof typeof SHOT_STYLES };
  /** ... or anything else to show on the panel for this step. */
  visual?: ReactNode;
}

/**
 * Numbered steps beside a painted panel. Pointing at or choosing a step opens its
 * detail and switches the panel to that step's screenshot.
 */
export function Showcase({
  intro,
  steps,
  paint,
  reverse = false,
  aspectRatio = "3 / 2",
  titleSize = "15.5px",
  detailLineHeight = 1.55,
  panelFlex = "2 1 520px",
  panelStyle,
}: {
  /** Shown above the steps: label, heading, paragraph. */
  intro?: ReactNode;
  steps: ShowcaseStep[];
  paint: PaintName;
  /** Panel on the left, steps on the right. */
  reverse?: boolean;
  aspectRatio?: string;
  titleSize?: string;
  detailLineHeight?: number;
  panelFlex?: string;
  panelStyle?: CSSProperties;
}) {
  const [current, setCurrent] = useState(0);
  const step = steps.find((_, i) => i === current) ?? steps[0];

  return (
    <div style={{ display: "flex", flexWrap: "wrap", flexDirection: reverse ? "row-reverse" : "row", gap: "36px 64px", alignItems: "center" }}>
      <div style={{ flex: "1 1 360px", minWidth: 0 }}>
        {intro}
        {steps.map((s, i) => {
          const on = i === current;
          return (
            <div key={s.title} onMouseEnter={() => setCurrent(i)}>
              <button
                type="button"
                onClick={() => setCurrent(i)}
                aria-pressed={on}
                style={{ width: "100%", textAlign: "left", background: "none", border: "none", borderTop: on ? `1px solid ${INK}` : RULE, padding: "16px 0 18px", display: "grid", gridTemplateColumns: "36px 1fr", color: on ? INK : MUTED }}
              >
                <StepNumber n={i + 1} active={on} />
                <span>
                  <span style={{ display: "block", fontSize: titleSize, fontWeight: 500 }}>{s.title}</span>
                  {on && (
                    <span style={{ display: "block", marginTop: "6px", fontSize: "14.5px", lineHeight: detailLineHeight, color: MUTED }}>{s.detail}</span>
                  )}
                </span>
              </button>
            </div>
          );
        })}
      </div>
      <div style={{ flex: panelFlex, minWidth: 0 }}>
        <div style={{ position: "relative", aspectRatio, borderRadius: "8px", overflow: "hidden", background: paintOf(paint).bg, ...panelStyle }}>
          <PaintImage paint={paint} />
          {step.visual ??
            (step.image && (
              <img key={step.image.src} src={step.image.src} alt={step.image.alt} style={SHOT_STYLES[step.image.fit ?? "contain"]} />
            ))}
        </div>
      </div>
    </div>
  );
}

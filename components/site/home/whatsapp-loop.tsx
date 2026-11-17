"use client";

import { useEffect, useRef, useState, type CSSProperties } from "react";

const LABEL =
  "A phone showing a WhatsApp chat from LawCopilot on Arjun Reddy v. Kavitha Rao: the case is listed for 14 November, an order is uploaded, the court order arrives as a PDF when asked for, the next hearing is set for 28 November, and a reminder says the rejoinder is due in two days";

const PHONE: CSSProperties = {
  position: "relative",
  display: "block",
  width: "100%",
  maxWidth: "344px",
  height: "auto",
  aspectRatio: "720 / 952",
  objectFit: "cover",
  background: "#0f0e0c",
  borderRadius: "13.2% 13.2% 0 0 / 10% 10% 0 0",
  boxShadow: "0 34px 64px -20px rgba(15,14,12,0.75), 0 0 0 1px rgba(255,255,255,0.14)",
};

/**
 * The WhatsApp chat as a silent loop. If the browser won't play it (an error,
 * autoplay refused, or it never starts), the animated image takes its place.
 */
export function WhatsAppLoop() {
  const ref = useRef<HTMLVideoElement>(null);
  const [fallback, setFallback] = useState(false);

  useEffect(() => {
    const v = ref.current;
    if (!v) return;
    let stall: ReturnType<typeof setTimeout> | undefined;
    const play = () => {
      if (!v.paused) return;
      v.muted = true;
      v.play().catch((err: DOMException) => {
        if (err.name === "NotAllowedError" || err.name === "NotSupportedError") setFallback(true);
      });
    };
    // Some browsers only allow playback after the first tap anywhere on the page.
    const taps = ["touchend", "pointerup", "click", "keydown"] as const;
    taps.forEach((t) => document.addEventListener(t, play, { capture: true, passive: true }));
    const unhook = () => taps.forEach((t) => document.removeEventListener(t, play, { capture: true }));
    v.addEventListener("playing", unhook);

    const io = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return;
        play();
        clearTimeout(stall);
        stall = setTimeout(() => v.isConnected && !(v.currentTime > 0) && setFallback(true), 7000);
      },
      { threshold: 0.15 }
    );
    io.observe(v);
    return () => {
      io.disconnect();
      unhook();
      clearTimeout(stall);
    };
  }, []);

  if (fallback) return <img src="/images/site/whatsapp-chat.webp" alt={LABEL} data-no-zoom style={PHONE} />;

  return (
    <video
      ref={ref}
      className="wa-loop"
      src="/images/site/whatsapp-loop.mp4"
      poster="/images/site/whatsapp-poster.jpg"
      autoPlay
      muted
      loop
      playsInline
      preload="auto"
      disablePictureInPicture
      controlsList="nodownload nofullscreen noremoteplayback noplaybackrate"
      aria-label={LABEL}
      onError={() => setFallback(true)}
      style={PHONE}
    />
  );
}

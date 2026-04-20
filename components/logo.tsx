"use client";
import Link from "next/link";
import Image from "next/image";
import { cn } from "@/lib/utils";

/** PNG wordmarks — default at top of page */
const PNG_LIGHT_MODE = "/Light-Logo.png";
const PNG_DARK_MODE = "/Dark-Logo.png";
/** Webp wordmarks — navbar after scroll (dark art on light UI, light art on dark UI) */
const WEBP_LIGHT_UI = "/dark_logo.webp";
const WEBP_DARK_UI = "/light_logo.webp";

interface Props {
  type?: "LOGO_ONLY" | "FULL";
  /** When true (user has scrolled), use webp assets instead of PNG */
  scrolled?: boolean;
  isResponsive?: boolean;
  href?: string;
  classes?: {
    container?: string;
    logo?: string;
    text?: string;
  };
}

export const Logo = ({
  type = "LOGO_ONLY",
  scrolled = false,
  href = "/",
  classes,
}: Props) => {
  const isFull = type === "FULL";
  const width = isFull ? 280 : 240;
  const height = isFull ? 56 : 48;
  const imgClass = isFull
    ? "h-10 sm:h-11 w-auto max-w-[min(280px,75vw)] object-contain object-left"
    : "h-9 lg:h-10 w-auto max-w-[240px] object-contain object-left";

  const lightModeSrc = scrolled ? WEBP_LIGHT_UI : PNG_LIGHT_MODE;
  const darkModeSrc = scrolled ? WEBP_DARK_UI : PNG_DARK_MODE;

  return (
    <Link
      href={href}
      className={cn(
        "flex shrink-0 items-center py-1",
        isFull && "justify-center",
        classes?.container
      )}
    >
      <Image
        src={lightModeSrc}
        alt="Law Copilot"
        width={width}
        height={height}
        priority
        className={cn(imgClass, "dark:hidden", classes?.logo)}
      />
      <Image
        src={darkModeSrc}
        alt="Law Copilot"
        width={width}
        height={height}
        className={cn(imgClass, "hidden dark:block", classes?.logo)}
      />
    </Link>
  );
};

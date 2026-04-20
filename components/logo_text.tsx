"use client";
import Link from "next/link";
import Image from "next/image";
import { cn } from "@/lib/utils";

const LOGO_LIGHT_MODE = "/Light-Logo.png";
const LOGO_DARK_MODE = "/Dark-Logo.png";

interface Props {
  type?: "LOGO_ONLY" | "FULL";
  isResponsive?: boolean;
  href?: string;
  classes?: {
    container?: string;
    logo?: string;
    text?: string;
  };
}

export const LogoText = ({
  type = "LOGO_ONLY",
  href = "/",
  classes,
}: Props) => {
  const imgClass =
    "h-9 w-auto max-w-[200px] object-contain object-left sm:h-10 sm:max-w-[240px]";

  if (type === "LOGO_ONLY") {
    return (
      <Link
        href={href}
        className={cn("flex items-center justify-center", classes?.container)}
      >
        <Image
          src={LOGO_LIGHT_MODE}
          alt="Law Copilot"
          width={240}
          height={48}
          className={cn(imgClass, "dark:hidden", classes?.logo)}
        />
        <Image
          src={LOGO_DARK_MODE}
          alt="Law Copilot"
          width={240}
          height={48}
          className={cn(imgClass, "hidden dark:block", classes?.logo)}
        />
      </Link>
    );
  }

  return (
    <Link
      href={href}
      className={cn(
        "relative z-20 flex items-center space-x-2 py-1 text-sm font-normal text-foreground",
        classes?.container
      )}
    >
      <span className={cn("flex items-center justify-center", classes?.logo)}>
        <Image
          src={LOGO_LIGHT_MODE}
          alt="Law Copilot"
          width={220}
          height={44}
          className={cn(imgClass, "dark:hidden")}
        />
        <Image
          src={LOGO_DARK_MODE}
          alt="Law Copilot"
          width={220}
          height={44}
          className={cn(imgClass, "hidden dark:block")}
        />
      </span>
    </Link>
  );
};

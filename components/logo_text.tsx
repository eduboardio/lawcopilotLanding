"use client";
import Link from "next/link";
import Image from "next/image";
import { cn } from "@/lib/utils";

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
    if (type === "LOGO_ONLY") {
        return (
            <Link
                href={href}
                className={cn(
                    "flex justify-center items-center",
                    classes?.container
                )}
            >
                <Image 
                    src="/Dark-Logo.png" 
                    alt="Law Copilot" 
                    width={100} 
                    height={100}
                    className={cn("w-full h-full invert dark:invert-0", classes?.logo)}
                />
            </Link>
        );
    }
    return (
        <Link
            href={href}
            className={cn(
                "font-normal flex space-x-2 items-center text-sm text-foreground py-1 relative z-20",
                classes?.container
            )}
        >
            <span className={cn("size-10 flex justify-center items-center", classes?.logo)}>
                <Image 
                    src="/Dark-Logo.png" 
                    alt="Law Copilot" 
                    width={40} 
                    height={40}
                    className="w-full h-full invert dark:invert-0"
                />
            </span>
        </Link>
    );
};
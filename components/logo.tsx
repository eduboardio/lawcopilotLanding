"use client";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
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

export const Logo = ({
    type = "LOGO_ONLY",
    href = "/",
    classes,
}: Props) => {
    if (type === "LOGO_ONLY") {
        return (
            <Link
                href={href}
                className={cn(
                    "size-10 lg:size-12 flex justify-center items-center",
                    classes?.container
                )}
            >
                <Image 
                    src="/logo.svg" 
                    alt="Law Copilot" 
                    width={40} 
                    height={40}
                    className={cn("w-full h-full dark:invert", classes?.logo)}
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
                    src="/logo.svg" 
                    alt="Law Copilot" 
                    width={40} 
                    height={40}
                    className="w-full h-full dark:invert"
                />
            </span>
            <motion.span
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className={cn("font-medium text-foreground whitespace-pre", classes?.text)}
            >
                Law Copilot
            </motion.span>
        </Link>
    );
};
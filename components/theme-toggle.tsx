"use client";
import * as React from "react";
import { useTheme } from "next-themes";
import { Button } from "@/components/ui/button";
import {
    Tooltip,
    TooltipContent,
    TooltipTrigger,
} from "@/components/ui/tooltip";
import { MoonIcon as Moon, SunIcon as Sun } from "@radix-ui/react-icons";

export function ThemeToggle() {
    const { setTheme, theme } = useTheme();
    const [mounted, setMounted] = React.useState(false);

    React.useEffect(() => {
        setMounted(true);
    }, []);

    return (
        <Tooltip delayDuration={100}>
            <TooltipTrigger asChild>
                <Button
                    className="bg-background min-w-10"
                    variant="outline"
                    size="icon"
                    onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
                >
                    {!mounted ? (
                        <Sun className="w-[1rem] h-[1rem]" aria-hidden />
                    ) : theme === "light" ? (
                        <Sun className="w-[1rem] h-[1rem]" />
                    ) : (
                        <Moon className="w-[1rem] h-[1rem]" />
                    )}
                    <span className="sr-only">Switch Theme</span>
                </Button>
            </TooltipTrigger>
            <TooltipContent side="bottom">Switch Theme</TooltipContent>
        </Tooltip>
    );
}

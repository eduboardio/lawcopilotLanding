"use client";
import { Menu } from "lucide-react";
import { useEffect, useState } from "react";
import {
    Sheet,
    SheetContent,
    SheetFooter,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
} from "@/components/ui/sheet";
import { Separator } from "@/components/ui/separator";
import {
    NavigationMenu,
    // NavigationMenuContent,
    NavigationMenuItem,
    // NavigationMenuLink,
    NavigationMenuList,
    // NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import { Button } from "@/components/ui/button";
import Link from "next/link";
// import Image from "next/image";
import { Logo } from "@/components/logo";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import { ROUTES_WITHOUT_NAVBAR } from "@/constants";
import { ThemeToggle } from "@/components/theme-toggle";
// import { useTheme } from "next-themes";

interface RouteProps {
    href: string;
    label: string;
}

// interface FeatureProps {
//     title: string;
//     description: string;
// }

const routeList: RouteProps[] = [
    {
        href: "/#hero",
        label: "Home",
    },
    {
        href: "/#features",
        label: "Features",
    },
    {
        href: "/#benefits",
        label: "Benefits",
    },
    {
        href: "/#faq",
        label: "FAQs",
    },
    {
        href: "/#contact",
        label: "Contact",
    },
];

// const featureList: FeatureProps[] = [
//     {
//         title: "Showcase Your Value ",
//         description: "Highlight how your product solves user problems.",
//     },
//     {
//         title: "Build Trust",
//         description:
//             "Leverages social proof elements to establish trust and credibility.",
//     },
//     {
//         title: "Capture Leads",
//         description:
//             "Make your lead capture form visually appealing and strategically.",
//     },
// ];

export const Navbar = () => {
    const [isOpen, setIsOpen] = useState<boolean>(false);
    const [scrolled, setScrolled] = useState<boolean>(false);
    const pathname = usePathname();
    // const { theme } = useTheme();s
    const shouldHideHeaderNavbar = ROUTES_WITHOUT_NAVBAR.includes(pathname);

    useEffect(() => {
        const handleScroll = () => {
            const isScrolled = window.scrollY > 20;
            if (isScrolled !== scrolled) {
                setScrolled(isScrolled);
            }
        };
        window.addEventListener("scroll", handleScroll);
        handleScroll();
        return () => window.removeEventListener("scroll", handleScroll);
    }, [scrolled]);

    if (shouldHideHeaderNavbar) return null;
    
    return (
        <header
            className={cn(
                "z-40 h-20 flex justify-center items-center sticky top-0 transition-all duration-300 backdrop-blur-md",
                {
                    "bg-transparent": pathname === "/" && !scrolled,
                    "bg-background/80 shadow-sm border-b border-border/20": scrolled,
                }
            )}
        >
            <div className="container mx-auto flex justify-between items-center p-2">
                {/* Logo */}
                <div className="flex justify-between lg:justify-start items-center gap-10 w-full">
                    <Logo />
                    
                    {/* Mobile Menu */}
                    <div className="flex items-center lg:hidden">
                        <Sheet open={isOpen} onOpenChange={setIsOpen}>
                            <SheetTrigger asChild>
                                <Button variant="ghost" size="icon" className="lg:hidden">
                                    <Menu className="h-6 w-6" />
                                </Button>
                            </SheetTrigger>

                            <SheetContent
                                side="right"
                                className="flex flex-col justify-between rounded-l-2xl bg-gradient-to-b from-background/95 to-background/80 backdrop-blur-lg border-l border-border/20"
                            >
                                <div>
                                    <SheetHeader className="mb-6">
                                        <SheetTitle className="flex items-center justify-center">
                                            <Logo type="FULL" />
                                        </SheetTitle>
                                    </SheetHeader>

                                    <div className="flex flex-col gap-1">
                                        {routeList.map(({ href, label }) => (
                                            <Button
                                                key={href}
                                                onClick={() => setIsOpen(false)}
                                                asChild
                                                variant="ghost"
                                                className="justify-start text-lg font-medium"
                                            >
                                                <Link href={href}>{label}</Link>
                                            </Button>
                                        ))}
                                    </div>
                                </div>

                                <SheetFooter className="flex-col sm:flex-col justify-start items-start w-full mt-auto">
                                    <Separator className="my-4" />

                                    <div className="flex items-center justify-between w-full mb-4">
                                        <span className="font-medium">Theme</span>
                                        <ThemeToggle />
                                    </div>

                                    <CallToActions
                                        classes={{
                                            container: "w-full grid grid-cols-2 gap-4",
                                            buttonSignIn: "w-full bg-secondary/80 hover:bg-secondary",
                                            buttonGetStarted: "w-full bg-primary hover:bg-primary/90"
                                        }}
                                    />
                                </SheetFooter>
                            </SheetContent>
                        </Sheet>
                    </div>
                    
                    {/* Desktop Navigation */}
                    <NavigationMenu className="hidden lg:flex mx-auto">
                        <NavigationMenuList className="gap-1">
                            {routeList.map(({ href, label }) => (
                                <NavigationMenuItem key={href}>
                                    <Link 
                                        href={href} 
                                        className={cn(
                                            "px-4 py-2 text-base font-medium rounded-md transition-colors",
                                            pathname === href || (href === "/#hero" && pathname === "/") 
                                                ? "text-primary" 
                                                : "hover:text-primary"
                                        )}
                                    >
                                        {label}
                                    </Link>
                                </NavigationMenuItem>
                            ))}
                        </NavigationMenuList>
                    </NavigationMenu>
                </div>

                {/* Desktop Call to Actions */}
                <div className="hidden lg:flex justify-center items-center gap-4">
                    <ThemeToggle />
                    <CallToActions
                        classes={{
                            container: "flex gap-4",
                            buttonSignIn: "bg-secondary/80 hover:bg-secondary text-secondary-foreground",
                            buttonGetStarted: "bg-primary hover:bg-primary/90 text-primary-foreground"
                        }}
                    />
                </div>
            </div>
        </header>
    );
};

interface CallToActionsProps {
    classes?: {
        container?: string;
        buttonSignIn?: string;
        buttonGetStarted?: string;
    };
}

const CallToActions = ({ classes }: CallToActionsProps) => {
    return (
        <div className={classes?.container}>
            <Button 
                variant="secondary" 
                className={cn("font-medium", classes?.buttonSignIn)}
            >
                <Link href={`/signin`}>Sign in</Link>
            </Button>
            <Button
                className={cn("font-medium", classes?.buttonGetStarted)}
                asChild
            >
                <Link href={`/signup`}>Get Started</Link>
            </Button>
        </div>
    );
};
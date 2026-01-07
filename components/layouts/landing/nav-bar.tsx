"use client";
import { Menu, ChevronDown } from "lucide-react";
import { useCallback, useEffect, useState, memo } from "react";
import {
    Sheet,
    SheetContent,
    SheetFooter,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
} from "@/components/ui/sheet";
import { Separator } from "@/components/ui/separator";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Logo } from "@/components/logo";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import { ROUTES_WITHOUT_NAVBAR } from "@/constants";
import { ThemeToggle } from "@/components/theme-toggle";

interface SubMenuItem {
    href: string;
    label: string;
    description?: string;
}

interface RouteProps {
    href: string;
    label: string;
    subMenu?: {
        title: string;
        items: SubMenuItem[];
    };
}

const routeList: RouteProps[] = [
    {
        href: "/#hero",
        label: "Home",
    },
    {
        href: "#",
        label: "Products",
        subMenu: {
            title: "Our Products",
            items: [
                { 
                    href: "/products/lawfirms", 
                    label: "For Law Firms",
                    description: "Complete legal platform for growing firms"
                },
                { 
                    href: "/products/lawyers", 
                    label: "For Lawyers",
                    description: "Tools for independent practitioners"
                },
                { 
                    href: "/products/everyone", 
                    label: "For Everyone",
                    description: "Accessible legal AI for all"
                },
            ],
        },
    },
    {
        href: "/#features",
        label: "Features",
        subMenu: {
            title: "Platform Capabilities",
            items: [
                {
                    href: "/#features",
                    label: "Legal Drafting",
                    description: "AI-powered document generation"
                },
                {
                    href: "/#features",
                    label: "Legal Research",
                    description: "Comprehensive case law search"
                },
                {
                    href: "/#features",
                    label: "Document Analysis",
                    description: "Smart contract & agreement review"
                },
                {
                    href: "/#features",
                    label: "Case Intelligence",
                    description: "Precedent analysis & insights"
                },
            ],
        },
    },
    {
        href: "/#benefits",
        label: "Why Us?",
        subMenu: {
            title: "Law Copilot Advantage",
            items: [
                {
                    href: "/#benefits",
                    label: "India-First Platform",
                    description: "Built for Indian legal practice"
                },
                {
                    href: "/#benefits",
                    label: "Custom AI Engine",
                    description: "Purpose-built legal intelligence"
                },
                {
                    href: "/#benefits",
                    label: "Jurisdictional Intelligence",
                    description: "Court-specific legal reasoning"
                },
                {
                    href: "/#benefits",
                    label: "Multilingual Support",
                    description: "Legal work across Indian languages"
                },
            ],
        },
    },
];

const CallToActions = memo(({ classes }: {
    classes?: {
        container?: string;
        buttonSignIn?: string;
        buttonGetStarted?: string;
    };
}) => {
    return (
        <div className={classes?.container}>
            <Button
                variant="secondary"
                className={cn("font-medium", classes?.buttonSignIn)}
                asChild
            >
                <Link href="https://app.lawcopilot.io/signin">Sign In</Link>
            </Button>
            <Button
                className={cn("font-medium", classes?.buttonGetStarted)}
                asChild
            >
                <Link href="https://app.lawcopilot.io/signup">Get Started</Link>
            </Button>
        </div>
    );
});

CallToActions.displayName = 'CallToActions';

const DesktopNavigation = memo(({ pathname, openDropdown, setOpenDropdown }: { 
    pathname: string;
    openDropdown: string | null;
    setOpenDropdown: (label: string | null) => void;
}) => {
    const handleMouseEnter = (label: string, hasSubMenu: boolean) => {
        if (hasSubMenu) {
            setOpenDropdown(label);
        }
    };

    const handleMouseLeave = () => {
        setOpenDropdown(null);
    };

    return (
        <nav className="hidden lg:flex mx-auto" onMouseLeave={handleMouseLeave}>
            <ul className="flex items-center gap-1">
                {routeList.map((route) => {
                    const isActive = pathname === route.href || 
                                   (route.href === "/#hero" && pathname === "/") ||
                                   (route.href === "/blog" && pathname.startsWith("/blog"));
                    const hasSubMenu = !!route.subMenu;
                    const isOpen = openDropdown === route.label;

                    return (
                        <li 
                            key={route.label}
                            className="relative"
                            onMouseEnter={() => handleMouseEnter(route.label, hasSubMenu)}
                        >
                            {hasSubMenu ? (
                                <button
                                    className={cn(
                                        "flex items-center gap-1 px-4 py-2 text-base font-medium rounded-md transition-colors",
                                        isActive ? "text-primary" : "hover:text-primary"
                                    )}
                                >
                                    {route.label}
                                    <ChevronDown 
                                        className={cn(
                                            "h-4 w-4 transition-transform duration-200",
                                            isOpen && "rotate-180"
                                        )} 
                                    />
                                </button>
                            ) : (
                                <Link
                                    href={route.href}
                                    className={cn(
                                        "block px-4 py-2 text-base font-medium rounded-md transition-colors",
                                        isActive ? "text-primary" : "hover:text-primary"
                                    )}
                                >
                                    {route.label}
                                </Link>
                            )}
                        </li>
                    );
                })}
            </ul>
        </nav>
    );
});

DesktopNavigation.displayName = 'DesktopNavigation';

const MegaMenu = memo(({ openDropdown, setOpenDropdown }: {
    openDropdown: string | null;
    setOpenDropdown: (label: string | null) => void;
}) => {
    const activeRoute = routeList.find(r => r.label === openDropdown);
    
    if (!openDropdown || !activeRoute?.subMenu) return null;

    // Determine grid columns based on number of items
    const itemCount = activeRoute.subMenu.items.length;
    let gridClass = "grid-cols-1 sm:grid-cols-2";
    
    if (itemCount === 3) {
        gridClass = "grid-cols-1 sm:grid-cols-2 lg:grid-cols-3";
    } else if (itemCount === 4) {
        gridClass = "grid-cols-1 sm:grid-cols-2 lg:grid-cols-4";
    } else if (itemCount > 4) {
        gridClass = "grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4";
    }

    return (
        <div 
            className="absolute left-0 right-0 top-full z-50 bg-background/95 backdrop-blur-xl border-b border-border/20 shadow-xl"
            onMouseLeave={() => setOpenDropdown(null)}
        >
            <div className="container mx-auto px-6 py-8">
                <div className="max-w-7xl mx-auto">
                    <h3 className="mb-6 text-sm font-semibold text-muted-foreground uppercase tracking-wider">
                        {activeRoute.subMenu.title}
                    </h3>
                    <div className={cn("grid gap-4", gridClass)}>
                        {activeRoute.subMenu.items.map((item, index) => (
                            <Link
                                key={index}
                                href={item.href}
                                className="group block p-4 rounded-lg hover:bg-accent transition-colors border border-transparent hover:border-border/50"
                                onClick={() => setOpenDropdown(null)}
                            >
                                <div className="font-medium text-foreground group-hover:text-primary transition-colors mb-1">
                                    {item.label}
                                </div>
                                {item.description && (
                                    <div className="text-sm text-muted-foreground">
                                        {item.description}
                                    </div>
                                )}
                            </Link>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
});

MegaMenu.displayName = 'MegaMenu';

export const Navbar = () => {
    const [isOpen, setIsOpen] = useState<boolean>(false);
    const [scrolled, setScrolled] = useState<boolean>(false);
    const [openDropdown, setOpenDropdown] = useState<string | null>(null);
    const pathname = usePathname();
    const shouldHideHeaderNavbar = ROUTES_WITHOUT_NAVBAR.includes(pathname);
    
    const handleScroll = useCallback(() => {
        const isScrolled = window.scrollY > 20;
        if (isScrolled !== scrolled) {
            setScrolled(isScrolled);
        }
    }, [scrolled]);

    useEffect(() => {
        let ticking = false;
        const scrollListener = () => {
            if (!ticking) {
                window.requestAnimationFrame(() => {
                    handleScroll();
                    ticking = false;
                });
                ticking = true;
            }
        };

        window.addEventListener("scroll", scrollListener, { passive: true });
        handleScroll();

        return () => window.removeEventListener("scroll", scrollListener);
    }, [handleScroll]);
    
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
            <div className="container mx-auto flex justify-between items-center p-2 relative">
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
                                        {routeList.map((route) => {
                                            if (route.subMenu) {
                                                return (
                                                    <div key={route.label} className="flex flex-col">
                                                        <div className="px-4 py-2 text-sm font-semibold text-muted-foreground">
                                                            {route.label}
                                                        </div>
                                                        <div className="pl-4 flex flex-col gap-1">
                                                            {route.subMenu.items.map((item) => (
                                                                <Button
                                                                    key={item.href}
                                                                    onClick={() => setIsOpen(false)}
                                                                    asChild
                                                                    variant="ghost"
                                                                    className="justify-start text-base h-auto py-2"
                                                                >
                                                                    <Link href={item.href}>
                                                                        <div className="text-left">
                                                                            <div className="font-medium">{item.label}</div>
                                                                            {item.description && (
                                                                                <div className="text-xs text-muted-foreground mt-0.5">
                                                                                    {item.description}
                                                                                </div>
                                                                            )}
                                                                        </div>
                                                                    </Link>
                                                                </Button>
                                                            ))}
                                                        </div>
                                                    </div>
                                                );
                                            }

                                            return (
                                                <Button
                                                    key={route.href}
                                                    onClick={() => setIsOpen(false)}
                                                    asChild
                                                    variant="ghost"
                                                    className="justify-start text-lg font-medium"
                                                >
                                                    <Link href={route.href}>{route.label}</Link>
                                                </Button>
                                            );
                                        })}
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
                    <DesktopNavigation 
                        pathname={pathname} 
                        openDropdown={openDropdown}
                        setOpenDropdown={setOpenDropdown}
                    />
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

            {/* Mega Menu Dropdown */}
            <MegaMenu 
                openDropdown={openDropdown}
                setOpenDropdown={setOpenDropdown}
            />
        </header>
    );
};
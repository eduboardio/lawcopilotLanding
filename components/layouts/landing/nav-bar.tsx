"use client";
import { Menu, ChevronDown, Scale, FileText, Search, FileCheck, Brain, Building2, Globe } from "lucide-react";
import { useCallback, useEffect, useState, memo, useRef } from "react";
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
import { useTheme } from "next-themes";

interface SubMenuItem {
    href: string;
    label: string;
    description?: string;
    icon?: React.ComponentType<React.SVGProps<SVGSVGElement>>;
}

interface RouteProps {
    href: string;
    label: string;
    subMenu?: {
        title: string;
        items: SubMenuItem[];
        visuals?: {
            lightImage: string;
            darkImage: string;
            title: string;
            description: string;
        }[];
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
                    description: "Complete legal platform for growing firms",
                    icon: Building2
                },
                {
                    href: "/products/lawyers",
                    label: "For Lawyers",
                    description: "Tools for independent practitioners",
                    icon: Scale
                },
                {
                    href: "/products/everyone",
                    label: "For Everyone",
                    description: "Accessible legal AI for all",
                    icon: Globe
                },
            ],
            visuals: [
                {
                    lightImage: "/dropdown_1.webp",
                    darkImage: "/dropdown_dark_1.webp",
                    title: "AI-Powered Legal Platform",
                    description: "Transform your legal practice with intelligent automation"
                },
                {
                    lightImage: "/dropdown_2.webp",
                    darkImage: "/dropdown_dark_2.webp",
                    title: "Seamless Collaboration",
                    description: "Work together efficiently across teams and clients"
                }
            ]
        },
    },
    {
        href: "/#features",
        label: "Features",
        subMenu: {
            title: "Platform Capabilities",
            items: [
                {
                    href: "/#legal-drafting",
                    label: "Legal Drafting",
                    description: "AI-powered document generation",
                    icon: FileText
                },
                {
                    href: "/#legal-research",
                    label: "Legal Research",
                    description: "Comprehensive case law search",
                    icon: Search
                },
                {
                    href: "/#document-analysis",
                    label: "Document Analysis",
                    description: "Smart contract & agreement review",
                    icon: FileCheck
                },
                {
                    href: "/#case-intelligence",
                    label: "Case Intelligence",
                    description: "Precedent analysis & insights",
                    icon: Brain
                },
            ],
            visuals: [
                {
                    lightImage: "/dropdown_1.webp",
                    darkImage: "/dropdown_dark_1.webp",
                    title: "Intelligent Research",
                    description: "Find relevant case law and precedents instantly"
                },
                {
                    lightImage: "/dropdown_2.webp",
                    darkImage: "/dropdown_dark_2.webp",
                    title: "Smart Analytics",
                    description: "Data-driven insights for better legal outcomes"
                }
            ]
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
                    description: "Built for Indian legal practice",
                    icon: Scale
                },
                {
                    href: "/#benefits",
                    label: "Custom AI Engine",
                    description: "Purpose-built legal intelligence",
                    icon: Brain
                },
                {
                    href: "/#benefits",
                    label: "Jurisdictional Intelligence",
                    description: "Court-specific legal reasoning",
                    icon: FileCheck
                },
                {
                    href: "/#benefits",
                    label: "Multilingual Support",
                    description: "Legal work across Indian languages",
                    icon: Globe
                },
            ],
            // No visuals for Why Us section
        },
    },
];

const handleSmoothScroll = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    // Only handle hash links
    if (href.startsWith('/#')) {
        e.preventDefault();
        const id = href.replace('/#', '');
        const element = document.getElementById(id);

        if (element) {
            const navbarHeight = 80; // Height of your navbar (h-20 = 5rem = 80px)
            const elementPosition = element.getBoundingClientRect().top;
            const offsetPosition = elementPosition + window.pageYOffset - navbarHeight;

            window.scrollTo({
                top: offsetPosition,
                behavior: 'smooth'
            });
        }
    }
};

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

    return (
        <nav className="hidden lg:flex absolute left-1/2 -translate-x-1/2">
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

// Clean Image Window Component
const ImageWindow = memo(({ visual, index }: { 
    visual: { lightImage: string; darkImage: string; title: string; description: string }, 
    index: number 
}) => {
    const { theme, resolvedTheme } = useTheme();
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
    }, []);

    // Use resolvedTheme to get the actual current theme (handles 'system' setting)
    const currentTheme = mounted ? (resolvedTheme || theme) : 'light';
    const imageSrc = currentTheme === 'dark' ? visual.darkImage : visual.lightImage;

    return (
        <div className="space-y-3">
            {/* Single Window with professional gradient background (Legora-style) - gradient only on top and left */}
            <div className="relative aspect-video w-full overflow-hidden bg-gradient-to-br from-blue-500/15 via-cyan-500/10 to-emerald-500/15 dark:from-blue-600/20 dark:via-cyan-600/15 dark:to-emerald-600/20 pt-4 pl-4 shadow-lg">
                <div className="relative w-full h-full overflow-hidden bg-background/90 backdrop-blur-sm border border-border/40 rounded-sm">
                    {mounted && (
                        <div className="relative w-full h-full">
                            <img
                                src={imageSrc}
                                alt={visual.title}
                                className="absolute inset-0 w-full h-full object-cover"
                                style={{
                                    objectFit: 'cover',
                                    objectPosition: index === 0 ? '20% 0%' : '50% 50%',
                                    width: index === 0 ? '200%' : '180%',
                                    height: index === 0 ? '200%' : '180%',
                                }}
                            />
                        </div>
                    )}
                </div>
            </div>
            
            {/* Text below without card */}
            <div className="space-y-1">
                <h4 className="font-semibold text-sm text-foreground">
                    {visual.title}
                </h4>
                <p className="text-xs text-muted-foreground leading-relaxed">
                    {visual.description}
                </p>
            </div>
        </div>
    );
});

ImageWindow.displayName = 'ImageWindow';

const MegaMenu = memo(({ openDropdown, setOpenDropdown }: {
    openDropdown: string | null;
    setOpenDropdown: (label: string | null) => void;
}) => {
    const [isVisible, setIsVisible] = useState(false);
    const [activeLabel, setActiveLabel] = useState<string | null>(null);
    const menuRef = useRef<HTMLDivElement>(null);
    const timeoutRef = useRef<NodeJS.Timeout | null>(null);

    useEffect(() => {
        if (openDropdown) {
            setActiveLabel(openDropdown);
            setIsVisible(true);
        } else {
            setIsVisible(false);
            // Delay clearing the active label to allow exit animation
            const timer = setTimeout(() => setActiveLabel(null), 300);
            return () => clearTimeout(timer);
        }
    }, [openDropdown]);

    useEffect(() => {
        return () => {
            if (timeoutRef.current) {
                clearTimeout(timeoutRef.current);
            }
        };
    }, []);

    const activeRoute = routeList.find(r => r.label === activeLabel);

    if (!activeLabel || !activeRoute?.subMenu) return null;

    const handleMouseEnter = () => {
        if (timeoutRef.current) {
            clearTimeout(timeoutRef.current);
            timeoutRef.current = null;
        }
    };

    const handleMouseLeave = () => {
        timeoutRef.current = setTimeout(() => {
            setOpenDropdown(null);
        }, 200);
    };

    const hasVisuals = activeRoute.subMenu.visuals && activeRoute.subMenu.visuals.length > 0;

    return (
        <div
            ref={menuRef}
            className={cn(
                "absolute left-0 right-0 top-full z-50 bg-background/98 backdrop-blur-xl border-b border-border/20 shadow-2xl transition-all duration-300 ease-in-out",
                isVisible
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 -translate-y-2 pointer-events-none"
            )}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
        >
            <div className="container mx-auto px-6 py-10">
                <div className="flex items-start gap-8">
                    {/* Left Side - Menu Items */}
                    <div className="space-y-1 flex-shrink-0" style={{ width: hasVisuals ? '350px' : '100%' }}>
                        <h3 className="mb-4 text-xs font-semibold text-muted-foreground uppercase tracking-wider">
                            {activeRoute.subMenu.title}
                        </h3>

                        {activeRoute.subMenu.items.map((item, index) => {
                            const Icon = item.icon;
                            return (
                                <Link
                                    key={index}
                                    href={item.href}
                                    className="group flex items-start gap-3 p-3 rounded-md hover:bg-accent/30 transition-all duration-200"
                                    onClick={(e) => {
                                        handleSmoothScroll(e, item.href);
                                        setOpenDropdown(null);
                                    }}
                                >
                                    {Icon && (
                                        <div className="mt-0.5 text-primary/60 group-hover:text-primary transition-colors duration-200">
                                            <Icon className="h-5 w-5" />
                                        </div>
                                    )}
                                    <div className="flex-1">
                                        <div className="font-medium text-foreground group-hover:text-primary transition-colors mb-0.5">
                                            {item.label}
                                        </div>
                                        {item.description && (
                                            <div className="text-xs text-muted-foreground leading-relaxed">
                                                {item.description}
                                            </div>
                                        )}
                                    </div>
                                </Link>
                            );
                        })}
                    </div>

                    {/* Right Side - Image Windows (only if visuals exist) */}
                    {hasVisuals && (
                        <>
                            {/* Spacer */}
                            <div className="flex-1" />

                            {/* Two Pictures */}
                            <div className="flex gap-6 flex-shrink-0" style={{ width: '50%' }}>
                                {activeRoute.subMenu.visuals!.map((visual, index) => (
                                    <div key={index} className="flex-1">
                                        <ImageWindow visual={visual} index={index} />
                                    </div>
                                ))}
                            </div>
                        </>
                    )}
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
                {/* Logo - Left */}
                <Logo />

                {/* Desktop Navigation - Center */}
                <DesktopNavigation
                    pathname={pathname}
                    openDropdown={openDropdown}
                    setOpenDropdown={setOpenDropdown}
                />

                {/* Right Side - CTA Buttons + Mobile Menu */}
                <div className="flex items-center gap-4">
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
                                                            {route.subMenu.items.map((item) => {
                                                                const Icon = item.icon;
                                                                return (
                                                                    <Button
                                                                        key={item.href}
                                                                        onClick={() => setIsOpen(false)}
                                                                        asChild
                                                                        variant="ghost"
                                                                        className="justify-start text-base h-auto py-3"
                                                                    >
                                                                        <Link href={item.href} onClick={(e) => handleSmoothScroll(e, item.href)}>
                                                                            <div className="flex items-center gap-3 text-left w-full">
                                                                                {Icon && <Icon className="h-4 w-4 text-primary" />}
                                                                                <div>
                                                                                    <div className="font-medium">{item.label}</div>
                                                                                    {item.description && (
                                                                                        <div className="text-xs text-muted-foreground mt-0.5">
                                                                                            {item.description}
                                                                                        </div>
                                                                                    )}
                                                                                </div>
                                                                            </div>
                                                                        </Link>
                                                                    </Button>
                                                                );
                                                            })}
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
                                                    <Link href={route.href} onClick={(e) => handleSmoothScroll(e, route.href)}>{route.label}</Link>
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
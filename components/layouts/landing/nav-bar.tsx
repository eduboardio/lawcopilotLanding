"use client";
import { Menu } from "lucide-react";
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
import {
    NavigationMenu,
    NavigationMenuItem,
    NavigationMenuLink,
    NavigationMenuList,
    NavigationMenuContent,
    NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Logo } from "@/components/logo";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import { ROUTES_WITHOUT_NAVBAR } from "@/constants";
import { ThemeToggle } from "@/components/theme-toggle";

interface RouteProps {
    href: string;
    label: string;
    subMenu?: {
        title: string;
        items: { href: string; label: string }[];
    };
}

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
        href: "#",
        label: "Products",
        subMenu: {
            title: "Our Products",
            items: [
                { href: "/products/lawfirms", label: "For Lawfirms" },
                { href: "/products/lawyers", label: "For Lawyers" },
                { href: "/products/everyone", label: "For Everyone" },
            ],
        },
    },
    {
        href: "/#benefits",
        label: "Why Us?",
    },
    // {
    //     href: "/#faq",
    //     label: "FAQ",
    // },
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

const DesktopNavigation = memo(({ pathname }: { pathname: string }) => (
    <NavigationMenu className="hidden lg:flex mx-auto">
        <NavigationMenuList className="gap-1">
            {routeList.map((route) => {
                // Handle routes with submenus
                if (route.subMenu) {
                    return (
                        <NavigationMenuItem key={route.label}>
                            <NavigationMenuTrigger 
                                className={cn(
                                    "px-4 py-2 text-base bg-transparent hover:bg-transparent focus:bg-transparent data-[state=open]:bg-transparent font-medium rounded-md transition-colors",
                                    pathname === route.href ? "text-primary" : "hover:text-primary"
                                )}
                            >
                                {route.label}
                            </NavigationMenuTrigger>
                            <NavigationMenuContent 
                                className="bg-popover rounded-md shadow-md border border-border/40"
                                // Remove forceMount to restore proper dropdown behavior
                            >
                                <div className="p-4 w-[220px]">
                                    <p className="font-medium mb-2">{route.subMenu.title}</p>
                                    <ul className="space-y-2">
                                        {route.subMenu.items.map((item) => (
                                            <li key={item.href}>
                                                <NavigationMenuLink asChild>
                                                    <Link 
                                                        href={item.href}
                                                        className="block p-2 hover:bg-accent rounded text-sm transition-colors"
                                                    >
                                                        {item.label}
                                                    </Link>
                                                </NavigationMenuLink>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </NavigationMenuContent>
                        </NavigationMenuItem>
                    );
                }
                
                // Regular routes without submenus
                return (
                    <NavigationMenuItem key={route.href}>
                        <Link 
                            href={route.href} 
                            className={cn(
                                "px-4 py-2 text-base font-medium rounded-md transition-colors",
                                pathname === route.href || (route.href === "/#hero" && pathname === "/") || 
                                (route.href === "/blog" && pathname.startsWith("/blog"))
                                    ? "text-primary" 
                                    : "hover:text-primary"
                            )}
                        >
                            {route.label}
                        </Link>
                    </NavigationMenuItem>
                );
            })}
        </NavigationMenuList>
    </NavigationMenu>
));

DesktopNavigation.displayName = 'DesktopNavigation';

export const Navbar = () => {
    const [isOpen, setIsOpen] = useState<boolean>(false);
    const [scrolled, setScrolled] = useState<boolean>(false);
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
                                        {routeList.map((route) => {
                                            // If it has a submenu, render the submenu items
                                            if (route.subMenu) {
                                                return (
                                                    <div key={route.label} className="flex flex-col">
                                                        <Button
                                                            variant="ghost"
                                                            className="justify-start text-lg font-medium"
                                                        >
                                                            {route.label}
                                                        </Button>
                                                        <div className="pl-4 flex flex-col gap-1">
                                                            {route.subMenu.items.map((item) => (
                                                                <Button
                                                                    key={item.href}
                                                                    onClick={() => setIsOpen(false)}
                                                                    asChild
                                                                    variant="ghost"
                                                                    className="justify-start text-base"
                                                                >
                                                                    <Link href={item.href}>{item.label}</Link>
                                                                </Button>
                                                            ))}
                                                        </div>
                                                    </div>
                                                );
                                            }
                                            
                                            // Regular menu item
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
                    
                    {/* Desktop Navigation - Memoized */}
                    <DesktopNavigation pathname={pathname} />
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
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
    NavigationMenuContent,
    NavigationMenuItem,
    NavigationMenuLink,
    NavigationMenuList,
    NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import Image from "next/image";
import { Logo } from "@/components/logo";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import { ROUTES_WITHOUT_NAVBAR } from "@/constants";
import { ThemeToggle } from "@/components/theme-toggle";
import { useTheme } from "next-themes";

interface RouteProps {
    href: string;
    label: string;
}

interface FeatureProps {
    title: string;
    description: string;
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

const featureList: FeatureProps[] = [
    {
        title: "Showcase Your Value ",
        description: "Highlight how your product solves user problems.",
    },
    {
        title: "Build Trust",
        description:
            "Leverages social proof elements to establish trust and credibility.",
    },
    {
        title: "Capture Leads",
        description:
            "Make your lead capture form visually appealing and strategically.",
    },
];

export const Navbar = () => {
    const [isOpen, setIsOpen] = useState<boolean>(false);
    const [scrolled, setScrolled] = useState<boolean>(false);
    const pathname = usePathname();
    const { theme } = useTheme();
    const shouldHideHeaderNavbar = ROUTES_WITHOUT_NAVBAR.includes(pathname);

    useEffect(() => {
        const handleScroll = () => {
            const heroSection = document.getElementById("hero");
            const heroHeight = heroSection?.offsetHeight ?? 0;
            const isScrolled = window.scrollY > heroHeight;
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
                "z-40 h-20 flex justify-centers items-center sticky top-0 transition-colors duration-300",
                {
                    "bg-[#DFE5F2] !text-black": pathname === "/" && !scrolled && theme === "light",
                    "bg-gray-900 !text-white": pathname === "/" && !scrolled && theme === "dark",
                    "bg-background !text-black dark:!text-white": scrolled || pathname !== "/",
                }
            )}
        >
            <div className="container mx-auto flex justify-between items-center p-2">
                {/* Logo and Navigation */}
                <div className="flex justify-between lg:w-max lg:justify-center items-center gap-10 w-full">
                    <Logo />
                    {/* <!-- Mobile --> */}
                    <div className="flex items-center lg:hidden">
                        <Sheet open={isOpen} onOpenChange={setIsOpen}>
                            <SheetTrigger asChild>
                                <Menu
                                    onClick={() => setIsOpen(!isOpen)}
                                    className="cursor-pointer lg:hidden"
                                />
                            </SheetTrigger>

                            <SheetContent
                                side="left"
                                className="flex flex-col justify-between rounded-tr-2xl rounded-br-2xl bg-card border-secondary"
                            >
                                <div>
                                    <SheetHeader className="mb-4 ml-4">
                                        <SheetTitle className="flex items-center">
                                            <Logo type="FULL" />
                                        </SheetTitle>
                                    </SheetHeader>

                                    <div className="flex flex-col gap-2">
                                        {routeList.map(({ href, label }) => (
                                            <Button
                                                key={href}
                                                onClick={() => setIsOpen(false)}
                                                asChild
                                                variant="ghost"
                                                className="justify-start text-base"
                                            >
                                                <Link href={href}>{label}</Link>
                                            </Button>
                                        ))}
                                    </div>
                                </div>

                                <SheetFooter className="flex-col sm:flex-col justify-start items-start w-full">
                                    <Separator className="mb-2" />

                                    <div className="flex items-center justify-between w-full mb-4">
                                        <span>Switch Theme</span>
                                        <ThemeToggle />
                                    </div>

                                    <CallToActions
                                        classes={{
                                            container: "w-full flex flex-col gap-4",
                                            button: "w-full",
                                        }}
                                    />
                                </SheetFooter>
                            </SheetContent>
                        </Sheet>
                    </div>
                    {/* <!-- Desktop --> */}
                    <NavigationMenu className="hidden lg:block mx-auto">
                        <NavigationMenuList>
                            {false && (
                                <NavigationMenuItem>
                                    <NavigationMenuTrigger className="bg-card text-base">
                                        Features
                                    </NavigationMenuTrigger>
                                    <NavigationMenuContent>
                                        <div className="grid w-[600px] grid-cols-2 gap-5 p-4">
                                            <Image
                                                src="/images/placeholder.png"
                                                alt="RadixLogo"
                                                className="h-full w-full rounded-md object-cover"
                                                width={600}
                                                height={600}
                                            />
                                            <ul className="flex flex-col gap-2">
                                                {featureList.map(({ title, description }) => (
                                                    <li
                                                        key={title}
                                                        className="rounded-md p-3 text-sm hover:bg-muted"
                                                    >
                                                        <p className="mb-1 font-semibold leading-none text-foreground">
                                                            {title}
                                                        </p>
                                                        <p className="line-clamp-2 text-muted-foreground">
                                                            {description}
                                                        </p>
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>
                                    </NavigationMenuContent>
                                </NavigationMenuItem>
                            )}

                            <NavigationMenuItem>
                                {routeList.map(({ href, label }) => (
                                    <NavigationMenuLink key={href} asChild>
                                        <Link href={href} className="text-base px-2">
                                            {label}
                                        </Link>
                                    </NavigationMenuLink>
                                ))}
                            </NavigationMenuItem>
                        </NavigationMenuList>
                    </NavigationMenu>
                </div>

                <div className="hidden lg:flex justify-center items-center gap-4">
                    <ThemeToggle />
                    <CallToActions
                        classes={{
                            container: "flex gap-4",
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
        button?: string;
    };
}
const CallToActions = ({ classes }: CallToActionsProps) => {
    return (
        <div className={classes?.container}>
            <Button variant={"secondary"} className={classes?.button}>
                <Link href={`/signin`}> Sign in </Link>
            </Button>
            <Button
                className={`bg-foreground hover:bg-foreground/80 text-background ${classes?.button}`}
                asChild
            >
                <Link href={`/signup`}> Get Started</Link>
            </Button>
        </div>
    );
};
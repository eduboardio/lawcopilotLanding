"use client"
import { Footer } from "@/components/layouts/landing/footer";
import { Navbar } from "@/components/layouts/landing/nav-bar";
import dynamic from "next/dynamic";
import React, { ReactNode } from "react";

const SmoothScroll = dynamic(
    () => import("@/components/smooth-scroll").then((mod) => mod.SmoothScroll),
    { ssr: false }
);

const LandingLayout = ({ children }: { children: ReactNode }) => {
    return (
        <>
            <SmoothScroll />
            <Navbar />
            <div className="main-content-wrapper">
                {children}
            </div>
            <Footer />
        </>
    );
};

export default LandingLayout;
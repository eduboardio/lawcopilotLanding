import { Footer } from "@/components/layouts/landing/footer";
import { Navbar } from "@/components/layouts/landing/nav-bar";
import { SmoothScroll } from "@/components/smooth-scroll";
import React, { ReactNode } from "react";

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
import { Footer } from "@/components/layouts/landing/footer";
import { Navbar } from "@/components/layouts/landing/nav-bar";
import React, { ReactNode } from "react";

const LandingLayout = ({ children }: { children: ReactNode }) => {
    return (
        <>
            <Navbar />
            {children}
            <Footer />
        </>
    );
};

export default LandingLayout;

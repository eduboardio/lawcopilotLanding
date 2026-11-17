import Link from "next/link";
import { SiteFooter } from "@/components/site/site-footer";
import { SiteNav } from "@/components/site/site-nav";
import { ZoomablePage } from "@/components/site/zoomable-page";
import { BODY, Container, PrimaryButton, SecondaryButton } from "@/components/site/primitives";

export default function NotFound() {
  return (
    <ZoomablePage>
      <SiteNav />
      <main>
        <Container as="div" top={96} bottom={120}>
          <div style={{ fontSize: "14px", color: "#66625b", marginBottom: "22px" }}>404</div>
          <h1 className="serif" style={{ margin: 0, maxWidth: "760px", fontSize: "clamp(44px, 5.8vw, 82px)", lineHeight: 1.02, letterSpacing: "-0.03em", textWrap: "balance" }}>
            We couldn’t find that page
          </h1>
          <p style={{ margin: "24px 0 0", maxWidth: "560px", fontSize: "17px", lineHeight: 1.6, color: BODY }}>
            It may have moved in our redesign. The <Link href="/" style={{ textDecoration: "underline", textUnderlineOffset: "3px" }}>home page</Link> covers research, drafting, tabular review, document briefs and case tracking.
          </p>
          <div style={{ marginTop: "32px", display: "flex", gap: "12px", flexWrap: "wrap" }}>
            <PrimaryButton href="/">Go to the home page</PrimaryButton>
            <SecondaryButton href="/contact">Contact us</SecondaryButton>
          </div>
        </Container>
      </main>
      <SiteFooter />
    </ZoomablePage>
  );
}

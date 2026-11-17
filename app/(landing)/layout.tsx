import { SiteNav } from "@/components/site/site-nav";
import { ZoomablePage } from "@/components/site/zoomable-page";

export default function LandingLayout({ children }: { children: React.ReactNode }) {
  return (
    <ZoomablePage>
      <SiteNav />
      <main>{children}</main>
    </ZoomablePage>
  );
}

import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Blog & Resources",
  description:
    "Guides, product deep-dives, and resources on AI for Indian legal practice. Document drafting, research, case analytics, and contract review.",
};

export default function BlogLayout({ children }: { children: React.ReactNode }) {
  return children;
}

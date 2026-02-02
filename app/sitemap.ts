import type { MetadataRoute } from "next";

const baseUrl = "https://lawcopilot.io";

const staticRoutes = [
  "",
  "/about",
  "/blog",
  "/careers",
  "/case-analytics",
  "/contact",
  "/document-analysis",
  "/document-drafting",
  "/faq",
  "/privacy-policy",
  "/products",
  "/products/everyone",
  "/products/lawfirms",
  "/products/lawyers",
  "/research-engine",
  "/resources",
  "/resources/contract-review",
  "/resources/getting-started",
  "/resources/indian-legal-ai",
  "/terms",
  "/translation",
];

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();

  return staticRoutes.map((path) => ({
    url: `${baseUrl}${path}`,
    lastModified,
    changeFrequency: path === "" ? "weekly" : path.startsWith("/blog") ? "weekly" : "monthly",
    priority: path === "" ? 1 : path.startsWith("/products") || path === "/contact" ? 0.9 : 0.8,
  }));
}

import type { MetadataRoute } from "next";

const baseUrl = "https://lawcopilot.io";

const staticRoutes = [
  "",
  "/about",
  "/case-analytics",
  "/contact",
  "/document-drafting",
  "/faq",
  "/privacy-policy",
  "/research-engine",
  "/terms",
  "/translation",
];

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();

  return staticRoutes.map((path) => ({
    url: `${baseUrl}${path}`,
    lastModified,
    changeFrequency: path === "" ? "weekly" : "monthly",
    priority: path === "" ? 1 : path === "/contact" ? 0.9 : 0.8,
  }));
}

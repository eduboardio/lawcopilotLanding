import type { MetadataRoute } from "next";
import { PRACTICE_AREAS, SOLUTIONS } from "@/components/site/site-links";

const baseUrl = "https://lawcopilot.io";

const staticRoutes = [
  "",
  ...SOLUTIONS.map((s) => s.href),
  ...PRACTICE_AREAS.map((p) => p.href),
  "/whatsapp",
  "/security",
  "/about",
  "/contact",
  "/privacy-policy",
  "/terms",
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

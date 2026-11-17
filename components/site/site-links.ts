/** Where the site's pages live, so the nav, footer and pages link the same way. */

export const APP_URL = "https://app.lawcopilot.io";
export const SIGN_IN_URL = "https://app.lawcopilot.io/signin";
export const SIGNUP_URL = "https://app.lawcopilot.io/signup";

export const SOLUTIONS = [
  { href: "/law-firms", title: "Law firms", detail: "Every matter and associate on one platform" },
  { href: "/in-house-teams", title: "In-house teams", detail: "Contracts, approvals and outside counsel" },
  { href: "/litigation", title: "Litigation", detail: "From the paper book to the next date" },
] as const;

export const PRACTICE_AREAS = [
  { href: "/practice-areas/litigation-and-appeals", title: "Litigation and appeals", detail: "Briefs and research before the hearing" },
  { href: "/practice-areas/insolvency-and-banking", title: "Insolvency and banking", detail: "Every application read into one table" },
  { href: "/practice-areas/real-estate", title: "Real estate", detail: "Title work, from the EC to the chain of title" },
  { href: "/practice-areas/m-and-a", title: "M&A", detail: "Due diligence across the data room" },
  { href: "/practice-areas/in-house", title: "In-house", detail: "Contracts drafted and revised in the editor" },
] as const;

/** The home page's platform sections, as the footer lists them. */
export const PLATFORM = [
  { href: "/#research", title: "Research" },
  { href: "/#drafting", title: "Drafting" },
  { href: "/#tabular", title: "Tabular Review" },
  { href: "/#briefs", title: "Document Briefs" },
  { href: "/#cases", title: "Case tracking" },
  { href: "/whatsapp", title: "WhatsApp" },
] as const;

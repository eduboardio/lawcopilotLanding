// SEO & site
export const SITE_URL = "https://lawcopilot.io";
export const SITE_NAME = "Law Copilot";
export const DEFAULT_OG_IMAGE = `${SITE_URL}/website.png`;

// Business (aligned with contact page)
export const BUSINESS = {
  email: "hello@lawcopilot.io",
  phone: "+91 9603354488",
  phoneTel: "+919603354488",
  address: "Hyderabad, Telangana, India",
  hours: "Mon-Fri, 9:00 AM - 5:00 PM IST",
  legalName: "Law Co-Pilot LLP",
} as const;

// Social (add X/Facebook URLs when created)
export const SOCIAL = {
  instagram: "https://www.instagram.com/lawcopilot",
  linkedin: "https://www.linkedin.com/company/lawcopilot",
  x: "", // e.g. "https://x.com/lawcopilot"
  facebook: "", // e.g. "https://www.facebook.com/lawcopilot"
} as const;

export const ROLE = {
    ASSISTANT: "assistant",
    HUMAN: "human",
    SYSTEM: "system",
} as const;

export const USER_AVATAR_PLACEHOLDER: string = "/images/manikantanath.png"


export const ROUTES_WITHOUT_NAVBAR = [
    "/signup",
    "/signin",
    "/dashboard",
];

export const ROUTES_WITHOUT_FOOTER = [
    "/signup",
    "/signin",
    "/dashboard",
];

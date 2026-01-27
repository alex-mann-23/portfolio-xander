export type Project = {
  slug: string;
  title: string;
  summary: string;
  tags: string[];
  year?: string;
  role?: string;
  featured?: boolean;
  image: string;
  imageAlt?: string;
  links?: {
    live?: string;
    repo?: string;
  };
  body: string[];
};

export const projects: Project[] = [
  {
    slug: "unlock",
    title: "Unlock",
    summary: "Security-first access for modern identity teams.",
    tags: ["Product", "Security", "Platform"],
    year: "2024",
    role: "Product Design / UX Strategy",
    featured: true,
    image:
      "https://cdn.prod.website-files.com/5f85f6aeb7cf74ee1bc94975/601038b1c79e167af7d6bb4f_Preview-Unlock.png",
    body: [
      "Unlock needed a clear narrative for enterprise identity teams.",
      "I focused on security-first messaging, tightened the information architecture, and introduced a clean visual system.",
      "The new experience improved demo requests and reduced sales friction.",
    ],
  },
  {
    slug: "gp-website",
    title: "GP Website",
    summary: "Modern marketing site for a consulting practice.",
    tags: ["Web", "Brand", "Marketing"],
    year: "2023",
    role: "Web Design / Content Strategy",
    featured: true,
    image:
      "https://cdn.prod.website-files.com/5f85f6aeb7cf74ee1bc94975/5f91d729a5eae20d80de2f93_Preview-Petersen.png",
    body: [
      "GP wanted a modern site that highlighted its consulting practice.",
      "I mapped the content to client outcomes, refreshed typography, and built modular sections.",
      "The launch improved inbound inquiries and recruiter engagement.",
    ],
  },
  {
    slug: "unit-1",
    title: "UNIT 1",
    summary: "Brand system and product storytelling for a new venture.",
    tags: ["Brand", "Web", "Design System"],
    year: "2023",
    role: "Brand Design / UI",
    featured: true,
    image:
      "https://cdn.prod.website-files.com/5f85f6aeb7cf74ee1bc94975/5ff086f79c74e66cb269e71b_Preview-Unit1.png",
    body: [
      "UNIT 1 required a cohesive story across product and brand touchpoints.",
      "I built a simple design language and a flexible layout system for case studies.",
      "The work clarified the value proposition and improved time-on-site.",
    ],
  },
  {
    slug: "rga-dvs",
    title: "R/GA DVS",
    summary: "Venture studio portfolio with bold storytelling.",
    tags: ["Web", "Agency", "Portfolio"],
    year: "2022",
    role: "Experience Design",
    featured: true,
    image:
      "https://cdn.prod.website-files.com/5f85f6aeb7cf74ee1bc94975/5f9c5bf1e706d9e63c5a778c_Preview-RGA.png",
    body: [
      "R/GA DVS needed a portfolio that elevated new ventures.",
      "I created a grid-based system with confident storytelling and lightweight motion.",
      "The update made new initiatives easier to discover.",
    ],
  },
  {
    slug: "coddle",
    title: "Coddle",
    summary: "Friendly onboarding for a modern care platform.",
    tags: ["Product", "Healthcare", "UX"],
    year: "2021",
    role: "Product Design",
    featured: true,
    image:
      "https://cdn.prod.website-files.com/5f85f6aeb7cf74ee1bc94975/5f91ec7fe8e905101b69abe6_Preview-Coddle.png",
    body: [
      "Coddle needed a welcoming onboarding experience for new caregivers.",
      "I simplified the flows, added reassuring microcopy, and crafted a calm interface.",
      "Activation rose as users completed setup more quickly.",
    ],
  },
  {
    slug: "produck",
    title: "Produck",
    summary: "Playful ecommerce concept for collectible products.",
    tags: ["Ecommerce", "Brand", "Retail"],
    year: "2020",
    role: "Visual Design / UX",
    featured: true,
    image:
      "https://cdn.prod.website-files.com/5f85f6aeb7cf74ee1bc94975/5f9c5bdcc6f5c04cfe6bea15_Preview-Produck.png",
    body: [
      "Produck needed a playful ecommerce concept that still felt premium.",
      "I designed the product grid, bundle flows, and brand motifs for collectors.",
      "The concept tested well with early users and repeat buyers.",
    ],
  },
];

export const projectTags = ["All", ...new Set(projects.flatMap((project) => project.tags))];

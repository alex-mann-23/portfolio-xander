export type Project = {
  slug: string;
  title: string;
  summary: string;
  tags: string[];
  year?: string;
  role?: string;
  featured?: boolean;
  links?: {
    live?: string;
    repo?: string;
  };
  body: string[];
};

export const projects: Project[] = [
  {
    slug: "summit-finance",
    title: "Summit Finance",
    summary: "A calm dashboard experience for long-term investing.",
    tags: ["Product", "Dashboard", "Fintech"],
    year: "2024",
    role: "Product Design / UX Strategy",
    featured: true,
    links: {
      live: "https://example.com",
      repo: "https://github.com",
    },
    body: [
      "Summit Finance needed a dashboard that felt trustworthy and clear for non-technical investors.",
      "I mapped the information hierarchy, simplified reporting, and introduced a lightweight visual system for fast scanning.",
      "The result was a 28% increase in weekly active users and a measurable drop in support requests.",
    ],
  },
  {
    slug: "northstar-mobile",
    title: "Northstar Mobile",
    summary: "Onboarding and habit loops for a mental wellness app.",
    tags: ["Mobile", "Wellness", "UX"],
    year: "2023",
    role: "Product Design / Research",
    featured: true,
    links: {
      live: "https://example.com",
    },
    body: [
      "Northstar needed a gentle onboarding flow that balanced education with quick wins.",
      "I crafted a two-minute setup journey and a modular habit tracker to reduce cognitive load.",
      "Retention improved by 19% in the first 30 days after launch.",
    ],
  },
  {
    slug: "atlas-landing",
    title: "Atlas Landing",
    summary: "A conversion-focused marketing site for a logistics startup.",
    tags: ["Web", "Brand", "Growth"],
    year: "2022",
    role: "UI Design / Content Strategy",
    featured: true,
    links: {
      live: "https://example.com",
    },
    body: [
      "Atlas needed a new web presence that quickly explained a complex product.",
      "I built a clear narrative with modular sections, lightweight motion, and strong type hierarchy.",
      "The redesign doubled demo requests within the first six weeks.",
    ],
  },
  {
    slug: "halo-commerce",
    title: "Halo Commerce",
    summary: "A modular design system for a multi-brand commerce suite.",
    tags: ["Design System", "Web", "Commerce"],
    year: "2021",
    role: "Design Systems / UI",
    featured: false,
    body: [
      "Halo Commerce needed consistency across four brand portals without losing individuality.",
      "I designed a token-based system and a shared component library with documented patterns.",
      "The system reduced design debt and shortened new feature delivery cycles.",
    ],
  },
  {
    slug: "studio-notes",
    title: "Studio Notes",
    summary: "A minimal writing tool for teams who document everything.",
    tags: ["SaaS", "Productivity", "Web"],
    year: "2020",
    role: "Product Design",
    featured: false,
    body: [
      "Studio Notes required a writing interface that felt as calm as a paper notebook.",
      "I introduced soft visual affordances, subtle borders, and a focused writing mode.",
      "The product became the team's default documentation hub within a month.",
    ],
  },
];

export const projectTags = ["All", ...new Set(projects.flatMap((project) => project.tags))];

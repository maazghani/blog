import type { Metadata, Site, Socials } from "@types";

export const SITE: Site = {
  TITLE: "Maaz's Blog",
  DESCRIPTION: "Maaz's Blog",
  EMAIL: "maazghani@gmail.com",
  NUM_POSTS_ON_HOMEPAGE: 3,
  NUM_PROJECTS_ON_HOMEPAGE: 2,
};

export const HOME: Metadata = {
  TITLE: "Home",
  DESCRIPTION: "Astro Micro is an accessible theme for Astro.",
};

export const BLOG: Metadata = {
  TITLE: "Blog",
  DESCRIPTION: "A collection of articles on topics I am passionate about.",
};

export const PROJECTS: Metadata = {
  TITLE: "Projects",
  DESCRIPTION:
    "A collection of my projects with links to repositories and live demos.",
};

export const SOCIALS: Socials = [
  {
    NAME: "X (formerly Twitter)",
    HREF: "https://twitter.com/icepaani",
  },
  {
    NAME: "GitHub",
    HREF: "https://github.com/maazghani",
  },
  {
    NAME: "Website",
    HREF: "https://maazghani.com",
  },
];

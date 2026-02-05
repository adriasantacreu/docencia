import type { Site, Page, Links, Socials } from "@types"

// Global
export const SITE: Site = {
  TITLE: "Portafoli Docència",
  DESCRIPTION: "Benvingut al meu portafoli personal i de docència.",
  AUTHOR: "Adrià Santacreu",
}

// Work Page
export const WORK: Page = {
  TITLE: "Experiència",
  DESCRIPTION: "Llocs on he treballat.",
}

// Blog Page
export const BLOG: Page = {
  TITLE: "Blog",
  DESCRIPTION: "Escrits sobre temes que m'apassionen.",
}

// Projects Page 
export const PROJECTS: Page = {
  TITLE: "Projectes",
  DESCRIPTION: "Projectes recents en els que he treballat.",
}

// Search Page
export const SEARCH: Page = {
  TITLE: "Cercar",
  DESCRIPTION: "Cerca tots els articles i projectes.",
}

// Links
export const LINKS: Links = [
  {
    TEXT: "Inici",
    HREF: "/",
  },
  {
    TEXT: "Experiència",
    HREF: "/work",
  },
  {
    TEXT: "Blog",
    HREF: "/blog",
  },
  {
    TEXT: "Projectes",
    HREF: "/projects",
  },
  {
    TEXT: "Generador",
    HREF: "/generador",
  },
]

// Socials
export const SOCIALS: Socials = [
  {
    NAME: "Email",
    ICON: "email",
    TEXT: "adria.santacreu@gmail.com",
    HREF: "mailto:adria.santacreu@gmail.com",
  },
  {
    NAME: "Github",
    ICON: "github",
    TEXT: "adriasantacreu",
    HREF: "https://github.com/adriasantacreu"
  },
]

// Place any global data in this file.
// You can import this data from anywhere in your site by using the `import` keyword.

// Site title and description
export const SITE_TAB = "Phoenix Blog";
export const SITE_TITLE = "Phoenix Blog";
export const SITE_DESCRIPTION = "Phoenix tech blog";
export const DATE_FORMAT = "ddd MMM DD YYYY";

// User profile information
export const USER_NAME = "bassiounix";
export const USER_SITE = "https://bassiounix.github.io"
export const USER_AVATAR = "/profile.jpeg";

// Server and transition settings
export const SERVER_URL = "https://waline-tau-rosy.vercel.app/";

// Menu items for navigation
export const menuItems = [
  { id: "home", text: "Home", href: "/", svg: "home", target: "_self" }, // Home page
  { id: "about", text: "About", href: "/about", svg: "about", target: "_self" }, // About page
  {
    id: "blog",
    text: "Blogs",
    href: "/blog",
    svg: "blog",
    target: "_self",
    subItems: [
      {
        id: "all",
        text: "All blogs",
        href: "/blog",
        svg: "post",
        target: "_self",
      }, // All blog
      {
        id: "tech",
        text: "Tech blogs",
        href: "/blog/categories/tech",
        svg: "cube",
        target: "_self",
      }, // Technology category
      {
        id: "life",
        text: "Life blogs",
        href: "/blog/categories/life",
        svg: "heart",
        target: "_self",
      }, // Life category
    ],
  }, // Blog page with sub-items
  {
    id: "projects",
    text: "Projects",
    href: "/projects",
    svg: "project",
    target: "_self",
  }, // Projects page
  {
    id: "contact",
    text: "Contact",
    href: "mailto:muhammad.m.bassiouni@gmail.com", // Contact email
    target: "_blank", // Open in a new tab
    svg: "contact",
  },
];

// Social media and contact icons
export const socialIcons = [
  {
    href: "https://www.youtube.com/@bassiounix",
    ariaLabel: "YouTube",
    title: "YouTube",
    svg: "youtube",
  },
  {
    href: "https://www.linkedin.com/in/bassiounix",
    ariaLabel: "LinkedIn",
    title: "LinkedIn",
    svg: "linkedin",
  },
  {
    href: "https://github.com/bassiounix",
    ariaLabel: "Github",
    title: "Github",
    svg: "github",
  },
  {
    href: "https://twitter.com/bassiounix",
    ariaLabel: "X",
    title: "X",
    svg: "x",
  },
  {
    href: "/rss.xml",
    ariaLabel: "RSS Feed",
    title: "RSS Feed",
    svg: "rss",
  },
];

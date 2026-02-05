import { themes as prismThemes } from "prism-react-renderer";
import type { Config } from "@docusaurus/types";
import type * as Preset from "@docusaurus/preset-classic";

const config: Config = {
  title: "Full Stack Decal",
  favicon: "img/favicon.ico",

  url: "https://fullstackdecal.com",
  baseUrl: "/",

  organizationName: "fullstack-decal", // Usually your GitHub org/user name.
  projectName: "fullstackdecal", // Usually your repo name.

  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "throw",

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: "en",
    locales: ["en"],
  },

  presets: [
    [
      "classic",
      {
        docs: {
          sidebarPath: "./sidebars.ts",
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl: "https://github.com/fullstack-decal/website/edit/main",
        },
        theme: {
          customCss: "./src/css/custom.css",
        },
      } satisfies Preset.Options,
    ],
  ],

  themeConfig: {
    navbar: {
      title: "Full Stack Decal",
      logo: {
        alt: "Full Stack Decal Logo",
        src: "img/logo.png",
      },
      items: [
        {
          type: "doc",
          docId: "Overview",
          position: "left",
          label: "Textbook",
        },
        {
          to: "Syllabus",
          position: "left",
          label: "Syllabus",
        },
        {
          to: "staff",
          position: "left",
          label: "Staff",
        },
        // {
        //   to: "resources",
        //   position: "left",
        //   label: "Resources",
        // },
        // {
        //   href: "https://docs.google.com/forms/d/e/1FAIpQLSfZpLvil5TvY2QNWlSenUTdOAgg-PKIdsaA6NFeKyCTmmskig/viewform",
        //   position: "left",
        //   label: "Apply for Spring 2026",
        // },
        // {
        //   href: "https://forms.gle/BkWPH2HQCamWW8548",
        //   position: "left",
        //   label: "Attendance",
        // },
        // {
        //   href: "https://forms.gle/W3xbPcBhzCgGqyyr9",
        //   position: "left",
        //   label: "Extensions",
        // },
        // {
        //   href: "https://calendar.google.com/calendar/u/0?cid=Y180M2FjZWMwYWI1NzE5ODUyMGFlNzk0YWE3YzcyYmYxZGU1ZmVlOGMzNTVmODJlNDNhMDJlZjdmYjJiMDI0Njg5QGdyb3VwLmNhbGVuZGFyLmdvb2dsZS5jb20",
        //   label: "Course Calendar",
        // },
        // {
        //   href: "",
        //   position: "left",
        //   label: "Ed",
        // },
        {
          href: "https://github.com/fullstack-decal",
          position: "right",
          className: "header-github-link",
          "aria-label": "GitHub repository",
        },
      ],
    },
    footer: {
      style: "dark",
      links: [
        {
          title: "Quick Links",
          items: [
            {
              label: "Lecture Recordings",
              to: "https://www.youtube.com/channel/UCGpukPda1pJ8Ei20e02oR0w",
            },
          ],
        },
        {
          title: "Community",
          items: [
            {
              label: "Facebook",
              href: "https://www.facebook.com/webatberkeley/",
            },
            {
              label: "Instagram",
              href: "https://www.instagram.com/webatberkeley/",
            },
          ],
        },
        {
          title: "More",
          items: [
            {
              label: "WDB Website",
              href: "https://webatberkeley.org/",
            },
            {
              label: "GitHub",
              href: "https://github.com/full-stack-decal",
            },
          ],
        },
      ],
      copyright: "Maintained and built by WDB with Docusaurus.",
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
    // announcementBar: {
    //   id: "announcementBar-2",
    //   content: `Applications to enroll for Spring 2026 are open and due <strong>Feb 4th</strong>. Apply <a target="_blank" rel="noopener noreferrer" href="https://docs.google.com/forms/d/e/1FAIpQLSfZpLvil5TvY2QNWlSenUTdOAgg-PKIdsaA6NFeKyCTmmskig/viewform">here</a>!`,
    //   isCloseable: true,
    // },
  } satisfies Preset.ThemeConfig,
};

export default config;

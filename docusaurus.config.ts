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

  onBrokenLinks: "warn",
  onBrokenMarkdownLinks: "warn",

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
          label: "Content",
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
        {
          to: "resources",
          position: "left",
          label: "Resources",
        },
        {
          href: "https://forms.gle/qmorW2vXzC5RjEjh8",
          position: "left",
          label: "Attendance Form",
        },
        {
          href: "https://forms.gle/FYDUNhc5vMknwKoi9",
          position: "left",
          label: "Extension Form",
        },
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
    // Use this to announce enrollment
    // announcementBar: {
    //   id: "announcementBar-2",
    //   content: `Enrollment for Fall 2024 is now open! Please apply <a target="_blank" rel="noopener noreferrer" href="https://fullstackdecal.com/enroll">here</a>.`,
    // },
  } satisfies Preset.ThemeConfig,
};

export default config;

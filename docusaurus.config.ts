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
          href: "https://docs.google.com/forms/d/e/1FAIpQLSe-Ej7U6q4ADySIzIJjnaWh5veSbPcZ4g4pJ-_b5iDgVM5Kcg/viewform?usp=header",
          position: "left",
          label: "Attendance Form",
        },
        {
          href: "https://docs.google.com/forms/d/e/1FAIpQLScHHyzhp0nZ_RnVbU0X8OcS7DqgwWf3B-O7qvNl8FpaXq41Tw/viewform?usp=header",
          position: "left",
          label: "Extension Form",
        },
        {
          href: "https://calendar.google.com/calendar/u/0?cid=Y183YTMwOTM2YjE3NWZkOTFhYmNiNTdlNTU0YjU5ZjYxODMzMmQ4M2I0NDQ3Zjc5OGQxNzJhZjk1ZjlmNzVlNWQ4QGdyb3VwLmNhbGVuZGFyLmdvb2dsZS5jb20",
          label: "Course Calendar",
        },
        {
          href: "https://edstem.org/us/courses/76026/discussion/6144697",
          position: "left",
          label: "Ed",
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
    // announcementBar: {
    //   id: "announcementBar-2",
    //   content: `Our Spring 2025 Decal Applications are still rolling and have a few spaces left! Please apply ASAP <a target="_blank" rel="noopener noreferrer" href="https://forms.gle/9ziqSk31tHpWJU9L6">here</a>.`,
    //   isCloseable: false,
    // },
  } satisfies Preset.ThemeConfig,
};

export default config;

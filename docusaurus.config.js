// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require("prism-react-renderer/themes/github");
const darkCodeTheme = require("prism-react-renderer/themes/dracula");

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: "Full Stack Decal",
  favicon: "img/favicon.ico",

  url: "https://fullstackdecal.com",
  baseUrl: "/",

  organizationName: "fullstack-decal", // Usually your GitHub org/user name.
  projectName: "fullstackdecal", // Usually your repo name.

  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "warn",

  presets: [
    [
      "classic",
      /** @type {import('@docusaurus/preset-classic').Options} */
      {
        docs: {
          sidebarPath: require.resolve("./sidebars.js"),
          // Please change this to your repo.
          editUrl: "https://github.com/fullstack-decal/website/edit/main",
        },
        theme: {
          customCss: require.resolve("./src/css/custom.css"),
        },
      },
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
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
             href: "https://docs.google.com/forms/d/e/1FAIpQLSfktrNEIJovVzKOTV2gJEpg30kK0SVKoXXur0boEhNwlJ-jpg/viewform",
             position: "left",
             label: "Enroll",
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
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
      // Use this to announce enrollment
      // announcementBar: {
      //   id: "announcementBar-2",
      //   content: `Enrollment for Fall 2023 is now open. Sign up <a target="_blank" rel="noopener noreferrer" href="https://fullstackdecal.com/enroll">here</a>!`,
      // },
    }),
};

module.exports = config;

// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Full Stack Decal',
  url: 'https://fullstackdecal.com',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',
  organizationName: 'fullstack-decal', // Usually your GitHub org/user name.
  projectName: 'website', // Usually your repo name.

  themes: ['@docusaurus/theme-live-codeblock'],

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          editUrl: 'https://github.com/fullstack-decal/website/edit/main',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      })
    ]
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      navbar: {
        title: 'Full Stack Decal',
        logo: {
          alt: 'Full Stack Decal Logo',
          src: 'img/logo.png',
        },
        items: [
          {
            type: 'doc',
            docId: 'Content',
            position: 'left',
            label: 'Content',
          },
          {
            to: 'course-policies',
            position: 'left',
            label: 'Course Policies',
          },
          {
            href: 'https://github.com/fullstack-decal/website',
            label: 'GitHub',
            position: 'right',
          }
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Lessons',
            items: [
              {
                label: 'Intro',
                to: '/docs/Lessons/AboutLessons',
              }
            ],
          },
          {
            title: 'Community',
            items: [
              {
                label: 'Instagram',
                href: 'https://www.instagram.com/webatberkeley/',
              }
            ],
          },
          {
            title: 'More',
            items: [
              {
                label: 'GitHub',
                href: 'https://github.com/full-stack-decal',
              }
            ],
          }
        ],
        copyright: 'Maintained and built by WDB with Docusaurus.',
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
};

module.exports = config;

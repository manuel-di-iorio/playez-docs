// See: https://docusaurus.io/docs/api/docusaurus-config

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Playez',
  tagline: 'Online services for your videogames',
  favicon: 'img/favicon.ico',

  // Set the production url of your site here
  url: 'https://playez-platform.github.io',
  baseUrl: '/docs/',
  organizationName: 'playez-platform', // Usually your GitHub org/user name.
  projectName: 'docs', // Usually your repo name.
  
  deploymentBranch: 'gh-pages',

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  i18n: {
    defaultLocale: 'en',
    locales: ['en', 'it'],
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          routeBasePath: '/',
          sidebarPath: './sidebars.js',
          editUrl:
            'https://github.com/playez-platform/docs/blob/main',
        },
        theme: {
          customCss: './src/css/custom.css',
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      image: 'img/playez-social-card.jpg',
      navbar: {
        logo: {
          alt: 'Playez Logo',
          src: 'img/logo.svg',
        },
        items: [
          // {
          //   type: 'localeDropdown',
          //   position: 'right',
          // },
          {
            href: 'https://playez.it',
            label: 'Back to Playez',
            position: 'right',
          },
        ],
      },
    }),
};

export default config;

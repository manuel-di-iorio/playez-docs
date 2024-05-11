// See: https://docusaurus.io/docs/api/docusaurus-config

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Playez',
  tagline: 'Online services for your videogames',
  favicon: 'img/favicon.ico',

  // Set the production url of your site here
  url: 'https://playez-platform.github.io',
  baseUrl: '/playez-docs/',
  organizationName: 'playez-platform', // Usually your GitHub org/user name.
  projectName: 'playez-docs', // Usually your repo name.
  
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
            'https://github.com/playez-platform/playez-docs/blob/main/docs/',
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
        title: 'Playez',
        logo: {
          alt: 'Playez Logo',
          src: 'img/logo.svg',
        },
        items: [
          {
            href: 'https://playez.com',
            label: 'Back to Playez',
            position: 'right',
          },
        ],
      },
    }),
};

export default config;

// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Feature Probe',
  tagline: 'An open source feature management service',
  url: 'https://github.com/FeatureProbe/FeatureProbe',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'FeatureProbe', // Usually your GitHub org/user name.
  projectName: 'feature-probe-docs', // Usually your repo name.

  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          routeBasePath: '/', 
          // sidebarPath: require.resolve('./sidebars.js'),
          // editUrl:
          //   'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
        },
        // blog: {
        //   showReadingTime: true,
        //   editUrl:
        //     'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
        // },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      navbar: {
        title: '',
        logo: {
          alt: 'FeatureProbe Logo',
          src: 'img/logo.svg',
          srcDark: 'img/logo-light.svg',
        },
        items: [
          // {
          //   type: 'doc',
          //   docId: 'Overview',
          //   position: 'left',
          //   label: 'Docs',
          // },
          // {
          //   to: '/blog', 
          //   label: 'Blog', 
          //   position: 'left'
          // },
          {
            href: 'https://github.com/FeatureProbe',
            label: 'GitHub',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Product',
            items: [
              {
                label: 'Docs',
                to: '/',
              },
              {
                label: 'Github',
                href: 'https://github.com/FeatureProbe/FeatureProbe',
              },
            ],
          },
          {
            title: 'Community',
            items: [
              {
                label: 'Slack',
                href: 'https://join.slack.com/t/featureprobe/shared_invite/zt-1b5qd120x-R~dDbpgL85GgCLTtfNDj0Q',
              },
              {
                label: 'Twitter',
                href: 'https://twitter.com/featureprobe',
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} 滴滴云计算有限公司 京ICP备19038628号-2`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
};

module.exports = config;

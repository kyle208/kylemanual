// @ts-check
// `@type` JSDoc annotations allow editor autocompletion and type checking
// (when paired with `@ts-check`).
// There are various equivalent ways to declare your Docusaurus config.
// See: https://docusaurus.io/docs/api/docusaurus-config

import {themes as prismThemes} from 'prism-react-renderer';

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'kyle插件',
  tagline: '这里你将看到kyle插件的使用说明！',
  favicon: 'img/official/favicon.ico',

  // Set the production url of your site here
  url: 'http://kyle.kylenb.top',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'kyle208', // Usually your GitHub org/user name.
  projectName: 'kylemanual', // Usually your repo name.

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
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
          sidebarPath: './sidebars.js',
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/kyle208/kylemanual/blob/master',
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/kyle208/kylemanual/blob/master',
        },
        theme: {
          customCss: './src/css/custom.css',
        },
      }),
    ],
  ],
  themes: [
    // ... Your other themes.
    [
      require.resolve("@easyops-cn/docusaurus-search-local"),
      /** @type {import("@easyops-cn/docusaurus-search-local").PluginOptions} */
      ({
        // ... Your options.
        // `hashed` is recommended as long-term-cache of index file is possible.
        hashed: true,
		indexDocs: true,
		indexPages: true,
		language: ["en", "zh"],
		docsDir: ["docs"],
		removeDefaultStemmer: true,
        // For Docs using Chinese, The `language` is recommended to set to:
        // ```
        // language: ["en", "zh"],
        // ```
      }),
    ],
  ],
  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      // Replace with your project's social card
      image: 'img/official/docusaurus-social-card.jpg',
      navbar: {
        title: 'kyle',
        logo: {
          alt: 'Logo',
          src: 'img/official/logo.svg',
        },
        items: [
          {
            type: 'docSidebar',
            sidebarId: 'tutorialSidebar',
            position: 'left',
            label: '使用手册',
          },
		  {to: 'http://update.kylenb.top', label: '更新日志', position: 'left'},
		  {to: 'https://mm.edrawsoft.cn/map.html?sharecode=6253d8466eb376a57323139', label: '功能菜单列表', position: 'left'},
          {to: '/blog', label: '博客', position: 'left'},
		  {to: 'http://file.kylenb.top/', label: '【kyle网盘', position: 'left'},
		  {to: 'https://kyle.lanzouw.com/b09meeghi', label: '蓝奏云 密码:6688】', position: 'left'},
		  {to: 'http://kyle.axi8.cn', label: 'kyle论坛', position: 'left'},
          {
            href: 'https://github.com/kyle208',
            label: 'GitHub',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: '使用手册',
            items: [
              {
                label: '插件说明',
                to: '/docs/intro',
              },
            ],
          },
          {
            title: '社区',
            items: [
              {
                label: 'QQ群',
                href: 'https://jq.qq.com/?_wv=1027&k=1QLpCoqt',
              },
			  {
                label: '微信群',
                href: '/',
              }
            ],
          },
          {
            title: '更多',
            items: [
              {
                label: '博客',
                to: '/blog',
              },
              {
                label: 'GitHub',
                href: 'https://github.com/kyle208',
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} kyle, Inc. `,
      },
      prism: {
        theme: prismThemes.github,
        darkTheme: prismThemes.dracula,
      },
    }),
};

export default config;

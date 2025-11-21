import { themes as prismThemes } from 'prism-react-renderer';
import type { Config } from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';
import remarkGithubAdmonitionsToDirectives from 'remark-github-admonitions-to-directives';

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

const config: Config = {
  title: 'Vicki Wu',
  tagline: 'Software Engineer who writes code and solves business problems',
  favicon: 'img/avatar.png',

  // Future flags, see https://docusaurus.io/docs/api/docusaurus-config#future
  future: {
    v4: true, // Improve compatibility with the upcoming Docusaurus v4
  },

  // Set the production url of your site here
  url: 'https://vickiwu.github.io',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/v-blog/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'vickiwu', // Usually your GitHub org/user name.
  projectName: 'v-blog', // Usually your repo name.
  deploymentBranch: 'gh-pages',

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  // Internationalization
  i18n: {
    defaultLocale: 'zh-Hans',
    locales: ['zh-Hans'],
  },
  markdown: {
    format: 'detect',
    mermaid: true,
    // preprocessor: processGithubAdmonitions, // Removed to avoid conflict with remark plugin
    // parseFrontMatter: async (params) => {
    //   const result = await params.defaultParseFrontMatter(params);
    //   result.frontMatter.description =
    //     result.frontMatter.description?.replaceAll('{{MY_VAR}}', 'MY_VALUE');
    //   return result;
    // },
    mdx1Compat: {
      comments: true,
      admonitions: true,
      headingIds: true,
    },
    anchors: {
      maintainCase: true,
    },
  },
  themes: ['@docusaurus/theme-mermaid'],

  presets: [
    [
      'classic',
      {
        // Google Analytics 已移除 - 如需使用，请添加你自己的跟踪 ID
        // googleAnalytics: {
        //   trackingID: 'YOUR-TRACKING-ID',
        //   anonymizeIP: true,
        // },
        // gtag: {
        //   trackingID: 'G-P3MLQ4GJP5',
        //   anonymizeIP: true,
        // },
        docs: {
          sidebarPath: './sidebars.ts',
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/austenstone/portfolio/tree/main/',
          beforeDefaultRemarkPlugins: [remarkGithubAdmonitionsToDirectives],
        },
        blog: {
          showReadingTime: true,
          showLastUpdateTime: true,
          blogTitle: '博客',
          feedOptions: {
            type: 'all',
            xslt: true,
            copyright: `Copyright © ${new Date().getFullYear()} Vicki Wu`
          },
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/vickiwu/v-blog/tree/main/',
          // Useful options to enforce blogging best practices
          onInlineTags: 'warn',
          onInlineAuthors: 'warn',
          onUntruncatedBlogPosts: 'ignore',
        },
        theme: {
          customCss: './src/css/custom.css',
        },
      } satisfies Preset.Options,
    ],
  ],

  themeConfig: {
    // Replace with your project's social card
    image: 'assets/img/japaneese_garden_small.jpg',
    navbar: {
      // title: 'Austen Stone',
      logo: {
        src: '/img/avatar.png',
        style: {
          'border-radius': '50%',
        }
      },
      items: [
        { to: '/blog', label: '博客', position: 'left' },
        {
          type: 'docSidebar',
          sidebarId: 'guides',
          position: 'left',
          label: '指南',
        },
        {
          type: 'docSidebar',
          sidebarId: 'projects',
          position: 'left',
          label: '项目',
        },
        {
          href: 'https://github.com/vickiwu',
          label: 'GitHub',
          position: 'right',
        },
        {
          href: 'https://www.linkedin.com/in/vickiwu/',
          label: 'LinkedIn',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: '联系方式',
          items: [
            {
              label: 'GitHub',
              href: 'https://github.com/vickiwu',
            },
            {
              label: 'LinkedIn',
              href: 'https://www.linkedin.com/in/vickiwu/',
            },
            {
              label: '邮箱',
              href: 'mailto:vicki0wu@gmail.com',
            },
          ],
        },
        {
          title: ' ',
          items: [
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
              label: '简历',
              to: '/resume',
            },
            {
              label: '源代码',
              href: 'https://github.com/vickiwu/v-blog/',
            },
          ],
        },
      ],
      copyright: `2024-${new Date().getFullYear()} © Vicki Wu`,
    },
    prism: {
      theme: prismThemes.vsLight,
      darkTheme: prismThemes.vsDark,
      additionalLanguages: ['yaml', 'bash', 'json', 'typescript', 'javascript', 'jsx', 'tsx'],
    },
  } satisfies Preset.ThemeConfig,
  headTags: [
    {
      tagName: 'link',
      attributes: {
        rel: 'preconnect',
        href: 'https://fonts.googleapis.com',
      },
    },
    {
      tagName: 'link',
      attributes: {
        rel: 'preconnect',
        href: 'https://fonts.gstatic.com',
        crossorigin: 'anonymous',
      },
    },
    {
      tagName: 'link',
      attributes: {
        href: 'https://fonts.googleapis.com/css2?family=Noto+Sans:ital,wght@0,100..900;1,100..900&display=swap',
        rel: 'stylesheet',
      },
    },
  ]
};

export default config;

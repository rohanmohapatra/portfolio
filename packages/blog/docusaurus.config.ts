import { themes as prismThemes } from 'prism-react-renderer';
import type { Config } from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

const config: Config = {
  title: 'Rohan Mohapatra',
  tagline: '',
  favicon: 'images/avataaars.png',

  // Set the production url of your site here
  url: 'https://rohanmohapatra.github.io',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/blog',

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  stylesheets: [
    'https://fonts.googleapis.com/css2?family=Noto+Sans+Mono:wght@100..900&display=swap',
    'https://fonts.googleapis.com/css2?family=Inter:wght@100..900&display=swap'
  ],

  presets: [
    [
      'classic',
      {
        docs: false,
        blog: {
          path: 'posts',
          blogSidebarTitle: 'Posts',
          blogTitle: "Rohan's Blog",
          blogDescription: 'My thoughts',
          routeBasePath: '/',
          showReadingTime: true
        },
        theme: {
          customCss: 'src/css/theme.css'
        }
      } satisfies Preset.Options
    ]
  ],

  themeConfig: {
    // Replace with your project's social card
    image: 'images/avataaars.png',
    navbar: {
      title: "Rohan's Blog",
      logo: {
        src: 'images/avataaars.png',
        srcDark: 'images/avataaars.png'
      },
      items: []
    },
    footer: {
      style: 'light',
      copyright: 'Designed & Built by Rohan Mohapatra'
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula
    }
  } satisfies Preset.ThemeConfig
};

export default config;

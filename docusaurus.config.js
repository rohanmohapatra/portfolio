const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').DocusaurusConfig} */
module.exports = {
  title: 'Code. Sleep. Eat. Repeat',
  tagline: 'Software Developer',
  url: 'https://rohanmohapatra.github.com',
  baseUrl: '/',
  trailingSlash: false,
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'images/avataaars.png',
  organizationName: 'rohanmohapatra', // Usually your GitHub org/user name.
  projectName: 'rohanmohapatra.github.io', // Usually your repo name.
  deploymentBranch: 'gh-pages',
  themeConfig: {
    colorMode: {
      defaultMode: 'light',
      disableSwitch: true,
      respectPrefersColorScheme: false,
    },
    navbar: {
      title: 'Rohan',
      // logo: {
      //   alt: 'My Site Logo',
      //   src: 'img/logo.svg',
      // },
      items: [
        { to: '#about', label: 'About', position: 'right' },
        { to: '#publications', label: 'Publications', position: 'right' },
        { to: '#s', label: 'Skills', position: 'right' },
        { to: '#projects', label: 'Projects', position: 'right' },
        { to: '/resume', label: 'Résumé', position: 'right' },
        { to: '/blog', label: 'Blog', position: 'right' },
        { type: 'doc', docId: '1234', label: 'Contact Me', position: 'right' },
        // {
        //   href: "https://github.com/facebook/docusaurus",
        //   label: "GitHub",
        //   position: "right",
        // },
      ],
    },
    // footer: {
    //   style: 'dark',
    //   links: [
    //     // {
    //     //   title: "Docs",
    //     //   items: [
    //     //     {
    //     //       label: "Tutorial",
    //     //       to: "/docs/intro",
    //     //     },
    //     //   ],
    //     // },
    //     {
    //       title: 'Community',
    //       items: [
    //         {
    //           label: 'Stack Overflow',
    //           href: 'https://stackoverflow.com/questions/tagged/docusaurus',
    //         },
    //         {
    //           label: 'Discord',
    //           href: 'https://discordapp.com/invite/docusaurus',
    //         },
    //         {
    //           label: 'Twitter',
    //           href: 'https://twitter.com/docusaurus',
    //         },
    //       ],
    //     },
    //     {
    //       title: 'More',
    //       items: [
    //         {
    //           label: 'Blog',
    //           to: '/blog',
    //         },
    //         {
    //           label: 'GitHub',
    //           href: 'https://github.com/facebook/docusaurus',
    //         },
    //       ],
    //     },
    //   ],
    //   copyright: `Copyright © ${new Date().getFullYear()} My Project, Inc. Built with Docusaurus.`,
    // },
    prism: {
      theme: lightCodeTheme,
      darkTheme: darkCodeTheme,
    },
  },
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          editUrl:
            'https://github.com/facebook/docusaurus/edit/master/website/',
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          editUrl:
            'https://github.com/facebook/docusaurus/edit/master/website/blog/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],
};

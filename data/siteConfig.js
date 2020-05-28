module.exports = {
  siteTitle: 'StackGen',
  siteDescription: 'Generate your app in seconds',
  authorName: 'StackGen',
  twitterUsername: 'someStackgenTwitterhandle',
  authorAvatar: 'avatar.jpg', // file in content/images
  defaultLang: 'en', // show flag if lang is not default. Leave empty to enable flags in post lists
  authorDescription: ``,
  siteUrl: 'https://StackGen.com/',
  disqusSiteUrl: '',
  // Prefixes all links. For cases when deployed to maxpou.fr/gatsby-starter-morning-dew/
  pathPrefix: '/gatsby-starter-morning-dew', // Note: it must *not* have a trailing slash.
  siteCover: 'photos/two-hideous-dudes.jpg', // file in content/images
  googleAnalyticsId: '',
  background_color: '#ffffff',
  theme_color: '#222222',
  display: 'standalone',
  postsPerPage: 6,
  disqusShortname: '',
  headerTitle: 'App generation framework',
  headerLinksIcon: 'stackgen-logo-2020.png', //  (leave empty to disable: '')
  headerLinks: [
    {
      label: 'Get started',
      url: '/',
    },
    {
      label: 'About',
      url: '/about-gatsby-starter-morning-dew',
    },
    {
      label: 'Installation',
      url: '/how-to-install',
    },
  ],
  // Footer information (ex: Github, Netlify...)
  websiteHost: {
    name: 'GitHub',
    url: 'https://github.com',
  },
  footerLinks: [
    {
      sectionName: 'Explore',
      links: [
        {
          label: 'About',
          url: '/about-gatsby-starter-morning-dew',
        },
        {
          label: 'Install StackGen',
          url: '/how-to-install',
        },
        {
          label: 'Blog',
          url: '/',
        },
      ],
    },
    {
      sectionName: 'Follow',
      links: [
        {
          label: 'GitHub',
          url: 'https://github.com/maxpou/gatsby-starter-morning-dew',
        },
        {
          label: 'Website',
          url: 'https://www.maxpou.fr',
        },
        {
          label: 'Twitter',
          url: 'https://twitter.com/_maxpou',
        },
      ],
    },
  ],
}

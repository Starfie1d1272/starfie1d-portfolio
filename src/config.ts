const getEnv = (key: string, fallback = ''): string =>
  import.meta.env[key] ?? fallback;

export const siteConfig = {
  url: getEnv('SITE_URL', 'https://work.starfie1d.top'),
  language: getEnv('SITE_LANGUAGE', 'zh-CN'),
  title: getEnv('SITE_TITLE', '杜鑫宇｜产品与工程作品集'),
  description: getEnv(
    'SITE_DESCRIPTION',
    '杜鑫宇的产品与工程作品集：RivalHub、RivalHub Broadcast、DAK Studio，以及这些项目背后的问题定义、产品判断、技术取舍与真实落地。',
  ),
  author: {
    name: getEnv('SITE_AUTHOR_NAME', '杜鑫宇'),
    title: getEnv('SITE_AUTHOR_TITLE', 'Technical Product / Developer Tools'),
    bio: getEnv(
      'SITE_AUTHOR_BIO',
      '南京大学 2027 届本科生，关注技术产品、研发效能、开发者工具与 AI Agent 工作流。',
    ),
    email: getEnv('SITE_AUTHOR_EMAIL', 'xinyu@starfie1d.top'),
    location: getEnv('SITE_AUTHOR_LOCATION', ''),
  },
  social: {
    github: getEnv('SOCIAL_GITHUB', 'https://github.com/Starfie1d1272'),
    linkedin: getEnv('SOCIAL_LINKEDIN', ''),
    twitter: getEnv('SOCIAL_TWITTER', ''),
    mastodon: getEnv('SOCIAL_MASTODON', ''),
    bluesky: getEnv('SOCIAL_BLUESKY', ''),
  },
  nav: [
    { label: '项目案例', href: '/projects' },
    { label: '关键决策', href: '/decisions' },
    { label: '关于', href: '/about' },
  ],
} as const;

export type SiteConfig = typeof siteConfig;
export type SocialLinks = typeof siteConfig.social;
export type NavItem = typeof siteConfig.nav[number];

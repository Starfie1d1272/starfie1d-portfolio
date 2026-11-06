const getEnv = (key: string, fallback = ''): string => import.meta.env[key] ?? fallback;

export const siteConfig = {
  url: getEnv('SITE_URL', 'https://work.starfie1d.top'),
  language: getEnv('SITE_LANGUAGE', 'zh-CN'),
  title: getEnv('SITE_TITLE', '杜鑫宇｜产品与工程作品集'),
  description: getEnv(
    'SITE_DESCRIPTION',
    '从校园赛事到日常工具：RivalHub、Mizar、DAK Studio、SendToMyself 与策星。',
  ),
  author: {
    name: getEnv('SITE_AUTHOR_NAME', '杜鑫宇'),
    title: getEnv('SITE_AUTHOR_TITLE', '产品 / 研发效能 / 开发者工具'),
    bio: getEnv(
      'SITE_AUTHOR_BIO',
      '南京大学 2027 届本科生，从校园赛事出发，做赛事平台、制播系统和自己会用到的日常工具。',
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
    { label: '项目', href: '/projects' },
    { label: '关于', href: '/about' },
  ],
} as const;

export type SiteConfig = typeof siteConfig;
export type SocialLinks = typeof siteConfig.social;
export type NavItem = (typeof siteConfig.nav)[number];

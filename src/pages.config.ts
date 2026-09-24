interface PageMeta {
  title: string;
  description: string;
  heading?: string;
  intro?: string;
}

export const pagesConfig = {
  home: {
    title: '杜鑫宇｜产品与工程作品集',
    description: 'NJU Major、RivalHub、RivalHub Broadcast、DAK Studio。',
  },
  projects: {
    title: '项目',
    description: '我自己长期做的几个项目。',
    heading: '项目',
    intro: '现在主要放这些。',
  },
  about: {
    title: '关于',
    description: '关于杜鑫宇和这个作品集。',
    heading: '关于',
  },
} satisfies Record<string, PageMeta>;

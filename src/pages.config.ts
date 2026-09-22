interface PageMeta {
  title: string;
  description: string;
  heading?: string;
  intro?: string;
}

export const pagesConfig = {
  home: {
    title: '杜鑫宇｜产品与工程作品集',
    description: 'RivalHub、RivalHub Broadcast、DAK Studio 三个项目。',
  },
  projects: {
    title: '项目',
    description: '我自己长期维护的几个产品和工具。',
    heading: '项目',
    intro: '目前先放三个我自己长期维护的项目。',
  },
  decisions: {
    title: '关键决策',
    description: '项目里几条影响后续实现的决定。',
    heading: '关键决策',
    intro: '把几个当时需要认真取舍的问题单独记下来。',
  },
  about: {
    title: '关于',
    description: '关于杜鑫宇和这个作品集。',
    heading: '关于',
  },
} satisfies Record<string, PageMeta>;

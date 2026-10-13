interface PageMeta {
  title: string;
  description: string;
  heading?: string;
  intro?: string;
}

export const pagesConfig = {
  home: {
    title: '杜鑫宇｜产品与工程作品集',
    description: '从校园赛事到日常工具：RivalHub、Mizar、DAK Studio、SendToMyself 与策星。',
  },
  projects: {
    title: '项目',
    description: '从校园赛事到个人工具，记录我从需求、设计到实现与持续迭代的工作。',
    heading: '项目',
    intro: '从校园赛事到个人工具，这里记录我从需求、设计到实现与持续迭代的工作。',
  },
  about: {
    title: '关于',
    description: '关于杜鑫宇和这个作品集。',
    heading: '关于',
  },
} satisfies Record<string, PageMeta>;

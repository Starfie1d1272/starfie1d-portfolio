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
    description: '持续投入并实际运行过的项目，主要围绕赛事运营、制播工具和 Demo 分析。',
    heading: '项目',
    intro: '这里记录我持续投入并实际运行过的项目，主要围绕赛事运营、制播工具和 Demo 分析。',
  },
  about: {
    title: '关于',
    description: '关于杜鑫宇和这个作品集。',
    heading: '关于',
  },
} satisfies Record<string, PageMeta>;

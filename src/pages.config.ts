interface PageMeta {
  title: string;
  description: string;
  heading?: string;
  intro?: string;
}

export const pagesConfig = {
  home: {
    title: '杜鑫宇｜产品与工程作品集',
    description: '从真实工作流出发做产品和工具：问题定义、产品判断、技术取舍、实现与真实环境验证。',
  },
  projects: {
    title: '项目案例',
    description: 'RivalHub、RivalHub Broadcast、DAK Studio：从问题到落地的完整案例。',
    heading: '项目案例',
    intro: '不只展示“做了什么”，更记录问题从哪里来、哪些约束真正重要、为什么这样取舍，以及最后如何验证。',
  },
  decisions: {
    title: '关键决策',
    description: '从真实项目中整理出来的产品与技术决策：背景、备选方案、取舍依据与边界。',
    heading: '关键决策',
    intro: '这里不是概念笔记，而是项目中真正做过的选择。每条记录都保留当时的上下文、替代方案和判断依据。',
  },
  about: {
    title: '关于',
    description: '关于杜鑫宇，以及这份产品与工程作品集的范围。',
    heading: '关于',
  },
} satisfies Record<string, PageMeta>;

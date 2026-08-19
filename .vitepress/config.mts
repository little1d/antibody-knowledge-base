import { defineConfig } from 'vitepress'

const repository = 'https://github.com/little1d/antibody-knowledge-base'
const base = process.env.VITEPRESS_BASE ?? '/'

const chapter = (part: string, slug: string) => `/chapters/${part}/${slug}`

const lifecycleSidebar = [
  {
    text: 'Part 01 · 抗体基础',
    collapsed: false,
    items: [
      { text: '01 免疫系统与抗体产生', link: chapter('part-01-foundations', '01-immune-system-and-antibody-generation') },
      { text: '02 结构、功能与分子形式', link: chapter('part-01-foundations', '02-antibody-structure-function-and-formats') },
    ],
  },
  {
    text: 'Part 02 · 发现与早期研究',
    collapsed: false,
    items: [
      { text: '03 靶点、抗原与抗体发现', link: chapter('part-02-discovery-and-early-research', '03-target-antigen-and-antibody-discovery') },
      { text: '04 文库、展示与筛选', link: chapter('part-02-discovery-and-early-research', '04-library-display-and-screening') },
      { text: '05 表征与实验评价', link: chapter('part-02-discovery-and-early-research', '05-characterization-and-assays') },
    ],
  },
  {
    text: 'Part 03 · 工程与候选物选择',
    collapsed: true,
    items: [
      { text: '06 抗体工程与分子优化', link: chapter('part-03-engineering-and-candidate-selection', '06-antibody-engineering-and-optimization') },
      { text: '07 特异性与可开发性', link: chapter('part-03-engineering-and-candidate-selection', '07-specificity-and-developability') },
      { text: '08 开发候选物选择', link: chapter('part-03-engineering-and-candidate-selection', '08-candidate-selection') },
    ],
  },
  {
    text: 'Part 04 · 临床前到产业化',
    collapsed: true,
    items: [
      { text: '09 临床前与转化研究', link: chapter('part-04-development-and-commercialization', '09-preclinical-and-translational-research') },
      { text: '10 CMC、生产与质量', link: chapter('part-04-development-and-commercialization', '10-cmc-manufacturing-and-quality') },
      { text: '11 临床、注册与商业化', link: chapter('part-04-development-and-commercialization', '11-clinical-regulatory-and-commercialization') },
    ],
  },
  {
    text: 'Part 05 · AI for Antibody',
    collapsed: false,
    items: [
      { text: '12 AI 任务、价值与边界', link: chapter('part-05-ai-for-antibody', '12-ai-tasks-value-and-boundaries') },
    ],
  },
]

export default defineConfig({
  lang: 'zh-CN',
  title: '抗体药物研发知识库',
  titleTemplate: ':title · 抗体药物研发知识库',
  description:
    '面向 AI4S 与计算背景读者的中文抗体药物全生命周期知识库。',
  base,
  cleanUrls: true,
  lastUpdated: true,
  srcExclude: ['AGENTS.md', 'docs/superpowers/**', 'assets/images/README.md'],
  ignoreDeadLinks: true,
  rewrites: {
    'README.md': 'about.md',
    'chapters/:part/README.md': 'chapters/:part/index.md',
    'glossary/README.md': 'glossary/index.md',
    'case-studies/README.md': 'case-studies/index.md',
    'appendix/README.md': 'appendix/index.md',
  },
  sitemap: {
    hostname: 'https://little1d.github.io/antibody-knowledge-base/',
  },
  head: [
    ['meta', { name: 'theme-color', content: '#6d4aff' }],
    ['meta', { name: 'color-scheme', content: 'light dark' }],
    ['meta', { property: 'og:type', content: 'website' }],
    ['meta', { property: 'og:locale', content: 'zh_CN' }],
    ['meta', { property: 'og:site_name', content: '抗体药物研发知识库' }],
  ],
  markdown: {
    image: {
      lazyLoading: true,
    },
  },
  themeConfig: {
    siteTitle: '抗体药物研发知识库',
    nav: [
      { text: '首页', link: '/' },
      { text: '学习路径', link: '/roadmap/learning-path' },
      { text: '生命周期图谱', link: '/roadmap/lifecycle-ai-map' },
      {
        text: '章节',
        items: [
          {
            text: 'Part 01 · 抗体基础',
            link: '/chapters/part-01-foundations/',
          },
          {
            text: 'Part 02 · 发现与早期研究',
            link: '/chapters/part-02-discovery-and-early-research/',
          },
          {
            text: 'Part 03 · 工程与候选物选择',
            link: '/chapters/part-03-engineering-and-candidate-selection/',
          },
          {
            text: 'Part 04 · 临床前到产业化',
            link: '/chapters/part-04-development-and-commercialization/',
          },
          {
            text: 'Part 05 · AI for Antibody',
            link: '/chapters/part-05-ai-for-antibody/',
          },
        ],
      },
      {
        text: '资源',
        items: [
          { text: '术语速查', link: '/glossary/' },
          { text: '案例', link: '/case-studies/' },
          { text: '附录材料', link: '/appendix/' },
          { text: '项目说明', link: '/about' },
        ],
      },
    ],
    sidebar: {
      '/chapters/': lifecycleSidebar,
      '/roadmap/': [
        {
          text: '学习导航',
          items: [
            { text: '连续学习路径', link: '/roadmap/learning-path' },
            {
              text: '生命周期与 AI 图谱',
              link: '/roadmap/lifecycle-ai-map',
            },
          ],
        },
        ...lifecycleSidebar,
      ],
      '/glossary/': lifecycleSidebar,
      '/case-studies/': lifecycleSidebar,
      '/appendix/': lifecycleSidebar,
    },
    outline: {
      level: [2, 3],
      label: '本页目录',
    },
    search: {
      provider: 'local',
      options: {
        translations: {
          button: {
            buttonText: '搜索',
            buttonAriaLabel: '搜索知识库',
          },
          modal: {
            noResultsText: '没有找到相关内容',
            resetButtonTitle: '清除查询条件',
            footer: {
              selectText: '选择',
              navigateText: '切换',
              closeText: '关闭',
            },
          },
        },
      },
    },
    socialLinks: [{ icon: 'github', link: repository }],
    editLink: {
      pattern: `${repository}/edit/main/:path`,
      text: '在 GitHub 上编辑此页',
    },
    lastUpdated: {
      text: '最近更新',
      formatOptions: {
        dateStyle: 'medium',
        timeStyle: 'short',
      },
    },
    docFooter: {
      prev: '上一篇',
      next: '下一篇',
    },
    darkModeSwitchLabel: '外观',
    lightModeSwitchTitle: '切换为浅色模式',
    darkModeSwitchTitle: '切换为深色模式',
    sidebarMenuLabel: '章节目录',
    returnToTopLabel: '返回顶部',
    langMenuLabel: '语言',
    externalLinkIcon: true,
    footer: {
      message: '用于学习与研究交流，不构成医疗、临床或监管建议。',
      copyright: '抗体药物研发知识库',
    },
  },
})

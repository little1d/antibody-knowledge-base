import { defineConfig } from 'vitepress'

const repository = 'https://github.com/little1d/antibody-knowledge-base'
const base = process.env.VITEPRESS_BASE ?? '/'

const chapter = (part: string, slug: string) => `/chapters/${part}/${slug}/`
const topic = (part: string, slug: string, page: string) =>
  `/chapters/${part}/${slug}/${page}`

const lifecycleSidebar = [
  {
    text: 'Part 01 · 抗体基础',
    collapsed: false,
    items: [
      {
        text: '01 免疫系统与抗体产生',
        link: chapter('part-01-foundations', '01-immune-system-and-antibody-generation'),
        collapsed: true,
        items: [
          {
            text: '免疫系统概览',
            link: topic(
              'part-01-foundations',
              '01-immune-system-and-antibody-generation',
              'immune-system-overview',
            ),
          },
          {
            text: 'B 细胞与抗体产生',
            link: topic(
              'part-01-foundations',
              '01-immune-system-and-antibody-generation',
              'b-cell-and-antibody-generation',
            ),
          },
          {
            text: 'V(D)J 重排与多样性',
            link: topic(
              'part-01-foundations',
              '01-immune-system-and-antibody-generation',
              'vdj-recombination-and-diversity',
            ),
          },
        ],
      },
      {
        text: '02 结构、功能与分子形式',
        link: chapter('part-01-foundations', '02-antibody-structure-function-and-formats'),
        collapsed: true,
        items: [
          {
            text: '抗体结构',
            link: topic(
              'part-01-foundations',
              '02-antibody-structure-function-and-formats',
              'antibody-structure',
            ),
          },
          {
            text: '亲和力、亲合力与特异性',
            link: topic(
              'part-01-foundations',
              '02-antibody-structure-function-and-formats',
              'binding-affinity-avidity-and-specificity',
            ),
          },
          {
            text: 'Fc 与效应功能',
            link: topic(
              'part-01-foundations',
              '02-antibody-structure-function-and-formats',
              'fc-and-effector-functions',
            ),
          },
          {
            text: '常见抗体分子形式',
            link: topic(
              'part-01-foundations',
              '02-antibody-structure-function-and-formats',
              'antibody-formats',
            ),
          },
        ],
      },
    ],
  },
  {
    text: 'Part 02 · 发现与早期研究',
    collapsed: false,
    items: [
      {
        text: '03 靶点、抗原与抗体发现',
        link: chapter(
          'part-02-discovery-and-early-research',
          '03-target-antigen-and-antibody-discovery',
        ),
        collapsed: true,
        items: [
          {
            text: '抗原与抗体发现平台',
            link: topic(
              'part-02-discovery-and-early-research',
              '03-target-antigen-and-antibody-discovery',
              'antigen-and-discovery-platforms',
            ),
          },
        ],
      },
      {
        text: '04 文库、展示与筛选',
        link: chapter(
          'part-02-discovery-and-early-research',
          '04-library-display-and-screening',
        ),
        collapsed: true,
        items: [
          {
            text: '抗体文库与展示技术',
            link: topic(
              'part-02-discovery-and-early-research',
              '04-library-display-and-screening',
              'antibody-libraries-and-display',
            ),
          },
          {
            text: '筛选与命中确认',
            link: topic(
              'part-02-discovery-and-early-research',
              '04-library-display-and-screening',
              'screening-and-hit-confirmation',
            ),
          },
        ],
      },
      {
        text: '05 表征与实验评价',
        link: chapter(
          'part-02-discovery-and-early-research',
          '05-characterization-and-assays',
        ),
        collapsed: true,
        items: [
          {
            text: '结合动力学与常用实验',
            link: topic(
              'part-02-discovery-and-early-research',
              '05-characterization-and-assays',
              'binding-kinetics-and-assays',
            ),
          },
          {
            text: '功能评价',
            link: topic(
              'part-02-discovery-and-early-research',
              '05-characterization-and-assays',
              'functional-evaluation',
            ),
          },
        ],
      },
    ],
  },
  {
    text: 'Part 03 · 工程与候选物选择',
    collapsed: true,
    items: [
      {
        text: '06 抗体工程与分子优化',
        link: chapter(
          'part-03-engineering-and-candidate-selection',
          '06-antibody-engineering-and-optimization',
        ),
        collapsed: true,
        items: [
          {
            text: '抗体亲和力成熟',
            link: topic(
              'part-03-engineering-and-candidate-selection',
              '06-antibody-engineering-and-optimization',
              'affinity-maturation',
            ),
          },
          {
            text: '人源化、Fc 与形式工程',
            link: topic(
              'part-03-engineering-and-candidate-selection',
              '06-antibody-engineering-and-optimization',
              'humanization-fc-and-format-engineering',
            ),
          },
        ],
      },
      {
        text: '07 特异性与可开发性',
        link: chapter(
          'part-03-engineering-and-candidate-selection',
          '07-specificity-and-developability',
        ),
        collapsed: true,
        items: [
          {
            text: '抗体可开发性概览',
            link: topic(
              'part-03-engineering-and-candidate-selection',
              '07-specificity-and-developability',
              'developability-overview',
            ),
          },
        ],
      },
      {
        text: '08 开发候选物选择',
        link: chapter(
          'part-03-engineering-and-candidate-selection',
          '08-candidate-selection',
        ),
        collapsed: true,
        items: [
          {
            text: 'TPP 与候选物确定',
            link: topic(
              'part-03-engineering-and-candidate-selection',
              '08-candidate-selection',
              'tpp-and-candidate-nomination',
            ),
          },
        ],
      },
    ],
  },
  {
    text: 'Part 04 · 临床前到产业化',
    collapsed: true,
    items: [
      {
        text: '09 临床前与转化研究',
        link: chapter(
          'part-04-development-and-commercialization',
          '09-preclinical-and-translational-research',
        ),
        collapsed: true,
        items: [
          {
            text: '临床前与 IND-enabling',
            link: topic(
              'part-04-development-and-commercialization',
              '09-preclinical-and-translational-research',
              'preclinical-and-ind-enabling',
            ),
          },
        ],
      },
      {
        text: '10 CMC、生产与质量',
        link: chapter(
          'part-04-development-and-commercialization',
          '10-cmc-manufacturing-and-quality',
        ),
        collapsed: true,
        items: [
          {
            text: 'CMC 与质量概览',
            link: topic(
              'part-04-development-and-commercialization',
              '10-cmc-manufacturing-and-quality',
              'cmc-and-quality-overview',
            ),
          },
        ],
      },
      {
        text: '11 临床、注册与商业化',
        link: chapter(
          'part-04-development-and-commercialization',
          '11-clinical-regulatory-and-commercialization',
        ),
        collapsed: true,
        items: [
          {
            text: '开发与商业术语主线',
            link: topic(
              'part-04-development-and-commercialization',
              '11-clinical-regulatory-and-commercialization',
              'development-and-commercial-terms',
            ),
          },
        ],
      },
    ],
  },
  {
    text: 'Part 05 · AI for Antibody',
    collapsed: false,
    items: [
      {
        text: '12 AI 任务、价值与边界',
        link: chapter(
          'part-05-ai-for-antibody',
          '12-ai-tasks-value-and-boundaries',
        ),
        collapsed: false,
        items: [
          {
            text: 'AIDD 基础概念',
            link: topic(
              'part-05-ai-for-antibody',
              '12-ai-tasks-value-and-boundaries',
              'aidd-basics-for-antibody-research',
            ),
          },
          {
            text: '从实验问题到 AI 任务',
            link: topic(
              'part-05-ai-for-antibody',
              '12-ai-tasks-value-and-boundaries',
              'from-experimental-question-to-ai-task',
            ),
          },
          {
            text: '结构与复合物预测',
            link: topic(
              'part-05-ai-for-antibody',
              '12-ai-tasks-value-and-boundaries',
              'structure-and-complex-prediction',
            ),
          },
          {
            text: '亲和力与突变效应预测',
            link: topic(
              'part-05-ai-for-antibody',
              '12-ai-tasks-value-and-boundaries',
              'affinity-and-mutation-effect-prediction',
            ),
          },
          {
            text: '生成设计与候选排序',
            link: topic(
              'part-05-ai-for-antibody',
              '12-ai-tasks-value-and-boundaries',
              'generative-design-and-candidate-ranking',
            ),
          },
          {
            text: '主动学习与 Lab-in-the-loop',
            link: topic(
              'part-05-ai-for-antibody',
              '12-ai-tasks-value-and-boundaries',
              'active-learning-and-lab-in-the-loop',
            ),
          },
          {
            text: '基准、泛化与能力边界',
            link: topic(
              'part-05-ai-for-antibody',
              '12-ai-tasks-value-and-boundaries',
              'benchmarks-generalization-and-boundaries',
            ),
          },
        ],
      },
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
  rewrites: {
    'README.md': 'about.md',
    'chapters/:part/README.md': 'chapters/:part/index.md',
    'chapters/:part/:chapter/README.md': 'chapters/:part/:chapter/index.md',
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

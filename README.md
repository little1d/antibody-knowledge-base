# 抗体药物研发知识库

这是一套面向 AI4S、计算生物学和人工智能背景读者的中文抗体药物研发知识库。它不预设读者已经学过免疫学，而是沿着一支抗体从产生、发现、表征和工程优化，到临床前、CMC、临床与商业化的真实路径组织内容。

知识库的重点不是罗列术语或模型，而是建立三种联系：

1. 生物学机制与实验现象之间的联系；
2. 实验结果与研发决策之间的联系；
3. AI 任务与其真正试图解决的实验问题之间的联系。

在线阅读：[https://little1d.github.io/antibody-knowledge-base/](https://little1d.github.io/antibody-knowledge-base/)

## 推荐入口

- [学习路径](roadmap/learning-path.md)：适合第一次系统学习。
- [生命周期与 AI 任务映射](roadmap/lifecycle-ai-map.md)：从研发问题寻找计算任务，或从 AI 任务反查实验语境。
- [术语速查](glossary/)：快速查找缩写与正文入口。
- [案例入口](case-studies/)：未来通过案例串联多个章节。
- [附录材料](appendix/)：只读 PDF、PPT 等参考资料。

## 全生命周期主线

### Part 01：抗体基础

1. [免疫系统与抗体的产生](chapters/part-01-foundations/01-immune-system-and-antibody-generation/)
2. [抗体的结构、功能与分子形式](chapters/part-01-foundations/02-antibody-structure-function-and-formats/)

### Part 02：抗体发现与早期研究

3. [从靶点和抗原到抗体发现](chapters/part-02-discovery-and-early-research/03-target-antigen-and-antibody-discovery/)
4. [抗体文库、展示与筛选](chapters/part-02-discovery-and-early-research/04-library-display-and-screening/)
5. [抗体表征与实验评价](chapters/part-02-discovery-and-early-research/05-characterization-and-assays/)

### Part 03：抗体工程与候选物选择

6. [抗体工程与分子优化](chapters/part-03-engineering-and-candidate-selection/06-antibody-engineering-and-optimization/)
7. [特异性、成药性与多性质权衡](chapters/part-03-engineering-and-candidate-selection/07-specificity-and-developability/)
8. [开发候选物的选择](chapters/part-03-engineering-and-candidate-selection/08-candidate-selection/)

### Part 04：从临床前到产业化

9. [临床前药理、安全性与转化研究](chapters/part-04-development-and-commercialization/09-preclinical-and-translational-research/)
10. [CMC、生产与质量控制](chapters/part-04-development-and-commercialization/10-cmc-manufacturing-and-quality/)
11. [临床、注册与商业化](chapters/part-04-development-and-commercialization/11-clinical-regulatory-and-commercialization/)

### Part 05：AI for Antibody

12. [AI 在抗体研发中的任务、价值与边界](chapters/part-05-ai-for-antibody/12-ai-tasks-value-and-boundaries/)

## 当前状态

> **注意：本知识库仍在建设和完善中，目前内容尚不完整，暂不具备系统阅读价值。** 如果你对某个专题感兴趣，欢迎通过 Issue 或 PR 参与讨论和贡献。

### 待办事项

- [ ] 完成 12 个 Chapter 的正文撰写（当前主要为提纲和草稿阶段）
- [ ] 补充关键术语的交叉引用和术语速查条目
- [ ] 完善各 Chapter 的 README 导航和推荐阅读
- [ ] 补充案例研究，串联多个章节内容
- [ ] 完善生命周期与 AI 任务映射
- [ ] 补充和核实关键科学事实与来源
- [ ] 统一术语写法和专业表述

## 维护约定

维护者和 AI 工具在修改前应先阅读 [AGENTS.md](https://github.com/little1d/antibody-knowledge-base/blob/main/AGENTS.md)。新增内容优先进入已有 Topic；只有问题边界明显独立时才增加新页面。不要轻易改变 5 Part、12 Chapter 的主线结构。

科学事实、实验指标和 AI 成熟度的来源应放在相应 Chapter README 或 Topic 内。公众号导出原文不进入仓库；附录材料保持只读。

## 本地预览

```bash
npm install
npm run docs:dev
```

生产构建使用 `npm run docs:build`，本地检查构建产物使用 `npm run docs:preview`。

## 使用边界

本知识库用于学习与研究交流，不构成医疗、临床、监管、法律、专利或投资建议。涉及真实项目决策时，应结合完整实验数据，并咨询相应领域的专业人员。

## 贡献者

- [little1d](https://github.com/little1d)

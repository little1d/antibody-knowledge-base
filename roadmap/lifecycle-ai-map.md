---
title: 抗体研发生命周期与 AI 任务映射
last_reviewed: 2026-08-18
tags:
  - roadmap
  - lifecycle
  - ai-task
---

# 抗体研发生命周期与 AI 任务映射

## 如何使用这张图谱

这张表不是为了证明每个研发环节都需要 AI，而是回答两个方向的问题：

- 从实验和研发出发：这个环节是否已经存在有证据的 AI 任务？
- 从计算任务出发：模型输出最终支持什么决策、由什么实验验证？

“当前价值”只根据第一版已整理资料填写，不代表对全部最新研究的穷尽调研。没有足够证据的单元格明确留白或标为探索，而不是推测 AI 必然有用。

## 核心映射

| 研发环节 | 科学问题与研发决策 | 实验方法或真值 | AI 任务 | 当前价值 | 证据等级 | 相关 Chapter |
|---|---|---|---|---|---|---|
| 抗体序列初筛 | 哪些序列首先值得表达或保留 | 表达、结合、稳定性和失败序列 | PLM/抗体模型评分、天然性过滤 | 在缺少抗原结构和项目数据时过滤明显不合理候选 | `prospective-experimental-validation`，但主要证据来自少量定向进化案例 | [亲和力与突变效应预测](../chapters/part-05-ai-for-antibody/12-ai-tasks-value-and-boundaries/12-ai-tasks-value-and-boundaries.md) |
| 抗体单体结构 | CDR、VH/VL 和局部结构可能是什么 | 实验结构、结构约束和功能突变 | 抗体结构预测 | 为位点选择、风险分析和复合物建模提供结构假设 | `benchmark-evidence` | [12-ai-tasks-value-and-boundaries.md](../chapters/part-05-ai-for-antibody/12-ai-tasks-value-and-boundaries.md) |
| 表位与复合物 | 抗体如何接触抗原，哪些位置位于界面 | 复合物结构、表位、竞争和突变实验 | 复合物预测、对接、界面预测 | 可生成界面假设和设计约束；错误复合物会级联影响后续优化 | `benchmark-evidence`；部分案例有实验支持 | [12-ai-tasks-value-and-boundaries.md](../chapters/part-05-ai-for-antibody/12-ai-tasks-value-and-boundaries.md) |
| 文库设计 | 哪些位置和氨基酸值得进入聚焦文库 | 展示、FACS、NGS、表达和结合 | 逆折叠、结构兼容性、序列过滤、生成设计 | 减少明显低价值成员，平衡文库广度与候选质量 | `retrospective-experimental-evidence` 到 `prospective-experimental-validation`，依具体工作而定 | [抗体文库与展示技术](../chapters/part-02-discovery-and-early-research/04-library-display-and-screening/04-library-display-and-screening.md)、[生成设计与候选排序](../chapters/part-05-ai-for-antibody/12-ai-tasks-value-and-boundaries/generative-design-and-candidate-ranking.md) |
| 展示筛选与命中确认 | 哪些富集序列值得转为目标格式验证 | FACS/NGS 富集、SPR/BLI、功能和表达 | 多任务排序、代理标签校准 | 利用大规模代理标签排序，再用高质量动力学和功能数据校准 | `retrospective-experimental-evidence` | [筛选与命中确认](../chapters/part-02-discovery-and-early-research/04-library-display-and-screening/screening-and-hit-confirmation.md) |
| 亲和力成熟单点阶段 | 哪些单点突变占用第一轮实验名额 | KD、kon、koff、ELISA、FACS、表达和稳定性 | 零样本排序、结构突变模型、局部监督学习 | 提高 top-k 有利突变富集，减少盲目测试 | `prospective-experimental-validation` | [抗体亲和力成熟](../chapters/part-03-engineering-and-candidate-selection/06-antibody-engineering-and-optimization/affinity-maturation.md)、[亲和力与突变效应预测](../chapters/part-05-ai-for-antibody/12-ai-tasks-value-and-boundaries/12-ai-tasks-value-and-boundaries.md) |
| 亲和力成熟组合阶段 | 哪些多突变组合具有协同、避免冲突 | 单点、双点和高阶组合实验 | 上位性学习、组合搜索 | 用有信息量的双点数据减少高阶组合盲搜 | `prospective-experimental-validation`，当前资料只覆盖少量案例 | [亲和力与突变效应预测](../chapters/part-05-ai-for-antibody/12-ai-tasks-value-and-boundaries/12-ai-tasks-value-and-boundaries.md) |
| 连续工程迭代 | 下一轮测试哪些候选，同时改善性能和模型 | 多轮一致的结合、表达、稳定性和功能数据 | 主动学习、实验设计、Lab-in-the-loop | 在项目局部空间平衡探索、利用和候选多样性 | `prospective-experimental-validation`；稳定工作流采用仍需逐项目评估 | [主动学习与 Lab-in-the-loop](../chapters/part-05-ai-for-antibody/12-ai-tasks-value-and-boundaries/12-ai-tasks-value-and-boundaries.md) |
| 人源化与免疫原性风险 | 哪些改造保留结合并降低潜在风险 | 人源化后结合/功能、免疫原性分析和临床 ADA | 天然性、人源性、表位与风险预测 | 可用于早期排序和风险提示，不能签发“无免疫原性”结论 | `benchmark-evidence`；本版资料覆盖不足 | [人源化、Fc 与分子形式工程](../chapters/part-03-engineering-and-candidate-selection/06-antibody-engineering-and-optimization/humanization-fc-and-format-engineering.md) |
| 可开发性早筛 | 哪些候选存在表达、聚集、稳定性或非特异性风险 | 表达、纯度、SEC、稳定性、非特异性等实验 | 性质预测、多任务学习、风险过滤 | 在大候选集中前置明显风险；真实可开发性仍需分层实验 | `benchmark-evidence` 到 `retrospective-experimental-evidence` | [抗体可开发性概览](../chapters/part-03-engineering-and-candidate-selection/07-specificity-and-developability/07-specificity-and-developability.md)、[生成设计与候选排序](../chapters/part-05-ai-for-antibody/12-ai-tasks-value-and-boundaries/generative-design-and-candidate-ranking.md) |
| 候选物选择 | 如何在多属性和硬门槛下保留候选 | 药理、可开发性、PK/PD、安全性、CMC 证据 | 多目标排序、不确定性和 Pareto 候选 | 支持信息汇总和候选排序，但不能替代 PCC 决策 | `exploratory` 到 `retrospective-experimental-evidence` | [TPP 与候选物确定](../chapters/part-03-engineering-and-candidate-selection/08-candidate-selection/08-candidate-selection.md) |
| 临床前、CMC 与临床 | 如何预测更高层级的体内、生产和临床结果 | 动物、人群、工艺、质量和临床数据 | 多种任务，尚不能由单一抗体序列模型覆盖 | 第一版不建立统一 AI 映射；应先拆解具体问题和数据生成机制 | 留白：现有资料不足 | [临床前研究](../chapters/part-04-development-and-commercialization/09-preclinical-and-translational-research/preclinical-and-ind-enabling.md)、[CMC](../chapters/part-04-development-and-commercialization/10-cmc-manufacturing-and-quality/10-cmc-manufacturing-and-quality.md) |

## 按 AI 任务反查生命周期

### 结构预测

- 输入：抗体序列，可能包含配对重轻链。
- 最近的研发用途：结构假设、位点选择、风险检查、复合物建模。
- 不能自动推出：特定抗原亲和力、功能、可开发性或临床价值。

### 亲和力与突变效应预测

- 输入：序列、结构、复合物和/或项目实验数据。
- 最近的研发用途：单点筛选、候选排序、聚焦文库和组合设计。
- 关键真值：必须说明是富集、KD、kon、koff 还是功能。

### 生成设计

- 输入：序列/结构上下文与多种约束。
- 最近的研发用途：提出候选或文库，不是直接交付药物。
- 关键出口：目标格式表达、正交实验和多属性过滤。

### 主动学习

- 输入：项目内多轮实验数据和候选空间。
- 最近的研发用途：决定下一轮做哪些实验。
- 关键条件：稳定实验通量、数据版本、对照和反馈周期。

## 证据等级

证据等级的定义和使用边界见[基准、泛化与能力边界](../chapters/part-05-ai-for-antibody/12-ai-tasks-value-and-boundaries.md)。同一任务在不同论文或项目中可能具有不同等级，表中记录的是第一版资料支持的概括，而不是永久结论。

## 维护规则

新增 AI 工作时，先回答：

1. 它支持哪个研发决策？
2. 实验真值是什么？
3. 证据是基准、回顾性数据还是前瞻性实验？
4. 是否优于合理对照？
5. 适用范围是同一亲本、同一抗原还是更广场景？
6. 结果是否在目标格式和功能层级成立？

只有这些问题有明确答案，才更新“当前价值”和证据等级。


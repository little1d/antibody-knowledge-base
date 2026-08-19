---
title: AI 在抗体研发中的任务、价值与边界
status: draft
last_reviewed: 2026-08-18
tags:
  - ai-for-antibody
  - lifecycle-mapping
  - experimental-validation
---

# 第 12 章：AI 在抗体研发中的任务、价值与边界

## 本章解决的问题

结构预测、亲和力预测、序列生成和主动学习分别对应哪些研发问题？模型训练标签来自什么实验？当前 AI 已经在哪些环节产生可验证价值，又有哪些任务仍然容易被数据和评价方式误导？

## 学习目标

- 把实验问题转化为明确的输入、输出、标签和决策任务。
- 理解序列、结构、复合物、实验标签和项目局部数据各自提供什么信息。
- 区分基准测试、回顾性实验数据和前瞻性实验验证。
- 理解 AI 更适合做候选生成、风险过滤、优先级排序和实验设计，而不是无条件替代实验。

## 前置知识

建议至少完成第 02、04、05、06 和 07 章。

## Topic 阅读顺序

1. [抗体研究者需要的 AIDD 基础概念](aidd-basics-for-antibody-research.md)
2. [从实验问题到 AI 任务](from-experimental-question-to-ai-task.md)
3. [抗体结构与复合物预测](structure-and-complex-prediction.md)
4. [亲和力与突变效应预测](affinity-and-mutation-effect-prediction.md)
5. [生成设计与候选排序](generative-design-and-candidate-ranking.md)
6. [主动学习与 Lab-in-the-loop](active-learning-and-lab-in-the-loop.md)
7. [基准、泛化与能力边界](benchmarks-generalization-and-boundaries.md)
8. [生命周期与 AI 任务映射](../../../roadmap/lifecycle-ai-map.md)

## 核心结论

- AI 任务的名称不能代替研发问题定义；必须先说明模型支持哪项决策。
- 预测一个突变的相对排序，通常比准确预测任意抗体的绝对 KD 更容易，也更接近当前可落地能力。
- 项目内少量高质量实验数据往往比规模更大但实验口径不一致的数据更有直接价值。
- 最可落地的范式通常是模型设计、小规模实验、模型更新和完整格式验证的闭环。

## 与生命周期的关系

本章通过[映射图谱](../../../roadmap/lifecycle-ai-map.md)与其他 Chapter 双向连接。正文不要求每个研发环节都有 AI 对应项；没有可靠证据时明确留白。

## 常见误区

- 把蛋白语言模型分数直接解释为亲和力。
- 把结构合理性直接解释为功能改善。
- 只报告随机切分结果，不检查序列、抗原或实验体系泄漏。
- 生成大量候选后不说明如何实验筛选和验证。

## 推荐阅读与来源

第一版从项目提供的亲和力成熟资料中提取了方法地图。下列代表性工作将在后续核验中作为入口：

- Hie et al., *Efficient evolution of human antibodies from general protein language models*, 2024.
- Shanker et al., *Unsupervised evolution of protein and antibody complexes with a structure-informed language model*, 2024.
- Cai et al., *Pretrainable geometric graph neural network for antibody affinity maturation*, 2024.
- Makowski et al., *Co-optimization of therapeutic antibody affinity and specificity using machine learning models that generalize to novel mutational space*, 2022.
- 与 EVOLVEpro、AffinityFlow、Lab-in-the-loop 和多突变上位性相关的工作将在相应 Topic 中标明证据等级。

## 内容状态

当前为 `draft`：方法分类和实验边界已建立，涉及最新技术成熟度的结论在升级为 `reviewed` 前需要逐篇核验原始论文。


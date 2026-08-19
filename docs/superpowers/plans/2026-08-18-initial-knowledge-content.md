# 抗体药物研发知识库第一版内容实施计划

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking. Do not dispatch subagents unless the user explicitly authorizes delegation.

**Goal:** 建立可阅读、可导航、可继续维护的抗体药物研发知识库第一版，并将四份现有资料中的可复用知识重写到 12 章主线中。

**Architecture:** 仓库采用 `Part -> Chapter -> Topic` 三层结构；Chapter README 负责导航、核心结论与来源，Topic 负责回答单一问题。生命周期正文与 AI 专题分开维护，通过 `roadmap/lifecycle-ai-map.md` 双向关联。

**Tech Stack:** Git、Markdown、YAML front matter、GitHub 相对链接、PDF 只读附录

**Spec:** `docs/superpowers/specs/2026-08-18-antibody-knowledge-base-design.md`

## Global Constraints

- 默认读者是缺少免疫学和抗体研发系统训练的 AI4S/计算背景读者。
- 正文使用中文；专业术语首次出现时补充英文全称和缩写。
- 不保存三篇公众号导出原文，不复制公众号页面杂讯和宣传元素。
- 当前 PDF 作为只读附录保存，不编辑、不重导出。
- 不建立独立 `references/` 目录；来源放在相应 Chapter README。
- 现有资料没有覆盖的内容使用 `status: outline`，不得强行补写未经核验的事实。
- AI 内容必须区分实验真值、替代指标、模型标签和模型输出。
- 本轮不创建 Git 提交，也不创建或推送远程仓库。

---

### Task 1: 建立根目录、阅读入口与附录

**Files:**
- Create: `README.md`
- Create: `.gitignore`
- Create: `roadmap/learning-path.md`
- Create: `appendix/README.md`
- Copy: `appendix/materials/单抗药物研发知识库.pdf`
- Create: `glossary/README.md`
- Create: `case-studies/README.md`
- Create: `assets/images/README.md`

**Interfaces:**
- Consumes: 已确认的设计说明和 12 章大纲。
- Produces: 后续所有 Chapter 和 Topic 使用的根导航、附录规则与学习入口。

- [ ] **Step 1: 创建根 README**

写明知识库定位、默认读者、5 Part/12 Chapter 导航、推荐学习方式、内容状态含义及“本仓库不提供医疗建议”。

- [ ] **Step 2: 创建学习路径**

在 `roadmap/learning-path.md` 中提供顺序学习、按研发阶段查阅和从 AI 任务反查三种入口。

- [ ] **Step 3: 创建附录与辅助入口**

创建附录、术语、案例和图片说明页；附录页记录当前 PDF 的文件名、内容范围、用途和只读状态。

- [ ] **Step 4: 复制只读 PDF**

将 `/Users/bytedance/Downloads/单抗药物研发知识库.pdf` 复制到 `appendix/materials/`，并校验复制前后 SHA-256 一致。

- [ ] **Step 5: 验证根入口**

Run:

```bash
find . -maxdepth 3 -type f -print
shasum -a 256 /Users/bytedance/Downloads/单抗药物研发知识库.pdf appendix/materials/单抗药物研发知识库.pdf
```

Expected: 根入口文件齐全；两个 PDF 哈希完全一致。

### Task 2: 建立 5 Part、12 Chapter 骨架

**Files:**
- Create: `chapters/part-01-foundations/README.md`
- Create: `chapters/part-01-foundations/01-immune-system-and-antibody-generation/README.md`
- Create: `chapters/part-01-foundations/02-antibody-structure-function-and-formats/README.md`
- Create: `chapters/part-02-discovery-and-early-research/README.md`
- Create: `chapters/part-02-discovery-and-early-research/03-target-antigen-and-antibody-discovery/README.md`
- Create: `chapters/part-02-discovery-and-early-research/04-library-display-and-screening/README.md`
- Create: `chapters/part-02-discovery-and-early-research/05-characterization-and-assays/README.md`
- Create: `chapters/part-03-engineering-and-candidate-selection/README.md`
- Create: `chapters/part-03-engineering-and-candidate-selection/06-antibody-engineering-and-optimization/README.md`
- Create: `chapters/part-03-engineering-and-candidate-selection/07-specificity-and-developability/README.md`
- Create: `chapters/part-03-engineering-and-candidate-selection/08-candidate-selection/README.md`
- Create: `chapters/part-04-development-and-commercialization/README.md`
- Create: `chapters/part-04-development-and-commercialization/09-preclinical-and-translational-research/README.md`
- Create: `chapters/part-04-development-and-commercialization/10-cmc-manufacturing-and-quality/README.md`
- Create: `chapters/part-04-development-and-commercialization/11-clinical-regulatory-and-commercialization/README.md`
- Create: `chapters/part-05-ai-for-antibody/README.md`
- Create: `chapters/part-05-ai-for-antibody/12-ai-tasks-value-and-boundaries/README.md`

**Interfaces:**
- Consumes: `roadmap/learning-path.md` 中的主线顺序。
- Produces: 所有 Topic 的稳定父目录和阅读导航。

- [ ] **Step 1: 创建 Part README**

每个 Part README 说明模块目标、包含的 Chapter、与前后 Part 的关系。

- [ ] **Step 2: 创建 Chapter README**

按设计说明写入本章问题、学习目标、前置知识、Topic 顺序、核心结论、上下游关系、常见误区、推荐阅读与来源、内容状态。

- [ ] **Step 3: 验证章节数量与顺序**

Run:

```bash
find chapters -mindepth 3 -maxdepth 3 -name README.md | sort
```

Expected: 正好列出 12 个 Chapter README，编号从 01 到 12 且无重复。

### Task 3: 填充抗体基础 Topic

**Files:**
- Create: `chapters/part-01-foundations/01-immune-system-and-antibody-generation/immune-system-overview.md`
- Create: `chapters/part-01-foundations/01-immune-system-and-antibody-generation/b-cell-and-antibody-generation.md`
- Create: `chapters/part-01-foundations/01-immune-system-and-antibody-generation/vdj-recombination-and-diversity.md`
- Create: `chapters/part-01-foundations/02-antibody-structure-function-and-formats/antibody-structure.md`
- Create: `chapters/part-01-foundations/02-antibody-structure-function-and-formats/binding-affinity-avidity-and-specificity.md`
- Create: `chapters/part-01-foundations/02-antibody-structure-function-and-formats/fc-and-effector-functions.md`
- Create: `chapters/part-01-foundations/02-antibody-structure-function-and-formats/antibody-formats.md`

**Interfaces:**
- Consumes: PDF 第 2-5 页的免疫系统、B 细胞、V(D)J、Fab/Fc、效应功能和成药性基础内容。
- Produces: Discovery、Engineering 和 AI Topic 共用的基础概念。

- [ ] **Step 1: 重写免疫系统与抗体产生内容**

用计算背景读者能理解的语言解释获得性免疫、B 细胞、浆细胞、记忆 B 细胞、V(D)J 重排、体细胞高频突变和类别转换。

- [ ] **Step 2: 重写结构与结合概念**

解释 Fab、Fc、重链、轻链、可变区、恒定区、CDR，以及 affinity、avidity、specificity 的区别。

- [ ] **Step 3: 重写效应功能与分子形式**

解释 FcRn、FcγR、ADCC、CDC、ADCP 和 IgG/IgA/IgM 等基本形式，并明确本版只建立教学入口，不展开所有工程格式。

- [ ] **Step 4: 更新两个 Chapter README**

加入 Topic 阅读顺序、核心结论、常见误区和 PDF 来源说明。

### Task 4: 填充发现、筛选与实验评价 Topic

**Files:**
- Create: `chapters/part-02-discovery-and-early-research/03-target-antigen-and-antibody-discovery/antigen-and-discovery-platforms.md`
- Create: `chapters/part-02-discovery-and-early-research/04-library-display-and-screening/antibody-libraries-and-display.md`
- Create: `chapters/part-02-discovery-and-early-research/04-library-display-and-screening/screening-and-hit-confirmation.md`
- Create: `chapters/part-02-discovery-and-early-research/05-characterization-and-assays/binding-kinetics-and-assays.md`
- Create: `chapters/part-02-discovery-and-early-research/05-characterization-and-assays/functional-evaluation.md`

**Interfaces:**
- Consumes: PDF 第 6-10 页的技术演进、全人源抗体流程和 AI 边界；亲和力成熟文章中的展示、FACS、NGS、SPR 和 BLI 内容。
- Produces: Engineering 和 AI 任务所需的实验上下文、数据标签和验证边界。

- [ ] **Step 1: 解释发现平台与抗原入口**

建立血清疗法、鼠源单抗、嵌合、人源化和全人源路线的历史关系，并把抗原准备与发现平台标记为后续扩展 Topic。

- [ ] **Step 2: 解释文库、展示与筛选**

说明文库多样性、噬菌体/酵母展示、逐轮加压、富集和命中确认；明确“大文库”不等于覆盖完整序列空间。

- [ ] **Step 3: 解释实验评价**

说明 KD、kon、koff、SPR、BLI、功能实验及展示富集值之间的关系与不可互换性。

- [ ] **Step 4: 更新三个 Chapter README**

将已有正文标记为 `draft`，尚未由资料充分覆盖的抗原设计和完整功能实验体系保持 `outline`。

### Task 5: 填充工程、可开发性与候选物 Topic

**Files:**
- Create: `chapters/part-03-engineering-and-candidate-selection/06-antibody-engineering-and-optimization/affinity-maturation.md`
- Create: `chapters/part-03-engineering-and-candidate-selection/06-antibody-engineering-and-optimization/humanization-fc-and-format-engineering.md`
- Create: `chapters/part-03-engineering-and-candidate-selection/07-specificity-and-developability/developability-overview.md`
- Create: `chapters/part-03-engineering-and-candidate-selection/08-candidate-selection/tpp-and-candidate-nomination.md`

**Interfaces:**
- Consumes: 亲和力成熟文章、PDF 第 4-10 页以及产业化术语文章中的 TPP、PCC 和开发门槛内容。
- Produces: 从实验工程问题到 AI 优化任务的生命周期锚点。

- [ ] **Step 1: 重写亲和力成熟流程**

解释优化目标、突变策略、展示筛选、逐轮加压、完整 IgG 回测、上位性和多性质权衡。

- [ ] **Step 2: 建立其他工程方向入口**

概述人源化、Fc、半衰期和分子形式工程；未被现有资料充分覆盖的机制保持 `outline`。

- [ ] **Step 3: 重写成药性与候选物选择内容**

说明亲和力、特异性、表达、稳定性、聚集、纯度、PK/PD、免疫原性和 CMC 可放大性为何共同决定候选物。

- [ ] **Step 4: 更新三个 Chapter README**

加入跨章链接，并明确“高亲和力序列”不等于“可开发药物候选物”。

### Task 6: 填充临床前、CMC 与商业化 Topic

**Files:**
- Create: `chapters/part-04-development-and-commercialization/09-preclinical-and-translational-research/preclinical-and-ind-enabling.md`
- Create: `chapters/part-04-development-and-commercialization/10-cmc-manufacturing-and-quality/cmc-and-quality-overview.md`
- Create: `chapters/part-04-development-and-commercialization/11-clinical-regulatory-and-commercialization/development-and-commercial-terms.md`

**Interfaces:**
- Consumes: 产业化术语文章中的 IND、CMC、GLP 毒理、PK/PD、ADME、NOAEL、临床、注册、知识产权、市场准入和资产价值内容。
- Produces: 全生命周期后半程的概念地图和术语入口。

- [ ] **Step 1: 建立临床前概览**

按“候选物为何能进入人体”的问题组织 IND-enabling、GLP 毒理、安全药理、PK/PD、ADME、NOAEL、ADA 和免疫原性。

- [ ] **Step 2: 建立 CMC 概览**

说明生产、质量和可放大性为什么是候选物门槛；不把通用术语文章扩写成未经来源支持的抗体工艺细节。

- [ ] **Step 3: 建立临床、注册与商业概览**

把临床阶段、主要终点、BLA/MAA、知识产权、市场准入、授权和 rNPV 放回药物资产主线。

- [ ] **Step 4: 更新三个 Chapter README**

将本 Part 定位为完整地图而非法规或商业实务手册，并标记未来需要权威指南核验的 Topic。

### Task 7: 填充 AI for Antibody Topic 与映射图谱

**Files:**
- Create: `chapters/part-05-ai-for-antibody/12-ai-tasks-value-and-boundaries/aidd-basics-for-antibody-research.md`
- Create: `chapters/part-05-ai-for-antibody/12-ai-tasks-value-and-boundaries/from-experimental-question-to-ai-task.md`
- Create: `chapters/part-05-ai-for-antibody/12-ai-tasks-value-and-boundaries/structure-and-complex-prediction.md`
- Create: `chapters/part-05-ai-for-antibody/12-ai-tasks-value-and-boundaries/affinity-and-mutation-effect-prediction.md`
- Create: `chapters/part-05-ai-for-antibody/12-ai-tasks-value-and-boundaries/generative-design-and-candidate-ranking.md`
- Create: `chapters/part-05-ai-for-antibody/12-ai-tasks-value-and-boundaries/active-learning-and-lab-in-the-loop.md`
- Create: `chapters/part-05-ai-for-antibody/12-ai-tasks-value-and-boundaries/benchmarks-generalization-and-boundaries.md`
- Create: `roadmap/lifecycle-ai-map.md`

**Interfaces:**
- Consumes: AIDD 概念文章、亲和力成熟文章的参考文献和方法分类、生命周期 Chapter 中的实验问题。
- Produces: 从结构预测、亲和力预测、生成设计等计算入口反查实验语境的完整导航。

- [ ] **Step 1: 重写 AIDD 基础概念**

解释机器学习、深度学习、生成式/判别式 AI、模型、算法、特征、表征和泛化，并将例子限定在抗体研发语境。

- [ ] **Step 2: 建立实验问题到 AI 任务的转换框架**

为每类任务记录研发环节、科学问题、输入、输出、实验真值、评价指标和成熟度。

- [ ] **Step 3: 重写已有资料充分覆盖的 AI 路线**

覆盖蛋白语言模型、结构/复合物模型、物理能量与图模型、局部监督学习、主动学习和 Lab-in-the-loop；不把模型预测写成绝对 KD 或实验结论。

- [ ] **Step 4: 建立基准与边界 Topic**

解释数据量小、实验体系不统一、多任务权衡、读数陷阱、上位性、数据泄漏和分布外泛化问题。

- [ ] **Step 5: 建立生命周期-AI 映射表**

只填写现有资料支持的映射项，并使用设计说明中规定的证据等级。

### Task 8: 整理术语与跨章链接

**Files:**
- Modify: `glossary/README.md`
- Modify: `README.md`
- Modify: `roadmap/learning-path.md`
- Modify: all 12 Chapter `README.md` files

**Interfaces:**
- Consumes: Tasks 3-7 形成的术语、Topic 路径和跨章关系。
- Produces: 可从根入口、生命周期、AI 任务和术语四种方式导航的知识库。

- [ ] **Step 1: 建立术语速查**

收录现有资料中的关键缩写，给出一句话定义和指向正文的相对链接，不在 glossary 复制长篇解释。

- [ ] **Step 2: 补齐跨章链接**

在亲和力、成药性、实验评价、候选物选择和 AI Topic 之间建立双向链接。

- [ ] **Step 3: 更新根导航和学习路径**

确保所有 Chapter 和已完成 Topic 可从根 README 或学习路径到达。

### Task 9: 全仓库内容验证

**Files:**
- Verify: all Markdown and PDF files in repository

**Interfaces:**
- Consumes: Tasks 1-8 的全部产物。
- Produces: 可交给用户阅读和继续维护的第一版工作树。

- [ ] **Step 1: 检查占位符和远程公众号资源**

Run:

```bash
rg -n 'T[B]D|T[O]DO|F[I]XME|mmbiz\.qpic\.cn|预览时标签不可点|微信扫一扫' .
```

Expected: 没有匹配；`status: outline` 是正式内容状态，不属于占位符。

- [ ] **Step 2: 检查元数据和状态值**

Run:

```bash
rg -n '^status:' chapters roadmap glossary case-studies
```

Expected: 所有 Topic 和导航页只使用 `outline`、`draft`、`reviewed` 或 `needs-update`。

- [ ] **Step 3: 检查 Chapter 数量和重复编号**

Run:

```bash
find chapters -mindepth 3 -maxdepth 3 -name README.md | sort
```

Expected: 正好 12 个 Chapter README，编号 01-12 各出现一次。

- [ ] **Step 4: 检查内部 Markdown 链接**

逐一解析相对链接目标，报告不存在的文件；修正全部断链后重新运行，预期零断链。

- [ ] **Step 5: 检查 PDF 完整性和 Git 状态**

Run:

```bash
shasum -a 256 /Users/bytedance/Downloads/单抗药物研发知识库.pdf appendix/materials/单抗药物研发知识库.pdf
git status --short --branch
```

Expected: PDF 哈希一致；所有新增内容可见，但没有新增提交。

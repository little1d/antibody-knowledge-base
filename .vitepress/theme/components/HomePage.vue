<script setup lang="ts">
import {
  ArrowRight,
  BookOpen,
  BrainCircuit,
  FlaskConical,
  Route,
} from 'lucide-vue-next'
import { withBase } from 'vitepress'

const parts = [
  {
    number: '01',
    title: '抗体基础',
    detail: '免疫产生、分子结构、结合与效应功能',
    meta: '2 Chapters',
    href: '/chapters/part-01-foundations/',
    tone: 'violet',
  },
  {
    number: '02',
    title: '发现与早期研究',
    detail: '抗原、发现平台、文库筛选与实验评价',
    meta: '3 Chapters',
    href: '/chapters/part-02-discovery-and-early-research/',
    tone: 'teal',
  },
  {
    number: '03',
    title: '工程与候选物选择',
    detail: '分子优化、可开发性与多属性决策',
    meta: '3 Chapters',
    href: '/chapters/part-03-engineering-and-candidate-selection/',
    tone: 'amber',
  },
  {
    number: '04',
    title: '临床前到产业化',
    detail: '转化研究、CMC、临床、注册与商业化',
    meta: '3 Chapters',
    href: '/chapters/part-04-development-and-commercialization/',
    tone: 'blue',
  },
  {
    number: '05',
    title: 'AI for Antibody',
    detail: '任务定义、实验真值、证据与能力边界',
    meta: '1 Chapter',
    href: '/chapters/part-05-ai-for-antibody/',
    tone: 'rose',
  },
]

const entrances = [
  {
    icon: BookOpen,
    title: '连续学习路径',
    detail: '从免疫学基础进入完整研发主线',
    href: '/roadmap/learning-path',
  },
  {
    icon: Route,
    title: '生命周期与 AI 图谱',
    detail: '在研发决策、实验真值和 AI 任务间双向检索',
    href: '/roadmap/lifecycle-ai-map',
  },
  {
    icon: BrainCircuit,
    title: 'AI 任务与能力边界',
    detail: '定位结构、亲和力、生成设计与实验闭环',
    href: '/chapters/part-05-ai-for-antibody/12-ai-tasks-value-and-boundaries/',
  },
]
</script>

<template>
  <main class="kb-home">
    <section class="kb-hero">
      <div class="kb-antibody-scene" role="img" aria-label="IgG 抗体 Y 型结构示意">
        <span class="kb-antibody-scene__axis kb-antibody-scene__axis--horizontal" />
        <span class="kb-antibody-scene__axis kb-antibody-scene__axis--vertical" />
        <span class="kb-antibody-scene__chain kb-antibody-scene__chain--heavy-left" />
        <span class="kb-antibody-scene__chain kb-antibody-scene__chain--heavy-right" />
        <span class="kb-antibody-scene__chain kb-antibody-scene__chain--fc-left" />
        <span class="kb-antibody-scene__chain kb-antibody-scene__chain--fc-right" />
        <span class="kb-antibody-scene__chain kb-antibody-scene__chain--light-left" />
        <span class="kb-antibody-scene__chain kb-antibody-scene__chain--light-right" />
        <span class="kb-antibody-scene__hinge" />
        <span class="kb-antibody-scene__label kb-antibody-scene__label--fab-left">Fab</span>
        <span class="kb-antibody-scene__label kb-antibody-scene__label--fab-right">Fab</span>
        <span class="kb-antibody-scene__label kb-antibody-scene__label--fc">Fc</span>
      </div>
      <div class="kb-shell kb-hero__content">
        <div class="kb-hero__copy">
          <p class="kb-eyebrow">
            <FlaskConical :size="16" stroke-width="1.8" aria-hidden="true" />
            AI4S · ANTIBODY R&amp;D
          </p>
          <h1>抗体药物研发知识库</h1>
          <p class="kb-hero__lead">
            从免疫机制、抗体发现和工程优化，到临床前、CMC 与 AI
            实验闭环，建立贯穿研发决策的系统知识框架。
          </p>
          <div class="kb-hero__actions">
            <a class="kb-button kb-button--primary" :href="withBase('/roadmap/learning-path')">
              开始学习
              <ArrowRight :size="17" stroke-width="2" aria-hidden="true" />
            </a>
            <a class="kb-button kb-button--secondary" :href="withBase('/roadmap/lifecycle-ai-map')">
              查看生命周期图谱
            </a>
          </div>
          <div class="kb-hero__scope" aria-label="知识库内容规模">
            <span><strong>5</strong> Parts</span>
            <span><strong>12</strong> Chapters</span>
            <span><strong>43</strong> Pages</span>
          </div>
        </div>
      </div>
    </section>

    <section class="kb-band kb-lifecycle">
      <div class="kb-shell">
        <div class="kb-section-heading">
          <div>
            <p class="kb-kicker">FULL LIFECYCLE</p>
            <h2>按研发阶段阅读</h2>
          </div>
          <p>
            内容沿真实研发路径组织，同时保留从 AI
            任务反查实验语境的入口。
          </p>
        </div>

        <ol class="kb-part-grid">
          <li v-for="part in parts" :key="part.number" :class="`kb-part kb-part--${part.tone}`">
            <a :href="withBase(part.href)">
              <div class="kb-part__topline">
                <span class="kb-part__number">{{ part.number }}</span>
                <span class="kb-part__meta">{{ part.meta }}</span>
              </div>
              <h3>{{ part.title }}</h3>
              <p>{{ part.detail }}</p>
              <ArrowRight class="kb-part__arrow" :size="18" stroke-width="1.8" aria-hidden="true" />
            </a>
          </li>
        </ol>
      </div>
    </section>

    <section class="kb-band kb-entrances">
      <div class="kb-shell kb-entrances__layout">
        <div class="kb-entrances__intro">
          <p class="kb-kicker">KNOWLEDGE ROUTES</p>
          <h2>把模型放回实验与决策</h2>
          <p>
            每个 AI 任务都对应具体研发环节、实验标签和验证边界；模型输出不替代实验结论。
          </p>
        </div>

        <div class="kb-entry-list">
          <a
            v-for="entry in entrances"
            :key="entry.title"
            class="kb-entry"
            :href="withBase(entry.href)"
          >
            <span class="kb-entry__icon">
              <component :is="entry.icon" :size="19" stroke-width="1.8" aria-hidden="true" />
            </span>
            <span class="kb-entry__copy">
              <strong>{{ entry.title }}</strong>
              <small>{{ entry.detail }}</small>
            </span>
            <ArrowRight :size="18" stroke-width="1.8" aria-hidden="true" />
          </a>
        </div>
      </div>
    </section>
  </main>
</template>

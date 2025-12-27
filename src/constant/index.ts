import type { ResumeSchema } from '@/types'

export const resumeData: ResumeSchema = {
  introduce: {
    name: '李承乾 (River)',
    avatarFallback: 'River',
    tags: [
      '前端技术架构师',
      '开源引擎布道师',
      '全栈解决方案专家',
    ],
    about: '8 年前端深耕经验，致力于构建**极速、稳定且具备高度可扩展性**的 Web 应用。主导过千万级 DAU 产品的架构升级，深谙微内核架构、跨端渲染引擎及研发效能中台建设。',
    avatarUrl: '/avatar.png',
    contactMethods: [
      {
        type: 'email',
        value: 'river.arch@example.com',
      },
      {
        type: 'phone',
        value: '+86 139-8888-9999',
      },
      {
        type: 'x',
        value: 'mock-river-arc',
      },
      {
        type: 'github',
        value: 'mock-river-arc',
      },
    ],
  },

  skills: [
    '核心驱动：React 18 (Concurrent Mode) / Next.js / Vue 3 (Composition API)',
    '工程基建：Rust-based Tooling (Rspack/Turborepo) / Monorepo 集群管理 / pnpm',
    '跨端方案：Electron 深度优化 / Flutter 混合开发 / React Native 实战',
    '后端支撑：Node.js 高并发模型 / NestJS / Prisma / Redis 缓存策略',
    'DevOps：Kubernetes 编排 / CI-CD 流水线自动化 / 灰度发布策略设计',
  ],

  workExperiences: [
    {
      company: '阿特拉斯数字矩阵',
      url: 'https://github.com/bryqiu/online-cv',
      position: ['前端负责人', '首席架构师'],
      startTime: '2021-05',
      endTime: '至今',
      highlights: [
        '**全链路效能革新**：主导了名为“极光(Aurora)”的研发中台建设，通过自研基于 Rust 的构建器替代传统 Webpack，将 300+ 模块的冷启动时间从 90s 降低至 4s，全员研发效率提升 65%。',
        '**微内核架构升级**：针对公司旗舰级云端办公套件，设计并落地了插件化微内核架构，支持第三方开发者通过 JS Sandbox 安全接入插件，成功构建了拥有 100+ 扩展应用的生态体系。',
      ],
    },
    {
      company: '赛博脉动实验室',
      url: 'https://github.com/bryqiu/online-cv',
      position: '高级前端开发专家',
      startTime: '2017-07',
      endTime: '2021-04',
      highlights: [
        '**数字孪生引擎**：负责“万象(Omni)”城市级数字孪生系统的可视化层设计，基于 Three.js 开发了高性能 Lods 分级加载策略，实现了在浏览器端顺畅渲染 50 万级面数的城市精模。',
        '**跨端组件库体系**：设计并维护了一套兼容 Web、小程序、Flutter 的多端通用设计系统 (Design System)，通过一套代码协议分发至各端，UI 一致性达成率 99%。',
      ],
    },
  ],

  projects: [
    {
      name: 'Titan-Engine：分布式低代码渲染内核',
      summary: '为超大规模企业级应用设计的 UI 编排与自动化协议标准。',
      description: [
        '**动态协议解析**：设计了一套自研的语义化 DSL，支持通过配置化方式生成复杂的逻辑流图，解决了业务逻辑频繁变动带来的代码堆砌问题。',
        '**异构组件映射**：实现了跨框架组件适配层，支持在同一页面内混合渲染 React 与 Vue 组件，解决了遗留平滑迁移难题。',
        '**性能隔离机制**：引入了 Shadow DOM 与样式沙箱，确保了不同业务模块之间的样式互不干扰，组件冲突率为 0。',
      ],
      position: '架构负责人',
      url: 'https://github.com/mock-river/titan-engine',
      techStack: ['TypeScript', 'Proxy-State', 'PostCSS', 'WebComponents'],
    },
    {
      name: 'Nebula-Insight：全链路前端监控系统',
      summary: '一套集性能监控、异常捕获、行为溯源于一体的自研监控平台。',
      description: [
        '**精准行为回溯**：通过压缩算法实现了低损耗的 Canvas 录屏功能，支持 1:1 复现用户报错现场。',
        '**指标自动化采集**：不仅覆盖了标准的 Web Vitals，还自定义了“首字节可用”、“交互响应指数”等业务深度指标。',
        '**报警降噪算法**：引入了简单的波动检测算法，将无效报警率降低了 80%，帮助运维同学精准定位核心链路故障。',
      ],
      position: ['独立开发者', '架构'],
      url: 'https://nebula-insight.mock',
      techStack: ['Node.js', 'ClickHouse', 'InfluxDB', 'Koa'],
    },
  ],

  educations: [
    {
      school: '星辰科技大学',
      major: '计算机科学与工程',
      degree: '硕士',
      startTime: '2014-09',
      endTime: '2017-06',
    },
  ],

  openSourceProjects: [
    {
      name: 'v-fast-table',
      description: '一个追求极致性能的 Vue 3 万级数据虚拟滚动表格插件。',
      url: 'https://github.com/mock-river/v-fast-table',
      stars: 3200,
      techStack: ['Vue 3', 'TypeScript'],
    },
    {
      name: 'webpack-plugin-analyzer-pro',
      description: '可视化分析 Webpack 构建链路瓶颈的进阶插件。',
      url: 'https://github.com/mock-river/analyzer-pro',
      stars: 1500,
      techStack: ['Node.js', 'Echarts'],
    },
  ],

  meta: {
    theme: 'system',
    lastModified: '2024-03-15',
  },
}

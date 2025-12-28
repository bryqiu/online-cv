# 📄 Online CV / 极简在线简历

[![Next.js](https://img.shields.io/badge/Next.js-16-black?logo=next.js)](https://nextjs.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind-CSS-38B2AC?logo=tailwind-css)](https://tailwindcss.com/)
[![License](https://img.shields.io/badge/license-MIT-blue.svg)](LICENSE)

基于 **Next.js 16 + Tailwind CSS** 的在线简历。极简设计，更改配置即可快速部署。

[在线演示 (Demo)](https://online-cv-landing.vercel.app/) ▪ [快速开始](#快速开始) ▪ [部署指南](#部署指南)

## 截图

![online-cv](https://github.com/user-attachments/assets/f1815c35-3c52-4620-809a-e14003bbaaaf)

## 如何配置为我的简历？

只需修改核心配置文件：

1. 打开 `src/constant/index.ts`。
2. 按照字段含义，替换对应内容，包括个人信息、技术栈、工作经历、项目经历等：
3. 保存文件，查看网页效果(访问 `http://localhost:3000`)
4. 部署到 Vercel 或 GitHub Pages 即可。

确保你已经在本地跑起项目，参考：[快速开始](#快速开始)

## 部署指南

### Vercel 一键部署（最推荐）

Vercel 是 Next.js 官方托管平台，支持代码提交自动更新、全局 CDN 加速。

1. Fork 本仓库到你的 GitHub 账号。

2. 登录 [Vercel.com](https://vercel.com/)。

3. 点击 Add New -> Project，选择你刚刚 Fork 的 `online-cv` 仓库。

4. 点击 Deploy，等待 1 分钟即可完成上线。

> 之后你只需在本地修改 `src/constant/index.ts` 并推送（Push）到 GitHub，在线简历会自动更新。

### 部署到 GitHub Pages

### 自部署到你的服务器

## 快速开始

环境准备

确保你的本地环境已安装 [Node.js](https://nodejs.org/) (v18+) 和 [pnpm](https://pnpm.io/)。

克隆与安装

```bash
# 克隆仓库
git clone https://github.com/bryqiu/online-cv.git

# 进入目录
cd online-cv

# 安装依赖
pnpm install
```

启动开发

```base
pnpm dev
```

访问 http://localhost:3000 即可实时查看效果。

## 项目结构说明

```txt
online-cv/
├── src/                              # 核心源码目录
│   ├── app/                          # App Router 路由、页面与布局 (Layouts)
│   ├── components/                   # 可复用 UI 组件
│   ├── constant/                     # 常量配置、包括简历配置文件、图标等
│   ├── lib/                          # 外部库初始化与封装 (如 clsx 适配)
│   ├── theme/                        # 主题配置、颜色、字体等
│   ├── types/                        # TypeScript 类型声明定义
│   └── utils/                        # 工具函数、辅助模块等
├── .vscode/                          # VS Code 项目配置
├── public/                           # 静态资源 (图片、PDF、Favicon 等)
├── .editorconfig                     # 跨编辑器编码风格统一配置
├── .env                              # 环境变量通用配置
├── .env.development                  # 开发模式环境变量
├── .env.production                   # 生产模式环境变量
├── .gitignore                        # Git 提交忽略文件配置
├── .npmrc                            # npm/pnpm 配置文件 (如镜像源)
├── .nvmrc                            # 指定项目所需的 Node.js 版本
├── .stylelintignore                  # Stylelint 样式校验忽略配置
├── commitlint.config.mjs             # Git 提交信息规范配置
├── eslint.config.mjs                 # ESLint 代码质量校验配置、格式化配置
├── LICENSE                           # 开源许可证文件
├── pnpm-lock.yaml                    # 依赖版本锁定文件
├── next-env.d.ts                     # Next.js 环境类型定义文件
├── next.config.ts                    # Next.js 核心功能配置
├── stylelint.config.mjs              # 样式代码校验规则
├── postcss.config.mjs                # PostCSS 配置文件
├── components.json                   # shadcn/ui 组件库配置文件
├── tsconfig.json                     # TypeScript 编译选项配置
├── README.md                         # 项目说明文档
└── package.json                      # 项目核心配置与依赖管理
```

## 致谢

本项目参考自 [Bartosz Jarocki/cv](https://github.com/BartoszJarocki/cv)

## 作者

[@Bryan Qiu](https://github.com/bryqiu)

## 开源协议

[MIT](https://github.com/bryqiu/online-cv/blob/main/LICENSE) License © 2025-PRESENT [Bryan Qiu](https://github.com/bryqiu)

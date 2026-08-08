/**
 * ── 个人资料配置文件 ──
 *
 * 你只需要编辑这个文件，就能更新首页和关于页的内容。
 * 访客在网站上只能查看，无法编辑。
 * 修改后运行 `pnpm build` + `pnpm deploy` 即可上线。
 */

const profile = {
  /* ── 基本信息 ── */
  name: "YXW",
  initials: "YW",
  tagline: "Full-Stack Developer & AI Enthusiast",
  subtitle: "热爱技术，用代码构建有趣的东西。",

  /* ── 关于我（段落数组，每段是一个字符串） ── */
  bio: [
    "我是一名全栈开发者，专注于 Web 技术与 AI 应用。我相信代码可以改变世界，也享受从零到一构建产品的过程。",
    "目前正在深入学习 AI Agent，探索如何让 AI 更好地辅助开发工作流。使用 Codex 已经让我的开发效率大幅提升，从脚手架搭建到功能实现，每一步都更加高效。",
    "这个博客记录我的学习心得、技术实践和项目经验。希望对你也有所帮助。",
  ],

  /* ── 技能标签 ── */
  skills: [
    "React", "Vite", "Tailwind CSS", "JavaScript",
    "Python", "Node.js", "Git", "VS Code", "AI Agent",
  ],

  /* ── 联系方式 ── */
  contact: {
    github: "https://github.com",
    email: "example@example.com",
  },

  /* ── 精选项目（首页展示） ── */
  featuredProjects: [
    {
      name: "个人博客",
      description: "React + Vite + Tailwind CSS 构建的静态博客，Markdown 驱动内容，部署于 GitHub Pages。",
      tech: ["React", "Vite", "Tailwind CSS"],
      link: "https://github.com",
    },
    {
      name: "AI 学习笔记",
      description: "记录 AI Agent 学习历程，包括 Codex 使用心得与实践项目。",
      tech: ["AI Agent", "Codex", "Markdown"],
      link: "https://github.com",
    },
  ],

  /* ── 全部项目（Projects 页面展示） ── */
  allProjects: [
    {
      name: "个人博客",
      description: "使用 React + Vite + Tailwind CSS 构建的静态博客网站。所有文章以 Markdown 文件存储，通过 react-markdown 渲染，Vite 构建时自动内联。部署于 GitHub Pages，零服务器成本。",
      tech: ["React", "Vite", "Tailwind CSS", "react-markdown", "GitHub Pages"],
      github: "https://github.com",
    },
    {
      name: "AI Agent 学习笔记",
      description: "系统记录 AI Agent 学习历程，包括 LangChain、AutoGPT 等框架的实践总结，以及使用 Codex 辅助开发的心得。",
      tech: ["AI Agent", "Codex", "LangChain", "Python"],
      github: "https://github.com",
    },
    {
      name: "Codex CLI 工具集",
      description: "基于 Codex 开发的一系列命令行工具，覆盖代码生成、自动化测试、文档翻译等场景。",
      tech: ["Node.js", "Codex", "CLI"],
      github: "https://github.com",
    },
  ],
};

export default profile;
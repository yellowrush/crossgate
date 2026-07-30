# crossgate

魔力全书 - CrossGate 魔力宝贝中文资料站

网址：https://crossgate-book.github.io/

## 技术栈

- [Astro 7](https://astro.build) - 静态站点生成器
- [Vue 3](https://vuejs.org) - 交互式 UI 组件 (Islands)
- [MDX](https://mdxjs.com) - Markdown + JSX 内容
- [Pagefind](https://pagefind.app) - 全站离线搜索
- [PWA](https://vite-pwa-org.netlify.app) - 渐进式 Web 应用

## 开发

```bash
# 安装依赖
npm install

# 本地开发
npx astro dev

# 构建
npx astro build

# 预览构建结果
npx astro preview
```

## 项目结构

```
src/
├── components/
│   ├── astro/        # 静态 Astro 组件
│   └── vue/          # 交互式 Vue 3 Islands
├── data/             # 宠物/任务/宝石等数据
├── layouts/          # 页面布局
├── lib/              # 工具函数
├── pages/            # 所有页面 (astro/md/mdx)
│   ├── pets/         # 257 个宠物详情页
│   └── tasks/        # 17 个任务详情页
├── scripts/          # 主题切换
└── styles/           # 全局样式 (亮色/暗色主题)
```

## 部署

推送到 `develop` 分支自动触发 GitHub Actions 部署到 GitHub Pages。

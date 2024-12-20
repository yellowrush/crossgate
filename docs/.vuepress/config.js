module.exports = {
  base: '/',
  title: '魔力全书',
  description: '魔力玩家的百科全书',
  head: [
    [
      'link',
      {
        rel: 'apple-touch-icon',
        sizes: '180x180',
        href: 'apple-touch-icon-180x180.png',
      },
    ],
    [
      'link',
      {
        rel: 'icon',
        type: 'image/png',
        sizes: '32x32',
        href: 'favicon-32x32.png',
      },
    ],
    [
      'link',
      {
        rel: 'icon',
        type: 'image/png',
        sizes: '16x16',
        href: 'favicon-16x16.png',
      },
    ],
    ['link', { rel: 'manifest', href: 'site.webmanifest' }],
    ['link', { rel: 'shortcut icon', href: 'favicon.ico' }],
    ['meta', { name: 'theme-color', content: '#3eaf7c' }],
    ['meta', { name: 'apple-mobile-web-app-capable', content: 'yes' }],
    [
      'meta',
      { name: 'apple-mobile-web-app-status-bar-style', content: 'black' },
    ],
    [
      'meta',
      {
        name: 'viewport',
        content:
          'width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0',
      },
    ],
  ],
  plugins: [
    '@vuepress/plugin-back-to-top',
    '@vuepress/plugin-medium-zoom',
    [
      '@goy/svg-icons',
      {
        svgsDir: 'svgs',
      },
    ],
    [
      '@vuepress/last-updated',
      {
        dateOptions: {
          hour12: false,
        },
      },
    ],
    [
      '@vuepress/pwa',
      {
        serviceWorker: true,
        popupComponent: 'MySWUpdatePopup',
        updatePopup: {
          message: '发现来自作者的更新包',
        },
      },
    ],
    [
      'vuepress-plugin-comment',
      {
        choosen: 'valine',
        options: {
          el: '#vcomments',
          appId: '5x9DOGS2ozr2GlNDuVmsPvsl-gzGzoHsz',
          appKey: 'lEH8MaJGsVTQvTJfYtfj3hkv',
        },
      },
    ],
  ],
  themeConfig: {
    logo: 'https://user-images.githubusercontent.com/78347270/106699233-d519e800-6625-11eb-83fc-6466733512a4.png',
    nav: [
      {
        text: '🗂️ 攻略',
        items: [
          { text: '⚔️ 练级路线', link: '/leveling' },
          { text: '📜 游戏任务', link: '/tasks' },
          { text: '🅾️ ', link: '/questions' },
          { text: '🦸‍♂️ 游戏账号', link: '/guides/register' },
        ],
      },
      {
        text: '💾 游戏数据',
        items: [
          { text: '🔮 宝石属性', link: '/gems' },
          { text: '🐉 宠物大全', link: '/pets' },
        ],
      },
      {
        text: '⚒️ 游戏工具',
        items: [
          { text: '🧮 宠物算档器', link: '/tools/calculate' },
          { text: '🛸 全书离线APP', link: '/guides/pwa' },
        ],
      },
      { text: '💬 留言', link: '/comment' },
    ],
  },
  markdown: {
    externalLinks: {
      target: '_blank',
      rel: 'noopener noreferrer',
    },
  },
  chainWebpack: (config) => {
    /** Webpack rule to handle some non-image assets that we'll use */
    config.module
      .rule('files')
      .test(/\.(pdf|zip|ait|log|rar|txt)$/)
      .use('file-loader')
      .loader('file-loader')
      .options({
        name: `[path][name].[ext]`,
        limit: 10000,
        esModule: false,
      });
    /** Explicitly setting esModule:false
     * to avoid this issue https://github.com/vuejs/vue-loader/issues/1612
     */
    config.module.rule('images').use('url-loader').options({
      limit: 10000,
      esModule: false,
    });
  },
};

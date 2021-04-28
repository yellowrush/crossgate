module.exports = {
  base: '/',
  title: '魔力全书',
  description: '魔力玩家的百科全书',
  head: [
    ['link', { rel: "apple-touch-icon", sizes: "180x180", href: "apple-touch-icon-180x180.png"}],
    ['link', { rel: "icon", type: "image/png", sizes: "32x32", href: "favicon-32x32.png"}],
    ['link', { rel: "icon", type: "image/png", sizes: "16x16", href: "favicon-16x16.png"}],
    ['link', { rel: "manifest", href: "site.webmanifest"}],
    ['link', { rel: "shortcut icon", href: "favicon.ico"}],
    ['meta', { name: 'theme-color', content: '#3eaf7c' }],
    ['meta', { name: 'apple-mobile-web-app-capable', content: 'yes' }],
    ['meta', { name: 'apple-mobile-web-app-status-bar-style', content: 'black' }],
    ['meta', { name: 'viewport', content: 'width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0' }],
  ],
  plugins: [
    '@vuepress/plugin-back-to-top',
    '@vuepress/plugin-medium-zoom',
    ['@goy/svg-icons', {
      svgsDir: 'svgs',
    }],
    ['@vuepress/last-updated'],
    ['@vuepress/pwa', {
      serviceWorker: true,
      updatePopup: {
        message: '发现来自作者的更新包',
        popupComponent: 'UpdatePopup',
      }
    }],
    /*
    [
      'vuepress-plugin-comment',
      {
        choosen: 'valine', 
        // options选项中的所有参数，会传给Valine的配置
        options: {
          el: '#valine-vuepress-comment',
          appId: '5VWlV86eof1RVirEVvj4JYvU-gzGzoHsz',
          appKey: 'wRiq6arzVYEHNdWoW97vF6uy'
        }
      }
    ],
    */
  ],
  themeConfig: {
    logo: 'https://user-images.githubusercontent.com/78347270/106699233-d519e800-6625-11eb-83fc-6466733512a4.png',
    nav: [
      { text: '⚔️ 练级', link: '/leveling' },
      { text: '📜 游戏任务', link: '/tasks' },
      { text: '🐉 宠物大全', link: '/pets' },
      { text: '💸 道具商城', link: '/items' }
    ]
  },
  markdown: {
    externalLinks: {
      target: '_blank',
      rel: 'noopener noreferrer',
    },
  },
}

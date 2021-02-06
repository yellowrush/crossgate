module.exports = {
  base: '/',
  title: '魔力全书',
  description: '魔力玩家的百科全书',
  head: [
    ['link', { rel: "apple-touch-icon", sizes: "180x180", href: "apple-touch-icon.png"}],
    ['link', { rel: "icon", type: "image/png", sizes: "32x32", href: "favicon-32x32.png"}],
    ['link', { rel: "icon", type: "image/png", sizes: "16x16", href: "favicon-16x16.png"}],
    ['link', { rel: "manifest", href: "site.webmanifest"}],
    ['link', { rel: "shortcut icon", href: "favicon.ico"}],
    ['meta', { name: 'theme-color', content: '#3eaf7c' }],
    ['meta', { name: 'apple-mobile-web-app-capable', content: 'yes' }],
    ['meta', { name: 'apple-mobile-web-app-status-bar-style', content: 'black' }]
  ],
  plugins: [
    '@vuepress/plugin-back-to-top',
    '@vuepress/plugin-medium-zoom',
  ]
}

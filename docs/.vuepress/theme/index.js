module.exports = {
  extend: '@vuepress/theme-default',
  plugins: [
    ['@vuepress/pwa', {
      serviceWorker: true,
      updatePopup: {
        message: "发现新内容可用",
        buttonText: "🔄点击刷新"
      }
    }],
    ['@vuepress/search', {
      searchMaxSuggestions: 10
    }]
  ]
}
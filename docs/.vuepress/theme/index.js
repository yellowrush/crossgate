module.exports = {
  extend: '@vuepress/theme-default',
  plugins: [
    ['@vuepress/pwa', {
      serviceWorker: true,
      updatePopup: true
    }]
  ]
}
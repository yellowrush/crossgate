import { defineConfig } from 'astro/config';
import vue from '@astrojs/vue';
import mdx from '@astrojs/mdx';
import { VitePWA } from 'vite-plugin-pwa';

export default defineConfig({
  site: 'https://crossgate-book.github.io',
  base: '/',
  integrations: [
    vue(),
    mdx(),
  ],
  vite: {
    plugins: [
      VitePWA({
        registerType: 'autoUpdate',
        manifest: {
          name: '魔力全书',
          short_name: '魔力全书',
          description: '魔力玩家的百科全书',
          theme_color: '#3eaf7c',
          icons: [
            { src: 'maskable_icon.png', sizes: '512x512', type: 'image/png' },
            { src: 'apple-touch-icon-180x180.png', sizes: '180x180', type: 'image/png' },
          ],
        },
        workbox: {
          globPatterns: ['**/*.{js,css,html,svg,png,jpg,gif,ico,woff,woff2,ttf,otf}'],
        },
      }),
    ],
    assetsInclude: ['**/*.pdf', '**/*.zip', '**/*.ait', '**/*.log', '**/*.rar', '**/*.txt'],
  },
});

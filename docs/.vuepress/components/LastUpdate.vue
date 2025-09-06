<template>
  <div class="last-update">
    <span class="stat update-time">
      <vp-icon class="icon" name="time" />
      {{ formattedLastUpdated }}
    </span>
    <span class="stat read-count">
      <vp-icon class="icon" name="read" />
      <span class="leancloud-visitors-count">-</span>
    </span>
  </div>
</template>

<script>
  export default {
    name: 'LastUpdate',
    computed: {
      formattedLastUpdated() {
        if (!this.$page.lastUpdated) return '无更新时间';
        const date = new Date(this.$page.lastUpdated);
        // Format as YYYY/MM/DD HH:mm:ss
        return `${date.getFullYear()}/${(date.getMonth() + 1)
          .toString()
          .padStart(2, '0')}/${date
          .getDate()
          .toString()
          .padStart(2, '0')} ${date
          .getHours()
          .toString()
          .padStart(2, '0')}:${date
          .getMinutes()
          .toString()
          .padStart(2, '0')}:${date.getSeconds().toString().padStart(2, '0')}`;
      },
    },
    mounted() {
      // Visitor count logic (Valine/LeanCloud)
      import('valine').then((module) => {
        const Valine = module.default;
        if (typeof window !== 'undefined') {
          const isDev = window.location.hostname.includes('localhost');
          if (isDev) return;
          // Set id for visitor count
          const el = document.getElementsByClassName(
            'leancloud-visitors-count'
          )[0];
          if (el) el.id = window.location.pathname;
          window.AV = require('leancloud-storage');
          this.valine = new Valine();
          this.initValine();
        }
      });
    },
    methods: {
      initValine() {
        let path = window.location.pathname;
        const el = document.getElementsByClassName(
          'leancloud-visitors-count'
        )[0];
        if (el) el.id = path;
        this.valine.init({
          appId: '5x9DOGS2ozr2GlNDuVmsPvsl-gzGzoHsz',
          appKey: 'lEH8MaJGsVTQvTJfYtfj3hkv',
          notify: false,
          verify: false,
          path,
          visitor: true,
          avatar: 'mm',
          placeholder: 'write here',
        });
      },
    },
    watch: {
      $route(to, from) {
        if (from.path !== to.path) {
          this.initValine();
        }
      },
    },
  };
</script>

<style scoped>
  .last-update {
    margin: 1rem 0;
    display: flex;
    align-items: center;
  }
  .stat {
    display: flex;
    align-items: center;
    font-size: 12px;
    margin-right: 1.2rem;
  }
  .stat:last-child {
    margin-right: 0;
  }
  .icon {
    width: 20px;
    font-size: 18px;
    margin-right: 4px;
    vertical-align: middle;
    opacity: 1;
  }
  .leancloud-visitors-count {
    vertical-align: middle;
    font-size: 12px;
  }
</style>

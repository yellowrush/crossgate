<template>
    <div class="last-update">
      <span class="leancloud-visitors" data-flag-title="Your Article Title">
        <span class="stat update-time">
            <vp-icon class="icon" name="time" />
            {{ $page.lastUpdated }}
        </span>
        <span class="stat read-count">
            <vp-icon class="icon" name="read" />
            <span class="leancloud-visitors-count">-</span>
        </span>
      </span>
    </div>
</template>

<script>
export default {
    name: 'Valine',

    mounted() {
        // valine库里面存在window变量；HTML会通过NodeJS进行服务端渲染来产生
        // 通过动态导入来解决“NodeJS环境下对window变量未定义”的问题
        import('valine').then(module => {
            const Valine = module.default

            if (typeof window !== 'undefined') {
                const isDev = window.location.hostname.includes('localhost');
                if (isDev) return; // 不统计本地开发时的阅读量

                document.getElementsByClassName('leancloud-visitors')[0].id = window.location.pathname
                this.window = window
                window.AV = require('leancloud-storage')

                this.valine = new Valine()
                this.initValine()
            }
        })
    },

    methods: {
        initValine () {
            let path = window.location.pathname
            document.getElementsByClassName('leancloud-visitors')[0].id = path

            this.valine.init({
                appId: '5x9DOGS2ozr2GlNDuVmsPvsl-gzGzoHsz',
                appKey: 'lEH8MaJGsVTQvTJfYtfj3hkv',
                notify: false,
                verify: false,
                path,
                visitor: true,
                avatar: 'mm',
                placeholder: 'write here'
            })
        }
    },

    watch: {
        $route (to, from) {
            if (from.path !== to.path) {
                this.initValine()
            }
        }
    }
}
</script>

<style scoped>
.last-update {
    margin: 1rem 0;
}

.leancloud-visitors{
    display: flex;
    align-items: center;
}
.icon {
    width: 20px;
    font-size: 20px;
    margin-right: 4px;
    vertical-align: middle;
    opacity: 1;
}

.update-time{
    display: flex;
    font-size: 12px;
}

.update-time .icon{
    font-size: 18px;
}

.leancloud-visitors-count {
    vertical-align: middle;
    font-size: 12px;
}

.stat{
  display: flex;
  align-items: center;
  margin-right: .5rem;
}
.stat:last-child::after {
    content: " ";
}
</style>

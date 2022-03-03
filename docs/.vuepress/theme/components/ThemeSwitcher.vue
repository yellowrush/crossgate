<template>
  <a role="button" style="font-size: 1rem; cursor: pointer; border-bottom: 0;" @click.prevent="switchTheme()" :aria-label="'Switch to ' + nextTheme + ' mode'" class="nav-link">
    <span key="dark" v-if="theme === 'dark'"><vp-icon class="icon" name="day" /></span>
    <span key="light" v-else><vp-icon class="icon" name="night" /></span>
  </a>
</template>

<script>
const themes = ['light', 'dark']
export default {
  name: 'ThemeSwitcher',
  data () {
    return {
      theme: 'dark'
    }
  },
  computed: {
    nextTheme () {
      const currentIndex = themes.indexOf(this.theme)
      const nextIndex = (currentIndex + 1) % themes.length
      return themes[nextIndex]
    }
  },
  methods: {
    switchTheme () {
      const currentIndex = themes.indexOf(this.theme)
      const nextIndex = (currentIndex + 1) % themes.length
      window.__setPreferredTheme(themes[nextIndex])
      this.theme = themes[nextIndex]
    }
  },
  async mounted () {
    // set default
    if (typeof window.__theme !== 'undefined') {
      this.theme = window.__theme
    }
  },
  
}
</script>
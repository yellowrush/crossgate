<template>
  <main
    class="home"
    :aria-labelledby="data.heroText !== null ? 'main-title' : null"
  >
    <div
      v-if="data.features && data.features.length"
      class="features"
    >
      <div
        v-for="(feature, index) in data.features"
        :key="index"
        class="feature"
      >
        <h2>{{ feature.title }}</h2>
        <p>{{ feature.details }}</p>
      </div>
    </div>
    <!-- 
    <Pet />
    -->
    <Content class="theme-default-content custom" />

    <div
      v-if="data.footer"
      class="footer"
    >
      <p> {{ data.footer }} </p>
      <p> {{ data.copyright }} </p>
    </div>
  </main>
</template>

<script>
import NavLink from '@theme/components/NavLink.vue'
import Pet from '@theme/components/Pet.vue'

export default {
  name: 'Home',

  components: {
    NavLink,
    Pet,
  },

  computed: {
    data () {
      return this.$page.frontmatter
    },

    isAlgoliaSearch () {
      return this.algolia && this.algolia.apiKey && this.algolia.indexName
    },
    
    algolia () {
      return this.$themeLocaleConfig.algolia || this.$site.themeConfig.algolia || {}
    }
  }
}
</script>

<style lang="stylus">
@require '../styles/config'
@require '../styles/fallback'

.home
  padding $navbarHeight 2rem 0
  max-width $homePageWidth
  margin 0px auto
  display block
  .hero
    height 130px
    text-align left
    margin-top: 2.5rem;
  .features
    border-top 1px solid
    borderTopColor $borderColorDefault var(--borderColor)
    padding 1.2rem 0
    margin-top 2.5rem
    display flex
    flex-wrap wrap
    align-items flex-start
    align-content stretch
    justify-content space-between
  .feature
    flex-grow 1
    flex-basis 30%
    max-width 30%
    h2
      font-size 1.4rem
      font-weight 500
      border-bottom none
      padding-bottom 0
      text $headerColorDefault var(--headerColor)
    p
      text $textMutedColorDefault var(--textMutedColor)
  .footer
    display flex
    justify-content space-between
    border-top 1px solid
    font-size .8rem
    borderTopColor $borderColorDefault var(--borderColor)
    text-align center
    text $textMutedColorDefault var(--textMutedColor)

@media (max-width: $MQMobile)
  .home
    .features
      flex-direction column
    .feature
      max-width 100%
      padding 0 2.5rem
    .footer
      flex-direction column
      p
        margin-bottom 0

@media (max-width: $MQMobileNarrow)
  .home
    padding-left 1.5rem
    padding-right 1.5rem
    .hero
      img
        max-height 210px
        margin 2rem auto 1.2rem
      h1
        font-size 2rem
      h1, .description, .action
        margin 1.2rem auto
      .description
        font-size 1.2rem
      .action-button
        font-size 1rem
        padding 0.6rem 1.2rem
    .feature
      h2
        font-size 1.25rem
</style>

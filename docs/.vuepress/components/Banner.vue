<template>
  <a target="_blank" rel="noopener" :href="url" class="banner">
    <img :alt="alt" :src="src" />
  </a>
</template>

<script>
export default {
  name: 'Banner',
  props: {
    src: {
      type: String,
      default: '',
    },
    alt: {
      type: String,
      default: '',
    },
    url: {
      type: String,
      default: '',
    }
  },
};
</script>
<style lang="stylus" scoped>
  .banner
    width 100%
    transition all .4s
    img 
      border-radius 5px
    &:hover, &:focus
      opacity .8
</style>
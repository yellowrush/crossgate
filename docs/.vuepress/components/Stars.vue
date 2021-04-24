<template>
  <div class="stars">
    <vp-icon
      :class="['icon', { 'dark': starNumber < 1 }]"
      :name="starNumber > 0 ? 'star' : 'star_outlined'"
     />
    <vp-icon :class="['icon', { 'dark': starNumber < 2 }]" :name="starNumber > 1 ? 'star' : 'star_outlined'" />
    <vp-icon :class="['icon', { 'dark': starNumber < 3 }]" :name="starNumber > 2 ? 'star' : 'star_outlined'" />
    <vp-icon :class="['icon', { 'dark': starNumber < 4 }]" :name="starNumber > 3 ? 'star' : 'star_outlined'" />
    <vp-icon :class="['icon', { 'dark': starNumber < 5 }]" :name="starNumber > 4 ? 'star' : 'star_outlined'" />
  </div>
</template>

<script>
export default {
  name: 'Stars',
  props:{
    number: {
      type: Number,
      default: 0,
    },
  },
  computed: {
    starNumber() {
      return Number(this.number);
    },
  }
};
</script>

<style lang="stylus" scoped>
@require '../styles/config'
@require '../styles/fallback'
.stars
  display inline-block
  margin-left 1rem
  .vp-icon
    font-size 1.2rem
    color var(--accentColor)
    &.vp-icon-star_outlined
      color var(--borderColor)
</style>
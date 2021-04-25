<template>
  <div class="stars">
    <vp-icon
      v-for="num in 5"
      :key="num"
      :class="`icon ${getStarClass(num)}`"
      :name="getStarName(num)"
     />
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
  methods: {
    getStarClass(num) {
      return num > this.number  ? 'dark' : '';
    },
    getStarName(num) {
      if (num <= this.number) {
        return 'star'
      } else if (num > this.number && num - this.number < 1) {
        return 'star_half';
      } else {
        return 'star_outlined';
      }
    },
  },
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
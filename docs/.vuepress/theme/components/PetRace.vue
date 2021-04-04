<template>
  <div class="race">
    <span>{{ name }}</span>
  </div>
</template>

<script>
export default {
  name: 'PetRace',
  props:{
    name: {
      type: String,
      default: '飞',
    },
  },
};
</script>

<style lang="stylus" scoped>
@require '../styles/config'

.race
  width 11px
  height 16px
  border 1.8px solid #fafafa
  display inline-block
  position relative
  border-radius 1px
  background var(--accentColor)
  span
    width 10px
    height 10px
    position absolute
    left calc(50% - 1px)
    top 50%
    transform translate(-50%, -50%)
    line-height 0.8
    color #fff
    font-size xx-small
    font-weight bold
    text-shadow 0 0 1px #000

</style>
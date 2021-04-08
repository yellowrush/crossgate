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
  padding 0 .38rem
  border 1.8px solid #fafafa
  display inline-block
  position relative
  border-radius 1px
  background var(--accentColor)
  span
    width 10px
    height 10px
    position absolute
    left calc(50% - 1.5px)
    top 50%
    transform translate(-50%, -50%)
    line-height 0.8
    color #fff
    font-size small
    font-weight bold
    text-shadow 0 0 1px #000

@media (max-width: $MQMobileNarrow)
  .race
    padding 0 .6rem

</style>
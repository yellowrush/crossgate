<template>
  <div class="level">
    <span>{{ petLevel }}</span>
  </div>
</template>

<script>
export default {
  name: 'PetLevel',
  props:{
    type: {
      type: String,
      default: 'normal',
    },
    level: {
      type: Number,
      default: 2,
    },
  },
  computed: {
    petLevel() {
      if (this.type === 'normal') {
        return `${this.level}`
      }
      return '';
    },
  },
};
</script>


<style lang="stylus" scoped>
@require '../styles/config'

.level
  padding 0 .38rem
  border 1.8px solid #fafafa
  display inline-block
  position relative
  border-radius 1px
  background #2196f3
  span
    width 10px
    height 10px
    position absolute
    left 50%
    top 50%
    transform translate(-50%, -50%)
    line-height 0.8
    color #fff
    font-size small
    font-weight bold
    text-shadow 0 0 1px #000

@media (max-width: $MQMobileNarrow)
  .level
    padding 0 .6rem

</style>
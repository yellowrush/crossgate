<template>
  <ul class="attributes">
    <li class="text">
      属性
    </li>
    <li class="earth">
      <span>地</span>
      <div class="progress earth" :style="{ width: earth + '%' }" />
    </li>
    <li class="water">
      <span>水</span>
      <div class="progress water" :style="{ width: water + '%' }" />
    </li>
    <li class="wind">
      <span>风</span>
      <div class="progress wind" :style="{ width: wind + '%' }" />
    </li>
    <li class="fire">
      <span>火</span>
      <div class="progress fire" :style="{ width: fire + '%' }" />
    </li>
  </ul>
</template>

<script>
export default {
  name: 'PetLevel',
  props:{
    earth: {
      type: Number,
      default: 6,
    },
    water: {
      type: Number,
      default: 4,
    },
    wind: {
      type: Number,
      default: 0,
    },
    fire: {
      type: Number,
      default: 0,
    },
  },
};
</script>
<style lang="stylus" scoped>
.attributes
  display block
  list-style none 
  margin 0
  padding 0
  font-size .6rem
  li
    position relative
    width 150px
    display flex
    align-items center
    line-height 18px
    margin .5rem 0
    background var(--codeBgColor)
    span
      width 16px
      height 16px
      background white
      padding .2rem
      text-align center
      border-radius 50%
    div.progress
      flex 1 0 0
      height 16px
      border-bottom-right-radius 8px
      border-top-right-radius 8px
    &.earth span
      background #009688
    &.water span
      background #2196f3
    &.wind span
      background #ffeb3b
      color #2f3037
    &.fire span
      background #f44336
</style>
<template>
  <ul class="attributes">
    <li>
      属性
    </li>
    <li>
      <span class="earth">地</span>
      <div class="progress earth" :style="{ width: earth + '%' }" />
    </li>
    <li>
      <span class="water">水</span>
      <div class="progress water" :style="{ width: water + '%' }" />
    </li>
    <li>
      <span class="wind">风</span>
      <div class="progress wind" :style="{ width: wind + '%' }" />
    </li>
    <li>
      <span class="fire">火</span>
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
      default: 3,
    },
    water: {
      type: Number,
      default: 8,
    },
    wind: {
      type: Number,
      default: 1,
    },
    fire: {
      type: Number,
      default: 5,
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
    width 160px
    display flex
    align-items center
    line-height 18px
    margin .5rem 0
    span 
      width 16px
      height 16px
      background red
      padding .2rem
      text-align center
      border-radius 50%
    div.progress
      flex 1 0 0
      height 5px
      border-bottom-right-radius 3px
      border-top-right-radius 3px
  .earth
    background #009688
  .water
    background #2196f3
  .wind
    background #ffeb3b
    color #2f3037
  .fire
    background #f44336
</style>
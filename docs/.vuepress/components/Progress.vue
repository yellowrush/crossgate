<template>
  <div class="attribute">
    <div :class="['blocks', { 'earth': earth },  { 'water': water },  { 'wind': wind },  { 'fire': fire }, ]">
      <label>
        {{ attribute }}
      </label>
      <div
        v-for="num in 10"
        :key="num"
        :class="['block', { 'dark': num > number }]"
      />
    </div>
  </div>
</template>

<script>
export default {
  name: 'PetLevel',
  props:{
    earth: {
      type: Boolean,
      default: false,
    },
    water: {
      type: Boolean,
      default: false,
    },
    fire: {
      type: Boolean,
      default: false,
    },
    wind: {
      type: Boolean,
      default: false,
    },
    number: {
      type: Number,
      default: 0,
    }
  },
  computed: {
    attribute() {
      if(this.earth) return '地';
      if(this.water) return '水';
      if(this.fire) return '火';
      if(this.wind) return '风';
    }
  },
  methods: {
    
  },
};
</script>
<style lang="stylus" scoped>
@require '../styles/config'
@require '../styles/fallback'

.attribute
  font-size 1rem
  margin 1rem 0
  width 260px
  background rgba(0,0,0,.1)
  border-top-left-radius 1rem
  border-bottom-left-radius 1rem
  border-top-right-radius 5px
  border-bottom-right-radius 5px
  padding 0 3px 0 0
  .blocks
    display flex
    align-items center
  label
    width 1.4rem
    height 1.4rem
    display inline-block
    padding .2rem
    margin-right .2rem
    text-align center
    border-radius 50%
    color #fff
    background #009688
    line-height 1.3
  .block
    flex 1 0 0
    margin 1px
    height 1.4rem
    border-radius 3px
    &.dark 
      background rgba(0,0,0,.1)
  .earth label,
  .earth .block:not(.dark )
    background #009688
  .water label,
  .water .block:not(.dark )
    background #2196f3
  .wind label,
  .wind .block:not(.dark )
    background #ffeb3b
    color #2f3037
  .fire label,
  .fire .block:not(.dark )
    background #f44336


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
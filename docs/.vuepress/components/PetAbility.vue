<template>
  <ul class="abilities">
    <li>
      总档次：105
    </li>
    <li>
      体
      <span>11</span>
      <div class="stars">
        <vp-icon class="icon" name="star" />
        <vp-icon class="icon dark" name="star_outlined" />
        <vp-icon class="icon dark" name="star_outlined" />
        <vp-icon class="icon dark" name="star_outlined" />
        <vp-icon class="icon dark" name="star_outlined" />
      </div>
    </li>
    <li>
      力
      <span>26</span>
      <div class="stars">
        <vp-icon class="icon" name="star" />
        <vp-icon class="icon" name="star" />
        <vp-icon class="icon" name="star_half" />
        <vp-icon class="icon dark" name="star_outlined" />
        <vp-icon class="icon dark" name="star_outlined" />
      </div>
    </li>
    <li>
      防
      <span>16</span>
      <div class="stars">
        <vp-icon class="icon" name="star" />
        <vp-icon class="icon" name="star_half" />
        <vp-icon class="icon dark" name="star_outlined" />
        <vp-icon class="icon dark" name="star_outlined" />
        <vp-icon class="icon dark" name="star_outlined" />
      </div>
    </li>
    <li>
      敏
      <span>31</span>
      <div class="stars">
        <vp-icon class="icon" name="star" />
        <vp-icon class="icon" name="star" />
        <vp-icon class="icon" name="star" />
        <vp-icon class="icon dark" name="star_outlined" />
        <vp-icon class="icon dark" name="star_outlined" />
      </div>
    </li>
    <li>
      魔
      <span>21</span>
      <div class="stars">
        <vp-icon class="icon" name="star" />
        <vp-icon class="icon" name="star" />
        <vp-icon class="icon dark" name="star_outlined" />
        <vp-icon class="icon dark" name="star_outlined" />
        <vp-icon class="icon dark" name="star_outlined" />
      </div>
    </li>
  </ul>
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
};
</script>
<style lang="stylus" scoped>
.abilities
  display block
  list-style none 
  margin 0
  padding 0
  font-size .6rem
  li
    display flex
    justify-items center
    line-height 18px
    margin-top .5rem
    span
      display inline-block
      width 18px
      height 18px
      text-align center
      margin 0 5px
      border 1px solid var(--borderColor)
      border-radius 5px
      transform translateY(-1px)
    .stars
      display inline-flex
      justify-items space-between
.icon
  font-size 1rem
  color #ffeb3b
  &.dark
    color var(--borderColor)

  
@media (max-width: $MQMobileNarrow)
  .abilities
    font-size 1.2rem
    display flex
    flex-direction column
    li
      line-height 2.5rem
      span
        display inline-block
        width 2.5rem
        height 2.5rem
      .stars
        flex 1 0 0
        height 42px
        white-space nowrap
  .icon
    font-size 200%
</style>
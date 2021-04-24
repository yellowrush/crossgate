<template>
  <ul class="abilities">
    <li>
      <label>总档次</label> 
      <strong>105</strong>
    </li>
    <li>
      <label>体力</label> 
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
      <label>力量</label> 
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
      <label>防御</label> 
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
      <label>敏捷</label> 
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
      <label>魔法</label> 
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
  display flex
  justify-content center
  flex-direction column
  list-style none 
  margin 0
  padding 0
  font-size 1rem
  margin-top .5rem
  li
    display flex
    justify-items center
    margin .5rem 0
    span
      display inline-block
      width 18px
      height 18px
      text-align center
      margin 0 5px
    strong
      color var(--accentColor)
    .stars
      display inline-flex
      justify-items space-between

.icon
  font-size 1.2rem
  color var(--accentColor)
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
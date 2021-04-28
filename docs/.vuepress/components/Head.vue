<template>
  <div class="head">
    <img alt="魔力宝贝：永恒初心" src="https://user-images.githubusercontent.com/78347270/115884573-03bb9800-a48a-11eb-9261-4c7deaec60e0.png" />
    <h3>
      魔力宝贝 : 永恒初心
      <wbr />
      <span>的开荒攻略🚩</span>
    </h3>
  </div>
</template>

<script>
export default {
  name: 'Head',
};
</script>
<style lang="stylus" scoped>
  .head
    padding 1rem
    margin 0 auto
    img
      display block
      margin 0 auto
    h3
      text-align center
      padding-bottom .8rem
      margin-bottom .8rem
      font-size 1.2rem
      border-bottom 1px solid var(--borderColor)
    wbr + span
      display inline-block
</style>
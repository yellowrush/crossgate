<template>
  <div class="logo">
    <img alt="魔力宝贝：永恒初心" src="https://user-images.githubusercontent.com/78347270/115884573-03bb9800-a48a-11eb-9261-4c7deaec60e0.png" />
  </div>
</template>

<script>
export default {
  name: 'Logo',
};
</script>
<style lang="stylus" scoped>
  .logo
    display flex
    align-items flex-end
    justify-content center
    border-bottom 1px solid var(--borderColor)
    padding 1rem
    margin-bottom 1rem
    img 
      margin 0 .5rem
</style>
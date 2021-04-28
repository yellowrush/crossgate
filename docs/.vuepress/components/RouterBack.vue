<template>
  <a @click="onClickBack" class="router-back">
    <vp-icon class="icon" name="back" />
    返回
  </a>
</template>

<script>
export default {
  name: 'RouterBack',
  props: {
    url: {
      type: String,
      default: '',
    },
  },
  methods: {
    onClickBack() {
      if (this.url) return this.$router.push(this.url);
      this.$router.go(-1);
    },
  },
};
</script>
<style lang="stylus" scoped>
  .router-back
    display inline-block
    cursor pointer
    padding 5px 15px 5px 10px
    border-radius 5px
    border 2px solid var(--borderColor)
    color var(--textColor)
    transition-duration: 0.25s;
    border-radius 20px
    line-height 0
    &:hover{
      color var(--accentColor)
      border-color var(--accentColor)
    }

</style>
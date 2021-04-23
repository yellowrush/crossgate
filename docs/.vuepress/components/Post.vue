<template>
  <div :class="['post', { 'new': isNew }]">
    <span class="post-date">{{ date }}</span>
    <span class="post-title">{{ title }}</span>
    <Popup class="post-url" :url="url"> 🔖阅读更多</Popup>
  </div>
</template>

<script>
import Popup from './Popup.vue';

export default {
  name: 'Post',
  components: {
    Popup,
  },
  props: {
    date: {
      type: String,
      default: '',
    },
    title: {
      type: String,
      default: '',
    },
    url: {
      type: String,
      default: '',
    },
    isNew: {
      type: Boolean,
      default: false,
    },
  },
};
</script>
<style lang="stylus" scoped>
.post
  display flex
  align-items center
  margin-bottom .8rem
  .post-date
    flex 0 0 110px
    text-align center
    font-size 12px
    border-radius 5px
    border 1px solid var(--borderColor)
    margin-right .5rem
  .post-title
    flex 1 0 0
    white-space nowrap
    overflow hidden
    text-overflow ellipsis
    margin-right .5rem
  &.new
    .post-date
      border-color var(--accentColor)

    
</style>
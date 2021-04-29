<template>
  <div class="video">
    <iframe
      class="video-player"
      :src="src"
      scrolling="no"
      border="0"
      frameborder="no"
      framespacing="0"
      allowfullscreen="false">
      </iframe>
  </div>
</template>

<script>
export default {
  name: 'Video',
  props: {
    src: {
      type: String,
      default: '',
    },
  },
};
</script>
<style lang="stylus" scoped>
@require '../styles/config'
@require '../styles/fallback'

  .video
    .video-player
      width 100%
      height 490px
      margin 1rem 0

@media (max-width: $MQMobile)
  .video
    .video-player
      height 50vw
</style>
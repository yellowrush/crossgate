<template>
  <div class="card">
    <img alt="图鉴" :src="imageUrl" />
  </div>
</template>

<script>
export default {
  name: 'Card',
  props: {
    type: {
      type: Number,
      default: 0,
    },
  },
  computed: {
    imageUrl() {
      if (this.type === 0) return 'https://user-images.githubusercontent.com/78347270/115963859-4ea5e000-a55c-11eb-84e2-5fee99d1fbb6.gif';
      else if (this.type === 1) return 'https://user-images.githubusercontent.com/78347270/115963858-4e0d4980-a55c-11eb-87f1-acea62ff25da.gif';
      else return 'https://user-images.githubusercontent.com/78347270/115963860-4f3e7680-a55c-11eb-8bb8-7e58a5ca9621.gif';
    },
  },
};
</script>
<style lang="stylus" scoped>
  .card
    display inline-block
</style>
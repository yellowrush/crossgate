<template>
  <a href="#" @click="onOpenPopup">
    <slot />
  </a>
</template>

<script>
export default {
  name: 'Popup',
  props: {
    width: {
      type: String,
      default: '1024',
    },
    height: {
      type: String,
      default: '800',
    },
    url: {
      type: String,
      default: '/',
    }
  },
  methods: {
    onOpenPopup() {
      MyWindow = window.open(this.url,'MyWindow',`width=${this.width},height=${this.height}`);
      return false;
    }
  },
};
</script>
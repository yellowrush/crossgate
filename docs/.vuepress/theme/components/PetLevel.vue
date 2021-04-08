<template>
  <img class="level" :src="imageUrl" :alt="imageAlt" />
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
  computed: {
    imageUrl() {
      return require(`../assets/images/pet/${this.type}_${this.level}.gif`);
    },
    imageAlt() {
      if (this.type === 'normal') {
        return `${this.level}级 普通卡`
      }
      return '';
    },
  },
};
</script>
<template>
  <strong>
    <slot />
  </strong>
</template>

<script>
export default {
  name: 'Strong',
};
</script>
<style lang="stylus" scoped>
  strong
    color var(--accentColor)
</style>
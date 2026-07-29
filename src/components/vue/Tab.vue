<template>
  <div>
    <slot />
  </div>
</template>

<script setup>
defineProps({
  name: { type: String, required: true },
  selected: { type: Boolean, default: false },
});
</script>

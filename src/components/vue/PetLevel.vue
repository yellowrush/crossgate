<template>
  <span class="pet-level">Lv.{{ level }}</span>
</template>

<script setup>
defineProps({
  level: { type: [Number, String], default: 0 },
});
</script>

<style scoped>
.pet-level {
  font-size: 0.75rem;
  color: var(--accent);
}
</style>

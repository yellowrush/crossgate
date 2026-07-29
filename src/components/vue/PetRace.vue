<template>
  <span class="pet-race">{{ race }}</span>
</template>

<script setup>
defineProps({
  race: { type: String, default: '' },
});
</script>

<style scoped>
.pet-race {
  font-size: 0.75rem;
  color: var(--text-muted);
}
</style>

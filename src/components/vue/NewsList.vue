<template>
  <div class="news-list">
    <div v-for="(item, idx) in news" :key="idx" class="news-item">
      <a :href="item.link" target="_blank" rel="noopener">
        <span class="news-date">{{ formatDate(item.date) }}</span>
        <span class="news-title">{{ item.title }}</span>
      </a>
    </div>
  </div>
</template>

<script setup>
defineProps({
  news: { type: Array, default: () => [] },
});

function formatDate(date) {
  if (!date) return '';
  return date.replace(/-/g, '/');
}
</script>

<style scoped>
.news-list {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
}
.news-item a {
  display: flex;
  gap: 1rem;
  padding: 0.5rem;
  border-radius: 4px;
  text-decoration: none;
  color: var(--text);
  transition: background 0.2s;
}
.news-item a:hover {
  background: var(--body-complement);
}
.news-date {
  font-size: 0.8rem;
  color: var(--text-muted);
  white-space: nowrap;
}
.news-title {
  font-size: 0.95rem;
}
</style>

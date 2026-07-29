<template>
  <div v-if="show" class="sw-update-popup">
    <p>发现来自作者的更新包</p>
    <button @click="update">更新</button>
    <button @click="dismiss">关闭</button>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';

const show = ref(false);
let swRegistration = null;

onMounted(() => {
  if ('serviceWorker' in navigator) {
    navigator.serviceWorker.ready.then((reg) => {
      swRegistration = reg;
    });
  }
});

function update() {
  if (swRegistration && swRegistration.waiting) {
    swRegistration.waiting.postMessage({ type: 'SKIP_WAITING' });
    window.location.reload();
  }
}

function dismiss() {
  show.value = false;
}
</script>

<style scoped>
.sw-update-popup {
  position: fixed;
  bottom: 1rem;
  right: 1rem;
  background: var(--body-bg);
  border: 1px solid var(--border);
  border-radius: 8px;
  padding: 1rem;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.2);
  z-index: 100;
}
.sw-update-popup button {
  margin: 0.5rem 0.5rem 0 0;
  padding: 0.5rem 1rem;
  border: 1px solid var(--border);
  border-radius: 4px;
  background: var(--accent);
  color: #fff;
  cursor: pointer;
}
.sw-update-popup button:last-child {
  background: transparent;
  color: var(--text);
}
</style>

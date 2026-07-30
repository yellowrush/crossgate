<template>
  <div id="comment"></div>
</template>

<script setup>
import { onMounted } from 'vue';

onMounted(() => {
  if (import.meta.env.PROD) {
    const script = document.createElement('script');
    script.type = 'text/javascript';
    script.async = true;
    script.setAttribute('issue-term', 'pathname');
    script.setAttribute('theme', 'github-dark');
    script.setAttribute('repo', 'crossgate-book/crossgate-book.github.io');
    script.crossOrigin = 'anonymous';
    script.src = 'https://beaudar.lipk.org/client.js';
    document.getElementById('comment').appendChild(script);
  }
});
</script>

<style>
#comment {
  position: relative;
  width: 100%;
  margin: 0 auto;
}
</style>

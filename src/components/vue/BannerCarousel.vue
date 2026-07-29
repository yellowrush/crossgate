<template>
  <div class="banner-carousel" :style="`--banner-count: ${props.banners.length}`">
    <div
      class="banner-track"
      :style="trackStyle"
      @touchstart="onTouchStart"
      @touchmove="onTouchMove"
      @touchend="onTouchEnd"
    >
      <a
        v-for="(banner, idx) in props.banners"
        :key="idx"
        class="banner-link"
        :href="banner.url || banner.link"
        target="_blank"
        rel="noopener"
      >
        <img :src="banner.img" :alt="banner.alt || ''" class="banner-img" />
      </a>
    </div>
    <div class="banner-dots">
      <span
        v-for="(banner, idx) in props.banners"
        :key="idx"
        class="banner-dot"
        :class="{ active: idx === currentIndex }"
        @click="goTo(idx)"
      ></span>
    </div>
  </div>
</template>

<script setup>
import { ref, computed, onMounted, onBeforeUnmount } from 'vue';

const props = defineProps({
  banners: { type: Array, default: () => [] },
});

const currentIndex = ref(0);
const startX = ref(0);
const deltaX = ref(0);
let timer = null;

const trackStyle = computed(() => ({
  width: `${props.banners.length * 100}%`,
  transform: `translateX(-${currentIndex.value * (100 / props.banners.length)}%)`,
}));

onMounted(() => {
  startAutoSlide();
});

onBeforeUnmount(() => {
  clearInterval(timer);
});

function startAutoSlide() {
  clearInterval(timer);
  timer = setInterval(() => {
    currentIndex.value = (currentIndex.value + 1) % props.banners.length;
  }, 4000);
}

function goTo(idx) {
  currentIndex.value = idx;
}

function onTouchStart(e) {
  startX.value = e.touches[0].clientX;
  clearInterval(timer);
}

function onTouchMove(e) {
  deltaX.value = e.touches[0].clientX - startX.value;
}

function onTouchEnd() {
  if (deltaX.value > 50) {
    currentIndex.value =
      (currentIndex.value - 1 + props.banners.length) % props.banners.length;
  } else if (deltaX.value < -50) {
    currentIndex.value = (currentIndex.value + 1) % props.banners.length;
  }
  deltaX.value = 0;
  startAutoSlide();
}
</script>

<style scoped>
.banner-carousel {
  max-width: 100vw;
  overflow: hidden;
  position: relative;
  margin: 0 auto 2rem;
  background: #232328;
  border-radius: 16px;
}
.banner-track {
  display: flex;
  transition: transform 0.5s cubic-bezier(0.4, 0, 0.2, 1);
  will-change: transform;
}
.banner-link {
  flex: 0 0 calc(100% / var(--banner-count, 1));
  max-width: calc(100% / var(--banner-count, 1));
  box-sizing: border-box;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
}
.banner-img {
  display: block;
  margin: auto;
  max-width: 100%;
  height: auto;
  object-fit: contain;
  border-radius: 5px;
}
.banner-dots {
  position: absolute;
  left: 0;
  right: 0;
  bottom: 18px;
  display: flex;
  justify-content: center;
  gap: 10px;
  z-index: 2;
}
.banner-dot {
  width: 14px;
  height: 14px;
  border-radius: 50%;
  background: #fff;
  opacity: 0.35;
  transition: opacity 0.2s;
  cursor: pointer;
}
.banner-dot.active {
  opacity: 0.7;
  background: #7ec6b2;
}
@media (max-width: 900px) {
  .banner-link { height: 140px; }
}
@media (max-width: 600px) {
  .banner-link { height: 90px; }
  .banner-carousel { border-radius: 8px; }
  .banner-img { border-radius: 8px; }
}
</style>

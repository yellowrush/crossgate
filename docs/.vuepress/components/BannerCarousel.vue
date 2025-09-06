<template>
  <div class="banner-carousel">
    <div
      class="banner-track"
      :style="{ ...trackStyle, '--banner-count': banners.length }"
      @touchstart="onTouchStart"
      @touchmove="onTouchMove"
      @touchend="onTouchEnd"
    >
      <a
        v-for="(banner, idx) in banners"
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
        v-for="(banner, idx) in banners"
        :key="idx"
        class="banner-dot"
        :class="{ active: idx === currentIndex }"
        @click="goTo(idx)"
      ></span>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'BannerCarousel',
    props: {
      banners: {
        type: Array,
        required: true,
      },
    },
    data() {
      return {
        currentIndex: 0,
        startX: 0,
        deltaX: 0,
        timer: null,
      };
    },
    computed: {
      trackStyle() {
        return {
          width: `${this.banners.length * 100}%`,
          transform: `translateX(-${
            this.currentIndex * (100 / this.banners.length)
          }%)`,
        };
      },
    },
    mounted() {
      this.startAutoSlide();
    },
    beforeDestroy() {
      clearInterval(this.timer);
    },
    methods: {
      startAutoSlide() {
        this.timer = setInterval(() => {
          this.currentIndex = (this.currentIndex + 1) % this.banners.length;
        }, 4000);
      },
      goTo(idx) {
        this.currentIndex = idx;
      },
      onTouchStart(e) {
        this.startX = e.touches[0].clientX;
        clearInterval(this.timer);
      },
      onTouchMove(e) {
        this.deltaX = e.touches[0].clientX - this.startX;
      },
      onTouchEnd(e) {
        if (this.deltaX > 50) {
          this.currentIndex =
            (this.currentIndex - 1 + this.banners.length) % this.banners.length;
        } else if (this.deltaX < -50) {
          this.currentIndex = (this.currentIndex + 1) % this.banners.length;
        }
        this.deltaX = 0;
        this.startAutoSlide();
      },
    },
  };
</script>

<style scoped>
  .banner-carousel {
    max-width: 100vw;
    overflow-x: hidden;
    position: relative;
    margin: 0 auto 2rem auto;
    background: #232328;
    border-radius: 16px;
  }
  .banner-track {
    display: flex;
    transition: transform 0.5s cubic-bezier(0.4, 0, 0.2, 1);
    will-change: transform;
    width: 100%;
    overflow-x: hidden;
  }
  .banner-link {
    flex: 0 0 calc(100% / var(--banner-count, 1));
    max-width: calc(100% / var(--banner-count, 1));
    width: calc(100% / var(--banner-count, 1));
    box-sizing: border-box;
    display: flex;
    align-items: center;
    justify-content: center;
    background: #232328;
    border-radius: 5px;
    overflow: hidden;
    pointer-events: auto;
  }
  .banner-img {
    display: block;
    margin: auto;
    max-width: 100%;
    max-height: 100%;
    width: auto;
    height: auto;
    object-fit: contain;
    border-radius: 5px;
    background: #232328;
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
    .banner-link {
      height: 140px;
    }
  }
  @media (max-width: 600px) {
    .banner-link {
      height: 90px;
      border-radius: 8px;
    }
    .banner-img {
      border-radius: 8px;
    }
    .banner-carousel {
      border-radius: 8px;
    }
  }
</style>

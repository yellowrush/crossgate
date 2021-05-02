<template>
  <transition name="fade">
    <button
      v-if="show"
      class="go-to-top"
      @click="scrollToTop">
      <img
        src="./up.gif"
        alt="回到顶部"
      />
    </button>
  </transition>
</template>

<script>
import debounce from 'lodash.debounce'
export default {
  name: 'BackTop',
  props: {
    threshold: {
      type: Number,
      default: 100
    }
  },
  data () {
    return {
      scrollTop: null
    }
  },
  computed: {
    show () {
      return this.scrollTop > this.threshold
    }
  },
  mounted () {
    this.scrollTop = this.getScrollTop()
    window.addEventListener('scroll', debounce(() => {
      this.scrollTop = this.getScrollTop()
    }, 100))
  },
  methods: {
    getScrollTop () {
      return window.pageYOffset
        || document.documentElement.scrollTop
        || document.body.scrollTop || 0
    },
    scrollToTop () {
      window.scrollTo({ top: 0, behavior: 'smooth' })
      this.scrollTop = 0
    }
  }
}
</script>

<style lang='stylus' scoped>
@require '../styles/config'
@require '../styles/fallback'

.go-to-top {
  cursor: pointer;
  position: fixed;
  bottom: 1rem;
  right: calc(50% - 375px - 2rem);
  width: 2rem;
  height: 2rem;
  border-radius: 5px;
  background: var(--selectionColor);
  border: none;
  z-index: 1;
  img {
    width: 100%;
  }
  &:hover, &:focus {
    background: var(--accentColor);
  }
}
.go-to-top:hover {
  color: lighten($accentColor, 30%);
}

.fade-enter-active, .fade-leave-active {
  transition: opacity 0.3s;
}
.fade-enter, .fade-leave-to {
  opacity: 0;
}

@media (max-width: $MQMobile)
  .go-to-top {
    width: 2.2rem;
    height: 2.2rem;
    bottom: 1rem;
    right: 3rem;
  }
</style>
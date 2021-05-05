<template>
  <div>
    <div class="tabs">
      <ul>
        <li v-for="(tab, index) in tabs" :class="{ 'is-active': tab.isActive }" :key="'tab' + index">
          <a :href="tab.href" @click="selectTab(tab)">{{ tab.name }}</a>
        </li>
      </ul>
    </div>
    <div class="tabs-details">
      <slot></slot>
    </div>
  </div>
</template>

<script>
import Tab from './Tab.vue';
export default {
  name: 'Tabs',
  components: {
    Tab,
  },
  data() {
    return {
      tabs: [],
    };
  },
  created() {
    this.tabs = this.$children;
  },
  methods: {
    selectTab(selectedTab) {
      this.tabs.forEach(tab => {
        tab.isActive = (tab.name == selectedTab.name);
      });
    }
  }
}
</script>

<style lang="stylus" scoped>
.tabs
  ul
    align-items: center;
    border-bottom: 1px solid #dbdbdb;
    display: flex;
    flex-grow: 1;
    flex-shrink: 0;
    justify-content: flex-start;
  li
    display block
    font-size 1rem
    a
      align-items: center;
      border-bottom: 1px solid #dbdbdb;
      color: var(--textColor);
      display: flex;
      justify-content: center;
      margin-bottom: -1px;
      padding: .5em 1em;
      vertical-align: top;
    &.is-active a
      border-bottom-color: #00d1b2;
      color: #00d1b2;
</style>>
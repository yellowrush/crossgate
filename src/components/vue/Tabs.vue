<template>
  <div>
    <div class="tabs">
      <ul>
        <li
          v-for="(tab, index) in tabNames"
          :key="'tab-' + index"
          :class="{ 'is-active': activeIndex === index }"
        >
          <a href="#" @click.prevent="activeIndex = index">{{ tab }}</a>
        </li>
      </ul>
    </div>
    <div class="tabs-details">
      <slot :activeIndex="activeIndex" />
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';

const props = defineProps({
  tabs: { type: Array, default: () => [] },
});

const tabNames = ref(props.tabs.length > 0 ? props.tabs : []);
const activeIndex = ref(0);

function setTabNames(names) {
  if (tabNames.value.length === 0 && names.length > 0) {
    tabNames.value = names;
  }
}

defineExpose({ activeIndex, setTabNames });
</script>

<style scoped>
.tabs ul {
  align-items: center;
  border-bottom: 1px solid var(--border);
  display: flex;
  flex-grow: 1;
  flex-shrink: 0;
  justify-content: flex-start;
  list-style: none;
  padding: 0;
  margin: 0;
}
.tabs li {
  display: block;
  font-size: 1rem;
}
.tabs li a {
  align-items: center;
  border-bottom: 1px solid transparent;
  color: var(--text);
  display: flex;
  justify-content: center;
  margin-bottom: -1px;
  padding: 0.5em 1em;
  vertical-align: top;
  text-decoration: none;
}
.tabs li.is-active a {
  border-bottom-color: var(--accent);
  color: var(--accent);
}
</style>

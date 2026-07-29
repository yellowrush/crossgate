<template>
  <div class="gems">
    <div class="tab-bar">
      <button
        v-for="(tab, idx) in tabs"
        :key="idx"
        :class="{ active: activeTab === idx }"
        @click="activeTab = idx"
      >
        {{ tab.name }}
      </button>
    </div>
    <!-- 属性分类 tab -->
    <div v-if="activeTab === 0" class="tab-content">
      <ul class="gem-options">
        <li v-for="opt in keywordOptions" :key="opt">
          <button
            :class="{ active: selectedOption === opt }"
            @click="selectOption(opt)"
          >
            {{ opt }}
          </button>
        </li>
      </ul>
    </div>
    <!-- 宝石分类 tab -->
    <div v-if="activeTab === 1" class="tab-content">
      <ul class="gem-options">
        <li v-for="gem in gems" :key="gem.name">
          <button
            :class="{ active: selectedGem === gem.name }"
            @click="selectGem(gem.name)"
          >
            <img v-if="gem.image" :src="gem.image" :alt="gem.name" />
            {{ gem.name }}
          </button>
        </li>
      </ul>
    </div>
    <!-- 表格 -->
    <table v-for="gem in filteredGems" :key="gem.name">
      <thead>
        <tr>
          <th>
            <img v-if="gem.image" :src="gem.image" :alt="gem.name" />
            {{ gem.name }}
          </th>
          <th>武器</th>
          <th>防具</th>
          <th>饰品</th>
        </tr>
      </thead>
      <tbody>
        <tr v-if="gem.weapean && gem.weapean.length === 10" v-for="i in 10" :key="i">
          <td class="line">{{ getGemNameByLevel(i, gem.name) }}</td>
          <td>{{ gem.weapean[i - 1] }}</td>
          <td>{{ gem.armor[i - 1] }}</td>
          <td>{{ gem.accessory[i - 1] }}</td>
        </tr>
        <tr v-else>
          <td>{{ gem.name }}</td>
          <td>{{ gem.weapean }}</td>
          <td>{{ gem.armor }}</td>
          <td>{{ gem.accessory }}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue';
import * as gemData from '../../data/gem.js';

const tabs = [
  { name: '属性分类' },
  { name: '宝石分类' },
];

const activeTab = ref(0);

const gems = ref(Object.values(gemData));
const selectedOption = ref('');
const selectedGem = ref('');

const keywordOptions = [
  '生命', '魔力', '攻击', '防御', '精神', '回复', '敏捷',
  '命中', '反击', '必杀', '耐久', '魅力', '抗性',
];

const filteredGems = computed(() => {
  if (selectedGem.value) {
    return gems.value.filter((g) => g.name === selectedGem.value);
  }
  if (selectedOption.value) {
    return gems.value.filter((g) => g.keyword?.includes(selectedOption.value));
  }
  return gems.value;
});

function selectOption(keyword) {
  selectedOption.value = selectedOption.value === keyword ? '' : keyword;
  selectedGem.value = '';
}

function selectGem(name) {
  selectedGem.value = selectedGem.value === name ? '' : name;
  selectedOption.value = '';
}

function getGemNameByLevel(level, name) {
  const names = {
    10: `完全结晶体的${name}`,
    9: `接近完美的${name}`,
    8: `非常优良的${name}`,
    7: `优良的${name}`,
    6: `还不错的${name}`,
    5: `${name}`,
    4: `有点破损的${name}`,
    3: `破损的${name}`,
    2: `破损的很严重的${name}`,
    1: `${name}的碎片`,
  };
  return names[level] || `${name}的碎片`;
}
</script>

<style scoped>
.gems {
  width: 100%;
}
.tab-bar {
  display: flex;
  gap: 0;
  border-bottom: 1px solid var(--border);
  margin-bottom: 1rem;
}
.tab-bar button {
  padding: 0.5rem 1rem;
  border: none;
  border-bottom: 2px solid transparent;
  background: transparent;
  color: var(--text);
  cursor: pointer;
  font-size: 0.95rem;
  margin-bottom: -1px;
}
.tab-bar button.active {
  color: var(--accent);
  border-bottom-color: var(--accent);
}
.gem-options {
  display: flex;
  flex-wrap: wrap;
  padding: 0;
  list-style: none;
}
.gem-options li {
  list-style: none;
}
.gem-options li button {
  font-size: 0.9rem;
  display: flex;
  align-items: center;
  color: var(--text);
  background: transparent;
  cursor: pointer;
  border: 1px solid var(--border);
  border-radius: 3px;
  padding: 7px 10px;
  margin: 5px;
}
.gem-options li button.active {
  color: var(--accent);
  border-color: var(--accent);
}
.gem-options li button img {
  height: 17px;
  margin-right: 0.2rem;
}
table {
  width: 100%;
  border-collapse: collapse;
  margin-top: 1rem;
}
thead th {
  text-align: left;
  border: 1px solid var(--border);
  padding: 0.5rem;
}
thead th:not(:first-child) {
  width: 17.5%;
}
tbody td {
  text-align: left;
  border: 1px solid var(--border);
  padding: 0.5rem;
}
</style>

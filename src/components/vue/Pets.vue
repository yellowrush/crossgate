<template>
  <div class="pets">
    <div class="head">
      <h1>🐉 宠物大全</h1>
      <div class="search-wrapper">
        <input
          class="search"
          type="text"
          placeholder="输入宠物名/种族搜索"
          v-model="search"
        />
      </div>
    </div>
    <div class="contain">
      <template v-for="(group, index) in filterData" :key="index">
        <h2 v-if="group[1].length" :key="'title-' + index">
          {{ getTitle(group[0]) }}
        </h2>
        <template v-for="(pet, petIndex) in group[1]" :key="index + '-' + petIndex">
          <Pet :pet="pet" :url="'pets/' + pet.num" />
        </template>
      </template>
    </div>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue';
import Pet from './Pet.vue';
import petDatas from '../../data/index.js';

const search = ref('');
const petEntries = ref(Object.entries(petDatas));

const filterData = computed(() => {
  const val = search.value.replace(/\s/g, '');
  if (!val) return petEntries.value;

  const raceMap = {
    昆虫: 'i',
    野兽: 'b',
    不死: 'u',
    飞行: 'f',
    植物: 'p',
    特殊: 'a',
    龙: 'd',
    金属: 'm',
    人: 'h',
    邪魔: 's',
  };

  const raceKey = raceMap[val];
  if (raceKey) {
    return petEntries.value.map((group) => [group[0], group[0] === raceKey ? group[1] : []]);
  }

  return petEntries.value.map((group) => [
    group[0],
    group[1].filter((pet) => pet.name.includes(val)),
  ]);
});

function getTitle(index) {
  const titles = {
    s: '邪魔系 🐙',
    h: '人形系 🦸',
    d: '龙系 🐲',
    m: '金属系 🤖',
    a: '特殊系 💧',
    p: '植物系 🌵',
    i: '昆虫系 🦗',
    f: '飞行系 🐦',
    u: '不死系 🧟',
    b: '野兽系 🐘',
  };
  return titles[index] || 'error';
}
</script>

<style scoped>
.pets {
  width: 100%;
}
.pets .head {
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-bottom: 1px solid var(--border);
  margin-bottom: 1rem;
}
.pets .head h1 {
  text-align: center;
  flex: 0 0 auto;
  margin-right: 1rem;
  font-size: 1.5rem;
}
.search-wrapper {
  position: relative;
}
.search {
  width: 220px;
  font-size: 0.9rem;
  outline: 0;
  height: 1.4rem;
  border: 1px solid var(--border);
  color: var(--text);
  background: transparent;
  border-radius: 20px;
  padding: 5px 5px 5px 15px;
  transition-duration: 0.25s;
}
.search:focus {
  border-color: var(--accent);
}
@media (max-width: 419px) {
  .pets .head {
    flex-direction: column;
  }
  .search-wrapper {
    width: 100%;
    margin-bottom: 1rem;
  }
  .search {
    width: 100%;
    text-align: center;
  }
}
</style>

<template>
  <aside class="app-sidebar">
    <ul class="sidebar-nav">
      <li v-for="cat in categories" :key="cat.key" class="nav-section">
        <button
          class="nav-section-title"
          @click="toggleSection(cat.key)"
        >
          <span class="section-icon">{{ cat.icon }}</span>
          <span class="section-text">{{ cat.label }}</span>
          <span :class="['arrow', { open: openSections[cat.key] }]">▸</span>
        </button>
        <ul v-if="openSections[cat.key]" class="nav-items">
          <li v-for="item in cat.items" :key="item.link" class="nav-item">
            <a
              :href="item.link"
              :class="{ active: isActive(item.link) }"
            >
              <span v-if="item.icon" class="item-icon">{{ item.icon }}</span>
              {{ item.label }}
            </a>
          </li>
        </ul>
      </li>
    </ul>
  </aside>
</template>

<script setup>
import { ref, reactive, computed, onMounted } from 'vue';

const openSections = reactive({
  characters: true,
  pets: true,
  quests: true,
  maps: true,
  items: true,
  skills: true,
});

const server = ref('origin');

onMounted(() => {
  const saved = localStorage.getItem('server');
  if (saved === 'cn' || saved === 'origin') {
    server.value = saved;
  }
});

const categories = computed(() => {
  const isOrigin = server.value === 'origin';
  return [
    {
      key: 'characters',
      icon: '👤',
      label: '人物',
      items: [
        { icon: '⚔️', label: '战斗系', link: '/characters/combat' },
        { icon: '🔧', label: '生产系', link: '/characters/production' },
        { icon: '🪄', label: '法术系', link: '/characters/magic' },
        { icon: '⛏️', label: '采集系', link: '/characters/gathering' },
        { icon: '🐾', label: '宠物系', link: '/characters/pet' },
        { icon: '🛠️', label: '服务系', link: '/characters/service' },
      ],
    },
    {
      key: 'pets',
      icon: '🐉',
      label: '宠物',
      items: [
        { icon: '📖', label: '宠物大全', link: '/pets' },
        { icon: '🧮', label: '宠物算档器', link: '/tools/calculate' },
        ...(isOrigin ? [
          { icon: '⭐', label: '专属宠物', link: '/pets/exclusive' },
          { icon: '🧬', label: '宠物合成', link: '/pets/synthesis' },
        ] : []),
      ],
    },
    {
      key: 'quests',
      icon: '📜',
      label: '任务',
      items: [
        ...(isOrigin ? [
          { icon: '📖', label: '主线任务', link: '/tasks/main' },
          { icon: '🎯', label: '专属任务', link: '/tasks/exclusive' },
          { icon: '🎉', label: '限时活动', link: '/tasks/events' },
          { icon: '🔄', label: '日常活动', link: '/tasks/daily' },
          { icon: '📈', label: '练级专区', link: '/tasks/leveling' },
        ] : [
          { icon: '📖', label: '游戏任务', link: '/tasks' },
        ]),
      ],
    },
    {
      key: 'maps',
      icon: '🗺️',
      label: '地图',
      items: [
        { icon: '📈', label: '练级路线', link: '/leveling' },
        ...(isOrigin ? [
          { icon: '🏝️', label: '精灵大陆', link: '/maps/elf' },
          { icon: '☁️', label: '天空之城', link: '/maps/sky' },
        ] : []),
      ],
    },
    {
      key: 'items',
      icon: '⚔️',
      label: '物品',
      items: [
        { icon: '🔮', label: '宝石属性', link: '/gems' },
        ...(isOrigin ? [
          { icon: '🪖', label: '武器防具', link: '/items/equipment' },
          { icon: '🍱', label: '料理药水', link: '/items/consumables' },
          { icon: '🎀', label: '饰品道具', link: '/items/accessories' },
          { icon: '📜', label: '生产制造', link: '/items/crafting' },
          { icon: '⛏️', label: '采集', link: '/items/gathering' },
        ] : []),
      ],
    },
    {
      key: 'skills',
      icon: '✨',
      label: '技能',
      items: [
        ...(isOrigin ? [
          { icon: '🎯', label: '专属技能', link: '/skills/exclusive' },
          { icon: '📚', label: '职业技能任务', link: '/skills/job' },
        ] : []),
      ],
    },
  ];
});

function toggleSection(key) {
  openSections[key] = !openSections[key];
}

function isActive(link) {
  if (typeof window === 'undefined') return false;
  return window.location.pathname === link;
}
</script>

<style scoped>
.app-sidebar {
  height: 100%;
  display: flex;
  flex-direction: column;
  overflow: hidden;
}

.sidebar-nav {
  list-style: none;
  padding: 0;
  margin: 0;
  flex: 1;
  overflow-y: auto;
}

.nav-section-title {
  display: flex;
  align-items: center;
  width: 100%;
  padding: 0.6rem 1rem;
  border: none;
  background: none;
  color: var(--text);
  font-size: 0.95rem;
  font-weight: 600;
  cursor: pointer;
  text-align: left;
  transition: background 0.15s;
}

.nav-section-title:hover {
  background: var(--body-complement);
}

.section-icon {
  margin-right: 0.5rem;
  font-size: 1.1rem;
}

.section-text {
  flex: 1;
}

.arrow {
  font-size: 0.8rem;
  transition: transform 0.2s;
  color: var(--text-muted);
}

.arrow.open {
  transform: rotate(90deg);
}

.nav-items {
  list-style: none;
  padding: 0;
  margin: 0;
}

.nav-item a {
  display: flex;
  align-items: center;
  padding: 0.4rem 1rem 0.4rem 2.8rem;
  color: var(--text);
  text-decoration: none;
  font-size: 0.88rem;
  transition: background 0.15s;
}

.nav-item a:hover {
  background: var(--body-complement);
}

.nav-item a.active {
  color: var(--accent);
  font-weight: 600;
  background: var(--body-complement);
}

.item-icon {
  margin-right: 0.4rem;
  font-size: 0.95rem;
}
</style>

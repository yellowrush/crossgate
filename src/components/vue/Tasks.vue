<template>
  <div class="tasks">
    <ul class="task-options">
      <li v-for="(type, idx) in taskTypes" :key="idx">
        <button
          :class="{ active: selectedOption === type }"
          @click="selectOption(type)"
        >
          {{ type }}
        </button>
      </li>
    </ul>
    <table>
      <thead>
        <tr>
          <th>任务</th>
          <th>建议等级</th>
          <th>难度</th>
          <th class="detail">详细</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(task, idx) in filteredTasks" :key="idx">
          <td class="line">{{ task.name }}</td>
          <td>{{ task.level }}</td>
          <td>{{ task.difficulty }}</td>
          <td class="actions">
            <a :href="'tasks/' + task.id">🕶️任务概要</a>
            <a v-if="task.haveDetails" :href="'tasks/' + task.id + '_details'">🥽任务剧情</a>
            <a v-if="task.haveVideos" :href="'tasks/' + task.id + '_videos'">📺视频攻略</a>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue';
import { tasks, taskTypes } from '../../data/task.js';

const selectedOption = ref('');

const filteredTasks = computed(() => {
  if (selectedOption.value) {
    return tasks.filter((task) => task.keyword?.includes(selectedOption.value));
  }
  return tasks;
});

function selectOption(keyword) {
  selectedOption.value = selectedOption.value === keyword ? '' : keyword;
}
</script>

<style scoped>
.tasks {
  width: 100%;
}
.task-options {
  display: flex;
  flex-wrap: wrap;
  padding: 0;
  list-style: none;
}
.task-options li {
  list-style: none;
}
.task-options li button {
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
.task-options li button.active {
  color: var(--accent);
  border-color: var(--accent);
}
table {
  width: 100%;
  border-collapse: collapse;
}
thead th {
  text-align: center;
  border: 1px solid var(--border);
  padding: 0.5rem;
}
thead th.detail {
  text-align: left;
}
tbody td {
  text-align: center;
  border: 1px solid var(--border);
  padding: 0.5rem;
}
tbody td.actions a {
  display: block;
  margin: 5px 0;
  color: var(--accent);
  text-decoration: none;
}
</style>

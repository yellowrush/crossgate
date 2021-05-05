<template>
  <div class="tasks">
    <h2>🏰 法兰城</h2>
    <table>
      <thead>
        <tr>
          <th>任务</th>
          <th>建议等级</th>
          <th>难度</th>
          <th>详细</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(task) in filteredTasks" :key="task.name">
          <td class="line">
            {{ task.name }}
          </td>
          <td>
            {{ task.level }}
          </td>
          <td>
            {{ task.difficulty }}
          </td>
          <td class="text-left">
            <RouterLink :to="`tasks/${task.id}`">
              🕶️概要
            </RouterLink>
            <RouterLink v-if="task.haveDetails" :to="`tasks/${task.id}_details`">
              🥽剧情
            </RouterLink>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import { tasks, taskTypes } from '../../db/task';

export default {
  name: 'Tasks',
  data() {
    return {
      tasks,
      taskTypes,
      selectedOption: '',
    };
  },
  computed: {
    filteredTasks() {
      if (this.selectedOption) {
        return this.tasks.filter((task) => task.keyword?.includes(this.selectedOption));
      }
      return this.tasks;
    },
  },
  methods: {
    selectOption(keyword) {
      this.selectedOption = this.selectedOption === keyword ? '' : keyword;
    },
  }
};
</script>
<style lang="stylus" scoped>
@require '../styles/config'
@require '../styles/fallback'

.tasks
  .task-options
    display flex
    flex-wrap wrap
    padding 0
    li
      list-style none
      button
        font-size .9rem
        display flex
        align-items center
        color var(--textColor)
        background transparent
        appearance none
        cursor pointer
        border 1px solid var(--borderColor)
        border-radius 3px
        padding 7px 10px
        margin 5px
        &.active
          color var(--accentColor)
          border 1px solid var(--accentColor)
        img
          height 17px
          margin-right .2rem
table
  thead
    tr
      th
        text-align center
        &.detail
          text-align left
  tbody
    tr
      td:not(:first-child)
        text-align center
        p
          margin 0
        &.detail
          text-align left


@media (max-width: $MQMobile)
  .gems
    .gem-options
      justify-content space-between
      li
        flex-basis calc(33% - 4px)
        margin-bottom .5rem
        button
          font-size 1rem
          justify-content center
          width 100%
          height 2.4rem
          text-align center
          padding 0
          margin 0
  table
    font-size: .8rem


@media (max-width: $MQMobileNarrow)
  .gems
    .gem-options
      justify-content space-between
      li
        flex-basis calc(50% - 4px)
        margin-bottom .5rem
        button
          justify-content center
          width 100%
          text-align center
          padding 0
          margin 0
  table
    font-size: .7rem

</style>
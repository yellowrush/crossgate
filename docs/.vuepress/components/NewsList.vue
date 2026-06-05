<template>
  <div class="news-list">
    <ul>
      <li v-for="item in news" :key="item.link">
        <a target="_blank" :href="item.link">{{ item.title }}</a>
        <span class="date">{{ item.date }}</span>
      </li>
    </ul>
    <div class="more">
      <a target="_blank" href="https://cg.originmood.com/"
        >查看更多公告</a
      >
    </div>
  </div>
</template>

<script>
  export default {
    name: 'NewsList',
    props: {
      news: {
        type: Array,
        default: () => [],
      },
      count: {
        type: Number,
        default: 5,
      },
    },
    computed: {
      displayNews() {
        if (Array.isArray(this.news) && this.news.length > 0) {
          return this.news.slice(0, this.count);
        }
        // fallback to default data
        return [
          { title: '封测开启公告', link: '/announces/1', date: '2025-04-16' },
          { title: '新活动上线', link: '/announces/2', date: '2025-05-01' },
          { title: '维护公告', link: '/announces/3', date: '2025-05-10' },
          { title: '商城更新', link: '/announces/4', date: '2025-06-01' },
          { title: '夏日活动', link: '/announces/5', date: '2025-07-01' },
        ].slice(0, this.count);
      },
    },
  };
</script>

<style scoped>
  .news-list {
    margin-bottom: 2rem;
  }
  .news-list ul {
    padding: 0;
  }
  .news-list li {
    margin-bottom: 0.5rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  .news-list .date {
    color: #888;
    font-size: 0.9em;
    margin-left: 1em;
  }
  .news-list .more {
    margin-top: 0.5rem;
    text-align: right;
  }
</style>

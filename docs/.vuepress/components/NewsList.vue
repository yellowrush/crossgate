<template>
  <div class="news-list">
    <ul>
      <li v-for="item in displayNews" :key="item.link">
        <a target="_blank" rel="noopener noreferrer" :href="item.link">{{
          item.title
        }}</a>
        <span class="date">{{ item.date }}</span>
      </li>
    </ul>
    <div class="more">
      <a
        target="_blank"
        rel="noopener noreferrer"
        href="https://cg.originmood.com/"
      >
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
          {
            title: '6月4日維護公告',
            link: 'https://cg.originmood.com/NewsContent/zh_TW/mlbb_news_10522.html',
            date: '2026-06-03',
          },
          {
            title: '【修復公告】PVP爭霸賽頁面異常修復說明',
            link: 'https://cg.originmood.com/NewsContent/zh_TW/mlbb_news_10519.html',
            date: '2026-06-02',
          },
          {
            title: 'PVP爭霸賽第19期正式開啟',
            link: 'https://cg.originmood.com/NewsContent/zh_TW/mlbb_news_10518.html',
            date: '2026-06-01',
          },
          {
            title: '「家族任務爭霸賽」延期與獎勵調整的通知',
            link: 'https://cg.originmood.com/NewsContent/zh_TW/mlbb_news_10517.html',
            date: '2026-06-01',
          },
          {
            title: '五週年收官獻禮 訂製屬於你的心愛陪伴',
            link: 'https://cg.originmood.com/NewsContent/zh_TW/mlbb_news_10513.html',
            date: '2026-05-27',
          },
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

<template>
  <div class="pets">
    <div class="head">
      <h1>🐉 宠物大全</h1>
      <div class="input">
        <label for="search">
          <vp-icon class="icon" name="search" />
        </label>
        <input
          id="search"
          class="search"
          type="text"
          placeholder="输入宠物名/种族搜索"
          v-model="search"
        />
      </div>
    </div>
    <Valine />

    <div class="contain">
      <template v-for="(pets, index) in filterData">
        <h2
          v-if="pets[1].length"
          :key="getTitle(pets[0])">
          {{ getTitle(pets[0]) }}
        </h2>
        <template v-for="(pet, petIndex) in pets[1]">
          <Pet 
            :key="`${index}-${petIndex}`"
            :pet="{
              num: pet.num,
              name: pet.name,
              level: pet.level,
              type: pet.type,
              images: pet.images,
              race: pet.race,
              new: pet.new || false,
            }"
            :size="pet.size || 'normal'"
            :url="`pets/${pet.num}`"
          />
        </template>
      </template>
    </div>
  </div>
</template>

<script>
import petDatas from '../../db/index';
import Pet from './Pet.vue';
import Valine from './Valine.vue'

export default {
  name: 'Pets',
  components: {
    Pet,
    Valine,
  },
  data() {
    return {
      petDatas: Object.entries(petDatas),
      search: '',
    };
  },
  computed: {
    filterData() {
      const searchVal = this.search.replace(/\s/g, '');
      const searchTarget = this.petDatas.slice(0);
      if (!searchVal) return searchTarget;

      if (searchVal === '昆虫') {
        return searchTarget.map((pets) => {
          return [pets[0], pets[0] === 'i' ? pets[1] : []];
        });
      }
      if (searchVal === '野兽') {
        return searchTarget.map((pets) => {
          return [pets[0], pets[0] === 'b' ? pets[1] : []];
        });
      }
      if (searchVal === '不死') {
        return searchTarget.map((pets) => {
          return [pets[0], pets[0] === 'u' ? pets[1] : []];
        });
      }
      if (searchVal === '飞行') {
        return searchTarget.map((pets) => {
          return [pets[0], pets[0] === 'f' ? pets[1] : []];
        });
      }
      if (searchVal === '植物') {
        return searchTarget.map((pets) => {
          return [pets[0], pets[0] === 'p' ? pets[1] : []];
        });
      }
      if (searchVal === '特殊') {
        return searchTarget.map((pets) => {
          return [pets[0], pets[0] === 'a' ? pets[1] : []];
        });
      }
      if (searchVal === '龙') {
        return searchTarget.map((pets) => {
          return [pets[0], pets[0] === 'd' ? pets[1] : []];
        });
      }
      
      if (searchVal === '金属') {
        return searchTarget.map((pets) => {
          return [pets[0], pets[0] === 'm' ? pets[1] : []];
        });
      }
      if (searchVal === '人') {
        return searchTarget.map((pets) => {
          return [pets[0], pets[0] === 'h' ? pets[1] : []];
        });
      }
      
      if (searchVal === '邪魔') {
        return searchTarget.map((pets) => {
          return [pets[0], pets[0] === 's' ? pets[1] : []];
        });
      }
      
      return searchTarget.map((pets) => {
        return [pets[0], pets[1].filter((pet) => pet.name.includes(searchVal))]
      });
    },
  },
  methods: {
    getTitle(index) {
      switch (index) {
        case 's':
          return '邪魔系 🐙';
        case 'h':
          return '人形系 🦸';
        case 'd':
          return '龙系 🐲';
        case 'm':
          return '金属系 🤖';
        case 'a':
          return '特殊系 💧';
        case 'p':
          return '植物系 🌵';
        case 'i':
          return '昆虫系 🦗';
        case 'f':
          return '飞行系 🐦';
        case 'u':
          return '不死系 🧟';
        case 'b':
          return '野兽系 🐘';
        default:
          return 'error';
      }
    },
  }
};
</script>
<style lang="stylus" scoped>
@require '../styles/config'
@require '../styles/fallback'

  .pets
    width 100%
    .head
      display flex
      align-items center
      justify-content space-between
      border-bottom 1px solid var(--borderColor)
      margin-bottom 1rem
      h1
        text-align center
        flex 0 0 auto
        margin-right 1rem
        font-size 1.5rem
      .input
        position relative
        .icon
          font-size: 1.2rem;
          position absolute
          left 0
          top 0
          bottom 0
          margin .53rem
        .search
          width calc(100% - 45px);
          font-size: .9rem;
          display: block;
          appearance: none;
          outline: 0;
          height 1.4rem;
          border: 1px solid var(--borderColor);
          color: var(--textColor);
          background transparent;
          border-radius: 3px;
          padding: 5px 5px 5px 40px;
          margin: 0 auto 10px auto;
          display: block;
          margin 0
          transition-duration: 0.25s;
          border-radius 20px
          &:hover{
            border-color var(--accentColor)
          }

@media (max-width: $MQMobileNarrow)
  .pets
    .head
      flex-direction column
      .input
        width 100%
        margin-bottom 1rem
        input
          text-align center

</style>
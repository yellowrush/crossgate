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
          placeholder="输入宠物名搜索"
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
      
      return searchTarget.map((pets) => {
        console.log(pets[1]);
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
          margin .7rem
        .search
          font-size: 1rem;
          display: block;
          appearance: none;
          outline: 0;
          height 30px;
          border: 2px solid var(--codeBgColor);
          width: 125px;
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

</style>
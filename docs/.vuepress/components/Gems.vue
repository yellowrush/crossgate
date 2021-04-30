<template>
  <div class="gems">
    <ul class="gem-options">
      <li>
        <button :class="{ 'active': selectedOption === '生命' }" @click="selectOption('生命')">
          🩸 生命
        </button>
      </li>
      <li>
        <button :class="{ 'active': selectedOption === '魔力' }" @click="selectOption('魔力')">
          💙 魔力
        </button>
      </li>
      <li>
        <button :class="{ 'active': selectedOption === '攻击' }" @click="selectOption('攻击')">
          🗡️ 攻击
        </button>
      </li>
      <li>
        <button :class="{ 'active': selectedOption === '防御' }" @click="selectOption('防御')">
          🛡️ 防御
        </button>
      </li>
      <li>
        <button :class="{ 'active': selectedOption === '精神' }" @click="selectOption('精神')">
          🛐 精神
        </button>
      </li>
      <li>
        <button :class="{ 'active': selectedOption === '回复' }" @click="selectOption('回复')">
          💝 回复
        </button>
      </li>
      <li>
        <button :class="{ 'active': selectedOption === '躲闪' }" @click="selectOption('躲闪')">
          💨 躲闪
        </button>
      </li>
      <li>
        <button :class="{ 'active': selectedOption === '敏捷' }" @click="selectOption('敏捷')">
          🍃 敏捷
        </button>
      </li>
      <li>
        <button :class="{ 'active': selectedOption === '反击' }" @click="selectOption('反击')">
          🤺 反击
        </button>
      </li>
      <li>
        <button :class="{ 'active': selectedOption === '必杀' }" @click="selectOption('必杀')">
          🎇 必杀
        </button>
      </li>
      <li>
        <button :class="{ 'active': selectedOption === '耐久' }" @click="selectOption('耐久')">
          ⚙️ 耐久
        </button>
      </li>
      <li>
        <button :class="{ 'active': selectedOption === '魅力' }" @click="selectOption('魅力')">
          💄 魅力
        </button>
      </li>
      <li>
        <button :class="{ 'active': selectedOption === '抗性' }" @click="selectOption('抗性')">
          🧬 增加抗性
        </button>
      </li>
    </ul>
    <hr />
    <ul class="gem-options">
      <li v-for="(gem) in gems" :key="gem.name">
        <button  :class="{ 'active': selectedGem === gem.name }" @click="selectGem(gem.name)">
          <img :src="gem.image" :alt="gem.name">
          {{ gem.name }}
        </button>
      </li>
    </ul>
    <hr />
    <table v-for="(gem) in filteredGems" :key="gem.name">
      <thead>
        <tr>
          <th>
            <img :src="gem.image" :alt="gem.name">
            {{ gem.name }}
          </th>
          <th>武器</th>
          <th>防具</th>
          <th>饰品</th>
        </tr>
      </thead>
      <tbody>
        <template v-if="gem.weapean.length === 10">
          <tr v-for="index in 10" :key="`${gem.name}-${index}`">
            <td>
              {{ getGemNameByLevel(index, gem.name) }}
            </td>
            <td>
              {{ gem.weapean[index - 1] }}
            </td>
            <td>
              {{ gem.armor[index - 1] }}
            </td>
            <td>
              {{ gem.accessory[index - 1] }}
            </td>
          </tr>
        </template>
        <template v-else>
          <tr>
            <td>
              {{ gem.name }}0
            </td>
            <td>
              {{ gem.weapean }}
            </td>
            <td>
              {{ gem.armor }}
            </td>
            <td>
              {{ gem.accessory }}
            </td>
          </tr>
        </template>
      </tbody>
    </table>
  </div>
</template>

<script>
import * as gems from '../../db/gem';

export default {
  name: 'Gems',
  data() {
    return {
      gems: Object.entries(gems).map(p => p[1]),
      selectedOption: '',
      selectedGem: '',
    };
  },
  computed: {
    imageUrl() {
      if (this.type === 0) return 'https://user-images.githubusercontent.com/78347270/115963859-4ea5e000-a55c-11eb-84e2-5fee99d1fbb6.gif';
      else if (this.type === 1) return 'https://user-images.githubusercontent.com/78347270/115963858-4e0d4980-a55c-11eb-87f1-acea62ff25da.gif';
      else return 'https://user-images.githubusercontent.com/78347270/115963860-4f3e7680-a55c-11eb-8bb8-7e58a5ca9621.gif';
    },
    filteredGems() {
      if (this.selectedGem) {
        return this.gems.filter((gem) => gem.name === this.selectedGem);
      }
      if (this.selectedOption) {
        return this.gems.filter((gem) => gem.keyword?.includes(this.selectedOption));
      }
      return this.gems;
    },
  },
  methods: {
    getGemNameByLevel(level, name) {
      switch (level) {
        case 10:
          return `完全结晶体的${name}`;
        case 9:
          return `接近完美的${name}`;
        case 8:
          return `非常优良的${name}`;
        case 7:
          return `优良的${name}`;
        case 6:
          return `还不错的${name}`;
        case 5:
          return `${name}`;
        case 4:
          return `有点破损的${name}`;
        case 3:
          return `破损的${name}`;
        case 2:
          return `破损的很严重的${name}`;
        case 1:
        default:
          return `${name}的碎片`;
      }
    },
    selectOption(keyword) {
      this.selectedOption = this.selectedOption === keyword ? '' : keyword;
      this.selectedGem = '';
    },
    selectGem(gemName) {
      this.selectedGem = this.selectedGem === gemName ? '' : gemName;
      this.selectedOption = '';
    },
  }
};
</script>
<style lang="stylus" scoped>
@require '../styles/config'
@require '../styles/fallback'

.gems
  .gem-options
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
        text-align left
        &:not(:first-child){
          width: 17.5%
        }
  tbody
    tr
      td
        text-align left
        word-break keep-all
        &:not(:first-child){
          width: 17.5%
        }


@media (max-width: $MQMobile)
  .gems
    .gem-options
      justify-content space-between
      li
        flex-basis calc(33% - 4px)
        margin-bottom .5rem
        button
          justify-content center
          width 100%
          height 2rem
          text-align center
          padding 0
          margin 0

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
          height 2rem
          text-align center
          padding 0
          margin 0

</style>
<template>
  <div class="pet">
    <div class="pet-image">
      <div class="image" @click="onClickBat(type)">
        <img :src="imageSrc" :alt="pet.name">
      </div>
      <div class="addtions">
        <PetRace :name="pet.race" />
        <PetLevel class="item" :type="pet.type" :level="pet.level" />
      </div>
    </div>
  </div>
</template>

<script>
import PetLevel from './PetLevel.vue';
import PetRace from './PetRace.vue';

export default {
  name: 'Pet',
  components: {
    PetLevel,
    PetRace,
  },
  props:{
    pet: {
      type: Object,
      default: () => ({
        num: '046',
        name: '小蝙蝠',
        level: 2,
        type: 'normal',
        image: 'https://user-images.githubusercontent.com/78347270/106621653-1c689000-65b6-11eb-9c27-0f3499743e4c.gif',
        race: '飛'
      }),
    },
    size: {
      type: String,
      default: 'normal',
    },
  },
  data() {
    return {
      type: 'default',
      types: ['default', 'magic', 'run', 'hurt', 'walk', 'attack', 'defend'],
      sentences: {
        'default': '我该说点啥呢...💬',
        'magic': '我就放个火焰魔法给你看吧！🔥🔥🔥',
        'run': '快下班了！🏃‍♂️🏃‍♂️🏃‍♂️',
        'hurt': '啊疼！💀',
        'walk': '魔力走起！🎮',
        'attack': '哒哒哒~ 2333暴击⚔️',
        'defend': '🛡️圣盾防御🛡️',
      },
      trigger: true,
    };
  },

  computed: {
    imageSrc() {
      switch (this.type) {
        default:
        case 'default':
          return 'https://user-images.githubusercontent.com/78347270/106621653-1c689000-65b6-11eb-9c27-0f3499743e4c.gif';
        case 'magic':
          return 'https://user-images.githubusercontent.com/78347270/107145585-fe1fdd00-6985-11eb-91c4-619998a7663d.gif';
        case 'run':
          return 'https://user-images.githubusercontent.com/78347270/107145731-d9783500-6986-11eb-95f3-1d015e649bac.gif';
        case 'hurt':
          return 'https://user-images.githubusercontent.com/78347270/107145730-d8df9e80-6986-11eb-87ff-c6e0248dbdc6.gif';
        case 'walk':
          return 'https://user-images.githubusercontent.com/78347270/107147022-10524900-698f-11eb-8613-fd80f211e390.gif';
        case 'attack':
          return 'https://user-images.githubusercontent.com/78347270/107147009-f6b10180-698e-11eb-91c0-e028f25b10f3.gif';
        case 'defend':
          return 'https://user-images.githubusercontent.com/78347270/107148413-3c24fd00-6996-11eb-9ae8-f5d7c94c7f02.gif';
      }
    },
  },

  methods: {
    onClickBat(type) {
      const filtered = this.types.filter((t) => t !== type);
      this.type = filtered[Math.floor(Math.random() * filtered.length)];
      this.trigger = false;
      setTimeout(() => {
        this.trigger = true;
      }, 0);
    },
  }
}
</script>
<style lang="stylus" scoped>
@require '../styles/config'
@require '../styles/fallback'

.pet
  position relative
  display flex
  margin 1rem 0

.pet-image
  .image
    display flex
    align-items center
    justify-content center
    height 100px
    width 100px
    cursor pointer
    border 1px solid var(--borderColor)
    border-radius 5px
    &:hover
      border-color var(--accentColor)
  .addtions 
    width 100%
    display flex 
    justify-content flex-end
    font-size .7rem
    margin-top 10px
    .item
      margin-left 5px

  img
    object-fit contain

@media (max-width: $MQMobile)
  .pet
    display flex
      
.words
  position relative
  white-space nowrap
  margin-left 1rem
  height auto
  font-size 1rem
  text $bodyBgColorDefault var(--bodyBgColor)
  bgColor $accentColorDefault var(--accentColor)
  padding 1rem 1rem
  border-radius 15px
  transition background-color .1s ease
  box-sizing border-box
  &::before
    content ''
    position: absolute;
    right: 100%;
    top: 50%;
    transform translateY(-50%)
    border-top: 10px solid transparent;
    border-bottom: 10px solid transparent; 
    border-right:10px solid $accentColorDefault; 
  &:hover
    bgColor $actionBtnHoverBorderColorDefault var(--actionBtnHoverBorderColor)
</style>
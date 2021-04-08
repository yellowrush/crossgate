<template>
  <div class="pet">
    <div class="pet-image" @click="onClickPet(type)">
      <div class="name">
        <span>{{ pet.name }}</span>
        <PetRace class="spacing" :name="pet.race" />
        <PetLevel class="spacing" :type="pet.type" :level="pet.level" />
      </div>
      <div class="image">
        <img :src="pet.images[type]" :alt="pet.name">
      </div>
    </div>
    <PetAbility class="pet-ability" />
    <PetAttribute class="pet-attribute" />
  </div>
</template>

<script>
import PetLevel from './PetLevel.vue';
import PetRace from './PetRace.vue';
import PetAbility from './PetAbility.vue';
import PetAttribute from './PetAttribute.vue';

export default {
  name: 'Pet',
  components: {
    PetLevel,
    PetRace,
    PetAbility,
    PetAttribute,
  },
  props:{
    pet: {
      type: Object,
      default: () => ({
        num: '046',
        name: '小蝙蝠',
        level: 2,
        type: 'normal',
        images: {
          default: 'https://user-images.githubusercontent.com/78347270/106621653-1c689000-65b6-11eb-9c27-0f3499743e4c.gif',
          magic: 'https://user-images.githubusercontent.com/78347270/107145585-fe1fdd00-6985-11eb-91c4-619998a7663d.gif',
          run: 'https://user-images.githubusercontent.com/78347270/107145731-d9783500-6986-11eb-95f3-1d015e649bac.gif',
          hurt: 'https://user-images.githubusercontent.com/78347270/107145730-d8df9e80-6986-11eb-87ff-c6e0248dbdc6.gif',
          walk: 'https://user-images.githubusercontent.com/78347270/107147022-10524900-698f-11eb-8613-fd80f211e390.gif',
          attack: 'https://user-images.githubusercontent.com/78347270/107147009-f6b10180-698e-11eb-91c0-e028f25b10f3.gif',
          defend: 'https://user-images.githubusercontent.com/78347270/107148413-3c24fd00-6996-11eb-9ae8-f5d7c94c7f02.gif',
        },
        race: '飛',
        
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
      trigger: true,
      sentences: {
        'default': '我该说点啥呢...💬',
        'magic': '我就放个火焰魔法给你看吧！🔥🔥🔥',
        'run': '快下班了！🏃‍♂️🏃‍♂️🏃‍♂️',
        'hurt': '啊疼！💀',
        'walk': '魔力走起！🎮',
        'attack': '哒哒哒~ 2333暴击⚔️',
        'defend': '🛡️圣盾防御🛡️',
      },
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
    onClickPet(type) {
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
  width 100%
  position relative
  display inline-flex
  margin 1rem 0
.pet-image
  flex 0 0 160px
  margin-right 1rem
  position relative
  border 1px solid var(--borderColor)
  border-radius 5px
  cursor pointer
  .name
    display flex
    justify-items center
    font-size .8rem
    height 1.5rem
    padding .2rem .2rem .2rem .4rem
    margin 0
    border-bottom 1px solid var(--borderColor)
    span
      flex 1 0 0
      text-align left
      line-height 1.8
  .image
    display flex
    align-items center
    justify-content center
    height 110px
    width 110px
    user-select none
    margin 0 auto
  img
    object-fit contain
  &:hover
    border-color var(--accentColor)

.pet-ability
  margin-right 1rem

@media (max-width: $MQMobileNarrow)
  .pet
    display block
  .pet-image
    width 100%
    margin 0
    .name
      height 2rem
      font-size 1.1rem
      line-height 1
      padding .4rem .4rem .4rem .8rem
    .image
      height 200px
      width 100%
      img
        transform: scale(1.5);
.spacing
  margin-left .2rem
</style>
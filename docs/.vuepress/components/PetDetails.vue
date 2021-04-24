<template>
  <div :class="['pet', { 'is-big': size === 'big' }, { 'is-large': size === 'large' }]">
    <div class="pet-image">
      <img :src="pet.images[type]" :alt="pet.name">
    </div>
    <div class="pet-ability">
      <ul class="abilities">
        <li>
          <label>总档次</label> 
          <strong>105</strong>
        </li>
        <li>
          <label>体力</label> 
          <span>11</span>
          <div class="stars">
            <vp-icon class="icon" name="star" />
            <vp-icon class="icon dark" name="star_outlined" />
            <vp-icon class="icon dark" name="star_outlined" />
            <vp-icon class="icon dark" name="star_outlined" />
            <vp-icon class="icon dark" name="star_outlined" />
          </div>
        </li>
        <li>
          <label>力量</label> 
          <span>26</span>
          <div class="stars">
            <vp-icon class="icon" name="star" />
            <vp-icon class="icon" name="star" />
            <vp-icon class="icon" name="star_half" />
            <vp-icon class="icon dark" name="star_outlined" />
            <vp-icon class="icon dark" name="star_outlined" />
          </div>
        </li>
        <li>
          <label>防御</label> 
          <span>16</span>
          <div class="stars">
            <vp-icon class="icon" name="star" />
            <vp-icon class="icon" name="star_half" />
            <vp-icon class="icon dark" name="star_outlined" />
            <vp-icon class="icon dark" name="star_outlined" />
            <vp-icon class="icon dark" name="star_outlined" />
          </div>
        </li>
        <li>
          <label>敏捷</label> 
          <span>31</span>
          <div class="stars">
            <vp-icon class="icon" name="star" />
            <vp-icon class="icon" name="star" />
            <vp-icon class="icon" name="star" />
            <vp-icon class="icon dark" name="star_outlined" />
            <vp-icon class="icon dark" name="star_outlined" />
          </div>
        </li>
        <li>
          <label>魔法</label> 
          <span>21</span>
          <div class="stars">
            <vp-icon class="icon" name="star" />
            <vp-icon class="icon" name="star" />
            <vp-icon class="icon dark" name="star_outlined" />
            <vp-icon class="icon dark" name="star_outlined" />
            <vp-icon class="icon dark" name="star_outlined" />
          </div>
        </li>
      </ul>
    </div>
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
        race: '飞',
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

  methods: {
    onClickPet(type) {
      const filtered = this.types.filter((t) => t !== type);
      this.type = filtered[Math.floor(Math.random() * filtered.length)];
      this.trigger = false;
      setTimeout(() => {
        this.trigger = true;
      }, 0);
      this.$router.push(this.url);
    },
  }
}
</script>
<style lang="stylus" scoped>
@require '../styles/config'
@require '../styles/fallback'

.pet
  display flex
  border 1px solid var(--borderColor)
  &.is-big
    .image
      width 160px
  &.is-large
    .image
      position absolute
      left 50%
      transform translateX(-50%)
      width 200px
.pet-image
  position relative
  height 180px
  width 180px
  user-select none
  img
    position absolute
    top 50%
    left 50%
    transform translate(-50%, -50%)
    object-fit contain
.pet-ability
  border-left 1px solid var(--borderColor)
  border-right 1px solid var(--borderColor)
  .abilities
    width 200px
    height 180px
    display flex
    flex-direction column
    list-style none
    font-size .9rem
    margin 0
    padding 0
    li
      display flex
      align-items center
      height 25%
      line-height 2
      &:not(:last-child)
        border-bottom 1px solid var(--borderColor)
      label
        width 50px
        padding 0 .5rem
        border-right 1px solid var(--borderColor)
      span
        display inline-block
        width 18px
        height 18px
        line-height 1.3
        text-align center
        margin 0 5px
        border 1px solid var(--borderColor)
        border-radius 5px
        transform translateY(-1px)
      strong
        margin-left .4rem
        color var(--accentColor)
      .stars
        display inline-flex
        justify-items space-between

.icon
  font-size 1.2rem
  color var(--accentColor)
  &.dark
    color var(--borderColor)


@media (max-width: $MQMobileNarrow)
  .pet
    width: 100%
    height 270px
    display flex
    margin 0 0 1rem
  .pet-image
    width 100%
    flex 0 0 auto
    .name
      font-size 1.1rem
      line-height 2
      height 2rem
    .image
      height 200px
      width 100%
      img
        transform: scale(1.5);
.spacing
  margin-left .2rem
</style>
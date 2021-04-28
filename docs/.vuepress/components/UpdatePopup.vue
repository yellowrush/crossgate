<template>
  <SWUpdatePopup v-slot="{ enabled, reload, message }">
    <div 
      v-if="enabled"
      class="my-sw-update-popup">
      <h3 @click="reload">
        <span class="shake">📦</span>
        {{ message }}
      </h3>
    </div>
  </SWUpdatePopup>
</template>

<script>
import SWUpdatePopup from '@vuepress/plugin-pwa/lib/SWUpdatePopup.vue'
export default {
  name: 'UpdatePopup',
  components: { SWUpdatePopup }
}
</script>

<style>
.my-sw-update-popup {
  text-align: right;
  position: fixed;
  bottom: 20px;
  right: 20px;
  background-color: var(--bodyBgColor);
  font-size: 20px;
  padding: 15px 20px 15px 10px;
  border: 3px solid var(--borderColor);
  border-radius: 5px;
}
.my-sw-update-popup h3 {
  margin: 0;
  font-size: 18px;
}

.my-sw-update-popup button {
  appearance: none;
  background: transparent;
  background-color: var(--textColor);
  border: 1px solid var(--accentColor);
  border-radius: 3px;
}

.shake{
  display: inline-block;
  animation: shake 0.5s;
  animation-iteration-count: infinite;
}

@keyframes shake {
  0% { transform: translate(1px, 1px) rotate(0deg); }
  10% { transform: translate(-1px, -2px) rotate(-1deg); }
  20% { transform: translate(-3px, 0px) rotate(1deg); }
  30% { transform: translate(3px, 2px) rotate(0deg); }
  40% { transform: translate(1px, -1px) rotate(1deg); }
  50% { transform: translate(-1px, 2px) rotate(-1deg); }
  60% { transform: translate(-3px, 1px) rotate(0deg); }
  70% { transform: translate(3px, 1px) rotate(-1deg); }
  80% { transform: translate(-1px, -1px) rotate(1deg); }
  90% { transform: translate(1px, 2px) rotate(0deg); }
  100% { transform: translate(1px, -2px) rotate(-1deg); }
}
</style>
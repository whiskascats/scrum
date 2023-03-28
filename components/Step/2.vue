<template>
  <div class="backImg transition-1s opacity-0 overflow-hidden" :class="{'opacity-100': store.step>=2.1}" v-if="store.step >= 2">
    <div class="pt-5 px-10 grid grid-cols-5">
      <div class="col-span-1">
        <RolePO v-if="store.step>=2.2" />
      </div>
      <div class="col-span-4 ml-10 mt-5">
        <MessageBox v-if="store.step>=2.3" />
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
import { useStore } from '~/store';
const store = useStore();
onMounted(() => {
  const POShow = setInterval(() => {
    store.step += 0.1
    if(store.step==2.3) {
      clearInterval(POShow);
    }
  }, 1000)
})
</script>
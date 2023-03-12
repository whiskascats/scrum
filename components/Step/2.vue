<template>
  <div class="backImg tarnsition-1s opacity-0 overflow-hidden" :class="{'opacity-100': store.step>=2.1}" v-if="store.step >= 2">
    <div class="flex pt-5 pl-10">
      <RolePO v-if="store.step>=2.2" />
    </div>
  </div>
</template>
<script setup lang="ts">
import { useStore } from '~/store';
const store = useStore();
let POShow;
onMounted(() => {
  POShow = setInterval(() => {
    store.step += 0.1
  }, 1000)
})
</script>
<template>
  <div class="message transition-1s" :class="{'opacity-0': !showModal}">
    <span class="ribbon">PO</span>
    <Words v-if="showrod" />
  </div>
</template>
<script setup>
const showModal = ref(false);
const showrod = ref(false)
onMounted(() => {
  setTimeout(() => {
    showModal.value = true
    setTimeout(() => {
      showrod.value = true
    },1000)
  },1000)
})

</script>
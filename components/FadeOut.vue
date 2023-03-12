<template>
  <div class="tarnsition-1s" :class="{'opacity-0': fade}">
    <slot></slot> 
  </div>
</template>
<script setup>
const prop = defineProps({
  status: {default: false, type: Boolean}
});
const fade = ref(true)
onMounted(() => {
  setTimeout(() => {
    fade.value = false
  }, 500)
})
watch(() => prop.status, (nl, ol) => {
  fade.value = true
})
</script>
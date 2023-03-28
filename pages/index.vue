<template>
  <main class="w-100 h-screen bg-current overflow-hidden">
    <Step1 v-if="store.step<=2"/>
    <Step2 v-if="store.step>=2" />
  </main>
</template>
<script setup lang="ts">
import { useStore } from '~/store';
const store = useStore()
</script>
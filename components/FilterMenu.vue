<template>
  <div>
    {{ filtersList }}
    <input type="text" v-model="inputVal" />
    <button @click="addValueToFilterList(inputVal)">+</button>
  </div>
</template>

<script setup lang="ts">
import { useFiltersStore } from '~/store/filter'
import { storeToRefs } from 'pinia'

const inputVal: Ref<string> = ref('')

const filtersStore = useFiltersStore()
const { addValueToFilterList }= filtersStore
const { filtersList } = storeToRefs(filtersStore)
</script>
import { defineStore } from 'pinia'

export const useFiltersStore = defineStore({
  id: 'filter-store',
  state: () => {
    return {
      filtersList: ['youtube', 'twitch'],
    }
  },
  actions: {
    addValueToFilterList(value: string) {
      console.log(value);
      
      this.filtersList.push(value)
      console.log(this.filtersList);
      
    },
  }
})
import { defineStore } from 'pinia'

export interface State {
  count: number,
  step: number,
}

// 建議以initState先聲明在useStore之前，這樣比較好用，尤其是reset的情況特別好用
const initState: State = {
  count: 0,
  step: 0,
}

export const useStore = defineStore({
  id: 'store',
  state: () => initState,
  actions: {
  }
})
import { defineStore } from "pinia";

export interface State {
  count: number
}
// 建議以initState先聲明在useStore之前，這樣比較好用，尤其是reset的情況特別好用
const initState: State = {
  count: 0,
}

const useStore = defineStore('store', {
  state : () => initState,
  
});

export default useStore;
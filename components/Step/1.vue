<template>
  <img class="transition-1s absolute left-0 h-full" src="~/assets/images/bg/bg_leafDark_1_l.png" :class="{'-translate-x-full': store.step>=2}" alt="">
  <img class="transition-1s absolute bottom-0 w-3/4 right-1/2 translate-x-1/2" src="~/assets/images/bg/bg_leafDark_2_b.png" :class="{'translate-y-full': store.step>=2}" alt="">
  <img class="transition-1s absolute right-0 h-full" src="~/assets/images/bg/bg_leafDark_3_r.png" :class="{'translate-x-full': store.step>=2}" alt="">
  <img class="transition-1s absolute top-0 w-3/4 right-1/2 translate-x-1/2" src="~/assets/images/bg/bg_leafDark_4_t.png" :class="{'-translate-y-full': store.step>=2}" alt="">
  
  <img class="transition-1s absolute top-0 left-0 h-1/2" :class="{'-translate-x-full -translate-y-full': store.step>=1}" src="~/assets/images/bg/bg_leafTint_1_lt.png" alt="">
  <img class="transition-1s absolute bottom-0 left-0 w-1/2" :class="{'-translate-x-1/2 translate-y-full': store.step>=1}" src="~/assets/images/bg/bg_leafTint_2_lb.png" alt="">
  <img class="transition-1s absolute top-0 right-0 h-1/2" :class="{'-translate-y-full': store.step>=1}" src="~/assets/images/bg/bg_leafTint_3_rt.png" alt="">
  <img class="transition-1s absolute bottom-0 right-0 h-1/2" :class="{'translate-x-full translate-y-1/2': store.step>=1}" src="~/assets/images/bg/bg_leafTint_4_rb.png" alt="">
  <div class="absolute left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2 w-3/4">
    <FadeOut :status="store.step==0.5" v-if="store.step<1">
      <img class="w-3/4 mx-auto" src="~/assets/images/logo/logo_hole.png" alt="">
      <div class="absolute bottom-16 text-white left-1/2 -translate-x-1/2 text-center">
        <h2 class="text-2xl font-black mb-3">深入敏捷の村一探究竟</h2>
        <button class="start-btn" type="button" data-title="進入村莊" @click="enter"></button>
      </div>
    </FadeOut>
    <FadeOut :status="store.step==1.5" v-if="store.step>=1 && store.step <2">
      <div class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
        <div class="front-guide">
          <span class="ribbon">
            (迷之音)
            <span></span>
          </span>
          <Words>
            <p class="front-guide-words">呦呼 ， 歡迎進入 「SCRUM 新手村」 ， 在正式加入專案開發之前 ，需要請你先了解 Scrum 的流程與精神 ！<br><br>請接受挑戰任務 ， 成功通過 Scrum 新手村的挑戰任務吧～</p>
          </Words>
        </div>
        <div class="mt-10 text-center">
          <button class="start-btn" type="button" data-title="開始挑戰" @click="start"></button>
        </div>
      </div>
    </FadeOut>
  </div>
</template>
<script setup lang="ts">
import { useStore } from '~/store';
const store = useStore()
const enter = () => {
  store.step = 0.5
  setTimeout(() => {
    store.step = 1
  },1100)
}
const start = () => {
  store.step = 1.5
  setTimeout(() => {
    store.step = 2
  },1100)
}
</script>
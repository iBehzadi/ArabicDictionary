<script setup lang="ts">
import { useRouter } from "vue-router";
import Header2 from "../components/Header2.vue";
const router = useRouter();
</script>

<template>
  <div class="flex flex-col">
    <header2 @back="router.back()">
      <template v-slot:title>درباره ما</template>
    </header2>
    <div class="h-44 overflow-hidden">
      <img class="filter blur w-full flex" src="@/assets/image-aboutPage.jpg" alt="nebras" />
    </div>
    <div
      class="relative flex flex-col h-20 bg-white justify-center text-center items-center content-center"
    >
      <img
        class="w-3/12 rounded-3xl absolute bottom-3/4 shadow-lg drop-shadow-md"
        src="@/assets/image-aboutPage.jpg"
        alt="nebras"
      />
      <h2 class="block mt-4 text-xl text-black font-bold">نبراس</h2>
      <h6 class="block text-xs text-black font-medium mt-1">محمد الجبوری</h6>
    </div>
    <div class="flex bg-red-600 rounded-full px-3 mx-4 h-9 mt-3 justify-end">
      <p class="text-white self-center p-2">Nebres.arabic@</p>
      <font-awesome-icon class="text-white self-center text-xl mr-2" :icon="['fab', 'instagram']" />
    </div>
    <div class="flex bg-blue-600 rounded-full px-3 mx-4 h-9 justify-end mt-3">
      <p class="text-white self-center p-2">nebres_arabic@</p>
      <font-awesome-icon
        class="text-white self-center text-lg mr-2"
        :icon="['fab', 'telegram-plane']"
      />
    </div>
    <p class="px-7 mt-4 text-xs text-black font-medium leading-4">
      کلیه حقوق این نرم افزار متعلق به گروه آموزشی نبراس است و هرگونه کبی برداری
      از آن بدون ذکر منبع شرعا و قانونا ممنوع است.
    </p>
  </div>
</template>

<style scoped>
</style>
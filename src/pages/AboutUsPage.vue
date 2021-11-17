<script setup lang="ts">
import { useRouter } from "vue-router";
import header2 from "@/components/Header.vue";

const router = useRouter();
</script>

<template>
  <header2 @back="router.back()">
    <template v-slot:title>درباره ما</template>
  </header2>

  <div class="flex flex-col">
    <div class="h-44 overflow-hidden sm:h-64 md:h-72">
      <img class="filter blur w-full flex" src="@/assets/image-aboutPage.jpg" alt="nebras" />
    </div>
    <div
      class="relative flex flex-col h-20 bg-white justify-center text-center items-center content-center"
    >
      <img
        class="w-3/12 sm:w-2/12 rounded-3xl absolute bottom-3/4 shadow-lg drop-shadow-md"
        src="@/assets/image-aboutPage.jpg"
        alt="nebras"
      />
      <h2 class="block mt-4 text-xl text-black font-bold">نبراس</h2>
      <h6 class="block text-xs text-black font-medium mt-1">محمد الجبوری</h6>
    </div>
    <div class="social-media">
      <div
        class="social-media__instagram flex bg-red-600 rounded-full px-3 mx-4 h-9 sm:mx-56 sm:justify-center sm:rounded-xl mt-3 justify-end"
      >
        <span class="text-white self-center p-2">Nebres.arabic@</span>
        <font-awesome-icon
          class="text-white self-center text-xl mr-2"
          :icon="['fab', 'instagram']"
        />
      </div>
      <div
        class="social-media__telegram flex bg-blue-600 rounded-full px-3 mx-4 h-9 justify-end mt-3 sm:mx-56 sm:justify-center sm:rounded-xl"
      >
        <span class="text-white self-center p-2">nebres_arabic@</span>
        <font-awesome-icon
          class="text-white self-center text-lg mr-2"
          :icon="['fab', 'telegram-plane']"
        />
      </div>
    </div>
    <p
      class="px-7 mt-4 text-xs text-black font-medium leading-4 sm:text-lg sm:px-16 sm:text-center"
    >
      کلیه حقوق این نرم افزار متعلق به گروه آموزشی نبراس است و هرگونه کبی برداری
      از آن بدون ذکر منبع شرعا و قانونا ممنوع است.
    </p>
  </div>
</template>

<style scoped>
</style>
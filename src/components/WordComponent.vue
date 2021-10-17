<template>
  <!-- کامپوننت لغات   -->
  <div class="w-full h-auto shadow-sm border flex bg-gray-50 mb-1 rounded-xl odd:bg-gray-300 mt-1">
    <div class="flex-grow text-sm pt-1 pr-2">
      <div class="text-gray-600 pb-1 text-xs">{{ obj?.category }}</div>
      <div class="font-black pb-1">{{ obj?.word }}</div>
      <div class="text-gray-600 pb-1">{{ obj?.translate }}</div>
      <div class="text-gray-400 pb-1">{{ obj?.sample }}</div>
    </div>

    <div class="flex items-center">
      <button class="w-12 h-12 flex-center">
          <font-awesome-icon :icon="['fas', 'bookmark']" class="text-sm text-gray-600" />
      </button>
      <button class="w-12 h-12 flex-center">
      
        <font-awesome-icon :icon="['fas', 'play']" class="text-sm text-gray-600" />
      </button>
    </div>
  </div>
</template>

<script setup lang='ts'>

import { defineProps } from "vue";
const props = defineProps({
  obj: Object
});

</script>

<style>
</style>
<template>
  <!-- صحفه ترجمه  -->
  <div class="mt-1">
    <div
      v-for="text in 23"
      :key="text"
      class="w-full h-auto shadow-sm border flex bg-gray-50 mb-1 rounded-xl"
    >
      <div class="flex-grow text-sm pt-1 pr-2">
        <div class=" font-black">{{ obj?.category }}</div>
        <div class=" text-gray-600 2xs">{{obj?.word}}</div>
        <div class=" text-gray-600 2xs">{{obj?.translate}}</div>
        <div class=" text-gray-600 2xs">{{obj?.sample}}</div>
      </div>

      <div class="flex items-center">
        <button class="w-12 h-12 flex-center">
          <font-awesome-icon
            :icon="['fas', 'play']"
            class="text-sm text-gray-600"
          />
        </button>
        <button class="w-12 h-12 flex-center">
          <font-awesome-icon
            :icon="['fas', 'bookmark']"
            class="text-sm text-gray-600"
          />
        </button>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { defineProps } from 'vue'
const props=defineProps{(
  obj=Object
)}
</script>

<style></style>

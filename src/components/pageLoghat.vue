<template>
   <!-- صحفه ترجمه  -->
   <div >
    <div 
    v-for="text in 23 "
    :key="text"
    
    class="w-full h-16 shadow-sm  border flex bg-gray-50 mb-1  ">
      <div 
      
       class="flex-grow text-sm pt-1 pr-2">
        <div class="h-2/4 font-black">{{obj.title}}</div>
        <div class="h-2/4 text-gray-600 2xs">{{obj.name}}</div>
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

<script setup lang='ts'>
import { computed } from 'vue-demi'

props:[
  'obj'
]



</script>

<style>

</style>
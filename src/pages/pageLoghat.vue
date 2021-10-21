<script setup lang="ts">
import { useRoute, useRouter } from "vue-router";
import WordComponent from "../components/WordComponent.vue";
import header2 from "../components/Header2.vue";
import { useWordDB } from "@/stores/Word";
import { IWord } from "@/stores/database";
import { useCategoryDB } from "@/stores/Category";
 
const route = useRoute();
const router = useRouter();
const WordDB = useWordDB();
const CategoryDB = useCategoryDB();
CategoryDB.getCategory();

let obj = {
  category : 'دسته بندی',
  word : 'کلمه',
  translate : 'ترجمه',
  sample : 'مثال'
}

</script>
<template >
  <div>
    <header2 @back="router.back()">
      <template v-slot:title>{{CategoryDB.category[+route.params.id]}}</template>
    </header2>
    <!-- route.params.data -->
    <WordComponent class="mt-1" :obj="obj" v-for="item in 10" :key="item"></WordComponent>

    <button @click="router.push('/Practice')" class="bg-yellow w-full h-11 rounded-t-2xl flex justify-center pt-3 fixed bottom-0">
      <font-awesome-icon :icon="['fas', 'pen']" class="text-sm text-gray-600" />

      <p class="text-sm text-center pr-2">تمرین لغات {{CategoryDB.category[+route.params.id]}} </p>
    </button>
  </div>
</template>


<style scoped>
</style>
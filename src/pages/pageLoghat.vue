<script setup lang="ts">
import { useRoute, useRouter } from "vue-router";
import WordComponent from "../components/WordComponent.vue";
import header2 from "../components/Header2.vue";
import { useCategoryRepo } from "@/repo/Category";
import { useWordRepo } from "@/repo/Word";

const route = useRoute();
const router = useRouter();
const getCategory = useCategoryRepo();
const getWords = useWordRepo();

getCategory.getAll();
const CategoryID = getCategory.category[+route.params.id].CategoryID;
getWords.getWordByCategory(CategoryID);

</script>
<template >
  <div>
    <header2 @back="router.back()">
      <template v-slot:title>{{ getCategory.category[+route.params.id].Title }}</template>
    </header2>
    <!-- route.params.data -->
    <WordComponent :words="getWords.words"></WordComponent>

    <button
      @click="router.push('/Practice')"
      class="bg-yellow w-full h-11 rounded-t-2xl flex justify-center pt-3 fixed bottom-0"
    >
      <font-awesome-icon :icon="['fas', 'pen']" class="text-sm text-gray-600" />

      <span
        class="text-sm text-center pr-2"
      >تمرین لغات {{ getCategory.category[+route.params.id].Title }}</span>
    </button>
  </div>
</template>



<style scoped>
</style>
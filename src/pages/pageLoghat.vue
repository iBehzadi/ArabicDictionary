<script setup lang="ts">
import { useRoute, useRouter } from "vue-router";
import WordComponent from "../components/WordComponent.vue";
import header2 from "../components/Header2.vue";
import { useCategoryRepo } from "@/repo/Category";
import { useWordRepo } from "@/repo/Word";


const route = useRoute();
const router = useRouter();
const categoryRepo = useCategoryRepo();
const wordRepo = useWordRepo();

let CategoryID: number
categoryRepo.getAll().then(() => {
  CategoryID = categoryRepo.category[+route.params.id].CategoryID;
  wordRepo.getWordByCategory(CategoryID);
});
CategoryID = categoryRepo.category[+route.params.id].CategoryID;

</script>
<template >
  <div>
    <header2 class="fixed left-0 right-0 top-0" @back="router.back()">
      <template v-slot:title>{{ categoryRepo.category[+route.params.id].Title }}</template>
    </header2>
    <!-- route.params.data -->
    <div class="mt-16 mb-12">
      <WordComponent :words="wordRepo.words"></WordComponent>
    </div>

    <button
      @click="router.push(`/Practice/${CategoryID}`)"
      class="bg-yellow w-full h-11 rounded-t-2xl flex justify-center pt-3 fixed bottom-0"
    >
      <font-awesome-icon :icon="['fas', 'pen']" class="text-sm text-gray-600" />

      <span
        class="text-sm text-center pr-2"
      >تمرین لغات {{ categoryRepo.category[+route.params.id].Title }}</span>
    </button>
  </div>
</template>


<style scoped>
</style>
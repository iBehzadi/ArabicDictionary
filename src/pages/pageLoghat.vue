<script setup lang="ts">
import { useRoute, useRouter } from "vue-router";
import WordComponent from "../components/WordComponent.vue";
import header2 from "../components/Header2.vue";
import { useCategoryRepo } from "@/repo/Category";
import { useWordRepo } from "@/repo/Word";
import { computed } from "vue-demi";


const route = useRoute();
const router = useRouter();
const categoryRepo = useCategoryRepo();
const wordRepo = useWordRepo();

categoryRepo.getAll().then(() => {
    wordRepo.getWordByCategory(categoryRepo.category[+route.params.id].CategoryID);
  });


let categoryTitle = computed(() => { return categoryRepo.category[+route.params.id].Title })
let words = computed((): IWord[] => { return wordRepo.words });
let CategoryID = computed(() => { return categoryRepo.category[+route.params.id].CategoryID; });

</script>
<template >
  <div>
    <header2 class="fixed left-0 right-0 top-0" @back="router.back()">
      <template v-slot:title>{{ categoryTitle }}</template>
    </header2>
    <!-- route.params.data -->
    <div class="mt-16 mb-12">
      <WordComponent :words="words"></WordComponent>
    </div>

    <button
      @click="router.push(`/Practice/${CategoryID}`)"
      class="bg-yellow w-full h-11 rounded-t-2xl flex justify-center pt-3 fixed bottom-0"
    >
      <font-awesome-icon :icon="['fas', 'pen']" class="text-sm text-gray-600" />

      <span class="text-sm text-center pr-2">تمرین لغات {{ categoryTitle }}</span>
    </button>
  </div>
</template>


<style scoped>
</style>
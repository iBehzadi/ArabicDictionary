<script setup lang="ts">
import { useRoute, useRouter } from "vue-router";
import WordComponent from "../components/WordComponent.vue";
import header2 from "../components/Header.vue";
import { useCategoryRepo } from "@/repo/Category";
import { useWordRepo } from "@/repo/Word";
import { onMounted, ref } from "vue-demi";


const route = useRoute();
const router = useRouter();
const categoryRepo = useCategoryRepo();
const wordRepo = useWordRepo();
const observableElement = ref<HTMLElement>();

onMounted(() => {
  const observer = new IntersectionObserver(entries => {
    if (entries[0].intersectionRatio === 1 /* یعنی اومد توی صفحه */) {
      nextPage();
    }
  })
  observer.observe(observableElement.value!);
})

let limit = 50;
let offset = ref(0);

categoryRepo.getAll().then(() => {
  wordRepo.getLimitWordByCategory(categoryRepo.category[+route.params.id].CategoryID, offset.value, limit);
});

function nextPage() {
  if (wordRepo.words.length === 0)
    return
  offset.value += limit;
  wordRepo.getLimitWordByCategory(categoryRepo.category[+route.params.id].CategoryID, offset.value, limit);
}
function previousPage() {
  if (offset.value === 0)
    return
  offset.value -= limit;
  wordRepo.getLimitWordByCategory(categoryRepo.category[+route.params.id].CategoryID, offset.value, limit);
}
</script>
<template >
  <div>
    <header2 class="fixed z-10 left-0 right-0 top-0" @back="router.back()">
      <template v-slot:title>{{ categoryRepo.category[+route.params.id]?.Title }}</template>
    </header2>

    <!-- route.params.data -->
    <div class="mt-16 mb-12">
      <WordComponent :words="wordRepo.words"></WordComponent>
      <div ref="observableElement"></div>
    </div>

    <button
      @click="router.push(`/Practice/${categoryRepo.category[+route.params.id].CategoryID}`)"
      class="practice-btn bg-yellow w-full h-11 rounded-t-2xl flex justify-center pt-3 fixed bottom-0"
      aria-label="Back"
    >
      <font-awesome-icon :icon="['fas', 'pen']" class="text-sm text-gray-600" />

      <span
        class="text-sm text-center pr-2"
      >تمرین لغات {{ categoryRepo.category[+route.params.id]?.Title }}</span>
    </button>
  </div>
</template>


<style scoped>
</style>
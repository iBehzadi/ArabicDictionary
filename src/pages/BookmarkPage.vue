<script setup lang="ts">
import Header2 from "@/components/Header.vue";
import { useRouter } from "vue-router";
import WordComponent from "@/components/WordComponent.vue";
import { useWordRepo } from "@/repo/Word";

const wordRepo = useWordRepo();
const router = useRouter();
wordRepo.getBookmarkWords();
let categoryTitle = "نشان شده ها";
</script>

<template>
  <div>
    <Header2 class="fixed z-10 left-0 right-0 top-0" @back="router.back()">
      <template v-slot:title>{{ categoryTitle }}</template>
    </Header2>

    <div class="mt-16">
      <WordComponent :words="wordRepo.bookmarkWords" />
    </div>
    <div
      v-if="!wordRepo.bookmarkWords.length"
      class="bookmark-help flex flex-col h-auto relative top-12 right-0 left-0 mx-4"
    >
      <div class="bg-uniqColor rounded-2xl w-auto h-auto px-2 py-3 text-sm sm:text-base md:text-lg">
        <span>
          <h3 class="font-bold pt-2">راهنما</h3>
          <p>در این قسمت کلمات انتخابی شما رو نمایش میدهیم.</p>
          <p class="inline-block">
            برای انتخاب کلمات مورد نظر فقط کافیه رو گزینه بوک مارک
            <font-awesome-icon :icon="['fas', 'bookmark']" class="text-lg text-gray-600" /> در کنار هر لغت کلیک کنید
          </p>
        </span>
      </div>
    </div>
  </div>
</template>

<style>
</style>

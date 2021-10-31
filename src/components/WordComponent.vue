<script setup lang="ts">
import { computed, defineProps } from "vue";
import { useBookmarksRepo } from "@/repo/Bookmarks";

const props = defineProps<{
  words: IWord[];
}>();
// isBookmark: false;
const bookmarksRepo = useBookmarksRepo();
bookmarksRepo.Bookmarks_GetAll();
let bookmarks = computed(() => {
  bookmarksRepo.Bookmarks_GetAll()
  return bookmarksRepo.$state.bookmarks
  });

</script>

<template>
  <!-- کامپوننت لغات   -->
  <div
    class="
      w-full
      h-auto
      shadow-sm
      border
      flex
      bg-gray-50
      mb-1
      rounded-xl
      odd:bg-gray-300
      mt-1
    "
    v-for="(item, i) in words"
    :key="i"
  >
    <div class="flex-grow text-sm pt-1 pr-2">
      <div class="text-gray-600 pb-1 text-xs">
        <slot></slot>
      </div>
      <div class="font-black pb-1">{{ item.Ar }}</div>
      <div class="text-gray-600 pb-1">{{ item.Fa }}</div>
      <div class="text-gray-400 pb-1" v-if="item.Example">
        مثال: {{ item.Example }}
      </div>
    </div>

    <div class="flex items-center">
      <button class="w-12 h-12 flex-center">
        <font-awesome-icon
        @click.stop="bookmarksRepo.Bookmarks_ChangeStatusWord(item.WordID)"
          :icon="['fas', 'bookmark']"
          class="text-sm text-gray-600"
          :class="{ 'text-green-600': bookmarks.includes(item.WordID) }"
        />
      </button>
      <button class="w-12 h-12 flex-center" >
        <font-awesome-icon
          :icon="['fas', 'play']"
          class="text-sm text-gray-600"
        />
      </button>
    </div>
  </div>
</template>

<style></style>

<script setup lang="ts">
import { computed,ref } from "vue";
import { useBookmarksRepo } from "@/repo/Bookmarks";
import { useWordRepo } from "@/repo/Word";

const props = defineProps<{
  words: IWord[];
}>();
// isBookmark: false;
const bookmarksRepo = useBookmarksRepo();
bookmarksRepo.Bookmarks_GetAll();
let bookmarks = computed(() => {
  bookmarksRepo.Bookmarks_GetAll();
  return bookmarksRepo.$state.bookmarks;
});

const urlAudio = ref();
function playSound(wordId: number) {
     urlAudio.value = "https://nebrasar.ir/sounds/" + wordId + ".m4a";
}
// function SoundErr(err) {
// }
function SoundErr(event:Event) {
  setTimeout(()=>{
// audioErr.value = true;
alert("خطای شبکه: ارتباط برقرار نیست")
  },10) 
}
</script>

<template>
  <!-- کامپوننت لغات   -->
  <div class="flex flex-col 2sm:items-center md:flex-row md:items-stretch md:justify-center md:flex-wrap md:gap-x-8">
    <div
      class="
        w-full
        h-auto
        test
        shadow-lg
        backdrop-blur-md
        flex
        bg-gray-50
        hover:bg-blue-100
        mb-1
        mt-1
        rounded-xl
        odd:bg-gray-300
        2sm:max-w-screen-2sm
        md:max-w-2xl
        md:w-80
        lg:w-1/4
      "
      v-for="(item, i) in props.words"
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
        <button @click.stop="bookmarksRepo.Bookmarks_ChangeStatusWord(item.WordID)" class="w-12 h-12 flex-center ">
          <font-awesome-icon
            
            :icon="['fas', 'bookmark']"
            class="text-sm text-gray-600 hover:text-green-400"
            :class="{ 'text-green-400': bookmarks.includes(item.WordID) }"
          />
        </button>
        <button
          class="w-12 h-12 flex-center "
          @click.stop="playSound(item.WordID)"
        >
          <font-awesome-icon
            :icon="['fas', 'play']"
            class="text-sm text-gray-600 hover:text-green-400"
            v-if="(item.SoundVersiona = 1)"
          />
        </button>
         <!-- <ModalView class="" v-if="audioErr">
          <template v-slot:body1>خطای شبکه</template>
          <template v-slot:body2> لطفا به اینترنت متصل شوید</template>
          <template v-slot:></template>
        </ModalView> -->
      </div>
    </div>
  </div>
  <audio :src="urlAudio" type="audio/mp4" autoplay @error="SoundErr($event)" ></audio>
</template>

<style>

</style>

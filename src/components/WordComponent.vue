<script setup lang="ts">
import { computed,ref, nextTick } from "vue";
import { useBookmarksRepo } from "@/repo/Bookmarks";
import { useWordRepo } from "@/repo/Word";
import ModalView from "./modalView.vue";

const props = defineProps<{
  words: IWord[];
}>();

const audioElement = ref<HTMLAudioElement>();
// isBookmark: false;
const bookmarksRepo = useBookmarksRepo();
bookmarksRepo.Bookmarks_GetAll();
let bookmarks = computed(() => {
  bookmarksRepo.Bookmarks_GetAll();
  return bookmarksRepo.$state.bookmarks;
});
const wordRepo = useWordRepo();
const urlAudio = ref();
async function playSound(wordId: number) {
     urlAudio.value = "https://nebrasar.ir/sounds/" + wordId + ".m4a";
    await nextTick()
     audioElement.value!.play()
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
    v-for="(item, i) in props.words"
    :key="i"
  >
    <div class="flex-grow text-sm pt-1 pr-2">
      <div class="text-gray-600 pb-1 text-xs">
        <slot></slot>
      </div>
      <div class="font-black pb-1" v-html="item.Ar.replace(wordRepo.$state.searchValue,`<span style='color:red'>$&</span>`)"></div>
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
          :class="{ 'text-green-400': bookmarks.includes(item.WordID) }"
        />
      </button>
      <button
        class="w-12 h-12 flex-center"
        @click.stop="playSound(item.WordID)"
      >
        <font-awesome-icon
          :icon="['fas', 'play']"
          class="text-sm text-gray-600"
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
  <audio ref="audioElement" :src="urlAudio" type="audio/mp4"  @error="SoundErr($event)" ></audio>
</template>

<style></style>

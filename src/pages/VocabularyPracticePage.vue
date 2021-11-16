<script setup lang="ts">
import header2 from "../components/Header.vue";
import { useRoute, useRouter } from "vue-router";
import { ref } from "@vue/reactivity";
import Modal from "../components/PopupModal.vue";
import { useWordRepo } from "@/repo/Word";
import { computed } from "vue-demi";

let isModalVisible = ref(false);
const router = useRouter();
const route = useRoute();
const wordRepo = useWordRepo();

let trueResult = ref(0);
let falseResult = ref(0);

wordRepo.getWordByRandom(+route.params.categoryID);

let questionWord = computed((): IWord => {
  return wordRepo.randomWord[
    Math.floor(Math.random() * wordRepo.randomWord.length)
  ];
});
let answerWord = computed((): IWord[] => {
  return wordRepo.randomWord;
});

let startTime = Date.now();
let stopTime = ref();
let timer = setInterval(function () {
  stopTime.value = Date.now() - startTime;
}, 1000);

function showTime(millis: number) {
  var minutes = Math.floor(millis / 60000);
  var seconds = ((millis % 60000) / 1000).toFixed(0);
  return minutes + " دقیقه و " + seconds + " ثانیه";
}
let count = ref(0);
let redStyle = ref(false);
let greenStyle = ref(false);
let clicked = false;
let userChoice = ref<IWord | null>(null);

function questionAnswer(word: IWord) {
  if (!clicked) {
    userChoice.value = word;
    clicked = true;
    setTimeout(() => {
      if (word.WordID === questionWord.value?.WordID) {
        trueResult.value++;
      } else {
        falseResult.value++;
      }
      userChoice.value = null;
      wordRepo.getWordByRandom(+route.params.categoryID);
      redStyle.value = false;
      greenStyle.value = false;
      clicked = false;
    }, 1000);
    count.value++;
  }
}

function exit() {
  isModalVisible.value = true;
  clearInterval(timer);
}
</script>
<template>
  <header2 class="sm:px-10" @click="exit">
    <template v-slot:title>تمرین لغات</template>
  </header2>
  <div class="h-screen bg-gray-200 sm:px-10">
    <div class="flex relative justify-start p-2 mt-2">
      <div class="flex rounded-full mr-3 p-1 justify-around bg-green-600 w-12 h-6 gap-2">
        <font-awesome-icon class="text-white self-center" :icon="['far', 'check-circle']" />
        <p class="ml-1 text-white text-sm self-center">{{ trueResult }}</p>
      </div>
      <div class="flex rounded-full mr-2 justify-around p-1 bg-red-600 w-12 h-6 gap-2">
        <font-awesome-icon class="text-white self-center" :icon="['far', 'times-circle']" />
        <p class="ml-1 text-white text-sm self-center">{{ falseResult }}</p>
      </div>
    </div>
    <div class="flex px-5 pt-3 justify-center flex-col gap-7 sm:px-16">
      <div class="rounded-3xl bg-white p-10 shadow-lg drop-shadow-md sm:p-8 md:py-14">
        <p class="text-xs text-center sm:text-xl">معنی عبارت زیر چیست؟</p>
        <p class="mt-5 text-lg font-semibold text-center sm:text-2xl">{{ questionWord?.Ar }}</p>
      </div>
      <div class="justify-center">
        <div class="grid grid-cols-2 md:flex justify-items-center py-5 gap-2 sm:gap-4">
          <div
            @click="questionAnswer(wordRepo.randomWord[i])"
            v-for="(item, i) in answerWord"
            :key="i"
            :class="{
              'bg-green-500':
                userChoice !== null && item.WordID === questionWord.WordID,
              'bg-red-500':
                item.WordID === userChoice?.WordID &&
                item.WordID !== questionWord.WordID,
            }"
            class="w-full sm:w-3/5 sm:text-xl sm:font-bold sm:p-0 rounded-3xl bg-white flex items-center justify-center shadow-lg drop-shadow-md"
          >
            <div class="pt-[100%] sm:pt-[60%]"></div>
            <span class="text-base text-center font-normal">{{ item.Fa }}</span>
          </div>
        </div>
      </div>
    </div>
  </div>

  <Modal v-show="isModalVisible" @close="router.back()">
    <template v-slot:body1>
      <div class="flex justify-between">
        <span>تعداد کل سوالات</span>
        <span>{{ count }}</span>
      </div>
    </template>
    <template v-slot:body2>
      <div class="flex justify-between" style="color: green">
        <span>تعداد پاسخ درست</span>
        <span>{{ trueResult }}</span>
      </div>
    </template>
    <template v-slot:body3>
      <div class="flex justify-between" style="color: red">
        <span>تعداد پاسخ غلط</span>
        <span>{{ falseResult }}</span>
      </div>
    </template>
    <template v-slot:body4>
      <div class="flex justify-between">
        <span>زمان</span>
        <span>{{ showTime(stopTime) }}</span>
      </div>
    </template>
    <template v-slot:button>خروج از تمرین لغات</template>
  </Modal>
</template>

<style scoped></style>

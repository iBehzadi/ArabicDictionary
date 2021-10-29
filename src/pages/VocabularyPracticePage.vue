<script setup lang="ts">
import header2 from "../components/Header2.vue";
import { useRoute, useRouter } from "vue-router";
import { ref } from "@vue/reactivity";
import Modal from "../components/ModalView.vue";
import { useWordRepo } from "@/repo/Word";
import { computed } from "vue-demi";

let isModalVisible = ref(false);
const router = useRouter();
const route = useRoute()
const wordRepo = useWordRepo();

let trueResult = ref(0);
let falseResult = ref(0);

wordRepo.getWordByRandom(+route.params.categoryID);

let questionWord = computed((): IWord => {
  return wordRepo.randomWord[Math.floor(Math.random() * wordRepo.randomWord.length)]
})
let answerWord = computed((): IWord[] => {
  return wordRepo.randomWord
})

function questionAnswer(word: IWord) {
  if (word.WordID === questionWord.value?.WordID) {
    trueResult.value++;
  } else {
    falseResult.value++;
  }

  setTimeout(()=>{ wordRepo.getWordByRandom(+route.params.categoryID); }, 1000);
}
</script>
<template>
  <div class="h-screen bg-gray-200">
    <header2 @click="isModalVisible = true">
      <template v-slot:title>تمرین لغات</template>
    </header2>
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
    <div class="flex px-5 pt-3 justify-center flex-col gap-7">
      <div class="rounded-3xl bg-white p-14 shadow-lg drop-shadow-md">
        <p class="text-xs text-center">معنی عبارت زیر چیست؟</p>
        <p class="mt-5 text-lg font-semibold text-center">{{ questionWord?.Ar }}</p>
      </div>
      <div>
        <div class="flex flex-wrap justify-evenly items-center gap-2">
          <div
            v-for="(item, i) in answerWord"
            :key="i"
            @click="questionAnswer(wordRepo.randomWord[i])"
            class="h-36 w-36 rounded-3xl bg-white p-3 flex items-center justify-center shadow-lg drop-shadow-md"
          >
            <span class="text-base text-center font-normal">{{ item.Fa }}</span>
          </div>
        </div>
      </div>
    </div>
  </div>

  <Modal v-show="isModalVisible" @close="router.back()">
    <template v-slot:body1>
      <div class="test-result">
        <span>تعداد کل سوالات</span>
        <span>10</span>
      </div>
    </template>
    <template v-slot:body2>
      <div class="test-result" style="color: green">
        <span>تعداد پاسخ درست</span>
        <span>6</span>
      </div>
    </template>
    <template v-slot:body3>
      <div class="test-result" style="color: red">
        <span>تعداد پاسخ غلط</span>
        <span>4</span>
      </div>
    </template>
    <template v-slot:body4>
      <div class="test-result">
        <span>زمان</span>
        <span>5 دقیقه و 52 ثانیه</span>
      </div>
    </template>
    <template v-slot:button>خروج از تمرین لغات</template>
  </Modal>
</template>

<style scoped>
.test-result {
  display: flex;
  justify-content: space-between;
}
</style>

<template>
  <div class="h-screen bg-gray-200">
    <header2>
      <template v-slot:title> تمرین لغات</template>
    </header2>
    <div class="flex relative justify-start p-2 mt-2">
      
      <div
        class="
          flex
          rounded-full
          mr-3
          p-1
          justify-around
          bg-green-600
          w-12
          h-6
          gap-2
        "
      >
        <font-awesome-icon
          class="text-white self-center"
          :icon="['far', 'check-circle']"
        />
        <p class="ml-1 text-white text-sm self-center">۲</p>
      </div>
      <div
        class="flex rounded-full mr-2 justify-around p-1 bg-red-600 w-12 h-6 gap-2"
      >
        <font-awesome-icon
          class="text-white self-center "
          :icon="['far', 'times-circle']"
        />
        <p class="ml-1 text-white text-sm self-center">۱</p>
      </div>
    </div>
    <div class="flex px-5 pt-3 justify-center flex-col gap-7">
      <div class="rounded-3xl bg-white p-14 shadow-lg drop-shadow-md">
        <p class="text-xs text-center">معنی عبارت زیر چیست؟</p>
        <p class="mt-5 text-lg font-semibold text-center">لاتندل (مخاطب مذکر)</p>
      </div>
      <div>
        <div class="flex justify-between gap-2">
          <vocabulary-test-options class="bg-green-500">
            <template v-slot:option> گزینه صحیح </template>
          </vocabulary-test-options>
          <vocabulary-test-options class="">
            <template v-slot:option> نیاز نداشته باش </template>
          </vocabulary-test-options>
        </div>
        <div class="flex justify-between gap-2 mt-2">
          <vocabulary-test-options class="">
            <template v-slot:option> ترس </template>
          </vocabulary-test-options>
          <vocabulary-test-options class="bg-red-500">
            <template v-slot:option> گزینه غلط </template>
          </vocabulary-test-options>
        </div>
      </div>
    </div>
  </div>
</template>
<script lang="ts">
import { ref, computed, defineComponent } from "vue";
import VocabularyTestOptions from "@/components/VocabularyTestOptions.vue";
import Header2 from "@/components/Header2.vue";
export default defineComponent({
  name: "VocabularyPractice",
  components: { VocabularyTestOptions,Header2 },
  setup() {
    return {};
  },
});
</script>


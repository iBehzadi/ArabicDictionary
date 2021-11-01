<script setup lang="ts">
import Header2Vue from "@/components/Header2.vue";
import { useRoute, useRouter } from "vue-router";

const route = useRoute();
const router = useRouter();

let categoryTitle = "نشان شده ها";
</script>

<template>
  <div>
    <Header2Vue class="fixed left-0 right-0 top-0" @back="router.back()">
      <template v-slot:title>{{ categoryTitle }}</template>
    </Header2Vue>

    <div class="h-full bg-yellow relative top-28 ml-4 mr-4 rounded-2xl">
      <div
        class="
          w-auto
          m-auto
          h-auto
          pr-2
          pb-3
          pl-6
          text-sm
          top-28
          right-24
          items-center
          justify-center
          block
          flex
        "
      >
        <span class="font-sans">
          <h3 class="font-bold pt-2"> راهنما </h3>
          <p>در این قسمت کلمات انتخابی شما رو نمایش میدهیم.</p>
          <p class="inline-block">
            برایه انتخاب کلمات مورد نظر فقد کافیه رو گزینه بوک مارک 
             <font-awesome-icon
                  :icon="['fas', 'bookmark']"
                  class=" text-lg text-gray-600 "
                />
        در کلمات کلیک کنید
  </p>
        </span>
      </div>
    </div>
  </div>
</template>

<style></style>

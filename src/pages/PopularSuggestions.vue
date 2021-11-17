<script setup lang="ts">
import Header2 from "@/components/Header.vue";
import { useRouter } from "vue-router";

const router = useRouter();

let categoryTitle = "پیشنهادات مردمی  ";
</script>

<template>
    <Header2 class="fixed z-10 left-0 right-0 top-0" @back="router.back()">
        <template v-slot:title>{{ categoryTitle }}</template>
    </Header2>
    <div
      class="popular-help flex flex-col h-auto relative top-20 right-0 left-0 mx-4"
    >
      <div class="bg-uniqColor rounded-2xl w-auto h-auto px-2 py-3 text-sm sm:text-base md:text-lg">
        <span>
          <h3 class="font-bold pt-2">راهنما</h3>
          <p>به زودی در اینجا پیشنهادات مردمی ارائه می شود.</p>
        </span>
      </div>
    </div>
</template>

<style>
</style>

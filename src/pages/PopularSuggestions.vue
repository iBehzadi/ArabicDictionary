<script setup lang="ts">
import Header2Vue from "@/components/Header2.vue";
import { useRouter } from "vue-router";
import { useWordRepo } from "@/repo/Word";

const wordRepo = useWordRepo();
const router = useRouter();
wordRepo.getBookmarkWords();
let categoryTitle = "پیشنهادات مردمی  ";
</script>

<template>
    <div>
        <Header2Vue class="fixed z-10 left-0 right-0 top-0" @back="router.back()">
            <template v-slot:title>{{ categoryTitle }}</template>
        </Header2Vue>
    </div>
</template>

<style>
</style>

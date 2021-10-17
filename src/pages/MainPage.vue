<template>
  <div>
    <header
      class="pb-1 pr-1 pl-1 border-b bg-white flex items-center justify-between"
    >
      <!--logo-Translite -->
      <div class="flex items-center justify-between">
        <h1 class="leading-none text-2xl text-gray-darkest">
          <font-awesome-icon
            :icon="['fas', 'bars']"
            class="text-2xl text-gray-500"
          />
        </h1>
      </div>

      <!-- Header -->

      <div class="w-full h-full">
        <span
          class="
            block
            w-full
            text-center
            lg:text-5xl
            md:text-4xl
            sm:text-3xl
            text-1xl text-black
            font-bold
          "
          >دیکشرنی عربی نبراس</span
        >

        <div
          class="
            block
            w-full
            text-center text-gray-400
            font-quran
            tracking-wider
          "
        >
          <span class="text-2xs">
            لهجه
            <a class="bg-gray-200 rounded-3xl">عراقی</a>
            <span class="pr-2">و</span> لهجه
            <a class="bg-gray-200 rounded-2xl">خلیجی</a>
          </span>
        </div>
      </div>
      <!--Div-menu-con -->
      <div>
        <div>
          <a class="py-2">
            <img
              class="w-12 h-12"
              src="../assets/img/ir.nebrasar-e425bdd1-f240-4a40-8807-c647c0713e0d_128x128 (1).png"
            />
          </a>
        </div>
      </div>
    </header>

    <div class="bg-gray-100">
      <!--search-input -->
      <div class="pt-4 relative h-16">
        <form action="get" class="flex mb-11 mr-2 ml-2">
          <input
            type="text"
            class="
              text-1xl
              p-2
              h-12
              border
              rounded-full
              w-full
              bg-white
              focus:shadow-inner
              pr-1
            "
            placeholder="جستجو کنید..."
          />
          <font-awesome-icon
            :icon="['fas', 'search']"
            class="absolute text-lg text-gray-400 left-7 top-7"
          />
        </form>
      </div>

      <!--Items -->

      <div
        class="
          flex flex-fill
          justify-content-center
          flex-wrap
          text-center
          relative
          pb-16
          justify-evenly
        "
      >
        <div
          v-for="item in 10"
          class="
            w-24
            mt-3
            h-24
            border
            drop-shadow-md
            rounded-3xl
            bg-white
            font-quran
          "
        >
          <!-- set => params:{:category} -->
          <router-link :to="{ name: 'words' }">
            <div class="w-full">
              <span class="block pt-4">
                <!-- Cod For Responsive lg:text-8xl  md:text-8xl sm:text-7xl text-7xl  -->
                <font-awesome-icon
                  :icon="['fas', 'bookmark']"
                  class="text-green-500 text-4xl pr-2"
                />
              </span>
            </div>
            <div class="w-full">
              <!-- Cod For Responsive lg:text-4xl  md:text-4xl sm:text-3xl text-3xl -->
              <span class="text-black text-sm block bottom-5 left-14"
                >نشان شده ها</span
              >
            </div>
          </router-link>
        </div>
      </div>

      <!-- Dokme Tamrin & Azmon -->
      <div class="w-full flex h-12 fixed bottom-0 inset-x-0">
        <button
          class="w-2/4 border rounded-t-2xl bg-yellow text-center"
          @click="router.push('/Practice')"
        >
          <p class="text-sm">
            <font-awesome-icon
              :icon="['fas', 'pen']"
              class="text-sm text-gray-600"
            />تمرین لغات
          </p>
        </button>
        <button class="w-2/4 border rounded-t-2xl bg-yellow text-center mr-1">
          <p class="text-sm">
            <font-awesome-icon
              :icon="['fas', 'question']"
              class="text-sm text-gray-600"
            />آزمون مرحله ای
          </p>
        </button>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
// import loghat from '../components/pageLoghat.vue';
import { useRouter } from "vue-router";

const router = useRouter();
</script>

<style scoped>
</style>

<template>
  <!-- SETTING MENU-->
  <div
    ref="settings"
    @click="closeSetting"
    class="
      bg-gray-300
      t-0
      right-0
      left-0
      bottom-0
      fixed
      z-10
      h-full
      w-0
      bg-opacity-50
    "
  >
    <div
      ref="settingSide"
      id="setting-nav"
      class="
        h-full
        w-0
        t-0
        right-0
        overflow-x-hidden
        bg-white bg-opacity-100
        transition-all
        duration-300
      "
    >
      <div class="flex flex-col mt-5">
        <button @click="paidVersionModal" class="text-yellow">
          خرید نسخه طلایی
        </button>
        <button @click="guideModal">راهنما</button>
        <button @click="router.push('/About')">درباره ما</button>
      </div>
    </div>
  </div>

  <div>
    <!-- HEADER-->
    <header
      class="pb-1 pr-1 pl-1 border-b bg-white flex items-center justify-between"
    >
      <!-- menu icon -->
      <div class="flex items-center justify-between">
        <button
          @click="openSetting"
          class="leading-none text-2xl text-gray-darkest mr-2 flex-center"
        >
          <font-awesome-icon
            :icon="['fas', 'bars']"
            class="text-2xl text-gray-500"
          />
        </button>
      </div>

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
        <div class="block w-full text-center text-gray-400 font-quran">
          <span class="text-2xs">
            لهجه
            <span class="bg-gray-200 rounded-3xl">عراقی</span>
            <span class="pr-2">و</span> لهجه
            <span class="bg-gray-200 rounded-2xl">خلیجی</span>
          </span>
        </div>
      </div>
      <!-- logo-->
      <div>
        <a class="py-2">
          <img
            class="w-12 h-12"
            src="../assets/img/ir.nebrasar-e425bdd1-f240-4a40-8807-c647c0713e0d_128x128 (1).png"
          />
        </a>
      </div>
    </header>
    <!-- container -->
    <div class="bg-gray-100">
      <!--search-input -->
      <div class="pt-4 relative h-16">
        <form action="get" class="flex mb-11 mr-2 ml-2">
          <input
            type="text"
            v-bind="search"
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

      <!--category -->
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
        <template v-if="isCategoryVisible">
          <div
            v-for="(item, i) in CategoryDB.category"
            :key="i"
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
            <router-link :to="{ name: 'words' }">
              <div class="w-full">
                  <!-- Cod For Responsive lg:text-8xl  md:text-8xl sm:text-7xl text-7xl  -->
                <i class="pt-4 flex-center w-9 mr-7" v-html="CategoryDB.Icon[i]"></i>
              </div>
              <div class="w-full absolute bottom-6">
                <!-- Cod For Responsive lg:text-4xl  md:text-4xl sm:text-3xl text-3xl -->
                <span class="text-black text-xs block bottom-5 left-14"
                  >{{item}}</span
                >
              </div>
            </router-link>
          </div>
        </template>
        <TranslateRequest v-if="isNotFoundSearch"> </TranslateRequest>
        <WordComponent v-if="isWordFound"> </WordComponent>
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

  <!-- Paid Version modal -->
  <PaidVersionModal
    v-if="isPaidVersionModal"
    @close="isPaidVersionModal = false"
  >
    <template v-slot:body1>
      <span>
        برای استفاده از این قسمت باید نرم افزار را به نسخه طلایی ارتقاء دهید
      </span>
    </template>
    <template v-slot:body2>
      با دریافت نسخه طلایی نرم افزار, امکان دسترسی به هزاران لغت در دسته بندی
      های مختلف را خواهد داشت.
    </template>
    <template v-slot:button>ارتقا‌ء به نسخه طایی</template>
  </PaidVersionModal>
  <!-- guide modal -->
  <GuideModal v-if="isGuideModal" @close="isGuideModal = false">
    <template v-slot:body1>چند نکته قابل توجه!</template>
    <template v-slot:body2>
      1- اشتراک بین لحجه عراقی و خلیجی زیاد است و تنها در موارد کمی تفاوت وجود
      دارد. برخی از این تفاوت ها را در بخش (اصطلاحات خلیجی) می توانید بررسی
      کنید.
      <br />2- دسته بندی های موجود,به صورت مشترک بین لحجه عراقی و خلیجی می باشد.
      <br />3- لغات نرم افزار به صورت آنلاین و مداوم بروز رسانی می شوند.
      <br />4- در صورتی که لغت مد نظر خود را جستجو کرده و آن را پیدا نکردید,از
      بخش (درخواست ترجمه) میتوانید آن را به اطلاع ما رسانده و نهایتاً پس از چند
      روز لغت به صورت آنلاین به دیکشنری اضافه خواهد شد.
    </template>
    <template v-slot:body3>
      کلیه حقوق این نرم افزار متعلق به گروه آموزشی نبراس است و هرگونه کپی برداری
      از آن بدون ذکر منبع شرعاً و قانوناً ممنوع است.
      <br />با تشکر از همراهی شما ...
    </template>
  </GuideModal>
</template>

<script setup lang="ts">
// import loghat from '../components/pageLoghat.vue';
import { useRouter } from "vue-router";
import { ref } from "@vue/reactivity";
import GuideModal from "@/components/ModalView.vue";
import PaidVersionModal from "@/components/ModalView.vue";
import TranslateRequest from "@/components/transliteRequest.vue";
import WordComponent from "@/components/WordComponent.vue";
import { useCategoryDB } from "@/stores/Category";
import { useWordDB } from "@/stores/Word";
import { httGet } from "@/datasource/http";

const CategoryDB = useCategoryDB();
const WordDB = useWordDB();
const router = useRouter();
let isCategoryVisible = ref(true);
let isGuideModal = ref(false);
let isPaidVersionModal = ref(false);
let isNotFoundSearch = ref(false);
let isWordFound = ref(false);
let search:String;

//setting-menu functions
var settingSide = ref<HTMLDivElement>();
var settings = ref<HTMLDivElement>();
function openSetting() {
  settingSide.value!.style.width = "65%";
  settings.value!.style.width = "100%";
}
function closeSetting() {
  settingSide.value!.style.width = "0";
  settings.value!.style.width = "0";
  document.getElementById("setting-nav")?.addEventListener("click", (e) => {
    e.stopPropagation();
  });
}
//guideModal open
function guideModal() {
  closeSetting();
  isGuideModal.value = true;
}
function paidVersionModal() {
  closeSetting();
  isPaidVersionModal.value = true;
}
//check localStorage
let lastUpdate;
if(localStorage.getItem("lastUpdate") != null) {
  lastUpdate = localStorage.getItem("lastUpdate");
} else {
  lastUpdate = "-1";
}

const Request = httGet('/api/getUpdates.php?variant=normal&lastUpdate=' + lastUpdate);
Request.then((res:any)=> {
  CategoryDB.addAll(res.categories);
  WordDB.addAll(res.words);
  localStorage.setItem("lastUpdate", res.lastUpdate);
  CategoryDB.getCategory();
  CategoryDB.getIcon();
});


</script>

<style scoped></style>

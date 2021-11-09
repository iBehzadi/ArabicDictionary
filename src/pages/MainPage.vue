<script setup lang="ts">
import { useRouter } from "vue-router";
import { ref } from "@vue/reactivity";
import GuideModal from "@/components/ModalView.vue";
import PaidVersionModal from "@/components/ModalView.vue";
import TranslateRequest from "@/components/transliteRequest.vue";
import WordComponent from "@/components/WordComponent.vue";
import { useCategoryRepo } from "@/repo/Category";
import { useUpdateRepo } from "@/repo/Update";
import { useWordRepo } from "@/repo/Word";
import pageLoader from "@/components/pageLoader.vue";

// @ts-ignore
import { useRegisterSW } from 'virtual:pwa-register/vue'

let isCategoryVisible = ref(true);
let isGuideModal = ref(false);
let isPaidVersionModal = ref(false);
let isNotFoundSearch = ref(false);
let search = ref('');
let responsiv="<div > Hello </div>"
const update = useUpdateRepo();
const router = useRouter();
const wordRepo = useWordRepo();
const categoryRepo = useCategoryRepo();
let error = ref(false);
const loading = ref(true);

const {
  offlineReady,
  needRefresh,
  updateServiceWorker,
} = useRegisterSW();

const close = async () => {
  offlineReady.value = false
  needRefresh.value = false
};

function reload() {
  loading.value = true;
  error.value = false;
  update.DB_Update()
    .catch(e => {
      if(categoryRepo.category.length === 0){
      error.value = true;
        
      }
    }) 
    .finally(() => {
      loading.value = false;
      categoryRepo.getAll();
    })
}
reload();
categoryRepo.getAll();

// Random Word
function goToVocabularyTest(){
  let CategoryID =Math.floor(Math.random()* categoryRepo.category.length)
router.push(`/Practice/${CategoryID}`)
}

//search function
function SearchCall() {
  if (search.value.length >= 1) {
    isCategoryVisible.value = false;
    if (search.value.length >= 2) {
      wordRepo.getSearchResult(search.value);
    } else {
      wordRepo.searchResult = [];
    }
  } else {
    wordRepo.searchResult = [];
    isCategoryVisible.value = true;
  }

  if (search.value.length >= 3) {
    isNotFoundSearch.value = true;
  }
  else {
    isNotFoundSearch.value = false;
  }
}

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
//guide Modal open
function guideModal() {
  closeSetting();
  isGuideModal.value = true;
}
//paidversion Modal open
function paidVersionModal() {
  closeSetting();
  isPaidVersionModal.value = true;
}

function wordTranslateRequest() {
  //send word to server
  isNotFoundSearch.value = false;
  isCategoryVisible.value = true;
  search.value = '';
  alert('درخواست شما برای ترجمه لغت انجام شد')
}

</script>

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
      z-20
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
  <!-- HEADER-->
  <pageLoader :error="false" class="z-20" v-if="categoryRepo.category.length === 0"></pageLoader>
  <pageLoader :error="error" class="z-20" v-if="error" @reload="reload()"></pageLoader>
  
  <header class="sticky left-0 right-0 top-0 z-10">
    
    <div class="pb-1 pl-1 border-b bg-white flex items-center justify-between">
      <!-- menu icon -->
      <div class="flex items-center justify-between mt-1 lg:mr-3">
        <button
          @click="openSetting"
          class="  text-gray-darkest mr-4 flex-center"
        >
          <font-awesome-icon
            :icon="['fas', 'bars']"
            class="text-xl sm:text-2xl md:text-3xl lg:text-4xl  text-gray-500"
          />
        </button>
      </div>
      <!-- title -->
      <div class="w-full h-full">
        <span
          class="
            block
            w-full
            text-center
            lg:text-5xl
            md:text-4xl
            sm:text-3xl
            
            text-lg text-black
            font-bold
            leading-4
            mt-2
          "
          >دیکشرنی عربی نبراس</span
        >
        <div class="w-full text-center pt-2 mb-2 text-gray-400 font-quran leading-none">
          <span class="text-2xs sm:text-base">
            لهجه
            <span class="bg-gray-200 rounded-3xl">عراقی</span>
            و
            <span class="bg-gray-200 rounded-2xl">خلیجی</span>
          </span>
        </div>
      </div>
      <!-- logo-->
      <div class="mt-2 ">
        <img
          class="w-12  lg:h-16 ml-5
            md:w-16 h-14
            sm:w-14  "
          src="../assets/img/logo.png"
        />
      </div>
    </div>
    <!--search-input -->
    <div class="pt-1 relative h-16 bg-gray-100 ">
      <form action="get" class="flex mr-2 ml-2">
        <input
          @input.stop="SearchCall()"
          type="text"
          v-model="search"
          class="text-1xl h-14  rounded-full w-full bg-white  pr-6 pl-12 outline-none"
          placeholder="جستجو کنید..."
        />
        <font-awesome-icon
          :icon="['fas', 'search']"
          class="absolute text-lg text-gray-400 left-7 top-5"
        />
      </form>
    </div>
  </header>
 
  <!-- container -->
  <div class="bg-gray-100  ">
    <!--category -->
    <div
      class="flex flex-fill justify-content-center flex-wrap text-center  pb-16 md:pb-28  justify-evenly "
    > 
      <template v-if="isCategoryVisible">
        <!-- bookmark -->
        <div style="filter: blur(1px) ;" class="shadow-2xl w-28 filter  mt-2 h-28 border sm:w-32 sm:h-32 md:h-40 md:w-40  lg:h-48 lg:w-48  xl:h-60 xl:w-60  drop-shadow rounded-3xl2 bg-white">
          <router-link :to="{ name: 'bookmark'}">
            <div class="h-full">
              <div class="w-full">
                <font-awesome-icon
                  :icon="['fas', 'bookmark']"
                  class="absolute  text-lg text-green-600 top-8 right-12"
                />
              </div>
              <div class="w-full absolute bottom-6">
                <span class="text-black text-xs block bottom-5 left-14"
                  >نشان شده ها</span
                >
              </div>
            </div>
          </router-link>
        </div>
        <!-- Popular suggestions -->
        <div class="w-28 mt-2 h-28  sm:w-32 sm:h-32 md:h-40 md:w-40  lg:h-48 lg:w-48  xl:h-60 xl:w-60  border drop-shadow rounded-3xl2 bg-white">
          <router-link :to="{ name: 'words', params: { id: 0 } }">
            <div class="h-full">
              <div class="w-full">
                <!-- Cod For Responsive lg:text-8xl  md:text-8xl sm:text-7xl text-7xl  -->
                <font-awesome-icon
                  :icon="['fas', 'users']"
                  class="  absolute text-lg  text-red-400 top-8 right-11"
                />
              </div>
              <div class="w-full absolute bottom-6">
                <!-- Cod For Responsive lg:text-4xl  md:text-4xl sm:text-3xl text-3xl -->
                <span class="text-black text-xs block bottom-5 left-14"
                  >پیشنهادات مردمی</span
                >
              </div>
            </div>
          </router-link>
        </div>

        <div
          v-for="(item, i) in categoryRepo.category"
          :key="i"
          class="w-28 mt-2 h-28 border sm:w-32 sm:h-32 md:h-40 md:w-40  lg:h-48 lg:w-48  xl:h-60 xl:w-60   drop-shadow rounded-3xl2 bg-white"
          :class="{ 'bg-gray-300': !item.IsFree }"
        >
          <router-link :to="{ name: 'words', params: { id: i } }">
            <div class="h-full">
              <div class="w-full" >
                <font-awesome-icon 
                  v-if="!item.IsFree"
                  :icon="['fas', 'lock']"
                  class=" absolute  text-gray-500 right-3 top-3 text-sm sm:text-base md:text-lg lg:text-2xl xl:text-3xl"
                  
               />
                <div
                  class="sm:w-12 md:w-20 lg:w-28 xl:w-32 pt-4 flex-center w-8  mr-7 absolute right-3 top-3 category_icon "
                  v-html ="categoryRepo.category[i].Icon "
                  
                ></div>
              </div>
              <div  class="w-full absolute bottom-6" >
                <span
                  
                  :class="{ 'text-gray-500': !item.IsFree }"
                  class="sm:text-sm md:text-lg lg:text-2xl xl:text-2xl text-black text-xs block bottom-5 left-14"
                  >{{ item.Title }}</span
                >
              </div>
            </div>
          </router-link>
        </div>
      </template>
      <TranslateRequest
        @request="wordTranslateRequest"
        v-if="wordRepo.searchResult.length === 0 && isNotFoundSearch"
      ></TranslateRequest>
      <WordComponent :words="wordRepo.searchResult"></WordComponent>
    </div>
    <!-- practice & test buttons -->
    <div class="w-full flex h-12 md:h-16 xl:h-24 fixed bottom-0 inset-x-0 bg-gray-100 justify-center md:bg-opacity-5 xl:bg-opacity-5 ">
      <button
        class="w-2/4 sm:w-3/5 md:w-2/6 border rounded-t-2xl bg-yellow text-center"
        @click="goToVocabularyTest()"
      >
        <span class="text-sm sm:text-base md:text-xl lg:text-2xl xl:text-3xl">
          <font-awesome-icon
            :icon="['fas', 'pen']"
            class="text-sm text-gray-600 ml-2 sm:text-base md:text-xl lg:text-2xl xl:text-3xl"
          />تمرین لغات
        </span>
      </button>
      <button class="w-2/4 sm:w-3/5 md:w-2/6   border rounded-t-2xl bg-yellow text-center mr-1">
        <span class="text-sm sm:text-base md:text-xl lg:text-2xl xl:text-3xl">
          <font-awesome-icon
            :icon="['fas', 'question']"
            class="text-sm text-gray-600 ml-2 sm:text-base md:text-xl lg:text-2xl xl:text-3xl"
          />آزمون مرحله ای
        </span>
      </button>
    </div>
  </div>
  <!-- Paid modal -->
  <PaidVersionModal
    class="z-10"
    v-if="isPaidVersionModal"
    @close="isPaidVersionModal = false"
  >
    <template v-slot:body1>
      <span
        >برای استفاده از این قسمت باید نرم افزار را به نسخه طلایی ارتقاء
        دهید</span
      >
    </template>
    <template v-slot:body2>
      با دریافت نسخه طلایی نرم افزار, امکان دسترسی به هزاران لغت در دسته بندی
      های مختلف را خواهد داشت.
    </template>
    <template v-slot:button>ارتقا‌ء به نسخه طایی</template>
  </PaidVersionModal>
  <!-- guide modal -->
  <GuideModal class="z-10" v-if="isGuideModal" @close="isGuideModal = false">
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

    <div v-if="offlineReady || needRefresh" class="fixed right-0 bottom-0 m-4 p-3 border-pezeshki rounded-md z-10 text-left" role="alert">
    <div class="mb-2">
      <span v-if="offlineReady">App ready to work offline</span>
      <span v-else>New content available, click on reload button to update.</span>
    </div>
    <button class="outline-none mr-2 rounded pt-1 pb-1 pl-2 pr-2" v-if="needRefresh" @click="updateServiceWorker()">Reload</button>
    <button @click="close">Close</button>
  </div>

</template>

<style >

.category_icon svg {
  @apply w-20 h-20  !important;
}

</style>

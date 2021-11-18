<script setup lang="ts">
import { useRouter } from "vue-router";
import { ref } from "@vue/reactivity";
import GuideModal from "@/components/PopupModal.vue";
import PaidVersionModal from "@/components/PopupModal.vue";
import TranslateRequest from "@/components/TranslateRequest.vue";
import WordComponent from "@/components/WordComponent.vue";
import { useCategoryRepo } from "@/repo/Category";
import { useUpdateRepo } from "@/repo/Update";
import { useWordRepo } from "@/repo/Word";
import pageLoader from "@/components/LoadingComponent.vue";
// @ts-ignore
import { useRegisterSW } from "virtual:pwa-register/vue";

let isCategoryVisible = ref(true);
let isGuideModal = ref(false);
let isPaidVersionModal = ref(false);
let isNotFoundSearch = ref(false);
let search = ref("");
let offSWModal = ref(true);

const update = useUpdateRepo();
const router = useRouter();
const wordRepo = useWordRepo();
const categoryRepo = useCategoryRepo();
let error = ref(false);
const loading = ref(true);
let mobileView = ref(true);

const { offlineReady, needRefresh, updateServiceWorker } = useRegisterSW();

const closeSWUpdateModal = async () => {
  offSWModal.value = false;
  offlineReady.value = false;
  needRefresh.value = false;
};

const updateAndCloseSWModal = async () => {
  await updateServiceWorker();
  offSWModal.value = false;
  //needRefresh.value = false;
};

function reload() {
  loading.value = true;
  error.value = false;

  update.DB_Update()
    .catch(() => {
      if (categoryRepo.category.length === 0) {
        error.value = true;
      }
    })
    .finally(() => {
      loading.value = false;
      categoryRepo.getAll();
    });
}
reload();
categoryRepo.getAll();

// Random Word
function goToVocabularyTest() {
  let CategoryID = Math.floor(Math.random() * categoryRepo.category.length);
  router.push(`/Practice/${CategoryID}`);
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
    search.value = "";
    isCategoryVisible.value = true;
  }

  if (search.value.length >= 3) {
    isNotFoundSearch.value = true;
  } else {
    isNotFoundSearch.value = false;
  }
}

//setting-menu functions
var settingSide = ref<HTMLDivElement>();
var settings = ref<HTMLDivElement>();
function openSetting() {
  settingSide.value!.style.width = "60%";
  settings.value!.style.width = "100%";
}
function closeSetting() {
  settingSide.value!.style.width = "0";
  settings.value!.style.width = "0";
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
  search.value = "";
  alert("درخواست شما برای ترجمه لغت انجام شد");
}

let prompter: any;
const showInstallButton = ref(false);
window.addEventListener("beforeinstallprompt", function (e) {
  prompter = e;
  showInstallButton.value = true;
});

function install() {
  prompter.prompt();
}

function openCategory(isFree:number, i:number){
  if(isFree != 0) {
    router.push({ name: 'words', params: { id: i } })
  } else {
    isPaidVersionModal.value = true;
  }
}
</script>

<template>
  <!-- SETTING MENU-->
  <div
    ref="settings"
    @click="closeSetting"
    class="bg-gray-300 t-0 right-0 left-0 bottom-0 fixed z-20 h-full w-0 bg-opacity-50"
  >
    <div
      ref="settingSide"
      id="setting-nav"
      class="h-full w-0 t-0 right-0 overflow-x-hidden bg-white bg-opacity-100 transition-all duration-300"
      @click.stop
    >
      <div class="flex flex-col mt-5">
        <button
          aria-label="Paid version"
          @click="paidVersionModal"
          class="text-yellow"
        >خرید نسخه طلایی</button>
        <button aria-label="Help" @click="guideModal">راهنما</button>
        <button aria-label="About Us" @click="router.push('/About')">درباره ما</button>
        <button aria-label="Install app" v-if="showInstallButton" @click="install">نصب برنامه</button>
      </div>
    </div>
  </div>

  <pageLoader :error="false" class="z-50" v-if="categoryRepo.category.length === 0"></pageLoader>
  <pageLoader :error="error" class="z-50" v-if="error" @reload="reload()"></pageLoader>
  <!-- before desktop -->
  <div>
    <header class="sticky left-0 right-0 top-0 z-10 lg:hidden md:hidden">
      <div class="pb-1 pl-1 border-b bg-white flex items-center justify-between">
        <!-- menu icon -->

        <div class="flex items-center justify-between mt-1 lg:mr-3" v-if="mobileView">
          <button
            aria-label="Settings menu"
            @click="openSetting"
            class="text-gray-darkest mr-4 flex-center"
          >
            <font-awesome-icon
              :icon="['fas', 'bars']"
              class="text-xl sm:text-2xl md:text-3xl lg:text-4xl text-gray-500"
            />
          </button>
        </div>
        <!-- title -->
        <div class="h-full">
          <span
            class="inline-block text-center sm:text-3xl md:text-4xl text-black font-bold leading-4 mt-2"
          >دیکشرنی عربی نبراس</span>
          <div class="w-full text-center mb-2 text-gray-400 font-quran leading-none">
            <span class="text-2xs sm:text-base">
              لهجه
              <span class="bg-gray-200 rounded-3xl">عراقی</span>
              و
              <span class="bg-gray-200 rounded-2xl">خلیجی</span>
            </span>
          </div>
        </div>
        <!-- logo-->
        <div class="mt-2">
          <img alt="logo" class="w-12 h-12 ml-5 sm:w-14 sm:h-14" src="../assets/img/logo.png" />
        </div>
      </div>
      <!--search-input -->
      <div class="pt-1 relative bg-gray-100">
        <form action="#" class="flex mr-2 ml-2">
          <input
            @input.stop="SearchCall()"
            type="text"
            v-model="search"
            class="text-1xl h-14 rounded-full w-full bg-white pr-6 pl-12 outline-none"
            placeholder="جستجو کنید..."
          />
          <font-awesome-icon
            :icon="['fas', 'search']"
            class="absolute text-lg text-gray-400 left-7 top-5"
          />
        </form>
      </div>
    </header>

    <!-- desktop header -->
    <header class="w-full shadow-shadowBottom z-50 top-0 sticky hidden lg:flex md:flex">
      <div class="h-full w-full">
        <div class="h-20 bg-gray-50">
          <div
            class="float-right text-4xl font-bold text-gray-600 leading-4 items-center mt-1 h-3/4 pr-11 pt-5"
          >
            دیکشرنی عربی نبراس
            <div class="w-full text-center mb-2 text-gray-400 font-quran leading-none">
              <span class="text-2xs sm:text-base">
                لهجه
                <span class="bg-gray-200 rounded-3xl">عراقی</span>
                و
                <span class="bg-gray-200 rounded-2xl">خلیجی</span>
              </span>
            </div>
          </div>

          <div class="float-left mt-2">
            <img alt="logo" class="w-12 lg:h-16 ml-5 md:w-16" src="../assets/img/logo.png" />
          </div>
        </div>

        <div class="w-full text-center pr-4 flex bg-gray-200 h-11">
          <ul class="flex blackk tracking-tighter w-auto leading-9 text-base cursor-pointer">
            <li
              @click="paidVersionModal"
              class="mr-2 pl-3 h-8 hover:text-blue-400 inline-block"
            >خرید نسخه طلایی</li>
            <li @click="guideModal" class="mr-4 pl-3 h-8 hover:text-blue-400">راهنما</li>
            <li @click="router.push('/About')" class="mr-4 pl-3 h-8 hover:text-blue-400">درباره ما</li>
            <li class="dropdown">
              <div
                class="inline-flex justify-center hover:text-blue-400 leading-5 transition duration-150 ease-in-out h-7"
                type="button"
              >
                <span >تمرین</span>
                <svg class="w-5 h-5 ml-2 mr-1" viewBox="0 0 20 20" fill="currentColor">
                  <path
                    fill-rule="evenodd"
                    d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                    clip-rule="evenodd"
                  />
                </svg>
              </div>
              <div
                class="dropdown-menu opacity-0 invisible flex flex-col mt-2 border-b-1 leading-7 transition-all duration-500 transform origin-top-right -translate-y-2 bg-white"
              >
                <button @click="goToVocabularyTest()" class="hover:bg-blue-100 p-3">تمرین لغات</button>
                <button class="hover:bg-blue-100 p-3">آزمون مرحله ای</button>
              </div>
            </li>
          </ul>
          <div
            class="group absolute bottom-5 --tw-translate-x:-50%;--tw-translate-y:-50%; bg-blue-100 h-8 left-24 top-5 rounded-3xl"
          >
            <input
              @input.stop="SearchCall()"
              v-model="search"
              class="bg-transparent border-none outline-none p-0 float-right leading-8 text-black text-lg transition-all duration-500 transform origin-bottom-left -translate-y-2 w-0 group-focus-within:w-60 relative top-2 right-2"
              type="text"
              placeholder="جستجوکنید..."
            />
            <a
              class="text-gray-700 w-10 h-10 float-left bg-blue-100 rounded-4xl flex justify-center items-center relative bottom-1 left-0"
              href="#"
            >
              <font-awesome-icon :icon="['fas', 'search']" class />
            </a>
          </div>
        </div>
      </div>
    </header>
    <!-- container -->

    <div class="bg-gray-100 z-2 lg:mt-1 md:mt-1 xl:mt-1">
      <!--category -->
      <div
        class="flex flex-fill justify-content-center flex-wrap text-center pb-16 md:pb-28 justify-evenly"
      >
        <template v-if="isCategoryVisible">
          <!-- bookmark -->
          <div
            class="w-28 mt-2 h-28 border sm:w-32 sm:h-32 md:w-96 md:h-16 lg:w-96 lg:h-16 xl:w-96 xl:h-16 drop-shadow rounded-3xl2 bg-white"
          >
            <router-link :to="{ name: 'bookmark' }">
              <div class="h-full flex-center flex-col md:flex-row md:justify-evenly">
                <div
                  class="sm:w-12 md:w-24 pt-4 md:pt-0 lg:pt-0 xl:pt-0 md:absolute md:right-0 category_icon"
                >
                  <font-awesome-icon :icon="['fas', 'bookmark']" class="text-green-600 md:w-2" />
                </div>
                <span
                  class="text-black text-xs left-3 sm:text-sm md:text-lg lg:text-1xl xl:text-1xl"
                >نشان شده ها</span>
              </div>
            </router-link>
          </div>
          <!-- Popular suggestions -->
          <div
            class="w-28 mt-2 h-28 sm:w-32 sm:h-32 md:w-96 md:h-16 lg:w-96 lg:h-16 xl:w-96 xl:h-16 border drop-shadow rounded-3xl2 bg-white"
          >
            <router-link :to="{ name: 'popular' }">
              <div class="h-full flex-center flex-col md:flex-row md:justify-evenly">
                <div
                  class="sm:w-12 md:w-24 pt-4 md:pt-0 lg:pt-0 xl:pt-0 md:absolute md:right-0 category_icon"
                >
                  <font-awesome-icon :icon="['fas', 'users']" class="text-red-400 md:w-2" />
                </div>
                <span
                  class="text-black text-xs left-3 sm:text-sm md:text-lg lg:text-1xl xl:text-1xl"
                >پیشنهادات مردمی</span>
              </div>
            </router-link>
          </div>

          <div
            v-for="(item, i) in categoryRepo.category"
            :key="i"
            class="w-28 flex-col md:flex-row md:justify-evenly mt-2 h-28 border sm:w-32 sm:h-32 md:w-96 md:h-16 lg:w-96 lg:h-16 xl:w-96 xl:h-16 drop-shadow rounded-3xl2 bg-white md:mt-3"
            :class="{ 'bg-gray-300': !item.IsFree }"
          >
            <a class="cursor-pointer" @click="openCategory(item.IsFree,i)">
              <div class="h-full flex-center flex-col md:flex-row md:justify-evenly">
                <font-awesome-icon
                  v-if="!item.IsFree"
                  :icon="['fas', 'lock']"
                  class="absolute text-gray-500 left-3 top-3 text-sm sm:text-base md:text-2xl xl:text-3xl"
                />
                <div
                  class="md:absolute md:right-1 md:w-24 pt-4 md:pt-0 lg:pt-0 xl:pt-0 flex-center category_icon"
                  v-html="categoryRepo.category[i].Icon"
                ></div>
                <span
                  :class="{ 'text-gray-500': !item.IsFree }"
                  class="text-black text-xs sm:text-sm md:text-lg lg:text-1xl xl:text-1xl"
                >{{ item.Title }}</span>
              </div>
            </a>
          </div>
        </template>
        <TranslateRequest
          @request="wordTranslateRequest"
          v-if="wordRepo.searchResult.length === 0 && isNotFoundSearch"
        ></TranslateRequest>
        <WordComponent :words="wordRepo.searchResult"></WordComponent>
      </div>
      <!-- practice & test buttons -->
      <div
        class="lg:hidden md:hidden w-full flex h-12 md:h-16 xl:h-24 fixed bottom-0 inset-x-0 bg-gray-100 justify-center md:bg-opacity-5 xl:bg-opacity-5"
      >
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
        <button class="w-2/4 sm:w-3/5 md:w-2/6 border rounded-t-2xl bg-yellow text-center mr-1">
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
    <PaidVersionModal class="z-50" v-if="isPaidVersionModal" @close="isPaidVersionModal = false">
      <template v-slot:body1>
        <span>
          برای استفاده از این قسمت باید نرم افزار را به نسخه طلایی ارتقاء
          دهید
        </span>
      </template>
      <template v-slot:body2>
        با دریافت نسخه طلایی نرم افزار, امکان دسترسی به هزاران لغت در دسته بندی
        های مختلف را خواهد داشت.
      </template>
      <template v-slot:button>ارتقا‌ء به نسخه طایی</template>
    </PaidVersionModal>
    <!-- guide modal -->
    <GuideModal class="z-50" v-if="isGuideModal" @close="isGuideModal = false">
      <template v-slot:body1>چند نکته قابل توجه!</template>
      <template v-slot:body2>
        1- اشتراک بین لحجه عراقی و خلیجی زیاد است و تنها در موارد کمی تفاوت وجود
        دارد. برخی از این تفاوت ها را در بخش (اصطلاحات خلیجی) می توانید بررسی
        کنید.
        <br />2- دسته بندی های موجود,به صورت مشترک بین لحجه عراقی و خلیجی می
        باشد.
        <br />3- لغات نرم افزار به صورت آنلاین و مداوم بروز رسانی می شوند.
        <br />4- در صورتی که لغت مد نظر خود را جستجو کرده و آن را پیدا نکردید,از
        بخش (درخواست ترجمه) میتوانید آن را به اطلاع ما رسانده و نهایتاً پس از
        چند روز لغت به صورت آنلاین به دیکشنری اضافه خواهد شد.
      </template>
      <template v-slot:body3>
        کلیه حقوق این نرم افزار متعلق به گروه آموزشی نبراس است و هرگونه کپی
        برداری از آن بدون ذکر منبع شرعاً و قانوناً ممنوع است.
        <br />با تشکر از همراهی شما ...
      </template>
    </GuideModal>

    <div
      v-if="needRefresh && offSWModal"
      class="fixed flex-center top-0 left-0 right-0 bottom-0 bg-gray-400 bg-opacity-50 z-50 text-center"
      role="alert"
    >
      <div class="bg-uniqColor rounded-md p-1">
        <div class="mb-4 p-3">
          <span v-if="needRefresh">نسخه جدید برنامه در دسترس است. مایل به بروزرسانی هستید؟</span>
        </div>
        <button
          class="outline-none mr-2 rounded-md bg-green-500 mx-2 p-3 hover:bg-blue-400"
          v-if="needRefresh"
          @click="updateAndCloseSWModal"
        >بروزرسانی</button>
        <button
          class="outline-none mr-2 rounded-md bg-green-500 mx-2 p-3 hover:bg-blue-400"
          @click="closeSWUpdateModal"
        >فعلا نه</button>
      </div>
    </div>
  </div>
</template>

<style>
.category_icon svg {
  @apply w-8 h-8 sm:w-10 sm:h-10 !important;
}

.dropdown:hover .dropdown-menu {
  opacity: 1;
  visibility: visible;
}
</style>

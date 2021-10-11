<template>
  <div>
    <header
      class="
        p-4
        pb-5
        border-b
        shadow-lg
        bg-gray-100
        flex
        items-center
        justify-between
      "
    >
      <!--logo-Translite -->
      <div class="mb-4 flex items-center justify-between">
        <h1 class="leading-none text-2xl text-gray-darkest">
          <img
            src="../assets/icons8-menu-48.png"
            class="no-underline text-gray-darkest hover:text-black"
          />
        </h1>
      </div>

      <!--search-input -->
      <form action="get" class="mb-2 h-12 flex w-96">
        <input
          type="text"
          class="p-2 border rounded-lg w-full bg-gray-50 focus:shadow-inner"
          placeholder="جستجو کنید "
        />
      </form>

      <!--Div-menu-con -->
      <div>
        <div>
          <a class="py-2"><img src="../assets/Translit.png" alt="Menu" /></a>
        </div>
      </div>
    </header>

    <!--Items -->
    <div>
      <div class="w-full h-full">
        <span class="block w-full text-center text-5xl h-20 pt-6 text-yellow-900"> دیکشرنی عربی نبراس</span >
         
       
        <div class="block w-full text-center text-2xl pt-3 text-gray-300	">
          <a>     لهجه عراقی    </a>|
          <a>   لهجه خلیجی </a>
        </div>
      </div>
      <div
        class="
          flex flex-fill
          justify-content-center
          flex-wrap
          text-center
          relative
        "
      >
        <div class="w-72 m-7 h-52 border drop-shadow-md rounded-3xl">
          <div class="absolute bottom-5 w-full">
            <span class="text-red-400 text-4xl block bottom-5 left-14">
              نشان شده ها
            </span>
          </div>
          <div class="absolute w-full">
            <span class="block pr-24 pt-6">
              <img src="../assets/bookMark.png" />
            </span>
          </div>
        </div>
        <div class="w-72 m-7 h-52 border drop-shadow-md rounded-3xl">
          <div class="absolute bottom-5 w-full">
            <span class="text-red-400 text-4xl block bottom-5 left-14">
              پیشنهادات مردمی
            </span>
          </div>
          <div class="absolute w-full">
            <span class="block pr-24 pt-6">
              <img src="../assets/women.png" />
            </span>
          </div>
        </div>
        <div class="w-72 m-7 h-52 border drop-shadow-md rounded-3xl">
          <div class="absolute bottom-5 w-full">
            <span class="text-red-400 text-4xl block bottom-5 left-14">
              اصطلاحات خلیجی</span
            >
          </div>
          <div class="absolute w-full">
            <span class="block pr-24 pt-6">
              <img src="../assets/icons8-iraq-96.png" />
            </span>
          </div>
        </div>
        <div class="w-72 m-7 h-52 border drop-shadow-md rounded-3xl">
          <div class="absolute bottom-5 w-full">
            <span class="text-red-400 text-4xl block bottom-5 left-14">
              لوازم شخصی
            </span>
          </div>
          <div class="absolute w-full">
            <span class="block pr-24 pt-6">
              <img src="../assets/icons8-toothbrush-60.png" />
            </span>
          </div>
        </div>
        <div class="w-72 m-7 h-52 border drop-shadow-md rounded-3xl">
          <div class="absolute bottom-5 w-full">
            <span class="text-red-400 text-4xl block bottom-5 left-14">
              لوازم منزل</span
            >
          </div>
          <div class="absolute w-full">
            <span class="block pr-24 pt-6">
              <img src="../assets/icons8-refrigerator-64.png" />
            </span>
          </div>
        </div>
        <div class="w-72 m-7 h-52 border drop-shadow-md rounded-3xl">
          <div class="absolute bottom-5 w-full">
            <span class="text-red-400 text-4xl block bottom-5 left-14">
              رنگ ها
            </span>
          </div>
          <div class="absolute w-full">
            <span class="block pr-24 pt-6">
              <img src="../assets/icons8-color-128.png" />
            </span>
          </div>
        </div>
        <div class="w-72 m-7 h-52 border drop-shadow-md rounded-3xl">
          <div class="absolute bottom-5 w-full">
            <span class="text-red-400 text-4xl block bottom-5 left-14">
              روز ها/هفته</span
            >
          </div>
          <div class="absolute w-full">
            <span class="block pr-24 pt-6">
              <img src="../assets/icons8-appointment-98.png" />
            </span>
          </div>
        </div>
      </div>
    </div>
    <!-- صحفه ترجمه  -->
    <div class="w-4/5 h-32 border flex bg-gray-50 mb-11">
      <div class="w-2/4 text-3xl pt-5 pr-12">
        <div class="h-2/4 font-black">ثانیه, ثوابی</div>
        <div class="h-2/4">ثانیه , ثانیه ها</div>
      </div>

      <div class="w-2/4">
        <div class="flex pt-10 felx justify-end pl-10">
          <img class="" src="../assets/icons8-play-48.png" />
          <img src="../assets/icons8-bookmark-48.png" />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts"></script>

<style scoped></style>

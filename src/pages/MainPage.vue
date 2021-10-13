<template>
  <div>
    <header
      class="
        p-4
        pb-5
        border-b
        bg-white
        flex
        items-center
        justify-between
      "
    >
      <!--logo-Translite -->
      <div class="mb-4 flex items-center justify-between">
        <h1 class="leading-none text-2xl text-gray-darkest">
                           <font-awesome-icon :icon="['fas', 'bars'] " class="text-4xl text-gray-500"/>


        </h1>
      </div>

     <!-- Header -->

      <div class="w-full h-full">
        <span class="block w-full text-center lg:text-5xl  md:text-4xl sm:text-3xl text-2xl h-20 pt-6 text-black font-bold"> دیکشرنی عربی نبراس</span >
         
       
        <div class="block w-full text-center  pt-3 text-gray-400 font-quran tracking-wider 	">
          <span class="lg:text-2xl md:text-xl ">   لهجه  <a class="bg-gray-200 rounded-3xl ">  عراقی </a> <span class="pr-2">و</span>  لهجه   <a class="bg-gray-200 rounded-2xl"> خلیجی </a> 
            </span>
        </div>
      </div>
      <!--Div-menu-con -->
      <div>
        <div>
          <a class="py-2"><img src="../assets/img/ir.nebrasar-e425bdd1-f240-4a40-8807-c647c0713e0d_128x128 (1).png" alt=""></a>
        </div>
      </div>
    </header>

    <div class="bg-gray-100 " >
      <!--search-input -->
      <div class="w-full  pt-4 relative h-36">
       <form action="get" class=" h-12 flex  mb-11 mr-12 ml-10 ">
        <input 
          type="text"
          class= " lg:text-5xl  md:text-4xl sm:text-3xl text-2xl  p-2 h- h-32 border rounded-full w-full bg-white focus:shadow-inner  pr-10 " 
          placeholder="جستجو کنید..."
          
        />
                            <font-awesome-icon :icon="['fas','search'] " class="absolute  text-5xl text-gray-400 left-20 top-12 " />

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
          pb-10
        "
      >
        <div class="w-60 mt-7 mr-5 h-56 border drop-shadow-md rounded-4xl bg-white font-quran">
          <div class="absolute bottom-5 w-full">
            <!-- Cod For Responsive lg:text-4xl  md:text-4xl sm:text-3xl text-3xl -->
            <span class="text-black  text-4xl  block bottom-5 left-14 pb-5 font-bold">
                    نشان شده ها
              </span>
          </div>
          <div class="absolute w-full">
              <span class="block pt-4">
                <!-- Cod For Responsive lg:text-8xl  md:text-8xl sm:text-7xl text-7xl  -->
      <font-awesome-icon c :icon="['fas','bookmark'] " class="text-green-500 text-8xl  pr-2  " />

            </span>
          </div>
        </div>

          <div class="w-60 mt-7 mr-5 h-56 border drop-shadow-md rounded-4xl bg-white font-quran">
          <div class="absolute bottom-5 w-full">
            <span class="text-black text-4xl block bottom-5 left-14 pb-1 font-bold ">
              اصطلاحات خلیجی
              </span>
          </div>
          <div class="absolute w-full">
              <span class="block  pt-4">
<font-awesome-icon :icon="['fas','flag']" class=" text-8xl pr-2"/>
            </span>
          </div>
        </div>

          <div class="w-60 mt-7 mr-5 h-56 border drop-shadow-md rounded-4xl bg-white font-quran">
          <div class="absolute bottom-5 w-full">
            <span class="text-black text-4xl block bottom-5 left-14 pb-5 font-bold">
                لواز شخصی
              </span>
          </div>
          <div class="absolute w-full">
              <span class="block  pt-4">
      <font-awesome-icon :icon="['fas', 'tshirt'] " class="text-8xl pr-2 text-pink" />
            </span>
          </div>
        </div>

          <div class="w-60 mt-7 mr-5 h-56 border drop-shadow-md rounded-4xl bg-white font-quran">
          <div class="absolute bottom-5 w-full">
            <span class="text-black text-4xl block bottom-5 left-14 pb-2 font-bold">
                زمان /روزهای هفته
              </span>
          </div>
          <div class="absolute w-full">
              <span class="block  pt-4">
      <font-awesome-icon :icon="['fas', 'clock'] "  class="text-8xl pr-2 text-green"/>
            </span>
          </div>
        </div> 
        
         <div class="w-60 mt-7 mr-5 h-56 border drop-shadow-md rounded-4xl bg-white font-quran">
          <div class="absolute bottom-5 w-full">
            <span class="text-black text-4xl block bottom-5 left-14 pb-5 font-bold">
                لوازم منزل
              </span>
          </div>
          <div class="absolute w-full">
              <span class="block  pt-4">
      <font-awesome-icon :icon="['fas', 'couch']" class="text-8xl text-blue " />
            </span>
          </div>
        </div>  

        <div class="w-60 mt-7 mr-5 h-56 border drop-shadow-md rounded-4xl bg-white font-quran">
          <div class="absolute bottom-5 w-full">
            <span class="text-black text-4xl block bottom-5 left-14 pb-5 font-bold">
                رنگ ها
              </span>
          </div>
          <div class="absolute w-full">
              <span class="block  pt-4">
      <font-awesome-icon :icon="['fas', 'palette'] " class="text-8xl text-blue"/>
            </span>
          </div>
        </div> 

         <div class="w-60 mt-7 mr-5 h-56 border drop-shadow-md rounded-4xl bg-white font-quran">
          <div class="absolute bottom-5 w-full">
            <span class="text-black text-4xl block bottom-5 left-14 pb-5 font-bold">
                پزشکی
              </span>
          </div>
          <div class="absolute w-full">
              <span class="block  pt-4">
       <font-awesome-icon :icon="['fas', 'briefcase-medical']" class="text-8xl text-pezeshki" />
            </span>
          </div>
        </div>
        <div class="w-60 mt-7 mr-5 h-56 border drop-shadow-md rounded-4xl bg-white font-quran">
          <div class="absolute bottom-5 w-full">
            <span class="text-black text-4xl block bottom-5 left-14 font-bold">
                جملات پرکاربردی پزشکی
              </span>
          </div>
          <div class="absolute w-full">
              <span class="block  pt-4">
      <font-awesome-icon :icon="['fas', 'user-nurse'] " class="text-8xl text-yellow" />
            </span>
          </div>
        </div>
        <div class="w-60 mt-7 mr-5 h-56 border drop-shadow-md rounded-4xl bg-white font-quran">
          <div class="absolute bottom-5 w-full">
            <span class="text-black text-4xl block bottom-5 left-14 pb-5 font-bold">
                ادات سوال
              </span>
          </div>
          <div class="absolute w-full">
              <span class="block  pt-4">
      <font-awesome-icon :icon="['fas', 'question']" class="text-8xl text-yellow" />
            </span>
          </div>
        </div>
        <div class="w-60 mt-7 mr-5 h-56 border drop-shadow-md rounded-4xl bg-white font-quran">
          <div class="absolute bottom-5 w-full">
            <span class="text-black text-4xl block bottom-5 left-14 pb-5 font-bold">
                فعل ماضی
              </span>
          </div>
          <div class="absolute w-full">
              <span class="block  pt-4">
            </span>
          </div>
        </div>
        <div class="w-60 mt-7 mr-5 h-56 border drop-shadow-md rounded-4xl bg-white font-quran">
          <div class="absolute bottom-5 w-full">
            <span class="text-black text-4xl block bottom-5 left-14 pb-5 font-bold">
                فعل مضارع
              </span>
          </div>
          <div class="absolute w-full">
              <span class="block  pt-4">


            </span>
          </div>
        </div>
        <div class="w-60 mt-7 mr-5 h-56 border drop-shadow-md rounded-4xl bg-white font-quran">
          <div class="absolute bottom-5 w-full">
            <span class="text-black text-4xl block bottom-5 left-14 pb-5 font-bold">
                فغل امر
              </span>
          </div>
          <div class="absolute w-full">
              <span class="block  pt-4">
            </span>
          </div>
        </div>

      </div>
        <!-- Dokme Tamrin & Azmon -->
        <div class="w-full flex h-32">      
       <div class="w-2/4 border rounded-t-4xl bg-yellow text-center"> <p class="pt-9 text-4xl">
          <font-awesome-icon :icon="['fas', 'pen'] " class="text-3xl text-gray-600 " />
         تمرین لغات 
         </p> 
            
 </div>
      <div class="w-2/4 border rounded-t-4xl bg-yellow text-center mr-9"> <p class="pt-9 text-4xl">
        <font-awesome-icon :icon="['fas', 'question'] " class="text-3xl text-gray-600 " />
        آزمون مرحله ای </p></div>
       </div>
    </div>
    <!-- صحفه ترجمه  -->
    <div class="w-4/5 h-32 border flex bg-gray-50 mb-11">
      <div class="w-2/4 text-3xl pt-5 pr-12">
        <div class="h-2/4 font-black">ثانیه, ثوابی</div>
        <div class="h-2/4 text-gray-600">ثانیه , ثانیه ها</div>
      </div>

      <div class="w-2/4">
        <div class="flex pt-10 felx justify-end pl-10">
                <i class="pl-10">  <font-awesome-icon :icon="['fas', 'play'] " class="text-3xl text-gray-600 " />
</i>
    <i>             <font-awesome-icon :icon="['fas', 'bookmark'] " class="text-3xl text-gray-600 " />
</i>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts"></script>

<style scoped></style>

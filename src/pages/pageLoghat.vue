<script setup lang="ts">
import WordComponent from "../components/WordComponent.vue";
let obj ={
    category:'دسته بندی',
    word:'کلمه',
    translate:'ترجمه',
    sample:'مثال'
}
</script>
<template >
<div>
    <div class="border-b p-3 flex items-center ">
        <font-awesome-icon
              :icon="['fas', 'arrow-right']"
              class="text-sm text-gray-500 "
            />
        <h2 class="font-bold text-sm pr-5 ">    اصطلاحات خلیجی   </h2>
          </div>
                      <WordComponent :obj='obj' v-for="item in 40" :key="item">   </WordComponent>

        <div class="bg-yellow w-full h-11 rounded-t-2xl flex justify-center pt-3" >
                 <font-awesome-icon
              :icon="['fas', 'pen']"
              class="text-sm text-gray-600"
            />

           <p class="text-sm text-center pr-2 ">  تمرین لغات اصطلاحات خلیجی</p>

        </div>
</div>    
</template>



<style scoped>


</style>
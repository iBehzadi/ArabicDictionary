<script setup lang="ts">
import loghat from "@/components/loghat.vue";

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
            <loghat>


            </loghat>

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
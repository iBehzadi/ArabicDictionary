<script setup lang="ts">
const emit = defineEmits(['request']);
function getRequest() {
     emit('request');
}
</script>

<template>
     <div class="w-full h-auto mt-2 rounded-3xl border bg-white m-2">
          <div class="flex pt-5">
               <font-awesome-icon :icon="['fas', 'search']" class="text-green-500 text-4xl pr-2" />
               <span
                    class="text-xs text-gray-400 text-center pr-3"
               >این لغت وجود ندارد,در صورتی ک درخواست ترجمه این لغت در نسخه های بعد را دارید, روی دکمه زیر کلیک کنید</span>
          </div>
          <button
               @click="getRequest"
               class="border w-44 h-10 m-4 rounded-lg bg-yellow"
          >درخواست ترجمه</button>
     </div>
</template>

<style scoped>
</style>
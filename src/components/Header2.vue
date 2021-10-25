<script setup lang="ts">
const emit = defineEmits(['back']);
function back() {
    emit('back');
}

</script>
<template>
  <div class="flex justify-self-start bg-white text-right p-2 shadow-md drop-shadow-sm items-center">
    <button class="w-10 h-10 flex-center">
      <font-awesome-icon @click="back"
        class="text-lg text-gray-600 self-center font-thin"
        :icon="['fas', 'arrow-right']"
      />
    </button>
    <span class="mr-2 text-black text-base font-black">
      <slot name="title"></slot>
    </span>
  </div>
</template>
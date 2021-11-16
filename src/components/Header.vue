<script setup lang="ts">
const emit = defineEmits(['back']);
function back() {
  emit('back');
}

</script>
<template>
  <div
    class="header flex justify-self-start bg-white text-right p-2 shadow-md drop-shadow-sm items-center"
  >
    <button
      aria-label="Back"
      @click="back"
      class="header__back-button w-8 h-8 md:w-10 md:h-10 flex-center"
    >
      <font-awesome-icon
        class="text-lg text-gray-600 self-center font-thin"
        :icon="['fas', 'arrow-right']"
      />
    </button>
    <span class="header__title mr-2 text-black text-base font-black">
      <slot name="title"></slot>
    </span>
  </div>
</template>
<script setup lang="ts">
const emit = defineEmits(['back']);
function back() {
    emit('back');
}

</script>
<template>
  <div class="flex justify-self-start bg-white text-right p-4 shadow-md drop-shadow-sm">
    <font-awesome-icon @click="back"
      class="text-lg text-gray-600 self-center font-thin"
      :icon="['fas', 'arrow-right']"
    />
    <label class="mr-4 text-black text-base font-black">
      <slot name="title"></slot>
    </label>
  </div>
</template>
<script setup lang="ts">

const props = defineProps<{
  error: boolean
}>();

const emit = defineEmits(['reload']);
function reloadApi() {
  emit('reload');
}
</script>

<template>
  <div
    class="loading flex justify-center items-center fixed top-0 left-0 w-screen h-screen bg-gray-800 z-10 bg-opacity-30"
  >
    <div class="square bg-loadingGreen w-5 h-5 mr-3"></div>
    <div class="square bg-loadingBlue w-5 h-5 mr-3"></div>
    <div class="square bg-loadingYellow w-5 h-5 mr-3"></div>
    <div class="square bg-loadingOrange w-5 h-5 mr-3"></div>
    <div class="h-11 fixed bottom-28">
      <button
        v-if="props.error"
        @click="reloadApi()"
        class="loading__retry-button flex-none flex items-center justify-center bg-uniqColor opacity-70 w-20 h-9 rounded-md text-black"
        aria-label="Reload"
      >تلاش مجدد</button>
    </div>
  </div>
</template>

<style scoped>
.square:first-child {
  animation: left 1s infinite;
}
.square:nth-child(4) {
  animation: right 1s infinite 0.5s;
}
@keyframes left {
  40% {
    transform: translateX(60px);
  }
  50% {
    transform: translateX(0);
  }
}
@keyframes right {
  40% {
    transform: translateX(-60px);
  }
  50% {
    transform: translateX(0);
  }
}
</style>

<script setup lang="ts">

const props = defineProps<{
  error: boolean
}>();

const emit = defineEmits(['reload']);
function reloadingApi() {
  emit('reload');
}
</script>

<template>
  <div
    id="test"
    class="flex justify-center items-center fixed top-0 left-0 w-screen h-screen bg-gray-800 z-10 bg-opacity-30"
  >
    <div class="test"></div>

    <div class="test"></div>

    <div class="test"></div>

    <div class="test"></div>

    <div class="test"></div>

    <div class="h-11 fixed bottom-28">
      <button
        v-if="props.error"
        @click="reloadingApi()"
        class="flex-none flex items-center justify-center bg-gray-500 opacity-70 w-20 h-9 rounded-md text-gray-100"
        type="button"
        aria-label="like"
      >تلاش مجدد</button>
    </div>
  </div>
</template>

<style scoped lang="scss">
.test {
  width: 20px;
  height: 20px;
  margin-right: 10px;
}
.test:nth-child(1) {
  background-color: #8cc271;
}
.test:nth-child(2) {
  background-color: #69beeb;
}
.test:nth-child(3) {
  background-color: #f5aa39;
}
.test:nth-child(4) {
  background-color: #e9643b;
}
.test:first-child {
  animation: left 1s infinite;
}
.test:nth-child(4) {
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

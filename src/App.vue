

<script setup lang="ts">
import { ref } from "@vue/reactivity";
import Modal from "./components/modalView.vue"

let isModalVisible = ref(false)

</script>

<template>
  <button type="button" class="btn" @click="isModalVisible = true">منوی مودال</button>

  <Modal v-show="isModalVisible" @close="isModalVisible = false">
    <template v-slot:body>بدنه مودال</template>
  </Modal>
</template>


<style>
.btn {
  border: 1px solid blue;
  border-radius: 10px;
  padding: 5px;
}
.modalview {
  width: 100%;
  height: 800px;
  border: 1px solid black;
}
</style>

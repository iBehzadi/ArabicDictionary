<template>
  <div>
    <modal-view>
      <template v-slot:body1
        >برای استفاده از این قسمت باید نرم افزار را به نسخه طلایی ارتقاء
        دهید</template
      >
      <template v-slot:body2
        >با دریافت نسخه طلایی نرم افزار, امکان دسترسی به هزاران لغت در دسته بندی
        های مختلف را خاهسد داشت.</template
      >
      <template v-slot:button>ارتقا‌ء به نسخه طایی</template>
    </modal-view>
  </div>
</template>
<script setup lang="ts">
import modalView from "./modalView.vue";
name: "PaidVersion";
component: {
  modalView;
}
</script>
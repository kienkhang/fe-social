<template lang="pug">
//- <div class="text-center">
//-   <h2 class="text-lg font-bold text-green-600">Count component</h2>
//-   <div class="p-2 border rounded-md">
//-     <div class="text-xl font-medium text-yellow-600 count-value">
//-       {{ count }}
//-     </div>
//-     <div class="flex items-center justify-center gap-2 mt-2">
//-       <button class="p-2 text-white bg-green-500 border rounded-md increase" @click="inc()">
//-         Increase
//-       </button>
//-       <button class="p-2 text-white bg-red-500 border rounded-md decrease" @click="dec()">
//-         Decrease
//-       </button>
//-     </div>
//-   </div>
//- </div>
.text-center
  h2.text-lg.font-bold.text-green-500 Count component
  .p-2.border.rounded-md
    div(class="text-xl font-medium text-yellow-600 count-value") {{ count }}
    .flex.items-center.justify-center.gap-2.mt-2
      button(class="p-2 text-white bg-green-500 border rounded-md increase" @click="inc()") Increase
      button(class="p-2 text-white bg-red-500 border rounded-md increase" @click="dec()") Decrease

</template>

<script setup lang="ts">
import { ref } from "vue";

const count = ref(0);

function inc() {
  count.value++;
}

function dec() {
  count.value--;
}
</script>

<style scoped></style>

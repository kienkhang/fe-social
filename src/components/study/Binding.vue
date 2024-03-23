<template>
  <div class="text-center">
    <h2 class="text-lg font-bold text-green-600">Binding component</h2>
    <div class="p-2 space-y-2 text-base border rounded-md">
      <div class="p-2 naruto">Static binding</div>
      <div :class="{ 'sasuke p-2': isSasuke }">Dynamic binding (Sasuke)</div>
      <div :class="['italic p-2', { 'bg-blue-500 text-white': isSasuke }]">Static + Dynamic class</div>
      <div class='p-2 mx-auto border-2 border-yellow-600 w-max'>
        <a v-bind="objectBinding">Goto google</a>
      </div>
      <button class="p-2 text-white bg-green-500 border rounded-md increase" @click="isSasuke = !isSasuke">
        toggle
      </button>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
const isSasuke = ref(false)


const objectBinding = {
  id: 'haha',
  class: 'huhu hoho text-green-500',
  href: 'https://www.google.com/?gws_rd=ssl',
  target: "_blank",
  rel: "noopener noreferrer"
}
</script>

<style scoped>
.naruto {
  color: yellow;
  background: #000;
}

.sasuke {
  color: aqua;
  background: #000;
}
</style>

<template>
  <div class="text-center">
    <h2 class="text-lg font-bold text-green-600">Conditional rendering</h2>
    <div class="p-2 space-y-2 border rounded-md">
      <div class="flex items-center border border-black">
        <button :class="['p-2 border border-black', { 'bg-green-500 text-white': tab === 1 }]" @click='tab = 1'>Tab
          1</button>
        <button :class="['p-2 border border-black', { 'bg-green-500 text-white': tab === 2 }]" @click='tab = 2'>Tab
          2</button>
        <button :class="['p-2 border border-black', { 'bg-green-500 text-white': tab === 3 }]" @click='tab = 3'>Tab
          3</button>
      </div>
      <h2 class="text-lg font-bold">Tôi là điều kiện render cứng (các tab không active sẽ không access vào DOM)</h2>
      <div class="border border-purple-500 rounded-lg content">
        <p v-if='tab === 1'>Tôi là tab 1</p>
        <p v-if='tab === 2'>Tôi là tab 2</p>
        <p v-if='tab === 3'>Tôi là tab 3</p>
      </div>

      <h2 class="text-lg font-bold">điều kiện render mềm (các tab không active sẽ display:none)</h2>
      <div class="border border-purple-500 rounded-lg content">
        <p v-show='tab === 1'>Tab 1 render mềm</p>
        <p v-show='tab === 2'>Tab 2 render mềm</p>
        <p v-show='tab === 3'>Tab 3 render mềm</p>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";

const tab = ref(1)

</script>

<style scoped></style>

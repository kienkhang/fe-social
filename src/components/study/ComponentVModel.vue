<template lang="pug">
div
  h2.count.text-lg.font-bold {{ modelValue }}
  input.p-2.border(type='number' placeholder="Nhap so" v-model='input')
  button.p-2.bg-blue-500(@click='updateCount') Update count

</template>

<script setup lang="ts">
import { ref } from 'vue';



const props = defineProps<{
  modelValue: number
}>()


const emit = defineEmits<{
  (e: 'update:modelValue', value: number): void
}>()

const input = ref(0)

function updateCount() {
  emit('update:modelValue', input.value)
}
</script>

<style scoped></style>

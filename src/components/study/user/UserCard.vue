`<template>
  <div class="p-3 border border-black rounded-lg">
    <div class="font-bold">Name: <span class='font-normal'> {{ user.name }}</span></div>
    <div class="font-bold">Username: <span class='font-normal'> {{ user.username }}</span></div>
    <div class="font-bold">Email: <span class='font-normal'> {{ user.email }}</span></div>
    <div class="font-bold">Address: <span class='font-normal'> {{ address }}</span></div>
  </div>

</template>

<script setup lang="ts">
import type { User } from '@/types/user'
import { computed } from 'vue';
const props = defineProps<{
  user: User
}>()

const address = computed(() => {
  return [props.user.address.city, props.user.address.suite, props.user.address.street].join(', ')
})
</script>

<style scoped></style>
`
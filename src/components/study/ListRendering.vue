<template lang="pug">
//- <div class="text-center">
//-   <h2 class="text-lg font-bold text-green-600">List rendering</h2>
//-   <div class="p-2 space-y-2 border rounded-md">
//-     <div class="space-y-2 rounded-lg content">
//-       <UserCard v-for='user in list' :user='user' :key='user.id'></UserCard>
//-     </div>
//-   </div>
//- </div>
.text-center
  h2(class="text-lg font-bold text-green-600") List rendering
  .p-2.space-y-2.border.rounded-md
    .space-y-2.rounded-lg.content
      UserCard(v-for='user in list' :user='user' :key='user.id')
</template>

<script setup lang="ts">
import { onMounted, ref } from "vue";
import axios from 'axios'

import type { User } from '@/types/user'

import UserCard from './user/UserCard.vue'

const list = ref<User[]>([])

function getList() {
  axios.get('https://jsonplaceholder.typicode.com/users').then((res) => {
    list.value = res.data
  })
}

onMounted(() => {
  getList()
})

</script>

<style scoped></style>

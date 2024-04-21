<template lang="pug">
.flex
  div.mr-9(class='w-[280px] h-screen bg-white shadow-xl')
    .flex.flex-col.items-center.space-y-4.mt-6
      router-link.font-bold.text-base(to='/') Home
      router-link.font-bold.text-base(to='/wallet') Wallet
      router-link.font-bold.text-base(to='/wallealskdjlaksdj') 404
  div.flex-1.overflow-hidden.mt-14
    router-view

</template>

<script setup lang="ts"></script>

<style scoped></style>

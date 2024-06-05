<template lang="pug">
div.text-2xl.font-bold Dashboard Page
  .flex.items-center.gap-3
    AppIcon.text-red-500.w-10(:icon='RingIcon')
    AppIcon.text-green-500.h-10.w-10(:icon='GGIcon' mode='bg')

</template>

<script setup lang="ts">
import AppIcon from "@/components/shared/AppIcon.vue";
import RingIcon from "@/assets/ring.svg";
import GGIcon from "@/assets/google.svg";
</script>

<style scoped></style>

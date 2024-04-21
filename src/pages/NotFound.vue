<template lang="pug">
div.flex.flex-col.items-center.justify-center.h-screen
  span.text-3xl.font-bold  404 Page
  button.rounded-md.border.border-green-500.mt-4.py-2.px-6(@click='backHome') Back
  button.rounded-md.border.border-green-500.mt-4.py-2.px-6(@click='backPrevious') Back Previous

</template>

<script setup lang="ts">
import { useRouter } from "vue-router";

const router = useRouter();

function backPrevious() {
  router.back();
}

function backHome() {
  router.push("/");
}
</script>

<style scoped></style>

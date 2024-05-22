<template lang="pug">
div
  | Event Register

</template>

<script setup lang="ts">
const props = defineProps<{
  event: {
    id: string;
    name: string;
    date: string;
  };
}>();
</script>

<style scoped></style>

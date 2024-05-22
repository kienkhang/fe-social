<template lang="pug">
router-link.border.rounded-lg.mx-auto.p-3.max-w-96.w-full(:to='{ name:"EventDetail", params: { id: event.id } }')
  h2.font-bold.text-xl {{ event.name }}
  h3 {{ event.date }}
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

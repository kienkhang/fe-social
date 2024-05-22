<template lang="pug">
div
  .name-event.text-2xl.font-medium.text-purple-600 Event: {{ event.name }}
  .name-event.text-xl.text-orange-700 Date: {{ event.date }}  
  //- EventEdit
  //- EventRegister

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

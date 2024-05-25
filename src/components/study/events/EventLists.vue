<template lang="pug">
.flex.flex-col.gap-4
  EventListsItem(v-for='event in lists' :key='event.id' :event='event')


</template>

<script setup lang="ts">
import { onMounted } from "vue";

import EventListsItem from "./EventListsItem.vue";
import { useEventStore } from "@/composables/useEvent";
import { storeToRefs } from "pinia";

const { lists } = storeToRefs(useEventStore());
const { getEventList } = useEventStore();

onMounted(() => {
  getEventList();
});
</script>

<style scoped></style>

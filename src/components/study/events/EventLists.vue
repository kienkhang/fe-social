<template lang="pug">
.flex.flex-col.gap-4
  EventListsItem(v-for='event in lists' :key='event.id' :event='event')


</template>

<script setup lang="ts">
import { onMounted, ref } from "vue";
import { getEvents } from "@/apis/events";
import EventListsItem from "./EventListsItem.vue";

const lists = ref<{ id: string; name: string; date: string }[]>([]);
async function getEventList() {
  try {
    const res = await getEvents();

    lists.value = res;
    console.log("🐣🦆 ~ getEventList ~ res:", res);
  } catch (error) {}
}

onMounted(() => {
  getEventList();
});
</script>

<style scoped></style>

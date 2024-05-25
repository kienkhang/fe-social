<template lang="pug">
div
  h3.title.font-bold {{ event?.name }}
  .tab.flex.items-center.gap-4(v-if='event')
    router-link.text-green-500.underline(:to='{ name:"events-id-index", params: { id: event.id } }') Detail
    router-link.text-green-500.underline(:to='{ name:"events-id-register", params: { id: event.id } }') Register
    router-link.text-green-500.underline(:to='{ name:"events-id-edit", params: { id: event.id } }') Edit

  router-view(:event='event' :key='event.id' v-if='event')

</template>

<script setup lang="ts">
import { computed, onMounted, ref } from "vue";
import { useRoute } from "vue-router";

import { getEventById } from "@/apis/events";

const route = useRoute();

const eventId = computed(() => route.params.id as string);

const event = ref<{
  id: string;
  name: string;
  date: string;
}>();

async function fetchEvent() {
  try {
    const res = await getEventById(eventId.value);
    event.value = res;
  } catch (error) {}
}

onMounted(() => {
  fetchEvent();
});
</script>

<style scoped></style>

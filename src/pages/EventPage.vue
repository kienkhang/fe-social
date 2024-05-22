<template lang="pug">
div 
  h2 Event Pages

  .border.p-3
    div.text-red-400.font-bold CREATE FORM
    form.flex.flex-col.gap-4(@submit.prevent='onSubmit')
      .flex.items-center.gap-2
        label Event name
        input.border(placeholder="Enter event name" v-model='name')

      .flex.items-center.gap-2
        label Date
        input.border(type="date" v-model='date')
      
      button.bg-green-500.text-white(type='submit') Create event
  
  .border.p-3.space-y-4
    div.text-red-400.font-bold LIST EVENTS 
    EventLists

</template>

<script setup lang="ts">
import { ref } from "vue";
import { createEvent } from "@/apis/events";
import EventLists from "@/components/study/events/EventLists.vue";

const name = ref("");
const date = ref(null);

async function onSubmit() {
  const res = await createEvent({
    name: name.value,
    date: date.value,
  });
  console.log("res", res);
}
</script>

<style scoped></style>

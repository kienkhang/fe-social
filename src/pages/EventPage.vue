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
    div(ref='endpoint' class='h-[1px] w-full')

</template>

<script setup lang="ts">
import { ref } from "vue";
import { createEvent } from "@/apis/events";
import EventLists from "@/components/study/events/EventLists.vue";
import { useEventStore } from "@/composables/useEvent";
import { storeToRefs } from "pinia";
import { useIntersectionObserver } from "@vueuse/core";

const name = ref("");
const date = ref(null);

const { lists } = storeToRefs(useEventStore());

async function onSubmit() {
  const res = await createEvent({
    name: name.value,
    date: date.value,
  });

  lists.value.push(res);
  console.log("res", res);
}

// Auto load more with intersection observer
const endpoint = ref(null);
useIntersectionObserver(endpoint, ([{ isIntersecting }]) => {
  if (isIntersecting) {
    let cloneArray = [...lists.value];
    lists.value.push(...cloneArray);
  }
});
</script>

<style scoped></style>

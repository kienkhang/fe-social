import { defineStore } from "pinia";
import { ref } from "vue";
import { getEvents } from "@/apis/events";

export const useEventStore = defineStore("events", () => {
  const lists = ref<{ id: string; name: string; date: string }[]>([]);

  async function getEventList() {
    try {
      const res = await getEvents();
      lists.value = res;
      console.log("🐣🦆 ~ getEventList ~ res:", res);
    } catch (error) {}
  }

  return {
    lists,
    getEventList,
  };
});

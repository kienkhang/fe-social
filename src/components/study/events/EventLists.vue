<template lang="pug">
.flex.flex-col.gap-4.huhu
  DynamicScroller(
    :items="lists"
    :min-item-size="200"
    class="h-full"
    v-slot="{ item, index, active }"
    page-mode
  )
    DynamicScrollerItem(
      :item="item"
      :active="active"
      :size-dependencies="[item.name, item.date]"
      :data-index="index"
    )
      EventListsItem.mt-4(:key='item.id' :event='item')


</template>

<script setup lang="ts">
import { computed, onMounted } from "vue";
import { map } from "lodash-es";

import EventListsItem from "./EventListsItem.vue";
import { useEventStore } from "@/composables/useEvent";
import { storeToRefs } from "pinia";

const { lists } = storeToRefs(useEventStore());
const { getEventList } = useEventStore();

const clone = computed(() => map(lists.value));

onMounted(() => {
  getEventList();
});
</script>

<style scoped>
.huhu {
  color: red;
}
</style>

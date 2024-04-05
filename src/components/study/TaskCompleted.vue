<template lang="pug">
    .flex.flex-col.gap-4
        p(class="text-lg text-white") Tasks completed - {{listTaskItem?.length}}
        .flex.flex-col.gap-2(class=" task overflow-y-scroll scrollbar-hide   h-[400px]" )
            TaskItem(v-for="taskItem in listTaskItem"  :taskItem="taskItem" @handleCheckTask="handleCheckTask" :key="taskItem.id" :check="true")
</template>
<script setup lang="ts">
import axios from "axios";
import TaskItem from "./TaskItem.vue";
import type { taskItem } from "@/types/taskItem";

const props = defineProps<{
  listTaskItem: taskItem[];
}>();

const emit = defineEmits<{
  (e: "checkTask", id: number, value: boolean): void;
}>();
function handleCheckTask(id: number, value: boolean) {
  emit("checkTask", id, value);
}
</script>
<style scoped></style>

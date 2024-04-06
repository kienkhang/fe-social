<template lang="pug">
    .flex.flex-col.gap-4
        p(class="text-lg text-white") Tasks to do - {{listTaskItem?.length}}
        .flex.flex-col.gap-2(class="task overflow-y-scroll h-[400px] scrollbar-hide" )
            TaskItem(v-for="taskItem in listTaskItem" :isUpdated="isUpdated" :check="false" @handleGetTaskId="getTaskId"  @handleDeleteTask="handleDelete" @handleCheckTask="handleCheckTask" :taskItem="taskItem" :key="taskItem.id")
</template>
<script setup lang="ts">
import axios from "axios";
import TaskItem from "./TaskItem.vue";
import { onMounted, ref } from "vue";
import type { taskItem } from "@/types/taskItem";

const props = defineProps<{
  listTaskItem: taskItem[];
  isUpdated: boolean;
}>();
const emit = defineEmits<{
  (e: "deleteTask", value: number): void;
  (e: "checkTask", id: number, value: boolean): void;
  (e: "getTaskId", id: number): void;
}>();
function handleDelete(id: number) {
  emit("deleteTask", id);
}
function handleCheckTask(id: number, value: boolean) {
  emit("checkTask", id, value);
}
function getTaskId(id: number) {
  emit("getTaskId", id);
}
</script>
<style scoped></style>

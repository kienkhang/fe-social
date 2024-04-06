<template lang="pug">
div.flex.flex-row.justify-between.items-center(:class="{ 'cursor-pointer hover:opacity-50': check === false && isUpdated===true, 'bg-[#a855f7] px-3 py-2 rounded-2xl': true }" @click="handleGetTaskId")
    p(class="text-base text-white") {{todoItem.title}}
    .flex.flex-row.gap-2        
      button(v-if="check===true" class="p-2 text-white bg-red-500 border rounded-md" @click="handleUnCompleteTask") undo  
      button(v-if="check===false" class="p-2 text-white bg-green-500 border rounded-md" @click="handleCompleteTask") done
      button(v-if="check===false" class="p-2 text-white bg-red-500 border rounded-md" @click="handleDeleteTask") Delete
</template>
<script setup lang="ts">
import { todo } from "@/types/todoItem";

const props = defineProps<{
  todoItem: todo;
  check?: boolean;
  isUpdated?: boolean;
}>();
const emit = defineEmits<{
  (e: "handleDeleteTask", value: number): void;
  (e: "handleCheckTask", id: number, value: boolean): void;
  (e: "handleGetTaskId", id: number): void;
}>();
function handleDeleteTask() {
  emit("handleDeleteTask", props.todoItem.id);
}
function handleCompleteTask() {
  emit("handleCheckTask", props.todoItem.id, true);
}
function handleUnCompleteTask() {
  emit("handleCheckTask", props.todoItem.id, false);
}
function handleGetTaskId() {
  if (props.check === false && props.isUpdated === true) {
    emit("handleGetTaskId", props.todoItem.id);
  }
  return;
}
</script>

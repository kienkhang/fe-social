<template lang="pug">
.flex.flex-row.justify-between.items-center(:class="{ 'cursor-pointer hover:opacity-50': type === false && setRefresh===true, 'bg-[#b6b1bb] px-3 py-2 rounded-2xl': true }" )
    p(class="text-base text-white") {{todoItem.title}}
    .flex.flex-row.gap-2
      button(v-if="type===false" class="p-1 text-green-600 border border-green-600 rounded-md hover:bg-green-600 hover:text-white border-400" @click="handleCompletedTodo") Done        
      button(v-if="type===true" class="p-1 text-red-500 border border-red-500 rounded-md hover:bg-red-500 hover:text-white border-400" @click="handleUncompleteTodo") Undo   
      button(v-if="type===false" class="p-1 text-red-500 border border-red-500 rounded-md hover:bg-red-500 hover:text-white border-400" @click="handleDeleteTodo") Delete
    
</template>
<script setup lang="ts">
import type { todoItem } from "@/types/todoItem";
const props = defineProps<{
  todoItem: todoItem;
  type?: boolean;
  setRefresh?: boolean;
}>();
const emit = defineEmits<{
  (e: "handleDeleteTodo", value: number): void;
  (e: "handleCompletedTodo", id: number, value: boolean): void;
  (e: "handleUncompleteTodo", id: number, value: boolean): void;
  (e: "handleRefresh"): void;
}>();
function handleCompletedTodo() {
  emit("handleCompletedTodo", props.todoItem.id, true);
  handleRefresh();
}
function handleUncompleteTodo() {
  emit("handleUncompleteTodo", props.todoItem.id, false);
  handleRefresh();
}
function handleDeleteTodo() {
  emit("handleDeleteTodo", props.todoItem.id);
  handleRefresh();
}

function handleRefresh() {
  emit("handleRefresh");
}
</script>
<style scoped></style>

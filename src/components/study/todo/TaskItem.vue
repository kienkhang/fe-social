<template lang="pug">
div.task-item.flex.items-center.justify-between.border.border-gray-300.p-4.mb-4
    div.content.flex-grow
      p.line-clamp-2.text-left.text-gray-800 {{ todo.name }}
    div.actions.flex.items-center.space-x-4
      button.edit-btn.px-3.py-1.bg-blue-500.text-white.font-semibold.rounded-md(@click="editTask(todo)" :class="{ 'hidden': props.isDone }") Edit
      button.delete-btn.px-3.py-1.bg-red-500.text-white.font-semibold.rounded-md(@click="deleteTask(todo.id)" :class="{ 'hidden': props.isDone }") Delete
      button.complete-btn.px-3.py-1.bg-green-500.text-white.font-semibold.rounded-md(@click="updateCompleteTask(todo.id)" :class="{ 'hidden': props.isDone }" ) Complete
</template>

<script setup lang="ts">
import { defineProps } from "vue";

const props = defineProps<{
  todo: Object;
  isDone: boolean;
}>();

const emit = defineEmits(["delete", "edit", "updateComplete"]);

function editTask(todo) {
  emit("edit", todo);
}

function deleteTask(todoId: string | number) {
  emit("delete", todoId);
}

function updateCompleteTask(todoId: string | number) {
  emit("updateComplete", todoId);
}
</script>

<style scoped>
.line-clamp-2 {
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 2;
  overflow: hidden;
}
</style>

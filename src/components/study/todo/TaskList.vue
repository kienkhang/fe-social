<template lang="pug">
.flex.flex-col.gap-4
    h2.font-bold.text-xl.text-white {{ props.isDone ? 'Done' : 'Tasks to do' }}
    div(class="max-h-[500px] overflow-y-scroll")
      TaskItem(v-for="todo in props.listTodos" :key="todo.id" :todo="todo" @delete="handleDelete" @edit="handleEdit" @updateComplete="handleComplete" :isDone="props.isDone")
</template>

<script setup lang="ts">
import { defineProps, defineEmits } from "vue";
import type { Todo } from "@/types/todo";
import TaskItem from "./TaskItem.vue";

const props = defineProps<{
  listTodos: Todo[];
  // deleteTask: Function;
  // completeTask: Function;
  isDone: boolean;
}>();

// const emit = defineEmits(["edit"]);
const emit = defineEmits<{
  (e: "edit", todo: Todo): void;
  (e: "delete", todoId: string | number): void;
  (e: "complete", todoId: string | number): void;
}>();

function handleDelete(todoId: string | number) {
  // props.deleteTask(todoId);
  emit("delete", todoId);
}

function handleEdit(todo: Todo) {
  emit("edit", todo);
}

function handleComplete(todoId: string | number) {
  // props.completeTask(todoId);
  emit("complete", todoId);
}
</script>

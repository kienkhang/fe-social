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
  deleteTask: Function;
  completeTask: Function;
  isDone: boolean;
}>();

const emit = defineEmits(["edit"]);

function handleDelete(todoId: string | number) {
  props.deleteTask(todoId);
}

function handleEdit(todo: Todo) {
  emit("edit", todo);
}

function handleComplete(todoId: string | number) {
  props.completeTask(todoId);
}
</script>

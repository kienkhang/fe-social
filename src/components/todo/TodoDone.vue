<template lang="pug">
.flex.flex-col.gap-4
    p(class="text-lg text-white") Todo Done - {{listTodoItem?.length}}
    .flex.flex-col.gap-2(class=" task scrollbar-hide" )
      TodoItem(v-for="todoItem in listTodoItem" @handleRefresh="refreshTodoList" :todoItem="todoItem" @handleUncompleteTodo="handleUncompleteTodo" :key="todoItem.id" :type="true")
</template>
<script setup lang="ts">
import { getTodos, updateTodoById } from "@/apis/todos";
import TodoItem from "./TodoItem.vue";
import type { todoItem } from "@/types/todoItem";
import { onMounted, ref } from "vue";
const listTodos = ref<todoItem[]>([]);
const props = defineProps<{
  listTodoItem: todoItem[];
}>();

function handleUncompleteTodo(id: number, value: boolean) {
  // Replace 'boolean' with the appropriate type for 'value'
  updateTodoById(id, { isCompleted: value }).then(() => {
    listTodos.value = listTodos.value.map((item) =>
      item.id === id ? { ...item, isCompleted: value } : item
    );
  });
}

function refreshTodoList() {
  getTodos()
    .then((data) => {
      listTodos.value = data.todos;
    })
    .catch((error) => {
      console.error("Error refreshing todo list:", error);
    });
}

onMounted(() => {
  listTodos.value = props.listTodoItem;
});
</script>
<style scoped></style>

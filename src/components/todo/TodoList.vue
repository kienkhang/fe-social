<template lang="pug">
.flex.flex-col.gap-4
    p(class="text-lg text-white") To do - {{listTodoItem?.length}}
    .flex.flex-col.gap-2(class="todo scrollbar-hide" )
        TodoItem(v-for="todoItem in listTodoItem" :type="false" @handleRefresh="refreshTodoList" @handleCompletedTodo="handleCompleted"  @handleDeleteTodo="handleDelete" :todoItem="todoItem" :key="todoItem.id")
</template>
<script setup lang="ts">
import TodoItem from "./TodoItem.vue";
import { onMounted, ref } from "vue";
import type { todoItem } from "@/types/todoItem";
import { deleteTodoById, getTodos, updateTodoById } from "@/apis/todos";

const props = defineProps<{
  listTodoItem: todoItem[];
}>();

const listTodos = ref<todoItem[]>([]);

function handleDelete(id: number) {
  deleteTodoById(id).then(() => {
    listTodos.value = listTodos.value.filter((item) => item.id !== id);
    alert("Todo deleted successfully");
  });
}

function handleCompleted(id: number, value: boolean) {
  updateTodoById(id, { isCompleted: value })
    .then(() => {
      listTodos.value = listTodos?.value.map((item) =>
        item.id === id ? { ...item, isCompleted: value } : item
      );

      alert("Todo updated successfully");
    })
    .catch((err) => {
      console.error("Error updating todo:", err);
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

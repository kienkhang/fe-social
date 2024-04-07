<template lang="pug">
div(class="flex flex-col items-center justify-center h-screen contain bg-slate-600") 
    .flex.flex-row.items-center.gap-4
      input(v-model="updatedTitle" class="w-[300px] h-[40px] rounded-md p-2" @keyup.enter="addNewTask(updatedTitle)" placeholder="Enter new task")
      
      button(@click="addNewTask(updatedTitle)" class="p-2 text-white bg-green-500 rounded-md") Add Task
    .flex.flex-col.gap-12(class="w-[700px]")
        TodoList(v-model:listTodoItem="listTaskTodo" v-model:isUpdated="isUpdated")
        TodoDone(v-model:listTodoItem="listTaskCompleted" )       
</template>
<script setup lang="ts">
import TodoList from "./TodoList.vue";
import TodoDone from "./TodoDone.vue";
import type { todoItem } from "@/types/todoItem";
import { onMounted, ref, computed, watch } from "vue";
import { getTodos, createTodo } from "@/apis/todos.ts";
const listTodos = ref<todoItem[]>([]);
const taskDetail = ref<todoItem>();
const updatedTitle = ref("");
const isUpdated = ref(false);

function addNewTask(title: string) {
  const newTask = {
    id: listTodos.value.length + 1,
    title: title,
    isCompleted: false,
  };
  createTodo(newTask).then((res) => {
    listTodos.value.push(res);
    alert("Task added successfully");
  });
  updatedTitle.value = "";
}
const listTaskTodo = computed(() =>
  listTodos.value.filter((item) => !item.isCompleted)
);

const listTaskCompleted = computed(() =>
  listTodos.value.filter((item) => item.isCompleted)
);

onMounted(() => {
  getTodos().then((res) => {
    listTodos.value = res;
  });
});
</script>
<style scoped></style>

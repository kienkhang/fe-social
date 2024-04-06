<template lang="pug">
div
  div.mt-5
    input(v-model="todoInput" @keyup.enter="handleCreateTodo" class="h-10 p-2 m-2 text-white bg-purple-400 rounded-lg w-80")
    button(@click="handleCreateTodo" class="h-10 p-2 m-2 text-white bg-purple-400 rounded-lg w-80") Create Todo
    TodoList(:listTodo="listTodo")
    
    div(class="flex flex-row justify-between p-2 m-2 text-white bg-purple-400 rounded-lg w-80")
      TodoItem(:id="todo.id" :listTodo="listTodo" :completed="todo?.completed" @deleteTodo="handleDelete")
      
</template>

<script setup>
import { ref, computed, onMounted } from "vue";
import TodoList from "./TodoList.vue";
import TodoItem from "./TodoItem.vue";
import { createTodo, getTodos } from "@/apis/todos";
import todoItem from "@/types/todoItem";

const todoInput = ref < string > "";
const listTodo = ref < todoItem > [];

const completedTodos = computed(() =>
  listTodo.value.filter((item) => item.completed)
);
const filteredList = computed(() =>
  listTodo.value.filter((item) => !item.completed)
);

onMounted(() => {
  getTodos().then((res) => {
    listTodo.value = res;
  });
});

function handleCreateTodo() {
  if (todoInput.value) {
    createTodo({
      id: listTodo.value.length + 1,
      title: todoInput.value,
      completed: false,
    }).then((res) => {
      listTodo.value.push(res);
      todoInput.value = "";
    });
  }
}
</script>

<style lang="" scoped></style>

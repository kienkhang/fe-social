<template lang="pug">
div.mt-5
  ul
    li(v-for='todo in listTodo' :key='todo.id' class='flex flex-row justify-between p-2 m-2 text-white bg-purple-400 rounded-lg w-80')
      TodoItem(:id='todo.id' :listTodo='listTodo' :completed='todo?.completed' @deleteTodo='handleDelete')  
</template>

<script setup>
import TodoItem from "./TodoItem.vue";

const props = defineProps({
  id: Number,
  listTodo: Array,
  completed: Boolean,
});
</script>

<style lang="scss" scoped></style>

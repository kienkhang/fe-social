<template lang="pug">
.flex.flex-col.gap-4
    p(class="text-lg text-white") Todo Done - {{listTodoItem?.length}}
    .flex.flex-col.gap-2(class=" task scrollbar-hide" )
      TodoItem(v-for="todoItem in listTodoItem"   :todoItem="todoItem" @handleUncompleteTodo="handleUncompleteTodo" :key="todoItem.id" :type="true")
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

const emit = defineEmits<{
  (e: "handleUncompleteTodo", id: number, value: boolean): void;
}>();

function handleUncompleteTodo(id: number) {
  emit("handleUncompleteTodo", id, false);
}

onMounted(() => {
  listTodos.value = props.listTodoItem;
});
</script>
<style scoped></style>

<template lang="pug">
.flex.flex-col.gap-4
    p(class="text-lg text-white") To do - {{listTodoItem?.length}}
    .flex.flex-col.gap-2(class="todo scrollbar-hide" )
        TodoItem(v-for="todoItem in listTodoItem" :type="false"  @handleCompletedTodo="handleCompleted" @handleEditTodo="handleEditTodo"  @handleDeleteTodo="handleDelete" :todoItem="todoItem" :key="todoItem.id")
</template>
<script setup lang="ts">
import TodoItem from "./TodoItem.vue";
import { onMounted, ref } from "vue";
import type { todoItem } from "@/types/todoItem";

const props = defineProps<{
  listTodoItem: todoItem[];
}>();

const listTodos = ref<todoItem[]>([]);
const emit = defineEmits<{
  (e: "handleDeleteTodo", value: number): void;
  (e: "handleCompletedTodo", id: number, value: boolean): void;
  (e: "handleEditTodo", id: number, value: string): void;
}>();

function handleCompleted(id: number, value: boolean) {
  emit("handleCompletedTodo", id, value);
}

function handleEditTodo(id: number, value: string) {
  emit("handleEditTodo", id, value);
}

function handleDelete(id: number) {
  emit("handleDeleteTodo", id);
}
onMounted(() => {
  listTodos.value = props.listTodoItem;
});
</script>
<style scoped></style>

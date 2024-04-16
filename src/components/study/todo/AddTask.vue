<template lang="pug">
div.flex.flex-col.gap-4
    label(for='taskInput' class="text-xl font-bold text-white ") Name ({{ currentLength }}/60)
    .flex.flex-row.gap-4
      input#taskInput(type="text",v-model="taskTitle" ,maxlength="60", placeholder="Add a new task" class="w-[300px] h-12 rounded-xl bg-blue-500 border-blue-800 border-2 text-white font-medium text-lg px-3")
      button(@click="addTask" class="w-[150px] h-12 bg-blue-800 text-white text-xl font-bold rounded-xl ") Add 
        
</template>

<script setup lang="ts">
import { createTodo } from "@/apis/todos";
import type { Todo } from "@/types/todo";
import { computed, ref } from "vue";

const taskTitle = ref("");
// const currentLength = ref(0);
const currentLength = computed(() => taskTitle.value.length);

// const emit = defineEmits(["add"]);
const emit = defineEmits<{
  (e: "add", data: Todo): void;
}>();

async function addTask() {
  if (taskTitle.value.trim() === "") {
    alert("Task title cannot be empty!");
    return;
  }

  const data = {
    name: taskTitle.value,
    isCompleted: false,
  };

  try {
    const response = await createTodo(data);
    emit("add", response);
    // emit("add");
  } catch (error) {
    console.error("Failed to add task:", error);
  }

  taskTitle.value = "";
  // currentLength.value = 0;
}
</script>

<style scoped></style>

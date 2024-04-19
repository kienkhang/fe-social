<template lang="pug">
div.flex.flex-col.gap-4
  label(for='taskInput' class="text-xl font-bold text-white ") Name ({{ currentLength }}/60)
  .flex.flex-row.gap-4
    input#taskInput(type="text",v-model="editedTodo.name",@input="updateLength",maxlength="60", placeholder="Edit task" class="w-[300px] h-12 rounded-xl bg-blue-500 border-blue-800 border-2 text-white font-medium text-lg px-3")
    button(@click="updateTask" class="w-[150px] h-12 bg-blue-800 text-white text-xl font-bold rounded-xl ") Update
</template>

<script setup lang="ts">
import { ref, onMounted } from "vue";
import type { Todo } from "@/types/todo";
import { updateTodo } from "@/apis/todos";

const emit = defineEmits(["edit", "taskUpdated"]);

const props = defineProps<{
  todo: Todo;
}>();

let editedTodo = ref({ ...props.todo });

let currentLength = ref(0);

function updateLength() {
  currentLength.value = editedTodo.value.name.length;
}

async function updateTask() {
  if (editedTodo.value.name.trim() === "") {
    alert("Task title cannot be empty!");
    return;
  }

  try {
    await updateTodo(editedTodo.value.id, { name: editedTodo.value.name });
    emit("taskUpdated", editedTodo.value);
  } catch (error) {
    console.error("Failed to update task:", error);
  }
}

onMounted(() => {
  currentLength.value = editedTodo.value.name.length;
});
</script>

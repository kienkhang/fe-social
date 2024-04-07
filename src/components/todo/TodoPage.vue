<template lang="pug">
div(class="flex flex-col items-center justify-center h-screen contain bg-slate-600") 
    .flex.flex-row.items-center.gap-4
      input(v-model="updatedTitle" class="w-[200px] h-[40px] rounded-md p-2" @keyup.enter="addNewTask(updatedTitle)" placeholder="Enter new task")
      button(@click="addNewTask(updatedTitle)" class="p-2 text-white bg-green-500 rounded-md") Add Task
      button(@click="updateNewTodo(updatedTitle)" class="p-2 text-white bg-green-500 rounded-md") Update Task
    .flex.flex-col.gap-12(class="w-[400px] mt-7")
        TodoList(v-model:listTodoItem="listTaskTodo" @handleCompletedTodo="handleCompleted" @handleDeleteTodo="handleDelete" @handleEditTodo="updateTodo")
        TodoDone(v-model:listTodoItem="listTaskCompleted" @handleUncompleteTodo="handleUncompleteTodo")       
</template>
<script setup lang="ts">
import TodoList from "./TodoList.vue";
import TodoDone from "./TodoDone.vue";
import type { todoItem } from "@/types/todoItem";
import { onMounted, ref, computed } from "vue";
import {
  getTodos,
  createTodo,
  deleteTodoById,
  updateTodoById,
} from "@/apis/todos.ts";

const listTodos = ref<todoItem[]>([]);
const currentTodoId = ref();
const updatedTitle = ref("");
const isUpdated = ref(false);

onMounted(async () => {
  await fetchTodos();
});

async function fetchTodos() {
  try {
    await getTodos().then((res) => {
      listTodos.value = res;
    });
  } catch (error) {
    console.error("Error fetching todos:", error);
  }
}

async function addNewTask(title: string) {
  try {
    await createTodo({
      id: listTodos.value.length + 1,
      title: title,
      isCompleted: false,
    }).then((res) => {
      listTodos.value.push(res);
    });
    updatedTitle.value = "";
  } catch (error) {
    console.error("Error adding new task:", error);
  }
}

function updateTodo(id: number, title: string) {
  updatedTitle.value = title;
  currentTodoId.value = id;
}

async function updateNewTodo(title: string) {
  if (currentTodoId.value === null) {
    console.error("No task selected for updating");
    return;
  }
  updatedTitle.value = title;
  try {
    const updatedTodo = await updateTodoById(currentTodoId.value, {
      id: currentTodoId.value,
      title: title,
      isCompleted: false,
    });
    const index = listTodos.value.findIndex(
      (todo) => todo.id === currentTodoId.value
    );
    if (index !== -1) {
      listTodos.value[index] = updatedTodo;
    }
    updatedTitle.value = "";
    currentTodoId.value = null;
  } catch (error) {
    console.error("Error updating task:", error);
  }
}

async function handleDelete(id: number) {
  await deleteTodoById(id).then(() => {
    listTodos.value = listTodos.value.filter((item) => item.id !== id);
  });
}

async function handleCompleted(id: number, value: boolean) {
  await updateTodoById(id, { isCompleted: value })
    .then(() => {
      listTodos.value = listTodos?.value.map((item) =>
        item.id === id ? { ...item, isCompleted: value } : item
      );
    })
    .catch((err) => {
      console.error("Error updating todo:", err);
    });
}

function handleUncompleteTodo(id: number, value: boolean) {
  // Replace 'boolean' with the appropriate type for 'value'
  updateTodoById(id, { isCompleted: value }).then(() => {
    listTodos.value = listTodos.value.map((item) =>
      item.id === id ? { ...item, isCompleted: value } : item
    );
  });
}

const listTaskTodo = computed(() =>
  listTodos.value.filter((item) => !item.isCompleted)
);
const listTaskCompleted = computed(() =>
  listTodos.value.filter((item) => item.isCompleted)
);
</script>
<style scoped></style>

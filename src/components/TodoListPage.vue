<template lang="pug">
.w-full.flex.justify-center.items-center.p-5
  div(class="w-[800px] border-4 border-blue-700 rounded-xl h-[1100px] bg-blue-500 p-6 flex flex-col gap-6")
    template(v-if="editTask !== null")
      EditTask(:todo="editTask" @taskUpdated="handleTaskUpdated" )
    template(v-else)
      AddTask(@taskAdded="handleTaskAdded")
    TaskList(:listTodos="incompleteTodos" @edit="handleEditTask" :deleteTask="handleTaskDeleted" :completeTask="handleCompleteTask" :isDone="false")
    TaskList(:listTodos="completeTodos" :isDone="true")

</template>

<script setup lang="ts">
import { ref, onMounted } from "vue";
import {
  getIncompleteTodos,
  deleteTodo,
  updateTodo,
  getCompleteTodos,
} from "@/apis/todos";
import type { Todo } from "@/types/todo";
import AddTask from "./study/todo/AddTask.vue";
import TaskList from "./study/todo/TaskList.vue";
import EditTask from "./study/todo/EditTask.vue";

const incompleteTodos = ref<Todo[]>([]);
const editTask = ref<Todo | null>(null);
const completeTodos = ref<Todo[]>([]);

onMounted(async () => {
  await fetchIncompleteTodos();
  await fetchCompleteTodos();
});

async function fetchIncompleteTodos() {
  try {
    const res = await getIncompleteTodos();
    incompleteTodos.value = res;
  } catch (error) {
    console.error("Failed to get incomplete todos:", error);
  }
}

async function fetchCompleteTodos() {
  try {
    const res = await getCompleteTodos();
    completeTodos.value = res;
  } catch (error) {
    console.error("Failed to get complete todos:", error);
  }
}

function handleTaskAdded(data) {
  incompleteTodos.value.push(data);
}

function handleTaskDeleted(todoId: string | number) {
  const confirmDelete = confirm("Bạn có chắc muốn xoá?");
  if (confirmDelete) {
    deleteTodo(todoId)
      .then(() => {
        incompleteTodos.value = incompleteTodos.value.filter(
          (todo) => todo.id !== todoId
        );
      })
      .catch((error) => {
        console.error("Failed to delete todo:", error);
      });
  }
}

function handleEditTask(todo: Todo) {
  editTask.value = todo;
}

function handleTaskUpdated(updatedTask) {
  const index = incompleteTodos.value.findIndex(
    (todo) => todo.id === updatedTask.id
  );
  if (index !== -1) {
    incompleteTodos.value[index] = updatedTask;
  }
  editTask.value = null;
}

async function handleCompleteTask(todoId: string | number) {
  try {
    const updatedTask = await updateTodo(todoId, { isCompleted: true });
    incompleteTodos.value = incompleteTodos.value.filter(
      (todo) => todo.id !== todoId
    );
    completeTodos.value.push(updatedTask);
  } catch (error) {
    console.error("Failed to complete task:", error);
  }
}
</script>

<style scoped></style>

<template lang="pug">
div(class="flex items-center justify-center contain") 
    .flex.flex-col.gap-12(class="w-[700px]")
        UpdateItem(v-if="isUpdated===true" @changeCreateMode="changeMode" @updateTask="updateTask" v-model:isUpdated="isUpdated" v-model:updatedTitle="updatedTitle" )
        AddItem(v-if="isUpdated===false" @addNewTask="addNewTask" @updateTask="updateTask" :updateTitle="taskDetail?.value?.title" v-model:isUpdated="isUpdated" @changeEditMode="changeMode"  )
        div(class="grid w-full grid-flow-col grid-cols-[50%_50%] gap-10")
            TaskTodo(v-model:listTaskItem="listTaskTodo" @deleteTask="deleteTask" @checkTask="checkDoneTask" @getTaskId="getTaskDetail" v-model:isUpdated="isUpdated")
            TaskCompleted(v-model:listTaskItem="listTaskCompleted"  @checkTask="checkDoneTask")
            
            
</template>
<script setup lang="ts">
import AddItem from "./AddItem.vue";
import UpdateItem from "./UpdateItem.vue";
import TaskTodo from "./TaskTodo.vue";
import TaskCompleted from "./TaskCompleted.vue";
import type { taskItem } from "@/types/taskItem";
import { onMounted, ref, computed, watch } from "vue";
import { getTodos, createTodo, deleteTodo, updateTodo } from "@/apis/todos.ts";
const listTodos = ref<taskItem[]>([]);
const taskDetail = ref<taskItem>();
const updatedTitle = ref("");
const isUpdated = ref(false);
function changeMode() {
  isUpdated.value = !isUpdated.value;
}
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
}

function deleteTask(id: number) {
  deleteTodo(id).then((res) => {
    listTodos.value = listTodos.value.filter((item) => item.id !== id);
    alert("Task deleted successfully");
  });
}
function getTaskDetail(id: number) {
  taskDetail.value = listTaskTodo.value.find((item) => item.id === id);
  updatedTitle.value = taskDetail.value?.title;
}
function updateTask(title) {
  updateTodo(taskDetail.value?.id, { title: title }).then((res) => {
    listTodos.value = listTodos.value.map((item) =>
      item.id === taskDetail.value?.id ? { ...item, title: title } : item
    );
    alert("Task updated successfully");
  });
}
function checkDoneTask(id: number, value: boolean) {
  updateTodo(id, { isCompleted: value }).then((res) => {
    listTodos.value = listTodos.value.map((item) =>
      item.id === id ? { ...item, isCompleted: value } : item
    );
    alert("Task completed successfully");
  });
}
const listTaskCompleted = computed(() =>
  listTodos.value.filter((item) => item.isCompleted)
);
const listTaskTodo = computed(() =>
  listTodos.value.filter((item) => !item.isCompleted)
);

onMounted(() => {
  getTodos().then((res) => {
    listTodos.value = res;
  });
});
</script>
<style scoped>
.contain {
  width: 100vw;
  height: 100vh;
  --s: 200px; /* control the size */
  --c1: #1d1d1d;
  --c2: #4e4f51;
  --c3: #3c3c3c;

  background: repeating-conic-gradient(
        from 30deg,
        #0000 0 120deg,
        var(--c3) 0 180deg
      )
      calc(0.5 * var(--s)) calc(0.5 * var(--s) * 0.577),
    repeating-conic-gradient(
      from 30deg,
      var(--c1) 0 60deg,
      var(--c2) 0 120deg,
      var(--c3) 0 180deg
    );
  background-size: var(--s) calc(var(--s) * 0.577);
}
</style>

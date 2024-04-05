<template lang="pug">
.flex.flex-row.gap-2.justify-center(class="w-full" )
    form(class="flex flex-row justify-center w-full gap-2" @submit.prevent="onSubmit" )
      .w-full.flex.justify-center
        label(for="title")
        input(type="text" v-model="title" required maxlength="15"  placeholder="Add a new task"  name="title" id="title"  class="input w-full px-3 border-[2px] border-solid border-transparent outline-none bg-[#f8fafc] text-[#0d0c22] rounded-md ")
      .flex.flex-row.gap-2 
        button(class="p-2 text-white bg-green-500 border rounded-md" type="submit") Add
        div(class="p-2 text-white bg-yellow-500 border rounded-md cursor-pointer" v-if="isUpdated==false" @click="handleChangeEditMode") Edit
   
      
</template>
<script setup lang="ts">
import { ref } from "vue";
const props = defineProps<{
  isUpdated: boolean;
}>();
const title = ref("");
const emit = defineEmits<{
  (e: "addNewTask", value: string): void;
  (e: "changeEditMode"): void;
}>();
function handleChangeEditMode() {
  emit("changeEditMode");
}
function onSubmit() {
  emit("addNewTask", title.value);
  title.value = "";
}
</script>
<style scoped>
.input::placeholder {
  color: #94a3b8;
}
.input {
  transition: 0.5s ease;
}
.input:focus,
input:hover {
  outline: none;
  border-color: rgba(129, 140, 248);
  background-color: #fff;
  box-shadow: 0 0 0 5px rgb(129 140 248 / 30%);
}
</style>

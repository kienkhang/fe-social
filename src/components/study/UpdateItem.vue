<template lang="pug">
.flex.flex-row.gap-2.justify-center(class="w-full" )
    form(class="flex flex-row justify-center w-full gap-2" @submit.prevent="onSubmit" )
      .w-full.flex.justify-center
        label(for="title")
        input(type="text" v-model="title"  placeholder="Update task"  name="title" id="title"  class="input w-full px-3 border-[2px] border-solid border-transparent outline-none bg-[#f8fafc] text-[#0d0c22] rounded-md ")

      .flex.flex-row.gap-2 
        button(class="p-2 text-white bg-green-500 border rounded-md" type="submit") Update
        div(class="p-2 text-white bg-red-500 border rounded-md cursor-pointer" v-if="isUpdated==true" @click="handleChangeEditMode") Cancle
</template>
<script setup lang="ts">
import { ref, watch } from "vue";
const props = defineProps<{
  isUpdated: boolean;
  updatedTitle: string;
}>();
watch(
  () => props.updatedTitle,
  (value) => {
    title.value = value;
  }
);
const title = ref("");
const emit = defineEmits<{
  (e: "updateTask", value: string): void;
  (e: "changeCreateMode"): void;
}>();
function handleChangeEditMode() {
  emit("changeCreateMode");
}
function onSubmit() {
  emit("updateTask", title.value);
  title.value = "";
}
</script>
<style scoped></style>

<template lang="pug">
div.text-2xl.font-bold Dashboard Page
  //- .flex.items-center.gap-3
    //- AppIcon.text-red-500.w-10(:icon='RingIcon')
    //- AppIcon.text-green-500.h-10.w-10(:icon='GGIcon' mode='bg')
  .flex.items-center.gap-4.flex-wrap(v-if='icons.length')
    .flex.flex-col.items-center.gap-2(v-for='icon in icons')
      img.w-20.h-20.object-cover(:src='icon.thumbnail' :key='icon.fileId')
      AppIcon.cursor-pointer.text-red-500.w-6(:icon='RingIcon' @click='copy(icon.url)')

</template>

<script setup lang="ts">
import AppIcon from "@/components/shared/AppIcon.vue";
import RingIcon from "@/assets/ring.svg";
import GGIcon from "@/assets/google.svg";
import http from "@/apis/http";
import { onMounted, ref } from "vue";
import { useClipboard } from "@vueuse/core";

const icons = ref<
  {
    name: string;
    fileId: string;
    url: string;
    thumbnail: string;
  }[]
>([]);

const { copy } = useClipboard();

async function getImage() {
  const res = await http.client.get(
    "http://localhost:8082/api/v1/category/icons"
  );
  console.log("🐣🦆 ~ getImage ~ res:", res);
  icons.value = res.data.data;
}

onMounted(() => {
  getImage();
});
</script>

<style scoped></style>

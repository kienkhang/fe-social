<template lang="pug">
div
  div.text-xl(class='' v-show='isLoading') Loading .......
  div(ref='root' v-show='!isLoading')
</template>

<script setup lang="ts">
import { Spin, Client } from "@phanmn/chat3-sdk";
import { onMounted, ref } from "vue";
import SDK from "social-live-js-sdk";

const root = ref<HTMLElement>();

const appearance = {
  colorBackground: "#000",
  backgroundMain: "#0150E3", // default #6238FB
  backgroundSecond: "#FFCE30", // default #F91880
  colorText: "#fff", // default #fff
  fontFamily: "",
  fontLinks: [
    "https://fonts.googleapis.com/css2?family=Roboto+Mono:ital,wght@0,100..700;1,100..700&display=swap",
  ],
  borderRadiusButton: "8px",
  colorBackgroundInput: "transparent",
  colorBorder: "#47464F",
  colorBorderMain: "#6238FB",
  colorTextMain: "#6238FB",
  colorDanger: "#FFA1BC",
  colorTextPlaceholder: "#ACA9B1",
  width: "100%",
  height: "800px",
  spinTitle: "SPIKING SPIN TO WIN",
  resultMessage:
    "All rewards will be automatically added to your Spiking wallet within 10 minutes.",
  rulesHtml: `String format with variables using a template literal`,
};
let spin: Spin;
const isLoading = ref(false);

onMounted(async () => {
  let client = Client.create({
    token:
      "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJhdWQiOiJKb2tlbiIsImV4cCI6MTgxOTgyNjM0NSwiaWF0IjoxNzE5ODI2NDI3LCJpc3MiOiJKb2tlbiIsImp0aSI6IjJ2ZjBxMWdpYWwyNWNtb2gzMDAwNjUzMyIsIm5iZiI6MTcxOTgyNjQyNywicmVzb3VyY2UiOiJzcGlraW5nLmNvbSIsInNjb3BlcyI6WyJzcGluIl0sInVzZXJfaWQiOjEwNH0.1mbIxHQmcOGqPIPfxInyBjp2-m3JRq9ICkREMj3he5g",
    origin: "http://localhost:8080",
  });

  spin = new Spin(10, client, appearance);
  isLoading.value = true;
  let x = await spin.mount(root.value as HTMLElement).finally(() => {
    isLoading.value = false;
  });
});
</script>

<style scoped></style>

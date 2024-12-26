<template lang="pug">
div
  button.p-2.border.rounded-full.bg-blue-500.text-white(@click='startRoom()') Start room
  div#datagram-frame.w-full.bg-black(ref='root' :class='[{ "fixed z-[10] block inset-0" : iframeMounted }]' v-show='iframeMounted')

</template>

<script setup lang="ts">
import { useEventListener } from "@vueuse/core";
import {
  Client,
  Conference,
  type IConferenceOptions,
} from "datagram-conference-sdk";
import { onMounted, ref } from "vue";

const root = ref<HTMLElement>();
const iframeMounted = ref(false);
const isLoading = ref(false);

let client: Client;
let conference: Conference;

const options: IConferenceOptions = {
  skipMediaSettings: false,
  turnOnCam: false,
  turnOnMic: false,
  authorization:
    "SFMyNTY.YWIxNGM5MDktODJkMS00YThjLWJhMDItNWJkYTcxN2I4NmFj.D8BDzpMBlkkMwKP7JQvI1ieSo5pSqoWRw9qf2cYUe3A",
};

useEventListener("message", async (event) => {
  if (event.data === "call_ended") {
    iframeMounted.value = false;
    conference?.dispose();
  }
  if (event.data === "invalid_qr_code") {
    iframeMounted.value = false;
    conference?.dispose();
  }
});

async function startRoom() {
  // Create client with alias and origin
  client = Client.create({
    alias: "bkaui",
    origin: "http://localhost:8080",
  });

  isLoading.value = true;
  conference = new Conference(client, options);
  await conference.mount(root.value as HTMLElement).finally(() => {
    console.log("Mounted room");
    iframeMounted.value = true;
    isLoading.value = false;
  });
}
</script>

<style lang="stylus" scoped>
#datagram-frame
  height 100vh
  @media mobile
    height 100dvh
</style>

<template lang="pug">
div
  button.p-2.border.rounded-full.bg-blue-500.text-white.p-4.min-w-32(@click='startRoom()' :class='{ "disabled:opacity-50": isLoading }') 
    span(v-show='!isLoading') Start room
    .loader(v-show='isLoading')
  div#datagram-frame.w-full.bg-black(ref='root' :class='[{ "fixed z-[10] block inset-0" : iframeMounted }]' v-show='iframeMounted')

</template>

<script setup lang="ts">
import { useEventListener } from "@vueuse/core";
import {
  Client,
  Conference,
  type IConferenceOptions,
} from "@datagram-network/conference-sdk";
import { ref } from "vue";

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
    "SFMyNTY.ZjM5MTA3YTQtNGI4YS00YTQ3LWI4ZjEtMWY3OWZiYjM2YzI4.O1hHUXyMErk7KKeHFcHfL21qUTz516KXqNa6sJJSBGQ",
  // "SFMyNTY.ZDM5ZTdkYWQtODQ3Yy00YmZmLTgzM2UtNTZlODJlYTIwNGRm.wQ8FKyUBGQXCMKy1-dal_L54ILCPpgxkMUwCRA3_auY",
  // SFMyNTY.ZjM5MTA3YTQtNGI4YS00YTQ3LWI4ZjEtMWY3OWZiYjM2YzI4.O1hHUXyMErk7KKeHFcHfL21qUTz516KXqNa6sJJSBGQ
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
  if (event.data === "conference-ready") {
    console.log("🐣🦆 ~ useEventListener ~ event.data:", event.data);
    iframeMounted.value = true;
  }
  if (event.data === "call-ready") {
    console.log("🐣🦆 ~ useEventListener ~ event.data:", event.data);
    iframeMounted.value = true;
  }
});

async function startRoom() {
  // Create client with alias and origin
  client = Client.create({
    alias: "77am5", // 77am5 | a5t8h
    origin: "http://localhost:8080",
  });
  isLoading.value = true;
  conference = new Conference(client, options);
  await conference
    .mount(root.value as HTMLElement)
    .catch((e) => {
      console.log("Error ~ ", e);
    })
    .finally(() => {
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

.loader {
  width: 24px;
  aspect-ratio: 1;
  border-radius: 50%;
  border: 4px solid #fff;
  animation:
    l20-1 0.8s infinite linear alternate,
    l20-2 1.6s infinite linear;
}
@keyframes l20-1{
   0%    {clip-path: polygon(50% 50%,0       0,  50%   0%,  50%    0%, 50%    0%, 50%    0%, 50%    0% )}
   12.5% {clip-path: polygon(50% 50%,0       0,  50%   0%,  100%   0%, 100%   0%, 100%   0%, 100%   0% )}
   25%   {clip-path: polygon(50% 50%,0       0,  50%   0%,  100%   0%, 100% 100%, 100% 100%, 100% 100% )}
   50%   {clip-path: polygon(50% 50%,0       0,  50%   0%,  100%   0%, 100% 100%, 50%  100%, 0%   100% )}
   62.5% {clip-path: polygon(50% 50%,100%    0, 100%   0%,  100%   0%, 100% 100%, 50%  100%, 0%   100% )}
   75%   {clip-path: polygon(50% 50%,100% 100%, 100% 100%,  100% 100%, 100% 100%, 50%  100%, 0%   100% )}
   100%  {clip-path: polygon(50% 50%,50%  100%,  50% 100%,   50% 100%,  50% 100%, 50%  100%, 0%   100% )}
}
@keyframes l20-2{
  0%    {transform:scaleY(1)  rotate(0deg)}
  49.99%{transform:scaleY(1)  rotate(135deg)}
  50%   {transform:scaleY(-1) rotate(0deg)}
  100%  {transform:scaleY(-1) rotate(-135deg)}
}
</style>

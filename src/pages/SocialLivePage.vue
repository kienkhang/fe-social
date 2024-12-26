<template lang="pug">
div
  //- button.p-3.border.rounded-lg(@click='openDialog') Open dialog
  //- button.p-3.border.rounded-l.text-white.bg-purple-500(@click='checkLogin') Request
  //- button.p-3.border.rounded-lg.text-white.bg-yellow-500(@click='refreshToken') Renew token
  //- div.text-xl(class='' v-show='isLoading') Loading .......
  //- div.bg-black.h-dvh(ref='root' v-show='!isLoading')

</template>

<script setup lang="ts">
// import { Client, Auth, type Appearance } from "social-live-js-sdk";
// import { ref, onMounted } from "vue";

// const root = ref<HTMLElement>();

// let client: Client;
// let auth: Auth;
// const appId = "crhbm7saddg9o350c950";
// const isLoading = ref(false);

// const appearance: Appearance | null = null;

// function openDialog() {
//   auth.openDialog();
// }

// async function checkLogin() {
//   const res = await auth.logout(appId);
//   console.log("🐣🦆 ~ checkLogin ~ res:", res);
// }

// async function refreshToken() {
//   const res = await auth.refreshToken(appId);
//   console.log("🐣🦆 ~ checkLogin ~ res:", res);
// }

// onMounted(async () => {
//   // Create client
//   client = Client.create({
//     appId,
//     origin: "http://localhost:8080",
//   });

//   auth = new Auth(client, appearance);
//   await auth.mount(root.value as HTMLElement).finally(() => {});
// });
</script>

<style></style>

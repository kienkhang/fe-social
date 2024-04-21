import { createApp } from "vue";
import App from "./App.vue";
import router from "./router/route";

let app = createApp(App);

function initCommon() {
  app.use(router);
  app.mount("#app");
}

initCommon();
// createApp(App).mount("#app");

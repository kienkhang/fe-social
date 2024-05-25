import { createApp } from "vue";
import App from "./App.vue";
import router from "./router/route";
import { createPinia } from "pinia";

let app = createApp(App);
const pinia = createPinia();

function initCommon() {
  app.use(pinia);
  app.use(router);
  app.mount("#app");
}

initCommon();
// createApp(App).mount("#app");

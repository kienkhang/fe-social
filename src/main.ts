import { createApp } from "vue";
import App from "./App.vue";
import router from "./router/route";
import { createPinia } from "pinia";
import VueVirtualScroller from 'vue-virtual-scroller'
import 'vue-virtual-scroller/dist/vue-virtual-scroller.css'

let app = createApp(App);
const pinia = createPinia();

function initCommon() {
  app.use(pinia);
  app.use(router);
  app.use(VueVirtualScroller)
  app.mount("#app");
}

initCommon();
// createApp(App).mount("#app");

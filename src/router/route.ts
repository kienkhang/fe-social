import {
  createWebHistory,
  createRouter,
  type RouteRecordRaw,
} from "vue-router";

import initMainLayout from "./mainLayout";
import initNotFoundLayout from "./notFoundLayout";

const routes: RouteRecordRaw[] = [];

function generateLayout() {
  initMainLayout(routes);
  initNotFoundLayout(routes);
}

generateLayout();

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;

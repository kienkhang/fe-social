import { createWebHistory, createRouter } from "vue-router";
import MainLayout from "@/layouts/MainLayout.vue";
import DashboardPage from "@/pages/DashboardPage.vue";
import WalletPage from "@/pages/WalletPage.vue";
import NotFound from "@/pages/NotFound.vue";

const routes = [
  {
    path: "/",
    component: MainLayout,
    children: [
      {
        path: "",
        component: DashboardPage,
      },
      {
        path: "wallet",
        component: WalletPage,
      },
    ],
  },
  { path: "/:pathMatch(.*)*", name: "NotFound", component: NotFound },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;

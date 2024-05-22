import { createWebHistory, createRouter } from "vue-router";
import MainLayout from "@/layouts/MainLayout.vue";
import DashboardPage from "@/pages/DashboardPage.vue";
import WalletPage from "@/pages/WalletPage.vue";
import NotFound from "@/pages/NotFound.vue";
import EventPage from "@/pages/EventPage.vue";
import EventDetail from "@/components/study/events/EventDetail.vue";
import EventEdit from "@/components/study/events/EventEdit.vue";
import EventRegister from "@/components/study/events/EventRegister.vue";
import EventLayout from "@/components/study/events/EventLayout.vue";

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
      {
        path: "events",
        component: EventPage,
      },
      {
        path: "events/:id",
        name: "EventDetail",
        component: EventLayout,
        children: [
          {
            path: "",
            name: "events-id",
            component: EventDetail,
          },
          {
            path: "register",
            name: "events-id-register",
            component: EventRegister,
          },
          {
            path: "edit",
            name: "events-id-edit",
            component: EventEdit,
          },
        ],
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

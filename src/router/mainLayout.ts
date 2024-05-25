import MainLayout from "@/layouts/MainLayout.vue";
import DashboardPage from "@/pages/DashboardPage.vue";
import WalletPage from "@/pages/WalletPage.vue";
import EventPage from "@/pages/EventPage.vue";
import EventDetail from "@/components/study/events/EventDetail.vue";
import EventEdit from "@/components/study/events/EventEdit.vue";
import EventRegister from "@/components/study/events/EventRegister.vue";
import EventLayout from "@/components/study/events/EventLayout.vue";
function initMainLayout(routes: any[]) {
  const mainLayout = {
    path: "/",
    component: MainLayout,
    children: [
      {
        path: "",
        name: "index",
        component: DashboardPage,
      },
      {
        path: "wallet",
        name: "wallet",
        component: WalletPage,
      },
      {
        path: "events",
        name: "events",
        component: EventPage,
      },
      {
        path: "events/:id",
        name: "events-id",
        component: EventLayout,
        children: [
          {
            path: "",
            name: "events-id-index",
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
  };

  routes.push(mainLayout);
}

export default initMainLayout;

import NotFound from "@/pages/NotFound.vue";

function initNotFoundLayout(routes: any[]) {
  const notFoundLayout = {
    path: "/:pathMatch(.*)*",
    name: "NotFound",
    component: NotFound,
  };

  routes.push(notFoundLayout);
}

export default initNotFoundLayout;

import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import DeviceView from "../views/DeviceView.vue";
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: HomeView,
    },
    {
      path: "/dispositivo/:id",
      name: "dispositivo",
      component: DeviceView,
    },
  ],
});

export default router;

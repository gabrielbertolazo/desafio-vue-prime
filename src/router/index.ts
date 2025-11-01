import {
  createRouter,
  createWebHistory,
  type RouteRecordRaw,
} from "vue-router";
import HomePage from "@/pages/Home/HomePage.vue";

const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    name: "home",
    component: HomePage,
  },
  {
    path: "/settings",
    name: "settings",
    component: () => import("@/pages/Settings/SettingsPage.vue"),
  },
  {
    path: '/settings/:submenu',
    name: 'settings-submenu',
    component: () => import("@/pages/Settings/SettingsPage.vue"),
    props: true
  },
];

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
});

export default router;

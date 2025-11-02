import {
  createRouter,
  createWebHistory,
  type RouteRecordRaw,
} from "vue-router";
import HomePage from "@/pages/Home/HomePage.vue";
import LayoutBlank from "@/layout/LayoutBlank.vue";
import LayoutDefault from "@/layout/LayoutSidebar.vue";

const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    component: LayoutBlank,
    children: [
      {
        path: "",
        name: "home",
        component: HomePage,
      },
    ],
  },
  {
    path: "/",
    component: LayoutDefault,
    children: [
      {
        path: "/settings",
        name: "settings",
        component: () => import("@/pages/Settings/SettingsPage.vue"),
      },
    ],
  },
  {
    path: "/",
    component: LayoutDefault,
    children: [
      {
        path: "/settings/:submenu",
        name: "settings-submenu",
        component: () => import("@/pages/Settings/SettingsPage.vue"),
        props: true,
      },
    ],
  },
];

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
});

export default router;

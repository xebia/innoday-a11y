import { createRouter, createWebHistory } from "vue-router";

import FailingPage from "./FailingPage.vue";
import SuccessfulPage from "./SuccessfulPage.vue";

export const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: "/", redirect: "/fail" },
    { path: "/success", component: SuccessfulPage },
    { path: "/fail", component: FailingPage },
  ],
});

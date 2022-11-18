import { createApp } from "vue";
import "./style.css";
import { createRouter, createWebHistory } from "vue-router";

import App from "./App.vue";
import FailingPage from "./FailingPage.vue";
import SuccessfulPage from "./SuccessfulPage.vue";

const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: "/", redirect: "/fail" },
    { path: "/success", component: SuccessfulPage },
    { path: "/fail", component: FailingPage },
  ],
});

createApp(App).use(router).mount("#app");

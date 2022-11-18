import { describe, it } from "vitest";
import { render, screen } from "@testing-library/vue";
import { createRouter, createWebHistory } from "vue-router";
import FailingPage from "./FailingPage.vue";
import { router } from "./router";

describe("Failing page", () => {
  it("should fail a11y test", async () => {
    render(FailingPage, {
      global: {
        plugins: [router],
      },
    });
  });
});

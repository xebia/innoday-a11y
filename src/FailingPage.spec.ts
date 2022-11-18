import { describe, expect, it } from "vitest";
import { render, prettyDOM } from "@testing-library/vue";
import { axe } from "vitest-axe";
import FailingPage from "./FailingPage.vue";
import { router } from "./router";

describe("Failing page", () => {
  it("should fail a11y test", async () => {
    const { html } = render(FailingPage, {
      global: {
        plugins: [router],
      },
    });

    expect(await axe(html())).toHaveNoViolations();
  });
});

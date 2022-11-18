import { describe, expect, it } from "vitest";
import { render } from "@testing-library/vue";
import { axe } from "vitest-axe";
import App from "./App.vue";
import FailingPage from "./FailingPage.vue";
import SuccessfulPage from "./SuccessfulPage.vue";
import { router } from "./router";

describe("App", () => {
  const renderApp = async (route: string) => {
    await router.push(route);
    return render(App, {
      global: {
        components: {
          FailingPage,
          SuccessfulPage,
        },
        plugins: [router],
      },
    });
  };

  it("should succeed a11y test", async () => {
    const { container } = await renderApp("/success");

    expect(await axe(container)).toHaveNoViolations();
  });

  it("should fail a11y test", async () => {
    const { container } = await renderApp("/"); // redirects to /fail

    expect(await axe(container)).toHaveNoViolations();
  });
});

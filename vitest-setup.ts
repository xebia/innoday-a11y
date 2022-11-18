import "vitest-axe/extend-expect";

import * as matchers from "vitest-axe/matchers";
import { afterEach, expect } from "vitest";
import { cleanup } from "@testing-library/vue";
expect.extend(matchers);

afterEach(() => {
  cleanup();
});

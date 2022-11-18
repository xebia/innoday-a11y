import { defineConfig } from "vitest/config";
import vue from "@vitejs/plugin-vue";

export default defineConfig({
  plugins: [vue()],
  preview: {
    strictPort: true,
  },
  test: {
    environment: "jsdom",
    setupFiles: ["vitest-setup.ts"],
  },
});

import { defineConfig } from "vitest/config";
import vue from "@vitejs/plugin-vue";

export default defineConfig({
  plugins: [vue()],
  preview: {
    strictPort: true,
    port: 5173,
  },
  test: {
    environment: "jsdom",
    setupFiles: ["vitest-setup.ts"],
  },
});

import { defineConfig } from "cypress";

import { createHtmlReport } from "axe-html-reporter";

export default defineConfig({
  e2e: {
    baseUrl: "http://localhost:5173",
    setupNodeEvents(on) {
      on("task", {
        log(message) {
          console.log(message);

          return null;
        },
        table(message) {
          console.table(message);

          return null;
        },
        report({ reportFileName, violations }) {
          createHtmlReport({
            options: {
              outputDir: "axe-cy",
              reportFileName: `${reportFileName}.html`,
            },
            results: { violations },
          });

          return null;
        },
      });
    },
  },
});

import * as axe from "axe-core";

const terminalLog = (reportFileName: string) => (violations: axe.Result[]) => {
  cy.task("report", { reportFileName, violations });

  cy.task(
    "log",
    `${violations.length} accessibility violation${
      violations.length === 1 ? "" : "s"
    } ${violations.length === 1 ? "was" : "were"} detected`
  );
  // pluck specific keys to keep the table readable
  const violationData = violations.map(
    ({ id, impact, description, nodes }) => ({
      id,
      impact,
      description,
      nodes: nodes.length,
    })
  );

  cy.task("table", violationData);
};

describe("Successful page", () => {
  it("passes a11y check", () => {
    cy.visit("/success");
    cy.injectAxe();
    cy.checkA11y(null, null, terminalLog("success"));
  });
});

describe("Failing page", () => {
  it("fails a11y check", () => {
    cy.visit("/");
    cy.injectAxe();
    cy.checkA11y(null, null, terminalLog("fail"));
  });
});

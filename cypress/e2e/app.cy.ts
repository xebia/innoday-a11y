describe("Successful page", () => {
  it("passes a11y check", () => {
    cy.visit("/success");
    cy.injectAxe();
    cy.checkA11y();
  });
});

describe("Failing page", () => {
  it("fails a11y check", () => {
    cy.visit("/");
    cy.injectAxe();
    cy.checkA11y();
  });
});

describe("Sandbox", () => {
  before(() => {
    cy.visit("https://e2e-boilerplate.github.io/sandbox/");
  });

  it("should be on Sandbox", () => {
    cy.title((title) => {
      assert.strictEqual(title, "Sandboxx");
    });

    cy.get("h1").then(($header) => {
      const text = $header.text();
      assert.strictEqual(text, "Sandbox");
    });
  });
});

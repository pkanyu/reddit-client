describe("Reddit Client E2E Tests", () => {
  beforeEach(() => {
    // Visit the home page before each test
    cy.visit("/");
  });

  it("should display the search bar and category filter", () => {
    cy.get('input[placeholder="Search Reddit"]').should("be.visible");
    cy.contains("popular").should("be.visible");
  });

  it("should search for a term and display results", () => {
    const searchTerm = "react";

    // Type in the search term and press Enter
    cy.get('input[placeholder="Search Reddit"]').type(`${searchTerm}{enter}`);

    // Ensure the results contain the search term
    cy.get(".post").each(($el) => {
      cy.wrap($el).should("contain.text", searchTerm);
    });
  });

  it("should filter posts by category", () => {
    const category = "programming";

    // Click on the programming category
    cy.contains(category).click();

    // Ensure the posts are filtered by category
    cy.get(".post").each(($el) => {
      cy.wrap($el).should("contain.text", category);
    });
  });

  it("should display post details and comments", () => {
    // Click on the first post
    cy.get(".post").first().click();

    // Ensure the post details page is displayed
    cy.url().should("include", "/post/");
    cy.get("h2").should("be.visible");
    cy.contains("Comments").should("be.visible");
  });
});

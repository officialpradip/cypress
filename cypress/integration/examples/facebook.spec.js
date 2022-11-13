/// <reference types="Cypress" />
it("Facebook Demo",()=>{
    cy.visit("https://www.facebook.com/")
    cy.get('[data-testid=royal_email]').type("demo@gmail.com{enter}")

})
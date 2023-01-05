/// <reference types="Cypress"/>
describe("Accessing Elements",()=>{
    it("Radio Button Test",()=>{
        cy.visit('https://itera-qa.azurewebsites.net/home/automation')
        cy.get("input#female").should('be.visible').and('exist')
        cy.get("input#male").should('be.visible').and('exist')
        //selecting radio button
        cy.get("input#male").check().should('be.checked')
        cy.get("input#female").should('not.be.checked')

        cy.get("input#female").should('not.be.checked')
        cy.get("input#male").check().should('be.checked')
        
    })

    it("Checkboxes Test",()=>{
        cy.visit('https://itera-qa.azurewebsites.net/home/automation')
        cy.get("input#monday").should('be.visible').and('exist')
        //selecting single check box
        cy.get("input#monday").check().should('be.checked')
        //uncheck selected box
        cy.get("input#monday").uncheck().should('not.be.checked')
         // selecting all check boxes

        cy.get('.form-check-input[type="checkbox"]').check().should('be.checked')
    })
})
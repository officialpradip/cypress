/// <reference types="Cypress"/>

describe("CURA Health Care Services Testing Project",()=>{
    it("HomePage",()=>{
        cy.visit("https://katalon-demo-cura.herokuapp.com/")
        cy.title().should('include','CURA Healthcare Service')
    })
})
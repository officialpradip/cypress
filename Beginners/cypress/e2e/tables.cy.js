/// <reference types="Cypress"/>

describe("Table Cypress",()=>{
    beforeEach("Login First",()=>{
        cy.visit("https://demo.opencart.com/admin/index.php")
        cy.get("#input-username").type('demo')
        cy.get("#input-password").type('demo{enter}')
        
    })
    it("",()=>{

    })
})
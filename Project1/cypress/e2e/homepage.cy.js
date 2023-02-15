/// <reference types="Cypress"/>

describe("CURA Health Care Services Testing Project",()=>{
    beforeEach("Beginning",()=>{
        cy.visit("https://katalon-demo-cura.herokuapp.com/")
        cy.title().should('include','CURA Healthcare Service')
        cy.get("#btn-make-appointment").click()
        cy.get("div[class='col-sm-12 text-center'] h2").should('have.text','Login')
    })
    //login
    it("Login",()=>{
        cy.get('[name="username"]').type('John Doe')
        cy.get('[name="password"]').type('ThisIsNotAPassword')
        cy.get("#btn-login").click()
        
    })
})
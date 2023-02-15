/// <reference types="Cypress"/>

describe("CURA Health Care Services Testing Project",()=>{
    beforeEach("Beginning",()=>{
        cy.visit("https://katalon-demo-cura.herokuapp.com/")
        cy.title().should('include','CURA Healthcare Service')
        cy.get("#btn-make-appointment").click()
        cy.get("div[class='col-sm-12 text-center'] h2").should('have.text','Login')
        cy.get('[name="username"]').type('John Doe')
        cy.get('[name="password"]').type('ThisIsNotAPassword')
        cy.get("#btn-login").click()
        cy.get("div[class='col-sm-12 text-center'] h2").should('have.text','Make Appointment')
    })
    
    it("Test Facility",()=>{
        cy.wait(3000)
        cy.get('#combo_facility').select('Hongkong CURA Healthcare Center').should('have.value','Hongkong CURA Healthcare Center')
        cy.get('#chk_hospotal_readmission').check() //check button
        cy.get('[name="programs"]').check('Medicaid') //radio button
    })
})
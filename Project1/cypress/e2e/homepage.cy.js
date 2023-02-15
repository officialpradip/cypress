/// <reference types="Cypress"/>

describe("CURA Health Care Services Testing Project",()=>{
    before("Beginning",()=>{
        cy.visit("https://katalon-demo-cura.herokuapp.com/")
        cy.title().should('include','CURA Healthcare Service')
        cy.get("#btn-make-appointment").click()
        cy.get("div[class='col-sm-12 text-center'] h2").should('have.text','Login')
        cy.get('[name="username"]').type('John Doe')
        cy.get('[name="password"]').type('ThisIsNotAPassword')
        cy.get("#btn-login").click()
        cy.get("div[class='col-sm-12 text-center'] h2").should('have.text','Make Appointment')
    })
    
    it("Making Appoint Test",()=>{
        cy.wait(3000)
        cy.get('#combo_facility').select('Hongkong CURA Healthcare Center').should('have.value','Hongkong CURA Healthcare Center')
        cy.get('#chk_hospotal_readmission').check() //check button
        cy.get('[name="programs"]').check('Medicaid') //radio button
        //cy.get("#txt_visit_date").click()
        cy.get('#txt_visit_date').type('03/03/2023')
        cy.get("#txt_comment").click({force:true})
        cy.get("#txt_comment").type("This is my comment for testing make appointment form")
        cy.get("#btn-book-appointment").click()
        //confirm appointment
        cy.get("div[class='col-xs-12 text-center'] h2").should('have.text','Appointment Confirmation')
    })
    
})
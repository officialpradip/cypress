/// <reference types="Cypress"/>

// go() reload()
describe("Navigation Suite",()=>{
    it("Test",()=>{
        cy.visit("https://demo.opencart.com/")
        cy.title().should('include','Your Store')
        cy.get("li:nth-child(7) a:nth-child(1)").click()
        cy.get("div[id='content'] h2").should('have.text','Cameras')
        cy.go('back')
        cy.title().should('eq','Your Store')

    })
})
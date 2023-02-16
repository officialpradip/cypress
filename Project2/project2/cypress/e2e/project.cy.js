/// <reference types="Cypress"/>
describe("Testing React App",()=>{
    beforeEach(()=>{
        cy.visit("https://react-redux.realworld.io/")
        
    })
    it("Verify Title",()=>{
        cy.title().should('include','Conduit')

    })
})
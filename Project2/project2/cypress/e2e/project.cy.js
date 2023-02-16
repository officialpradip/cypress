/// <reference types="Cypress"/>
describe("Testing React App",()=>{
    beforeEach(()=>{
        cy.visit("https://react-redux.realworld.io/")
        
    })
    it("Verify Title",()=>{
        cy.title().should('include','Conduit')

    })
    it("Signup",()=>{
        cy.get(':nth-child(3) > .nav-link').click()
        cy.get("h1[class='text-xs-center']").should('have.text','Sign Up')
        cy.get("input[placeholder='Username']").type("demonp")
        cy.get("input[placeholder='Email']").type("demonp@gmail.com")
        cy.get("input[placeholder='Password']").type("demo@123")
        cy.get("button[type='submit']").click()
    })
})
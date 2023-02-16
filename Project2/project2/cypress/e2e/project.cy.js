/// <reference types="Cypress"/>
describe("Testing React App",()=>{
    beforeEach("Visit Page",()=>{
        cy.visit("https://react-redux.realworld.io/")
        
    })
    it("Verify Title",()=>{
        cy.title().should('include','Conduit')

    })
    it.skip("Signup",()=>{
        cy.get(':nth-child(3) > .nav-link').click()
        cy.get("h1[class='text-xs-center']").should('have.text','Sign Up')
        cy.get("input[placeholder='Username']").type("demonp")
        cy.get("input[placeholder='Email']").type("demonp@gmail.com")
        cy.get("input[placeholder='Password']").type("demo@123")
        cy.get("button[type='submit']").click()
        
    })
    it("Sign In",()=>{
        cy.get(':nth-child(2) > .nav-link').click()
        cy.get("h1[class='text-xs-center']").should('have.text','Sign In')
        cy.get("input[placeholder='Email']").type("demonp@gmail.com")
        cy.get("input[placeholder='Password']").type("demo@123")
        cy.get("button[type='submit']").click()
        cy.get(':nth-child(4) > .nav-link').should('have.text','demonp')
        //cy.wait(100) post article
        cy.get("a[href='#editor']").click()
        cy.get("input[placeholder='Article Title']").type("This is article title")

    })
    
})
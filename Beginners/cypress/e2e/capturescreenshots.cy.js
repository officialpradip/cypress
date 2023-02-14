/// <reference types="Cypress"/>
 
describe("Screenshot and Videos",()=>{
    it("Test",()=>{
        cy.visit("https://demo.opencart.com/")
        // cy.screenshot("homepage")
        // cy.wait(5000)
        //cy.get("img[title='Your Store']").screenshot('logo')
        //automically capture screenshot and videos on failure using cmd
        cy.title().should('eq',"Hello")

    })
})
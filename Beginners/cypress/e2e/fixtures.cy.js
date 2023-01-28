/// <reference types="Cypress"/>
describe("Fixtures",()=>{
    //direct access
    it.only("Fixtures demo test",()=>{
        cy.visit("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")
        cy.get("input[placeholder='Username']").type("Admin")
        cy.get("input[placeholder='Password']").type("admin123")
        cy.get("button[type='submit']").click()
        cy.get(':nth-child(2) > .oxd-main-menu-item').contains('PIM')

    })
    it("Fixtures Hooks",()=>{

    })

})
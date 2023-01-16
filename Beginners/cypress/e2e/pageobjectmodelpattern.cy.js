/// <reference types="Cypress"/>
import Login from "../PageObject/Login2"
describe("Page Object Model Pattern",()=>{
    //general approach
    it("Login",()=>{
        cy.visit("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")
        cy.get("input[placeholder='Username']").type('Admin')
        cy.get("input[placeholder='Password']").type('admin123')
        cy.get("button[type='submit']").click()
        cy.get(".oxd-text.oxd-text--h6.oxd-topbar-header-breadcrumb-module").should('have.text','Dashboard')
    })
    it.only("Login following Page Object model",()=>{
        cy.visit("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")

        const ln=new Login();
        ln.setUserName("Admin")
        ln.setUserPassword("admin123")
        ln.loginButton();
        ln.verfiyLogin();
        
    })
})
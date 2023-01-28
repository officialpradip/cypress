/// <reference types="Cypress"/>

describe("Custom Commands",()=>{
    it("Handling Links",()=>{
        cy.visit('https://demo.nopcommerce.com/')
        cy.clickLink('Apple MacBook Pro 13-inch');

    })
})
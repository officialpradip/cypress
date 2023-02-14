/// <reference types="Cypress"/>

describe("Custom Commands",()=>{
    it.skip("Handling Links",()=>{
        cy.visit('https://demo.nopcommerce.com/')
        cy.clickLink('Apple MacBook Pro 13-inch');

    })
    it("Overwriting existing commands",()=>{
        cy.visit('https://demo.nopcommerce.com/')
        cy.clickLink('APPLE MacBook Pro 13-inch');
        cy.get(':nth-child(2) > .product-item > .details > .product-title > a').should('have.text','Apple MacBook Pro 13-inch')

    })
})
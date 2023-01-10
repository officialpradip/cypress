import 'cypress-iframe'
/// <reference types="Cypress"/>

describe("iframe",()=>{
    it.skip("first",()=>{
        cy.visit('https://the-internet.herokuapp.com/iframe')
       let iframe= cy.get('#mce_0_ifr').its('0.contentDocument.body').should('be.visible').then(cy.wrap)
       iframe.clear().type("Automation Testing {ctrl+a}")
       cy.get('[aria-label="Bold"]').click()

    })
    it.skip("Second Approach custom command",()=>{
        cy.visit('https://the-internet.herokuapp.com/iframe')
        cy.getIframe('#mce_0_ifr').clear().type("Automation Testing {ctrl+a}")
       cy.get('[aria-label="Bold"]').click()
       

    })
    it("Third Approach using plugin",()=>{
        cy.visit('https://the-internet.herokuapp.com/iframe')
        cy.frameLoaded('#mce_0_ifr').should('be.visible')
        cy.iframe('#mce_0_ifr').clear().type("Automation Testing {ctrl+a}")
        cy.get('[aria-label="Bold"]').click()
        //frameloaded load the frame
        
       

    })
})
/// <reference types="Cypress"/>
describe("Mouse Operations",()=>{
    it.only("Mouse Hover",()=>{
        cy.visit("https://demo.opencart.com/")
        cy.wait(4000)
        
        cy.get('.nav > :nth-child(1) > .dropdown-toggle').trigger('mouseover').click()
        cy.get("div[class='dropdown-menu show'] li:nth-child(2) a:nth-child(1)").should('contain','Mac').and('be.visible').click()

    })

    it("Right Click",()=>{

    })

    it("Double Click",()=>{

    })
    it("Drag and Drop using plugin",()=>{

    })
    it("Scrolling",()=>{

    })
})
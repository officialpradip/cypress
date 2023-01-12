/// <reference types="Cypress"/>
describe("Mouse Operations",()=>{
    it("Mouse Hover",()=>{
        cy.visit("https://demo.opencart.com/")
        cy.wait(4000)
        
        cy.get('.nav > :nth-child(1) > .dropdown-toggle').trigger('mouseover').click()
        cy.get("div[class='dropdown-menu show'] li:nth-child(2) a:nth-child(1)").should('contain','Mac').and('be.visible').click()

    })

    it.only("Right Click",()=>{
        cy.visit("https://swisnl.github.io/jQuery-contextMenu/demo.html")
        //approach1
        cy.get(".context-menu-one.btn.btn-neutral").trigger('contextmenu')
        cy.get('.context-menu-icon-cut > span').should('be.visible')
        //approach2
        //cy.get(".context-menu-one.btn.btn-neutral").rightclick()

    })

    it("Double Click",()=>{

    })
    it("Drag and Drop using plugin",()=>{

    })
    it("Scrolling",()=>{

    })
})
/// <reference types="Cypress"/>
import 'cypress-iframe'
require ('@4tw/cypress-drag-drop')
describe("Mouse Operations",()=>{
    it("Mouse Hover",()=>{
        cy.visit("https://demo.opencart.com/")
        cy.wait(4000)
        
        cy.get('.nav > :nth-child(1) > .dropdown-toggle').trigger('mouseover').click()
        cy.get("div[class='dropdown-menu show'] li:nth-child(2) a:nth-child(1)").should('contain','Mac').and('be.visible').click()

    })

    it("Right Click",()=>{
        cy.visit("https://swisnl.github.io/jQuery-contextMenu/demo.html")
        //approach1
        cy.get(".context-menu-one.btn.btn-neutral").trigger('contextmenu')
        cy.get('.context-menu-icon-cut > span').should('be.visible')
        //approach2
        //cy.get(".context-menu-one.btn.btn-neutral").rightclick()

    })

    it("Double Click",()=>{
        cy.visit('https://www.w3schools.com/jsref/tryit.asp?filename=tryjsref_ondblclick_dom')
        cy.frameLoaded("#iframeResult").should('be.visible')
        cy.iframe("#iframeResult").find('#demo').trigger('dblclick').should('contain','I was double-clicked!')
        //.dblclick or .trigger are two options
        

    })
    it("Drag and Drop using plugin",()=>{
        cy.visit('http://www.dhtmlgoodies.com/scripts/drag-drop-custom/demo-drag-drop-3.html')
        cy.get('#box5').drag('#box105') //source get traget drag drag('#box105', {force:true})

    })
    it.only("Scrolling",()=>{
        cy.visit('https://www.worldometers.info/geography/alphabetical-list-of-countries/')
        cy.get('tbody tr:nth-child(66) td:nth-child(2)').scrollIntoView({duration:3000}).should('contain','Ghana');
        cy.get('tbody tr:nth-child(1) td:nth-child(2)').scrollIntoView({duration:3000}).should('contain','Afghanistan')
        cy.get('.footerlinks').scrollIntoView({duration:3000}) //upto footer

    })
})
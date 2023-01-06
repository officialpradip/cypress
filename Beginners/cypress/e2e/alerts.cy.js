/// <reference types="Cypress"/>

describe("Alerts",()=>{
    it("Alert Ok Button",()=>{
        cy.visit('https://the-internet.herokuapp.com/javascript_alerts')
        cy.get("button[onclick='jsAlert()']").click()
        cy.on('window:alert',(t)=>{
            expect(t).to.contains("I am a JS Alert");
        })
        cy.get("#result").should('have.text','You successfully clicked an alert')

    })
    it("Alert Ok and Cancle Button",()=>{

    })

    it("Prompt Alert ",()=>{

    })
    it("Authentication Alert ",()=>{

    })
})
/// <reference types="Cypress"/>

describe("Alerts",()=>{
    it.skip("Alert Ok Button",()=>{
        cy.visit('https://the-internet.herokuapp.com/javascript_alerts')
        cy.get("button[onclick='jsAlert()']").click()
        cy.on('window:alert',(t)=>{
            expect(t).to.contains("I am a JS Alert");
        })
        cy.get("#result").should('have.text','You successfully clicked an alert')

    })
    it.skip("Alert Ok and Cancle Button",()=>{
        cy.visit('https://the-internet.herokuapp.com/javascript_alerts')
        cy.get("button[onclick='jsConfirm()']").click();
        cy.on('window:confirm',(t)=>{
            expect(t).to.contains('I am a JS Confirm')
        })
        cy.get("#result").should('have.text','You clicked: Ok')

    })
    it("Alert using Cancle Button",()=>{
        cy.visit('https://the-internet.herokuapp.com/javascript_alerts')
        cy.get("button[onclick='jsConfirm()']").click();
        cy.on('window:confirm',(t)=>{
            expect(t).to.contains('I am a JS Confirm')
        })
        cy.on('window:confirm',()=>false) //cypress closes using cancle button
        cy.get("#result").should('have.text','You clicked: Cancel')

    })

    it.skip("Prompt Alert ",()=>{
        cy.visit('https://the-internet.herokuapp.com/javascript_alerts')
        cy.window().then((win)=>{
            cy.stub(win,'prompt').returns('Pradip');
        })
        cy.get("button[onclick='jsPrompt()']").click()
        //cy.on('window:prmopt',()=>false)
        cy.get("#result").should('have.text','You entered: Pradip')

    })
    it("Authentication Alert ",()=>{
        cy.visit('https://the-internet.herokuapp.com/basic_auth',
        {auth:{username:"admin",password:"admin"}})
        cy.get("div[class='example'] p").should('contain','Congratulations')

    })
})
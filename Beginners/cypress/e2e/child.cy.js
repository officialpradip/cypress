/// <reference types="Cypress"/>

describe("New Tab",()=>{
    it.skip("First Approach",()=>{
        cy.visit('https://the-internet.herokuapp.com/windows')
        cy.get('.example >a').invoke('removeAttr','target').click()
         //remove target="_blank" using invoke('first paramater','secondparameter')
        cy.url().should('include','https://the-internet.herokuapp.com/windows/new')
        cy.wait(5000)
        cy.go('back') //back to parent tab
    })
    it("Second Approach",()=>{
        cy.visit('https://the-internet.herokuapp.com/windows')
        cy.get('.example >a').then((t)=>{
            let u=t.prop('href') //prop means properties
            cy.visit(u)

        })
        cy.url().should('include','https://the-internet.herokuapp.com/windows/new')
        cy.wait(5000)
        cy.go('back')
    })
})
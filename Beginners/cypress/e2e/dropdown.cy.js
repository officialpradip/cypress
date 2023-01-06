/// <reference types="Cypress"/>
describe("Dropdown",()=>{
    it.skip("First DropDown with select",()=>{
        cy.visit('https://www.zoho.com/commerce/free-demo.html')
        cy.get("#zcf_address_country").select('Nepal').should('have.value','Nepal')
    })

    it("DropDown without select",()=>{
        cy.visit('https://www.dummyticket.com/dummy-ticket-for-visa-application/')
        cy.get("#select2-billing_country-container").click()
        cy.get("input[role='combobox']").type('Nepal').type('{enter}')
        cy.get("#select2-billing_country-container").should('have.text','Nepal')
    })
})
/// <reference types="Cypress"/>
describe("Dropdown",()=>{
    it.skip("First DropDown with select",()=>{
        cy.visit('https://www.zoho.com/commerce/free-demo.html')
        cy.get("#zcf_address_country").select('Nepal').should('have.value','Nepal')
    })

    it.skip("DropDown without select",()=>{
        cy.visit('https://www.dummyticket.com/dummy-ticket-for-visa-application/')
        cy.get("#select2-billing_country-container").click()
        cy.get("input[role='combobox']").type('Nepal').type('{enter}')
        cy.get("#select2-billing_country-container").should('have.text','Nepal')
    })

    it.skip("DropDown Auto Suggest",()=>{
        cy.visit('https://www.wikipedia.org/')
        cy.get("#searchInput").type('Nepal')
        cy.get(".suggestion-text").contains('Nepal Communist Party').click()
        
    })

    it("Dynamic DropDown",()=>{
        cy.visit('https://www.google.com/')
        cy.get("input[name='q']").type('cypress')
        cy.wait(3000)
        cy.get("div.s49v2>span").should('have.length',9)
        cy.get("div.s49v2>span").each(($el,index,$list)=>{
            if($el.text()=='nepali'){
                cy.wrap($el).click()
            }
        })
        
    })
})

describe('CSS Locator', ()=>{

    it('First CSS Locators',()=>{
        cy.visit('https://demo.opencart.com/')
        cy.get('[name="search"]').type(" ")
        cy.get('#search > .btn').click()
    })
})
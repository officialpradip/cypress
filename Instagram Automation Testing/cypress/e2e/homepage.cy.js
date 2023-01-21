/// <reference types="Cypress"/>
describe('Instagram HomePage', () => {
    beforeEach("Launching App",()=>{
        cy.visit('https://www.instagram.com/')
        cy.get('._aacl > .x1i10hfl').click()
        
    })

    it("Visibility of every text",()=>{
      cy.wait(5000)
      cy.get('._abal > div > img').should('be.visible')
      cy.get('._ab37').should('be.visible')
      cy.get('[aria-label="Get it on Google Play"] > ._aa5q').should('be.visible')
      cy.get('[aria-label="Get it from Microsoft"] > ._aa5q').should('be.visible')
    })
  })

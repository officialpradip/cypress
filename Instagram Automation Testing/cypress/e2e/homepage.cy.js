/// <reference types="Cypress"/>
describe('Instagram HomePage', () => {
    beforeEach("Launching App",()=>{
        cy.visit('https://www.instagram.com/')
    })
    it('Home Page', () => {
      cy.get('._aacl > .x1i10hfl').click()
      cy.title().should('eq','Instagram')
      cy.screenshot('HomePage')
    })
  })

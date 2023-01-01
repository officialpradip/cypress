describe('First Suite', () => {
  it('positive test', () => {
    cy.visit('https://opensource-demo.orangehrmlive.com/')
    cy.title().should('eq','OrangeHRM')
  })

  it('negative test', () => {
    cy.visit('https://opensource-demo.orangehrmlive.com/')
    cy.title().should('eq','Orangehrm')
  })

})
describe('Assertions Demo',()=>{
    it('Implicit Assertions',()=>{
        cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
        cy.url().should('include', 'opensource-demo.orangehrmlive')
        cy.url().should('eq','https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
        cy.url().should('contain','orange')
        

        //and
       cy.url().should('include','opensource-demo.orangehrmlive').and('contain','orange').and('not.contain','ORANGES')
       cy.title().should('include','OrangeHRM').and('eq','OrangeHRM').and('contain','HRM')
       cy.get('.orangehrm-login-branding > img').should('be.visible').and('exist')

    })
})
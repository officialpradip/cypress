describe('Assertions Demo',()=>{
    it('Implicit Assertions',()=>{
        cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
        cy.url().should('include', 'opensource-demo.orangehrmlive')
        cy.url().should('eq','https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
        cy.url().should('contain','orange')
        

        //and
       cy.url().should('include','opensource-demo.orangehrmlive').and('contain','orange').and('not.contain','ORANGES')
       cy.title().should('include','OrangeHRM').and('eq','OrangeHRM').and('contain','HRM')
       cy.get('.orangehrm-login-branding > img').should('be.visible').and('exist') //exist or not
       cy.xpath('//a').should('have.length',5) //links number
       cy.get(':nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-input').type('Admin')
       cy.get(':nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-input').should('have.value','Admin')
       cy.get(':nth-child(3) > .oxd-input-group > :nth-child(2) > .oxd-input').type('admin123')

    })
})
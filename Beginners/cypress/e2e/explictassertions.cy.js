/// <reference types="Cypress"/>
describe('Explict Assertion',()=>{
    it("Except Assertion Test",()=>{
        cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
        cy.get("input[placeholder='Username']").type('Admin')
        cy.get("input[placeholder='Password']").type('admin123')
        cy.get("button[type='submit']").click()

        let expctName="anu PV";

        cy.get(".oxd-userdropdown-name").then( (x)=>{
            let actualName=x.text()
            //bdd
            expect(actualName).to.equal(expctName)
            expect(expctName).to.equal(actualName)

            //tdd
            assert.equal(actualName,expctName)
            assert.notEqual(actualName,expctName)
        })
    })
})
/// <reference types="Cypress"/>
describe("Fixtures",()=>{
    //direct access
    it.skip("Fixtures demo test",()=>{
        cy.visit("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")

        cy.fixture('orangehrm.json').then((data)=>{
            cy.get("input[placeholder='Username']").type(data.username)
            cy.get("input[placeholder='Password']").type(data.password)
            cy.get("button[type='submit']").click()
            cy.get(':nth-child(2) > .oxd-main-menu-item').contains(data.menu_expected)

        })
        

    })
    let userdata;
    before("Required",()=>{
        cy.fixture('orangehrm.json').then((data)=>{
            userdata=data;

        })
    })
    it("Fixtures Hooks",()=>{
        cy.visit("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")
        cy.get("input[placeholder='Username']").type(userdata.username)
            cy.get("input[placeholder='Password']").type(userdata.password)
            cy.get("button[type='submit']").click()
            cy.get(':nth-child(2) > .oxd-main-menu-item').contains(userdata.menu_expected)
        
        

    })

})
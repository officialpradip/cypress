describe("Xpath Locator", ()=>{
    it("first Xpath test",()=>{
        cy.visit('https://demo.opencart.com/')
        cy.xpath("//div[@id='content']//div[@class='row']/div").should('have.length',4)
    })
})
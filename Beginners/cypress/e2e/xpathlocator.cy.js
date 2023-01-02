describe("Xpath Locator", ()=>{
    it("first Xpath test",()=>{
        cy.visit('https://demo.opencart.com/')
        cy.xpath("//div[@id='content']//div[@class='row']/div").should('have.length',4)
    })

    it("chained Xpath test",()=>{
        cy.visit('https://demo.opencart.com/')
        cy.xpath("//div[@id='content']//div[@class='row']").xpath('./div').should('have.length',4)
    })
})
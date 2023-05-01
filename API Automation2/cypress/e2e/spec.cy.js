/// <reference types="Cypress"/>

describe("API TESTING",()=>{
    it("GET CALL",()=>{
        cy.request("GET",'https://jsonplaceholder.typicode.com/posts')
        .its('status').should('equal',200)

    })
    it("Another way",()=>{
        cy.request({
            'method':'GET',
            'url': 'https://jsonplaceholder.typicode.com/posts'
        }).then((res)=>{
            expect(res.status).to.eq(200)
        })
    })
})
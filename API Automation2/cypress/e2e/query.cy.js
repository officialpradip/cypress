/// <reference types="Cypress"/>

describe("API Testing",()=>{
    it("Query Parameter Testing",()=>{
        cy.request({
            method:'GET',
            url:'https://reqres.in/api/users',
            qs:{page:2} //query parameter
        }).then((result)=>{
            expect(result.status).to.eq(200)

        })
    })
})
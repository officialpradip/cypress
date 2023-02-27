/// <reference types="Cypress"/>
describe("API Testing Practice",()=>{
    it("Get User",()=>{
        cy.request({
            method:"GET",
            url:"https://gorest.co.in/public/v2/users",
            headers:{
                'authorization':"Bearer 904f350af861df3a884c4f80b4d96cdbc12e18b1df2a6b3f2461559148c65e66"
            }
        }).then((req)=>{
            expect(req.status).to.eq(200)
        })
    })
})